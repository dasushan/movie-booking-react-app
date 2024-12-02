import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies , setSelectedMovie, setShowBookingModal} from '../store/userSlice';
import { Info } from 'lucide-react';
import CustomCarousel from './CustomCarousel';
import BookingModal from './BookingModal';

const UserDeck = () => {
  const movies = useSelector((state) => state.user.movies);
  const showBookingModal = useSelector((state) => state.user.showBookingModal)
  const dispatch = useDispatch();
  const [heroMovies, setHeroMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

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
        for (const val of Object.values(data)) {
          values.push(val);
        }
        dispatch(setMovies(values));
        console.log(ran);
      } catch (err) {
        console.log(`Error while fetching movies`, err);
      }
    });
  }, []);

  useEffect(() => {
    let result = movies.filter((movie) => {
      return movie.category === 'hero';
    });
    setHeroMovies(result);

    let newresult = movies.filter((movie) => {
      return movie.category === 'now playing';
    });
    setNowPlayingMovies(newresult);
  }, [movies]);

  console.log(heroMovies);
  console.log(nowPlayingMovies);
  console.log(movies);

  const clickHandler =(movie) => {
    dispatch(setShowBookingModal(true));
    dispatch(setSelectedMovie(movie))
  }
  return (
    <div className="h-full">
        {showBookingModal && <BookingModal />}
      <section className="w-full ">
        {heroMovies.map((m, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[40rem] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${m?.images[0]})` }}
            >
              <div className="absolute inset-0 flex  items-center  text-white">
                <div className="flex flex-col w-[80%] mx-auto">
                  <div className="text-[2rem] font-bold text-yellow-100 py-4 cursor-pointer">
                    {m?.name.toUpperCase()}
                  </div>
                  <div className="text-orange-100 pb-2">
                    From{' '}
                    <span className="bg-orange-300">{m?.releasedDate}</span>
                  </div>
                  <div className="w-[50%]">{m?.description}</div>
                  <div className="text-white flex hover:text-orange-300 cursor-pointer">
                    {' '}
                    <Info /> More Details
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-orange-500 text-white hover:scale-110" onClick={() => clickHandler(m)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className='relative w-full h-[40rem] bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${heroMovies[0]?.images[0]})`}}>
                <div className='absolute inset-0 flex  items-center  text-white'> 
                    <div className='flex flex-col w-[80%] mx-auto'>
                        <div className='text-[2rem] font-bold text-yellow-100 py-4 cursor-pointer'>
                            {heroMovies[0]?.name.toUpperCase()}
                        </div>
                        <div className='text-orange-100 pb-2'>From <span className='bg-orange-300'>{heroMovies[0]?.releasedDate}</span></div>
                        <div className='w-[50%]'>{heroMovies[0]?.description}</div>
                        <div className="text-white flex hover:text-orange-300 cursor-pointer"> <Info /> More Details</div>
                    </div>
                </div>
            </div> */}
      </section>
      <section className="w-[80%] mx-auto mb-7 h-[40rem]">
        <h1 className="text-center text-2xl font-bold">Now Playing</h1>
        <div className="flex gap-3">
          {nowPlayingMovies.map((m, index) => {
            return (
              <div key={index} className="w-[25rem] h-[25rem] ">
                <img src={m?.images[0]} alt="" className="w-full h-full" />
                <div>
                  <h1 className="text-[2rem] font-bold  py-4 cursor-pointer hover:text-orange-500">
                    {m?.name}
                  </h1>
                </div>
                <div>
                  <button className="px-4 py-2 bg-orange-500 text-white hover:scale-110" onClick={() => {clickHandler(m)}}>
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default UserDeck;
