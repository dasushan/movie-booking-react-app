import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMovies,
  setSelectedMovie,
  setShowTimingModal,
} from '../store/adminSlice';
import TimingModal from './TimingModal';

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
    <div>
      {showTimingModal && <TimingModal />}
      Add Timing
      {movies.map((movie) => {
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
      })}
    </div>
  );
};

export default Timing;
