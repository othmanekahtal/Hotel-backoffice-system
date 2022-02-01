import { Link } from 'react-router-dom';

const ReservationList = ({ allReservation }) => {
  return (
    <div className="blog-list">
      {allReservation.map(reservation => (
        <div className="blog-preview border" key={reservation._id} >
          <Link to={`reservation/${reservation._id}`}>
            <h2 className='borderin'>Reservation ID: { reservation._id }</h2>
            <h2>Reserved By: { reservation.customer }</h2>
            <p>Room: { reservation.room }</p>
            <p>ReservedAt: { reservation.reservedAt }</p>
            <p>CheckIn: { reservation.checkIn }</p>
            <p>checkOut: { reservation.checkOut }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ReservationList;