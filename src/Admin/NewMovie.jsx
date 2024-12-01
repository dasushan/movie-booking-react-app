import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../lib/appwrite';
const NewMovie = () => {
  const navigate = useNavigate();
  const movieNameInputRef = useRef(null);
  const movieDescriptionInputRef = useRef(null);
  const movieDirectorInputRef = useRef(null);
  const releasedDateInputRef = useRef(null);
  const movieLangInputRef = useRef(null);
  const genreInputRef = useRef(null);
  const ratingInputRef = useRef(null);
  const hoursInputRef = useRef(null);
  const minutesInputRef = useRef(null);
  const trailerLinkInputRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const [files, setFiles] = useState([]);
  
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    e.preventDefault();
    setFiles([]);
    if(e.target.files[0]){
        setFiles(e.target.files);
    }
  }

  const uploadFiles = async () => {
    
    if(!files){
        return alert('Please select a file');
    }
    const uploadedFilesList = [];
    

    for(let i=0; i<files.length; i++){
        const file = files[i];
        const uniqueId = `file_${Date.now()}_${i}`;
        try{
            const response = await storage.createFile(
                "674c17d60004e8aba69d",  // Bucket id
                uniqueId,
                file
            )
            // Save each uploaded file URL to the list
            const fileUrl = storage.getFileView("674c17d60004e8aba69d", response.$id);
            const url = `${fileUrl.origin}${fileUrl.pathname}${fileUrl.search}`;
            console.log(url);
            uploadedFilesList.push(url);
            
        }catch(err){
            console.log(`Error uploading file ${file.name}:`, err)
        }
    }
    setUploadedFiles(uploadedFilesList);

  }

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredMovieName = movieNameInputRef.current.value;
    const enteredMovieDescription = movieDescriptionInputRef.current.value;
    const enteredMovieDirector = movieDirectorInputRef.current.value;
    const enteredReleasedDate = releasedDateInputRef.current.value;
    const enteredMovieLang = movieLangInputRef.current.value;
    const enteredGenre = genreInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredHours = hoursInputRef.current.value;
    const enteredMinutes = minutesInputRef.current.value;
    const enteredTrailerLink = trailerLinkInputRef.current.value;
    const newMovie = {
      name: enteredMovieName,
      description: enteredMovieDescription,
      director: enteredMovieDirector,
      releasedDate: enteredReleasedDate,
      lang: enteredMovieLang,
      genre: enteredGenre,
      rating: enteredRating,
      hours: enteredHours,
      minutes: enteredMinutes,
      trailerLink: enteredTrailerLink,
      id: uuidv4(),
      images: uploadedFiles
    };
    console.log(newMovie);
    fetch(
      `https://movie-website-13491-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`,
      {
        method: 'POST',
        body: JSON.stringify(newMovie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(async (res) => {
      try {
        const data = await res.json();
        console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    });
  };
  return (
    <div className="bg-slate-200 rounded-lg mx-2 p-2 flex-grow h-screen overflow-y-auto">
      <div
        className="p-2 mb-3"
        onClick={() => {
          navigate('/admin');
        }}
      >
        <ArrowLeft
          size={30}
          className="hover:bg-slate-300 rounded-full cursor-pointer mx-1"
        />
      </div>

      <div className="text-slate-800 p-2 mx-3">
        <p className="text-xl font-semibold">Add New Movie</p>
      </div>
      <div>
        <div>
          <form>
            <div>
              <label htmlFor="movieName">Name of the Movie</label>
              <input
                type="text"
                name="movieName"
                id="movieName"
                required
                ref={movieNameInputRef}
              />
            </div>
            <div>
              <label htmlFor="movieDescription">Movie Description</label>
              <textarea
                type="text"
                name="movieDescription"
                id="movieDescription"
                required
                ref={movieDescriptionInputRef}
              />
            </div>
            <div>
              <label htmlFor="movieDirector">Movie Director</label>
              <input
                type="text"
                name="movieDirector"
                id="movieDirector"
                required
                ref={movieDirectorInputRef}
              />
            </div>
            <div>
              <label htmlFor="releaseDate">Release Date</label>
              <input
                type="date"
                name="releaseDate"
                id="releaseDate"
                required
                ref={releasedDateInputRef}
              />
            </div>
            <div>
              <label htmlFor="lang">Language</label>
              <input
                type="text"
                name="lang"
                id="lang"
                required
                ref={movieLangInputRef}
              />
            </div>
            <div>
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                name="genre"
                id="genre"
                required
                ref={genreInputRef}
              />
            </div>
            <div>
              <label htmlFor="rating">IMDB Rating</label>
              <input
                type="number"
                name="rating"
                id="rating"
                min="0"
                max="10"
                step="0.01"
                required
                ref={ratingInputRef}
              />
            </div>
            <div>
              <p>Duration</p>
              <div>
                <label htmlFor="hours">Hours:</label>
                <input
                  type="number"
                  name="hours"
                  id="hours"
                  min="0"
                  max="5"
                  step="1"
                  required
                  ref={hoursInputRef}
                />
              </div>
              <div>
                <label htmlFor="minutes">Minutes:</label>
                <input
                  type="number"
                  name="minutes"
                  id="minutes"
                  min="0"
                  max="59"
                  step="1"
                  required
                  ref={minutesInputRef}
                />
              </div>
            </div>
            <div>
              <label htmlFor="trailer">Trailer link</label>
              <input
                type="url"
                name="trailer"
                id="trailer"
                required
                ref={trailerLinkInputRef}
              />
            </div>
            <div>
              <label htmlFor="image">Hero Image</label>
              <input
                type="file"
                name="image"
                id="image"
                multiple
                required
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            <div>
              <div className="flex items-center justify-end w-[25rem]">
                <button type="button" className='bg-orange-300 px-5 py-3 mt-3' onClick={uploadFiles}>Upload</button>
              </div>
            </div>

            <div>
              <button type="submit" onClick={submitHandler}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewMovie;
