import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";



const Create = () => {
  const [_id, setid] = useState('');
  const [name, setName] = useState('');
  const [cin, setCin] = useState('');
  const [phone, setPhone] = useState('');




  const [role, setRole] = useState('customer');

  const [thecustomer, setCustomer] = useState('4444');
  const [theroom, setRoom] = useState('33333');
  const [reservedAt, setReservedAt] = useState('555');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const history = useHistory();

  // to get roomid from URL
  const { id } = useParams();
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = { _id, name, cin, phone };
    const room = { thecustomer, theroom, reservedAt, checkIn, checkOut };

    // problem here not inserreservation

    fetch('http://localhost:4000/customerDashboard/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer)
    })



    // fetch('http://localhost:4000/reservationDashboard/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(room)
    // })
    // console.log(_id);



  }

  return (

    <div className="create">
      <h2>BOOK ROOM</h2>
      <form onSubmit={handleSubmit}>

        <label>roomid : {id}</label>
        <label>Customerid : {_id}</label>

        <input
          required
          value={Math.floor(Date.now() * Math.random())}
          onChange={(e) => setid(e.target.value)}
        ></input>
        <label>Name:</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label>Cin:</label>
        <input
          required
          value={cin}

          onChange={(e) => setCin(e.target.value)}
        ></input>

        <label>Phone:</label>
        <input
          type="text"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>

        <label>checkIn:</label>
        <input
          type="checkIn"
          required
          value={checkIn}
          onChange={(e) => setPhone(e.target.value)}
        ></input>

        <label>checkOut:</label>
        <input
          type="checkOut"
          required
          value={checkOut}
          onChange={(e) => setPhone(e.target.value)}
        ></input>


        <button>BOOK NOW</button>
      </form>
    </div>
  );
}

export default Create;