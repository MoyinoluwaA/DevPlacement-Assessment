import React from 'react';
import {BrowserRouter, Switch, Route} from'react-router-dom'
import './App.css';

import LandingPage from './Components/LandingPage'
import MalePage from './Components/MaleUserPage'
import FemalePage from './Components/FemaleUserPage'


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
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
