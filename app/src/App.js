import './App.css';

import {useEffect} from 'react';

import { Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useState } from 'react';
import Landing from './components/Landing';
import LoginHeader from './components/LoginHeader';
import LoginFooter from './components/LoginFooter';
import Login from './components/Login';
import Map from './components/Map';
import SelectSpecies from './components/SelectSpecies';
import Sightings from './components/Sightings';
function App() {
  return (
      <div className="App">
      
          <LoginHeader/>
          
          <Switch>
            <Route exact path="/">
              <Landing/>
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>

        
            <Route path="/protected">
              <SelectSpecies/>
              {/* <Sightings/> */}
            </Route>

            <Route path="/sightings">
              <Sightings/>
            </Route>

            <Route path="/map">
              <Map />
            </Route>

          </Switch>
          
          <LoginFooter/>

 
      </div>
  );
}

export default App;
