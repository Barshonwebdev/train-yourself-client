

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'; 
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AddProduct from './components/AddProduct/AddProduct';
import MyOrder from './components/MyOrder/MyOrder';
import AllOrder from './components/AllOrders/AllOrder';
import Explore from './components/Explore/Explore';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Pay from './components/Pay/Pay';
import Reviewpost from './components/Reviewpost/Reviewpost';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/explore'>
            <Explore></Explore>
          </Route>
          <Route  path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/allOrders'>
            <AllOrder></AllOrder>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/myOrder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path='/pay'>
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path='/reviewpost'>
            <Reviewpost></Reviewpost>
          </PrivateRoute>
          <PrivateRoute path='/makeadmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path='/addProduct'>
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path='/home/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
