import ReservationList from "./ReservationList";
import useFetch from "../../../Hooks/useFetch";

const Home = () => {
  const { error, isPending, data: reservation } = useFetch('http://localhost:4000/reservationDashboard')
// console.log(reservation);
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      
      { reservation && <ReservationList allReservation={reservation} /> }
    </div>
  );
}
 
export default Home;
