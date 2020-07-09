import React from 'react';
import './App.css';
// import Recipes from './components/Recipes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Register from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import RegisterSection from './components/RegisterSection';
import LoginSection from './components/LoginSection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route path="/" exact component={LandingPage} /> */}
          <Route path="/customer/:id/profile"  component={ProfilePage} />
          <Route path="/register" component={RegisterSection} />
          <Route path="/login" component={LoginSection} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;