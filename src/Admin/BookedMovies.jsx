import { useEffect, useState, useId } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../components/index';
const BookedMovies = () => {
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch(
      'https://movie-website-13491-default-rtdb.asia-southeast1.firebasedatabase.app/bookings.json',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(async (res) => {
      try {
        const data = await res.json();
        console.log(data);
        const newData = [];
        for (const val of Object.values(data)) {
          newData.push(val);
        }
        setBooking(newData);
      } catch (err) {}
    });
  }, []);
  return (
    <div className="w-[80rem] flex-grow bg-stone-50">
      <div className="flex justify-center items-center text-xl bg-slate-100 w-[10rem] mx-auto h-[3rem] rounded-lg border-2 border-b-slate-500 shadow-md">
        Booking Details
      </div>
      {/* <div>
        {bookings.map((booking) => {
          return <div className='shadow mb-2'>
            <div>{booking.movie.name}</div>
            <div>{booking.day}</div>
            <div>{booking.time}</div>
            <div>{booking.name}</div>
            <div>{booking.email}</div>
          </div>;
        })}
      </div> */}
      <div className='relative overflow-x-auto  shadow-sm rounded-lg  p-3 mt-2'>
        <Table className='w-full text-sm text-left text-gray-500'>
          <TableHeader className='text-xs text-gray-700 uppercase bg-gray-50 '>
            <TableRow>
              <TableHead className='px-6 py-3'>Movie</TableHead>
              <TableHead className='md:table-cell hidden px-6 py-3'>Booked On</TableHead>
              <TableHead className='md:table-cell hidden px-6 py-3'>Show Timing</TableHead>
              <TableHead className='px-6 py-3'>Username</TableHead>
              <TableHead className='px-6 py-3'>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={index} className='bg-white borber-b border-gray-200 hover:bg-gray-50 '>
                <TableCell className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{booking.movie.name}</TableCell>
                <TableCell className='px-6 py-4 md:table-cell hidden'>{booking.day}</TableCell>
                <TableCell className='px-6 py-4 md:table-cell hidden'>{booking.time}</TableCell>
                <TableCell className='px-6 py-4 text-zinc-600'>{booking.name}</TableCell>
                <TableCell className='px-6 py-4 text-zinc-600'>{booking.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookedMovies;
