import { AlignJustify, UserRoundCheck } from 'lucide-react';
const Header = () => {
  return (
    <div className="bg-slate-100 w-[100%] h-[4rem] p-2 m-1 border-b-1 border-slate-300">
      <div className="flex justify-between items-center ">
        <div className="flex gap-9 items-center p-1">
          <div>
            <AlignJustify />
          </div>
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
        </div>
        <div className='mr-2 px-3'>
          <UserRoundCheck />
        </div>
      </div>
    </div>
  );
};
export default Header;
