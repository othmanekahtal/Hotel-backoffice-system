import { Link } from 'react-router-dom';

const RoomList = ({ allRooms }) => {
  return (
    <div className="blog-list">
      {allRooms.map(room => (
        <div className="blog-preview border" key={room._id} >
          <Link to={`room/${room._id}`}>
            <h2 className='borderin'>Room ID: { room._id }</h2>
            <h3 >Room Number: { room.number }</h3>
            {/* if reserved show reserved by who? */}
            <h3>Room Status: { room.status }</h3>
            <p>Price: { room.price }</p>
            <p>Note: { room.note }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default RoomList;