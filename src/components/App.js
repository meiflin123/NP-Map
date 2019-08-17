import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ParksOnMap from './ParksOnMap';
import ParksGallery from './ParksGallery';
import ParkDetail from './ParkDetail';
import Header from './Header';



const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={ ParksGallery} />
          <Route path="/parks_on_map" component={ ParksOnMap }/>
          <Route path="/park_detail" component={ ParkDetail } />
        </div>
      </BrowserRouter>
    </div>
  );
  
};


export default App;