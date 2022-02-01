import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

const RoomDetails = () => {
  const { id } = useParams();
  const { data: room, error, isPending } = useFetch('http://localhost:4000/roomsDashboard/' + id);
  const history = useHistory();
console.log(room);
  const handleDelete = () => {
    fetch('http://localhost:4000/roomsDashboard/' + room._id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  // need attantion
  const handleUpdate = () => {
    fetch('http://localhost:4000/roomsDashboard/' + room._id, {
      method: 'PUT'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { room && (
        <article>
          <h2>Room ID: { room._id }</h2>
          <p>Room Status: { room.status }</p>
          <div>Price: { room.price }</div>
          <div>Note: { room.note }</div>
          <button onClick={handleDelete}>Delete</button>

          <button onClick={handleUpdate}>Update</button>


        </article>
      )}
    </div>
  );
}
 
export default RoomDetails;