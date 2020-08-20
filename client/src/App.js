import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import DetailTour from "./Components/DetailTour/DetailTour";
import Payment from "./Pages/Payment";
import PaymentPending from "./Components/Payment/PaymentPending";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Pages/Profile";
import IncomeTrans from "./Components/Income/IncomeTrans";
import IncomeTrip from "./Components/Income/IncomeTrip";
import IncomeAction from "./Components/Income/IncomeAction";
import AddTrip from "./Components/AddTrip/AddTrip";

import ScrollTop from "./Components/utility/ScrollTop";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  const handleLogin = () => {
    setLogin(!isLogin);
    setModalLogin(false);
    setModalRegister(false);
  };

  return (
    <Router>
      <Navbar
        isLogin={isLogin}
        setModalLogin={setModalLogin}
        setModalRegister={setModalRegister}
        handleLogin={handleLogin}
      />
      {modalLogin && (
        <Login
          setModalLogin={setModalLogin}
          setModalRegister={setModalRegister}
          handleLogin={handleLogin}
        />
      )}
      {modalRegister && (
        <Register
          setModalRegister={setModalRegister}
          setModalLogin={setModalLogin}
          handleLogin={handleLogin}
        />
      )}
      <ScrollTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/detail/:id">
            <DetailTour setModalLogin={setModalLogin} />
          </Route>

          <Route exact path="/payment-pending" component={PaymentPending} />
          <Route exact path="/payment/:id" component={Payment} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/income-transaction" component={IncomeTrans} />
          <Route exact path="/income-trip" component={IncomeTrip} />
          <Route exact path="/add-trip" component={AddTrip} />
          <Route exact path="/income-action" component={IncomeAction} />
        </Switch>
      </ScrollTop>
      <Footer />
    </Router>
  );
}

export default App;
