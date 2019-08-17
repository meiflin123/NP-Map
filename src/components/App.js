import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ParksOnMap from './ParksOnMap';
import LandingPage from './LandingPage';



const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ LandingPage} />
          <Route path="/parks_on_map" component={ ParksOnMap }/>
        </div>
      </BrowserRouter>
    </div>
  );
  
};


export default App;