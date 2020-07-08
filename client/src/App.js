import React from 'react';
import './App.css';
// import Recipes from './components/Recipes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Register from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';
// import Customer from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/customer/:id/profile" exact component={ProfilePage} />
          {/* <Route path="/recipes/:id" component={RecipeDetails} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;