import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Home/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewArrival from "./components/Books/NewArrival";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";
import Login from "./components/Account/Login";
import SignUp from "./components/Account/SignUp";
import ProductState from "./contexts/productState";
import Cart from "./components/Cart/Cart";
import Alert from "./components/comp/Alert";

function App() {

  // For Alert
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type

      })
      setTimeout(() => {
        setAlert(null)
      }, 3000);
}


  return (
    <ProductState>
    <Router>
      <Navbar heading="BOOKLY" alerts={showAlert}/>
        <div className="containers">
      <Alert alert={alert} />
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/newArrival">
            <NewArrival alerts={showAlert}/>
          </Route>
          <Route exact path="/login">
            <Login alerts={showAlert}/>
          </Route>
          <Route exact path="/signup">
            <SignUp alerts={ showAlert }/>
          </Route>
          <Route exact path="/newArrival">
            <NewArrival />
          </Route>
          <Route exact path="/cart">
            <Cart alerts={ showAlert } />
          </Route>
        </Switch>
        </div>  
        <Footer />
    </Router>
    </ProductState>
  );
}

export default App;
