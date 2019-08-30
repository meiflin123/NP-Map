import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ParksOnMap from './ParksOnMap';
import ParksGallery from './ParksGallery';
import ParkDetail from './ParkDetail';
import MiniBlog from'./MiniBlog';
import MiniBlogEdit from './MiniBlogEdit';
import MiniBlogDelete from './MiniBlogDelete'
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
          <Route path="/mini_blog" component={ MiniBlog} />
          <Route path="/mini_blog/edit/:id" exact component={MiniBlogEdit }/>
          <Route path="/mini_blog/delete/:id" exact component={MiniBlogDelete }/>
        </div>
      </BrowserRouter>
    </div>
  );
  
};


export default App;