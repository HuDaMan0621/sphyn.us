import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import LandingPage from "./components/layout/LandingPage";
import RegisterSection from "./components/RegisterSection";
import LoginSection from "./components/LoginSection";
import BookingPage from "./components/BookingPage";
import Showcase from "./components/Showcase";
import Guidelines from "./components/Guidelines";
import Administrator from "./components/Administrator";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/customer/profile" component={ProfilePage} />
          <Route path="/register" component={RegisterSection} />
          <Route path="/login" component={LoginSection} />
          <Route path="/booking" component={BookingPage} />
          <Route path="/showcase" component={Showcase} />
          <Route path="/guidelines" component={Guidelines} />
          <Route path="/admin/update" component={Administrator} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
