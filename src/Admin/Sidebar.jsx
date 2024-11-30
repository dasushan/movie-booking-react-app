import { Menu, ChevronsLeft, ChevronsRight, House, MessageSquareText, CloudUpload, MonitorPlay, Film } from 'lucide-react';
import { useState } from 'react';
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState();

  return (
    <div className="flex flex-col pl-2 bg-slate-100 w-[20rem] h-[100vh] ml-1 relative overflow-y-scroll">
      
        <div className='p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out'>
            <div className='flex gap-3 items-center '>
                <House />
                <div className='text-lg font-medium'>Dashboard</div>
            </div>
        </div>
        <div className='p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out'>
            <div className='flex gap-3 items-center '>
                <MessageSquareText />
                <div className='text-lg font-medium'>Add Category</div>
            </div>
        </div>
        <div className='p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out'>
            <div className='flex gap-3 items-center '>
                <CloudUpload />
                <div className='text-lg font-medium'>Add Movie</div>
            </div>
        </div>
        <div className='p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out'>
            <div className='flex gap-3 items-center '>
                <MonitorPlay />
                <div className='text-lg font-medium'>Showtime Management</div>
            </div>
        </div>
        <div className='p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out'>
            <div className='flex gap-3 items-center '>
                <Film />
                <div className='text-lg font-medium'>Booked Movies</div>
            </div>
        </div>
      <div className="absolute bottom-[8rem] flex left-3 gap-2 w-[18rem] p-3 border-b border-b-gray-400 border-t border-t-gray-400">
        <button>
          <ChevronsLeft />
        </button>
        <span> Collpase Sidebar</span>
      </div>
    </div>
  );
};

export default Sidebar;
