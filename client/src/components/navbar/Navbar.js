import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><Link to="/adminhome">HOTEL</Link></h1>
      <div className="links">
        <Link to="/adminhome">Home</Link>
        <Link to="/adminhome/createroom" style={{ 
          color: 'white', 
          backgroundColor: 'rgb(0 0 0)',
          borderRadius: '8px' 
        }}>New Room</Link>

        <Link to="/adminhome/createcustomer" style={{ 
          color: 'white', 
          backgroundColor: 'blue',
          borderRadius: '8px' 
        }}>New Customer</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;