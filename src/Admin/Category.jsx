import React, { useEffect, useRef } from 'react';
import { StarSVG } from '../components/index';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMovies,
  setSelectedMovie,
  setShowCategoryModal,
} from '../store/adminSlice';
import CategoryModal from './CategoryModal';
import { ToastContainer } from 'react-toastify';

const Category = () => {
  const movies = useSelector((state) => state.admin.movies);
  const showCategoryModal = useSelector(
    (state) => state.admin.showCategoryModal
  );
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
    dispatch(setSelectedMovie(movie));
  };
  return (
    <React.Fragment>
      <div className='w-[80rem] bg-stone-50'>
        <div className='flex justify-center items-center text-xl bg-slate-100 w-[10rem] mx-auto h-[3rem] rounded-lg border-2 border-b-slate-500 shadow-md'>Add Category</div>
        <div className="grid lg:grid-cols-2 items-center justify-center ">
          {showCategoryModal && <CategoryModal />}
          {movies.map((movie) => {
            return (
              <div className="m-2 p-3 flex " key={movie.id}> 
                <div className="flex rounded-lg items-center">
                  <div className="grid rounded-lg w-[300px] aspect-w-16 aspect-h-9 shadow-md bg-white flex-col mr-[2.5rem]   ">
                    <img
                      style={{ width: '300px', height: '400px' }}
                      src={movie.images[0]}
                      alt={movie.name}
                      loading="lazy"
                      className=" object-cover grid rounded-t-3xl justify-center w-full"
                    />
                    <div className="group p-5 grid z-10">
                      <a className="group-hover:text-cyan-700 font-bold md:text-2xl line-clamp-2">
                        {movie.name}
                      </a>
                      <span className="text-slate-400 pt-2 font-semibold ">
                        {movie.releasedDate}
                      </span>
                      <div className="h-20">
                        <span className="line-clamp-3 py-2 h-20 text-sm font-light leading-relaxed">
                          {movie.description}
                        </span>
                      </div>
                      <div className="grid-cols-2 flex group justify-between">
                        <div className="font-black flex flex-col">
                          <span class="text-yellow-500 text-xl">
                            IMDB SCORE
                          </span>
                          <span class="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                            {movie.rating}
                            <StarSVG />
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="h-7" />
                          <span className="text-3xl  font-bold  gap-x-2 text-slate-300">
                            {movie.genre.split(' ')[0].toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 text-md text-white w-[10rem] flex flex-col">
                    <div className="p-0.5 rounded-lg shadow-sm bg-orange-600 mb-2 text-center">
                      #{movie.name?.toLowerCase()}
                    </div>
                    <div className="p-0.5 rounded-lg shadow-sm bg-orange-600 mb-2 text-center">
                      #{movie.genre?.toLowerCase()}{' '}
                    </div>
                    <div className="p-0.5 rounded-lg shadow-sm bg-orange-600 mb-2 text-center">
                      #{movie.category?.toLowerCase()}
                    </div>
                    <div className="mt-[4rem]">
                      <button
                        type="button"
                        className="bg-sky-500 p-3 rounded-lg w-[10rem] font-medium hover:scale-105"
                        onClick={() => {
                          clickHandler(movie);
                        }}
                      >
                        Update Category
                      </button>
                    </div>
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
              </div>
            );
          })}
          <ToastContainer  className='z-20 mr-[4rem]'/>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default Category;
