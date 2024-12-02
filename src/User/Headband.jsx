import {
  Navigation,
  ChevronDown,
  Search,
  BackpackIcon,
  BaggageClaim,
  CircleUser,
  Clapperboard,
} from 'lucide-react';
const Headband = () => {
  return (
    <div>
      <div className="w-full bg-black h-[4rem] flex items-center justify-end">
        <div className="text-slate-500 px-2 absolute right-[5rem] flex hover:cursor-pointer hover:text-white gap-1 justify-center items-center p-2 mr-2">
          <CircleUser />
          login
        </div>
      </div>
      <div className="bg-white shadow-md mb-2">
        <div className="flex justify-between items-center h-[4rem] w-[80%] bg-red-300 mx-auto">
          <div className="flex items-center justify-center gap-1">
            <div className="p-2 bg-yellow-300 rounded-sm">
              <Clapperboard className="w-4 h-4" />
            </div>
            <div className="text-[1.2rem]">MoBuk.com</div>
            <div className="ml-[2rem] text-[0.75rem] flex justify-center items-center">
              Booking Mvoie Easy
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mx-3">
            {/* <div className="flex items-center justify-center bg-slate-50 rounded-md hover:cursor-pointer p-2 mr-2">
              <Search />
              <input className="bg-transparent outline-none w-96 px-1" />
            </div> */}
            <div className="hover:cursor-pointer p-2 mr-2 hover:text-white font-semibold">
              HOME
            </div>
            <div className="hover:cursor-pointer p-2 mr-2 hover:text-white font-semibold">
              MOVIE
            </div>
            <div className="hover:cursor-pointer p-2 mr-2 hover:text-white font-semibold"> 
              SINGLE MOVIE
            </div>
            <div className="hover:cursor-pointer p-2 mr-2 hover:text-white font-semibold">
              SHOWTIME
            </div>
            <div className="hover:cursor-pointer p-2 mr-2 hover:text-white font-semibold">
              TOP RATED
            </div>
            {/* <div className="hover:cursor-pointer p-2 mr-2 hover:text-white">
              <BaggageClaim />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headband;
