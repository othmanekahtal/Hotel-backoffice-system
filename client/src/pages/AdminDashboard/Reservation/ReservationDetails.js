import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

const ReservationDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data: reservation, error, isPending } = useFetch('http://localhost:4000/reservationDashboard/' + id);
  const history = useHistory();
console.log(reservation);
  const handleDelete = () => {
    fetch('http://localhost:4000/reservationDashboard/' + reservation._id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  // need attantion
  const handleUpdate = () => {
    fetch('http://localhost:4000/reservationDashboard/' + reservation._id, {
      method: 'PUT'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { reservation && (
        <article>
          <h2>Reservation ID: { reservation._id }</h2>
          <p>Reserved By : {reservation.customer.name }</p>
          <p>Room ID : { reservation.room._id }</p>
          <p>ReservedAt : { reservation.reservedAt }</p>
          <p>checkIn : { reservation.checkIn }</p>
          <p>checkOut : { reservation.checkOut }</p> 
          <button onClick={handleDelete}>Delete</button>

          <button onClick={handleUpdate}>Update</button>


        </article>
      )}
      
    </div>
  );
}
 
export default ReservationDetails;