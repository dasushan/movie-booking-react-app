import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { Equal, X } from 'lucide-react';
import { setShowCategoryModal } from '../store/adminSlice';
const CategoryModal = () => {
  const selectedMovie = useSelector((state) => state.admin.selectedMovie);
  const movies = useSelector((state) => state.admin.movies);
  const dispatch = useDispatch();
  const categoryInputRef = useRef(null);

  console.log(selectedMovie);
  console.log(movies);
  const submitHandler = (event) => {
    event.preventDefault();
    fetch(
      `https://movie-website-13491-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(async (res) => {
      try {
        const data = await res.json();
        let keY = null;
        console.log(selectedMovie.id)
        for (const [key, value] of Object.entries(data)) { 
          if (value.id === selectedMovie.id) {
            keY = key;
          }
        }
        fetch(
          `https://movie-website-13491-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${keY}.json`,
          {
            method: 'PUT',
            body: JSON.stringify({
              name: selectedMovie.name,
              description: selectedMovie.description,
              director: selectedMovie.director,
              releasedDate: selectedMovie.releasedDate,
              lang: selectedMovie.lang,
              genre: selectedMovie.genre,
              rating: selectedMovie.rating,
              hours: selectedMovie.hours,
              minutes: selectedMovie.minutes,
              trailerLink: selectedMovie.trailerLink,
              id: selectedMovie.id,
              images: selectedMovie.images,
              category: categoryInputRef.current.value,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ).then(async (res) => {
          try {
            const data = await res.json();
            console.log(data);
            dispatch(setShowCategoryModal(false));
          } catch (err) {
            console.log(`Error updating category`, err);
          }
        });
      } catch (err) {
        console.log(err.message);
      }
    });
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-20 bg-opacity-55">
      <form className="bg-white rounded-lg shadow-2xl w-[50%]">
        <header className="bg-gray-400 px-4 py-2 flex justify-between items-center">
          <span className="text-white">
            <Equal />
          </span>
          <button onClick={() => dispatch(setShowCategoryModal(false))}>
            <span className="text-white">
              <X />
            </span>
          </button>
        </header>
        <div className="p-3 m-3 flex flex-col w-[25rem]">
          <label htmlFor="category">Choose Category</label>
          <select name="category" id="category" required ref={categoryInputRef}>
            <option value="">Select a category for movie</option>
            <option value="now playing">Now Playing</option>
            <option value="hero">Hero Section</option>
            <option value="top rated">Top Rated</option>
            <option value="top movies">Top Movies In Theaters</option>
          </select>
        </div>
        <div className="p-3 m-3 flex items-center justify-end">
          <button
            type="submit"
            className="p-2 bg-sky-200 rounded-md hover:bg-blue-200"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryModal;
