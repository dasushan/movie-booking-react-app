import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies, setSelectedMovie, setShowCategoryModal } from '../store/adminSlice';
import CategoryModal from './CategoryModal';
const Category = () => {
  const movies = useSelector((state) => state.admin.movies);
  const showCategoryModal = useSelector((state) => state.admin.showCategoryModal);
  const dispatch = useDispatch();

  useEffect(() => {
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
        const values = [];
        for (const value of Object.values(data)) {
          values.push(value);
        }
        dispatch(setMovies(values));
        console.log(values);
      } catch (err) {
        console.log(err.message);
      }
    });
  }, [showCategoryModal]);

  const clickHandler = (movie) => {
    dispatch(setShowCategoryModal(true));
    dispatch(setSelectedMovie(movie))
  }
  return (
    <div>
        {showCategoryModal &&<CategoryModal />}
      Add Movie Category
      {movies.map((movie) => {
        return (
          <div className="m-2 p-3 flex gap-6" key={movie.id}>
            <div className="flex bg-gray-100 w-[40rem] rounded-lg p-3">
              <div className="w-[50%] h-[20rem]  overflow-hidden shadow-xl mr-[5rem] flex-grow rounded-lg">
                <img
                  src={movie.images[0]}
                  alt={movie.name}
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <div className="p-3 text-xl w-[10rem]">
                <div className='p-2 rounded-lg shadow-sm bg-white mb-1'>{movie.name}</div>
                <div className='p-2 rounded-lg shadow-sm bg-white mb-1'>{movie.genre} </div>
                <div className='p-2 rounded-lg shadow-sm bg-white'>{movie.category}</div>
              </div>
            </div>
            {/* <div className='p-3'>
                <form>
                    <select>
                        <option value="">Select a category for movie</option>
                        <option value="now playing">Now Playing</option>
                        <option value="hero">Hero Section</option>
                        <option value="top rated">Top Rated</option>
                        <option value="top movies">Top Movies In Theaters</option>
                    </select>
                </form>
            </div> */}
            <div className='p-3'>
                <button type="button" className='bg-sky-300 p-3 rounded-lg' onClick={() => {clickHandler(movie)}}>
                    Update Category
                </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
