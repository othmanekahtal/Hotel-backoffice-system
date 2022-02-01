import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState('');
  const [cin, setCin] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('customer');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = { name, cin, phone, role };

    fetch('http://localhost:4000/customerDashboard/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Customer</h2>
      <form onSubmit={handleSubmit}>
        
        <label>Name:</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>cin:</label>
        <input
          required
          value={cin}
          onChange={(e) => setCin(e.target.value)}
        ></input>
        <label>Phone:</label>
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>

        <label>Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="mario">customer</option>
          <option value="yoshi">admin</option>
        </select>

        <button>Add Customer</button>
      </form>
    </div>
  );
}
 
export default Create;