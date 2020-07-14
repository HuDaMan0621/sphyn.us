import React from 'react';
import './App.css';
// import Recipes from './components/Recipes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Register from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/layout/LandingPage';
import RegisterSection from './components/RegisterSection';
import LoginSection from './components/LoginSection';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/customer/profile"  component={ProfilePage} />
          <Route path="/register" component={RegisterSection} />
          <Route path="/login" component={LoginSection} />
          <Route path="/booking" component={BookingPage} />
          {/* <Route path="/customer" com */}

          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;