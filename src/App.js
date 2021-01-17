import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom'
import './App.css';

import LandingPage from './Pages/LandingPage'
import MalePage from './Pages/MaleUserPage'
import FemalePage from './Pages/FemaleUserPage'
import ProfilePage from './Pages/ProfilePage'


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/male">
            <MalePage />
          </Route>
          <Route path="/female">
            <FemalePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
