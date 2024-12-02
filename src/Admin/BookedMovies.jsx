import { useEffect, useState } from 'react';
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
        const newData = []
        for(const val of Object.values(data)){
            newData.push(val)
        }
        setBooking(newData);

      } catch (err) {}
    });
  }, []);
  return (
    <div>
        <h1>Bookings</h1>
      <div>
        {bookings.map((booking) => {
          return <div className='shadow mb-2'>
            <div>{booking.movie.name}</div>
            <div>{booking.day}</div>
            <div>{booking.time}</div>
            <div>{booking.name}</div>
            <div>{booking.email}</div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default BookedMovies;
