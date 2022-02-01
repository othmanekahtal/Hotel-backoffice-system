
import useFetch from "../../Hooks/useFetch";



import { Link } from "react-router-dom";


const Home = () => {
  const { error, isPending, data: roomsnotreserved } = useFetch('http://localhost:4000/reservation')
// console.log(rooms);
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      {/* { isPending && <div>Loading...</div> } */}


      { roomsnotreserved && 
        <div className="blog-list">
        
        {roomsnotreserved.map(room => (
            <div className="blog-preview border" key={room._id} >
              <h2 >Room Number: { room.number }</h2>
              <h3 >Price: { room.price } £</h3>
              <div className="links"><Link to={`reservation/${room._id}`} style={{ 
            color: 'white', 
            backgroundColor: 'blue',
            borderRadius: '8px',
            padding: '3px',
            marginLeft: '27em'
          }}>BOOK NOW</Link></div>
            </div>
            
          ))}
        </div>
      }

      
    </div>
  );
}
 
export default Home;
