import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import {
  setMovies,
  setSelectedMovie,
  setShowTimingModal,
} from '../store/adminSlice';
import TimingModal from './TimingModal';
import { StarSVG } from '../components/index';

const Timing = () => {
  const movies = useSelector((state) => state.admin.movies);
  const showTimingModal = useSelector((state) => state.admin.showTimingModal);
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
  }, [showTimingModal]);

  const clickHandler = (movie) => {
    dispatch(setShowTimingModal(true));
    dispatch(setSelectedMovie(movie));
    console.log(movie);
  };

  return (
    <div className='w-[80rem] bg-stone-50'> 
      <div className='flex justify-center items-center text-xl bg-slate-100 w-[10rem] mx-auto h-[3rem] rounded-lg border-2 border-b-slate-500 shadow-md'>Add Timing</div>
      <div className="grid lg:grid-cols-1 items-center justify-center mx-auto">
        {showTimingModal && <TimingModal />}
        {movies.map((movie) => {
          return (
            <div className="m-2 p-3 flex" key={movie.id}>
              <div className="md:flex rounded-lg items-center justify-center grid grid-cols-1">
                <div className="relative w-[400px] h-[400px] bg-[#f2f2f2] border rounded-[10px] flex justify-center items-center perspective-[1000px] shadow-[0_0_0_5px_#ffffff80] transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)] group">
                  <div className="grid rounded-lg w-[360px] aspect-w-16 aspect-h-9 shadow-md bg-white flex-col">
                    <img
                      style={{ width: '360px', height: '400px' }}
                      src={movie.images[0]}
                      alt={movie.name}
                      className="object-cover grid rounded-t-3xl justify-center w-full transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-[100%] h-[100%] p-[20px] box-border bg-white/10 backdrop-blur [transform:rotateX(-90deg)] origin-bottom transition-all duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:rotateX(0deg)]">
                    <div className="group p-5 grid z-10">
                      <a className="group-hover:text-gray-200 font-bold md:text-2xl line-clamp-2">
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
                </div>
                <div className="relative overflow-x-auto shadow-sm sm:rounded-lg ml-4 mt-2">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Morning
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Evening
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Night
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white borber-b border-gray-200 hover:bg-gray-50">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {movie.timing?.firstDay}
                        </th>
                        <td className="px-6 py-4">
                          {movie.timing?.firstDayMorning || 'no show'}
                        </td>
                        <td className="px-6 py-4">
                          {movie.timing?.firstDayEvening || 'no show'}
                        </td>
                        <td className="px-6 py-4">
                          {movie.timing?.firstDayNight || 'no show'}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            type="button"
                            className="bg-sky-500 p-3 rounded-lg font-medium text-white hover:scale-105"
                            onClick={() => {
                              clickHandler(movie);
                            }}
                          >
                            Update Timing
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white borber-b border-gray-200 hover:bg-gray-50">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {movie.timing?.secondDay}
                        </th>
                        <td className="px-6 py-4">
                          {movie.timing?.secondDayMorning || 'no show'}
                        </td>
                        <td className="px-6 py-4">
                          {movie.timing?.secondDayEvening || 'no show'}
                        </td>
                        <td className="px-6 py-4">
                          {movie.timing?.secondDayNight || 'no show'}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            type="button"
                            className="bg-sky-500 p-3 rounded-lg font-medium text-white hover:scale-105"
                            onClick={() => {
                              clickHandler(movie);
                            }}
                          >
                            Update Timing
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white borber-b border-gray-200 hover:bg-gray-50">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {movie.timing?.thirdDay}
                        </th>
                        <td className="px-6 py-4">
                          {movie.timing?.thirdDayMorning || 'no show'}
                        </td>
                        <td className="px-6 py-4">
                          {movie.timing?.thirdDayEvening || 'no show'}
                        </td>
                        <td className="px-6 py-4">
                          {movie.timing?.thirdDayNight || 'no show'}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            type="button"
                            className="bg-sky-500 p-3 rounded-lg font-medium text-white hover:scale-105"
                            onClick={() => {
                              clickHandler(movie);
                            }}
                          >
                            Update Timing
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
      {/* {movies.map((movie) => {
        return (
          <div className="m-2 p-3 flex gap-6" key={movie.id}>
            <div className="flex bg-gray-100 w-[60rem] rounded-lg p-3">
              <div className="w-[50%] h-[20rem]  overflow-hidden shadow-xl mr-[5rem]  rounded-lg">
                <img
                  src={movie.images[0]}
                  alt={movie.name}
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <div className="p-3 text-xl w-[50%rem]">
                <div className="p-2 rounded-lg shadow-sm bg-white mb-1">
                  {movie.name}
                </div>

                <div className='mb-3'>
                  <div className="flex gap-5">
                    <div>{movie.timing?.firstDay}</div>
                    <div className="flex gap-2 items-center">
                      <div>{movie.timing?.firstDayMorning}</div>
                      <div>{movie.timing?.firstDayEvening}</div>
                      <div>{movie.timing?.firstDayNight}</div>
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className="flex gap-5">
                    <div>{movie.timing?.secondDay}</div>
                    <div className="flex gap-2 items-center">
                      <div>{movie.timing?.secondDayMorning}</div>
                      <div>{movie.timing?.secondDayEvening}</div>
                      <div>{movie.timing?.secondDayNight}</div>
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className="flex gap-5">
                    <div>{movie.timing?.thirdDay}</div>
                    <div className="flex gap-2 items-center">
                      <div>{movie.timing?.thirdDayMorning}</div>
                      <div>{movie.timing?.thirdDayEvening}</div>
                      <div>{movie.timing?.thirdDayNight}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3">
              <button
                type="button"
                className="bg-sky-300 p-3 rounded-lg"
                onClick={() => {
                  clickHandler(movie);
                }}
              >
                Update Timing
              </button>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Timing;
