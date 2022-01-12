import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Appbar from './Pages/Home/Header/Appbar/Appbar';
import TourPackages from './Pages/Home/TourPackages/TourPackages';
import Footer from './Pages/Footer/Footer';
import Login from './LogIn/LogIn/LogIn';
import Reviews from './Pages/Home/Reviews/Reviews';
import PrivateRoute from './privetRoute/privetRoute';
import Booking from './Pages/Bookings/Booking';
import AddNewPackage from './AddNewPackage/AddNewPackage';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import Error from './Error/Error';
import AddReview from './Pages/Home/AddReview/AddReview';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Appbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tourpackage">
            <TourPackages />
          </Route>
          <Route exact path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/booking/:bookingId">
          <Booking />
          </PrivateRoute>
          <PrivateRoute exact path="/addNewPackage">
          <AddNewPackage />
          </PrivateRoute>
          <PrivateRoute exact path="/myOrders">
          <MyOrders />
          </PrivateRoute>
          <PrivateRoute exact path="/allOrders">
          <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute exact path="/addreview">
          <AddReview />
          </PrivateRoute>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
