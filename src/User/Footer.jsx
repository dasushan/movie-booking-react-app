import { Copyright, Phone } from 'lucide-react';
const Footer = () => {
  return (
    <div>
      <div
        className="relative w-full h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://cloud.appwrite.io/v1/storage/buckets/674c17d60004e8aba69d/files/file_1733058512199_0/view?project=674bb3a600312f490497&project=674bb3a600312f490497&mode=admin)',
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black/75 text-white">
          <div className='flex w-[80%] gap-[5rem]'>
            <div className="flex flex-col w-[25%]">
              <h1>Mobuk.com</h1>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </div>
            </div>
            <div className="flex flex-col w-[25%]">
              <h1>Customer Service</h1>
              <h2>Home</h2>
              <h2>Comming Soon</h2>
              <h2>Top Rated</h2>
            </div>
            <div className="flex flex-col w-[25%]">
              <h1>Recent Posts</h1>
            </div>
            <div className="flex flex-col w-[25%]">
              <h1>Recent Posts</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-[4rem] flex items-center justify-between ">
        <div className="text-slate-500 px-[3rem]   flex hover:cursor-pointer hover:text-white gap-1 justify-center items-center p-2 mr-2">
          <Copyright />
          copyright 2024 Movie
        </div>
        <div className="flex px-[3rem] gap-[2rem] items-center">
          <div className="text-slate-500 rounded-full hover:cursor-pointer hover:text-orange-600 font-extrabold text-[1.5rem] transition-all ease-in-out">
            f
          </div>
          <div className="text-slate-500 rounded-full hover:cursor-pointer hover:text-orange-600 font-extrabold text-[1.5rem] transition-all ease-in-out">
            t
          </div>
          <div className="text-slate-500 rounded-full hover:cursor-pointer hover:text-orange-600 font-extrabold text-[1.5rem] transition-all ease-in-out">
            <Phone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
