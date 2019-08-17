import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ParksOnMap from './ParksOnMap';



const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/parks_on_map" exact component={ ParksOnMap }/>
        </div>
      </BrowserRouter>
    </div>
  );
  
};


export default App;