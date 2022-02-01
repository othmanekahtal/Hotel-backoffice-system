import RoomList from "./RoomList";
import useFetch from "../../../Hooks/useFetch";



const Home = () => {
  const { error, isPending, data: rooms } = useFetch('http://localhost:4000/roomsDashboard')
// console.log(rooms);
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> } 
      { rooms && <RoomList allRooms={rooms} /> }
    </div>
  );
}
 
export default Home;
