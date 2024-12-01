import {
  Menu,
  ChevronsLeft,
  ChevronsRight,
  House,
  MessageSquareText,
  CloudUpload,
  MonitorPlay,
  Film,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pl-2 bg-slate-100 w-[20%] h-[100vh] ml-1 relative overflow-y-scroll">
      <div className="p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
        <div
          className="flex gap-3 items-center justify-center "
          onClick={() => {
            navigate('/admin');
          }}
        >
          <div>
            <House />
          </div>

          <div className="text-lg font-medium hidden md:block  overflow-hidden truncate">Dashboard</div>
        </div>
      </div>
      <div className="p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
        <div
          className="flex gap-3 items-center justify-center"
          onClick={() => {
            navigate('addcategory');
          }}
        >
          <div>
            <MessageSquareText />
          </div>

          <div className="text-lg font-medium hidden md:block overflow-hidden truncate">
            Add Category
          </div>
        </div>
      </div>
      <div className="p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
        <div
          className="flex gap-3 items-center justify-center"
          onClick={() => {
            navigate('/admin/newmovie');
          }}
        >
          <div>
            <CloudUpload />
          </div>

          <div className="text-lg font-medium hidden md:block overflow-hidden truncate">Add Movie</div>
        </div>
      </div>
      <div className="p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
        <div className="flex gap-3 items-center justify-center">
          <div>
            <MonitorPlay />
          </div>
          <div className="text-lg font-medium hidden md:block overflow-hidden truncate">
            Showtime Management
          </div>
        </div>
      </div>
      <div className="p-3 m-3 bg-sky-200 rounded-md hover:rounded-l-full hover:bg-blue-200 hover:scale-105 transition-all ease-in-out hover:cursor-pointer">
        <div className="flex gap-3 items-center justify-center">
          <div>
            <Film />
          </div>

          <div className="text-lg font-medium hidden md:block overflow-hidden truncate">
            Booked Movies
          </div>
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
