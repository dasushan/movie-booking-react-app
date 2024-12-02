import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { Equal, X } from 'lucide-react';
import { setShowTimingModal } from '../store/adminSlice';
const TimingModal = () => {
  const selectedMovie = useSelector((state) => state.admin.selectedMovie);
  const movies = useSelector((state) => state.admin.movies);
  const dispatch = useDispatch();
  const firstDayInputRef = useRef(selectedMovie.timing?.firstDay);
  const firstDayMorningInputRef = useRef(selectedMovie.timing?.firstDayMorning);
  const firstDayEveningInputRef = useRef(selectedMovie.timing?.firstDayEvening);
  const firstDayNightInputRef = useRef(selectedMovie.timing?.firstDayNight);
  const secondDayInputRef = useRef(selectedMovie.timing?.secondDay);
  const secondDayMorningInputRef = useRef(selectedMovie.timing?.secondDayMorning);
  const secondDayEveningInputRef = useRef(selectedMovie.timing?.secondDayEvening);
  const secondDayNightInputRef = useRef(selectedMovie.timing?.secondDayNight);
  const thirdDayInputRef = useRef(selectedMovie.timing?.thirdDay);
  const thirdDayMorningInputRef = useRef(selectedMovie.timing?.thirdDayMorning);
  const thirdDayEveningInputRef = useRef(selectedMovie.timing?.thirdDayEvening);
  const thirdDayNightInputRef = useRef(selectedMovie.timing?.thirdDayNight);

  console.log(selectedMovie.timing?.firstDay)
  const submitHandler = (event) => {
    event.preventDefault();
    const firstDay = firstDayInputRef.current.value;
    const firstDayMorning = firstDayMorningInputRef.current.value;
    const firstDayEvening = firstDayEveningInputRef.current.value;
    const firstDayNight = firstDayNightInputRef.current.value;
    const secondDay = secondDayInputRef.current.value;
    const secondDayMorning = secondDayMorningInputRef.current.value;
    const secondDayEvening = secondDayEveningInputRef.current.value;
    const secondDayNight = secondDayNightInputRef.current.value;
    const thirdDay = thirdDayInputRef.current.value;
    const thirdDayMorning = thirdDayMorningInputRef.current.value;
    const thirdDayEvening = thirdDayEveningInputRef.current.value;
    const thirdDayNight = thirdDayNightInputRef.current.value;

    const timing = {
      firstDay,
      firstDayMorning,
      firstDayEvening,
      firstDayNight,
      secondDay,
      secondDayMorning,
      secondDayEvening,
      secondDayNight,
      thirdDay,
      thirdDayMorning,
      thirdDayEvening,
      thirdDayNight,
    }
    console.log(timing);
    fetch(`https://movie-website-13491-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(async (res) => {
      try{
        const data = await res.json();
        let keY =null;
        for(const [key, value] of Object.entries(data)){
          if(value.id === selectedMovie.id){
            keY = key;
          }
        }
        fetch(`https://movie-website-13491-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${keY}.json`, {
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
              category: selectedMovie.category,
              timing: timing
          }),
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(async (res) => {
          try{
            const data = await res.json();
            console.log(data);
            dispatch(setShowTimingModal(false));
          }catch(err){
            console.log(err.message)
          }
        })
      }catch(err){
        console.log(err.message)
      }
    })
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-20 bg-opacity-55">
      <form className="bg-white rounded-lg shadow-2xl w-[50%]">
        <header className="bg-gray-400 px-4 py-2 flex justify-between items-center">
          <span className="text-white">
            <Equal />
          </span>
          <button onClick={() => dispatch(setShowTimingModal(false))}>
            <span className="text-white">
              <X />
            </span>
          </button>
        </header>
        <div className='block p-3 m-3'> Release Date {selectedMovie.releasedDate}</div>
        <div className="p-3 m-3 flex flex-col w-max-[90%] ">
          <div className="mb-3 flex gap-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                First Day
              </label>
              <input
                type="date"
                defaultValue={firstDayInputRef.current}
                ref={firstDayInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Morning
              </label>
              <input
                type="time"
                defaultValue={firstDayMorningInputRef.current}
                ref={firstDayMorningInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Evening
              </label>
              <input
                type="time"
                defaultValue={firstDayEveningInputRef.current}
                ref={firstDayEveningInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Night
              </label>
              <input
                type="time"
                defaultValue={firstDayNightInputRef.current}
                ref={firstDayNightInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-3 flex gap-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Second Day
              </label>
              <input
                type="date"
                defaultValue={secondDayInputRef.current}
                ref={secondDayInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Morning
              </label>
              <input
                type="time"
                defaultValue={secondDayMorningInputRef.current}
                ref={secondDayMorningInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Evening
              </label>
              <input
                type="time"
                defaultValue={secondDayEveningInputRef.current}
                ref={secondDayEveningInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Night
              </label>
              <input
                type="time"
                defaultValue={secondDayNightInputRef.current}
                ref={secondDayNightInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-3 flex gap-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Third Day
              </label>
              <input
                type="date"
                defaultValue={thirdDayInputRef.current}
                ref={thirdDayInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Morning
              </label>
              <input
                type="time"
                defaultValue={thirdDayMorningInputRef.current}
                ref={thirdDayMorningInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Evening
              </label>
              <input
                type="time"
                defaultValue={thirdDayEveningInputRef.current}
                ref={thirdDayEveningInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                {' '}
                Night
              </label>
              <input
                type="time"
                defaultValue={thirdDayNightInputRef.current}
                ref={thirdDayNightInputRef}
                className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            </div>
          </div>
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

export default TimingModal;
