import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ParksOnMap from './ParksOnMap';
import ParksGallery from './ParksGallery';



const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ ParksGallery} />
          <Route path="/parks_on_map" component={ ParksOnMap }/>
        </div>
      </BrowserRouter>
    </div>
  );
  
};


export default App;