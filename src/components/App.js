import React from 'react';
import { Router, Route } from 'react-router-dom';
import ParksOnMap from './ParksOnMap';
import ParksGallery from './ParksGallery';
import ParkDetail from './ParkDetail';
import MiniBlogCreate from './miniblogs/MiniBlogCreate';
import MiniBlog from './miniblogs/MiniBlog';
//import MiniBlogList from'./miniblogs/MiniBlogList';
import MiniBlogEdit from './miniblogs/MiniBlogEdit';
import MiniBlogDelete from './miniblogs/MiniBlogDelete';
import SurveyForm from './SurveyForm';
import Header from './Header';
import history from '../history';

var pic = [{'img': 'https://images.unsplash.com/photo-1553531384-cc64ac80f931'}];



const App = () => {
  
  return (
    <div>
   
      <Router history={ history }>
        <div>
          <Header />
          <Route path="/" exact component={ ParksGallery} />
          <Route path="/parks_on_map" component={ ParksOnMap }/>
          <Route path="/park_detail" component={ ParkDetail } />
          <Route path="/mini_blog" exact component={ MiniBlog} />
          <Route path="/mini_blog/new" exact component={ MiniBlogCreate }/>
          <Route path="/mini_blog/edit/:id" exact component={MiniBlogEdit }/>
          <Route path="/mini_blog/delete/:id" exact component={MiniBlogDelete }/>
          <Route path="/survey" exact component={ SurveyForm } />
        </div>
      </Router>
    </div>
  );
  
};


export default App;