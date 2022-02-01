import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";

const CustomerDetails = () => {
  const { id } = useParams();
  const { data: customer, error, isPending } = useFetch('http://localhost:4000/customerDashboard/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:4000/customerDashboard/' + customer._id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/allcustomers');
    }) 
  }

  // need attantion
  const handleUpdate = () => {
    fetch('http://localhost:4000/customerDashboard/' + customer._id, {
      method: 'PUT'
    }).then(() => {
      history.push('/allcustomers');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { customer && (
        <article>
          <h2>Customer ID: { customer._id }</h2>
          <p>Name: { customer.name }</p>
          <div>Cin: { customer.cin }</div>
          <div>Phone: { customer.phone }</div>
          <button onClick={handleDelete}>Delete</button>

          <button onClick={handleUpdate}>Update</button>


        </article>
      )}
    </div>
  );
}
 
export default CustomerDetails;