import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
export default function CustomCarousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
    
  const prev = () => {
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));   

  };

  const next = () =>
    setCurr((curr) => (curr == slides.length-1 ? 0 : curr + 1));

useEffect(() => {
    console.log(curr)
}, [curr])
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr*100}%)` }}
      >
       {slides.map((s, i) => {
         return(
          <div key={i} className='w-full h-full'>{s}</div>
         )
       })}
      </div>
      <div className="absolute inset-0 flex item-center justify-between p-2">
        <button onClick={prev}>
          <ChevronLeft
            size={20}
            className="bg-neutral-200 rounded-full shadow text-gray-800 hover:bg-white"
          />
        </button>
        <button onClick={next}>
          <ChevronRight
            size={20}
            className="bg-neutral-200 rounded-full shadow text-gray-800 hover:bg-white"
          />
        </button>
      </div>
      <div className='absolute bottom-2 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
            {slides.map((s, i) => {
                return(
                    <div className={`transition-all  bg-white rounded-full ${curr == i ? "p-1" : "bg-opacity-50"}`}/>
                )
            })}
        </div>
      </div>
    </div>
  );
}