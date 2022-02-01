
import { Link } from "react-router-dom";


const AdminHome = () => {
  // const { error, isPending, data: rooms } = useFetch('http://localhost:4000/roomsDashboard')
// console.log(rooms);
  return (
    <div className="home">
      {/* { error && <div>{ error }</div> } */}
      {/* { isPending && <div>Loading...</div> } */}

      <div className="links margbutton">
        <Link to="/adminhome/allrooms" className="btnn">All Rooms</Link>
      </div>

      <div className="links margbutton">
      <Link to="/adminhome/allcustomers" className="btnn">All CUSTOMERS</Link>
      </div>

      <div className="links margbutton">
      <Link to="/adminhome/allreservation" className="btnn">All RESERVATION</Link>
      </div>
      
    </div>
  );
}
 
export default AdminHome;
