import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('notreserved');
  const [note, setNote] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = { status, price, note };

    fetch('http://localhost:4000/roomsDashboard/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(room)
    }).then(() => {
 
      history.push('/adminhome/allrooms');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Room</h2>
      <form onSubmit={handleSubmit}>
        
        <label>Room Price:</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="mario">notreserved</option>
          <option value="yoshi">reserved</option>
        </select>
        <label>Note:</label>
        <textarea 
          type="text" 
          required 
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button>Add Room</button>
      </form>
    </div>
  );
}
 
export default Create;