import { useRef } from 'react';
import { Equal, X, Clock9 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowBookingModal } from '../store/userSlice';
const BookingModal = () => {
  const selectedMovie = useSelector((state) => state.user.selectedMovie);
  const dispatch = useDispatch();
  console.log(selectedMovie);
  const dayInputRef = useRef(null);
  const timeInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const clickHandler = (event) => {
    event.preventDefault();
    const day = dayInputRef.current.value;
    const time = timeInputRef.current.value;
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    fetch(
      `https://movie-website-13491-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json`,
      {
        method: 'POST',
        body: JSON.stringify({
          day,
          time,
          name,
          email,
          movie: selectedMovie,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
      }
    ).then(async (res) => {
        try{
            const data = await res.json();
        console.log(data);
        }catch(err){
            console.log(err);
        }
        
    })
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-20 bg-opacity-55">
      <div className="bg-white rounded-lg shadow-2xl w-[80%]">
        <header className="bg-gray-400 px-4 py-2 flex justify-between items-center">
          <span className="text-white">
            <Equal />
          </span>
          <button onClick={() => dispatch(setShowBookingModal(false))}>
            <span className="text-white">
              <X />
            </span>
          </button>
        </header>
        <div className="w-40rem mx-auto">
          <div className="flex items-center gap-6">
            <div className="w-[25rem] h-[25rem] px-4 bg-slate-100 shadow-md">
              <img src={selectedMovie.images[0]} className="w-full h-full" />
            </div>
            <div className="flex flex-col w-[20rem]">
              <div className="text-[1.5rem] font-bold text-orange-400">
                <h1>{selectedMovie?.name.toUpperCase()}</h1>
              </div>
              <div className="flex gap-2 border-b border-slate-300">
                <Clock9 className="w-5 h-5 text-gray-500" />
                <div>{selectedMovie?.hours} HRS</div>
                <div>{selectedMovie?.minutes} MIN</div>
              </div>
              <div className="flex ">
                <div className="flex flex-col w-[5rem]">
                  <div>Genre :</div>
                  <div>Release :</div>
                  <div>Language :</div>
                  <div>IMDB Rating :</div>
                </div>
                <div className="flex flex-col">
                  <div>{selectedMovie?.genre}</div>
                  <div>{selectedMovie?.releasedDate}</div>
                  <div>{selectedMovie?.lang}</div>
                  <div>{selectedMovie?.rating}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 my-3 text-[1.5rem] font-bold text-orange-400">
            Show Timings
          </div>
          <div></div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Day
            </label>
            <input
              type="date"
              ref={dayInputRef}
              className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              {' '}
              Time
            </label>
            <input
              type="time"
              ref={timeInputRef}
              className="pt-3 border-0 text-gray-600 text-sm font-semibold pb-2  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <div>
            <input
              ref={nameInputRef}
              type="text"
              placeholder="Enter your name"
              className="p-3"
            />
          </div>
          <div>
            <input
              type="email"
              ref={emailInputRef}
              placeholder="Enter your email"
              className="p-3"
            />
          </div>
          <div className="px-3 my-2">
            <button
              className="bg-orange-400 text-white p-3 rounded-md"
              type="submit"
              onClick={clickHandler}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
