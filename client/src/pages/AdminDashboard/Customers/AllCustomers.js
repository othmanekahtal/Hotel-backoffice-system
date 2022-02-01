import CustomerList from "./CustomerList";
import useFetch from "../../../Hooks/useFetch";


const Home = () => {
  const { error, isPending, data: customers } = useFetch('http://localhost:4000/customerDashboard')
// console.log(rooms);
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      
      { customers && <CustomerList allCustomer={customers} /> }
    </div>
  );
}
 
export default Home;
