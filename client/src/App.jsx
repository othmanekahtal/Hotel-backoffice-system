import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import CreateReservation from './pages/Home/Reservation/CreateReservation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateRoom from './pages/AdminDashboard/Rooms/CreateRoom';
import CreateCustomer from './pages/AdminDashboard/Customers/CreateCustomer';
import RoomDetails from './pages/AdminDashboard/Rooms/RoomDetails';
import CustomerDetails from './pages/AdminDashboard/Customers/CustomerDetails';
import AllRooms from './pages/AdminDashboard/Rooms/AllRooms';
import AllCustomers from './pages/AdminDashboard/Customers/AllCustomers';
import AllReservation from './pages/AdminDashboard/Reservation/AllReservation';
import ReservationDetails from './pages/AdminDashboard/Reservation/ReservationDetails';
import AdminHome from './pages/AdminDashboard/AdminHome';
import NotFound from './pages/404pages/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/reservation/:id">
            <CreateReservation />
          </Route>
          <Route exact path="/adminhome">
            <AdminHome />
          </Route>
          <Route path="/adminhome/createroom">
            <CreateRoom />
          </Route>
          <Route path="/adminhome/allrooms">
            <AllRooms />
          </Route>
          <Route path="/adminhome/allcustomers">
            <AllCustomers />
          </Route>
          <Route path="/adminhome/allreservation">
            <AllReservation />
          </Route>
          <Route path="/adminhome/createcustomer">
            <CreateCustomer />
          </Route>
          <Route path="/adminhome/room/:id">
            <RoomDetails />
          </Route>
          <Route path="/adminhome/reservation/:id">
            <ReservationDetails />
          </Route>
          <Route path="/adminhome/customer/:id">
            <CustomerDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
