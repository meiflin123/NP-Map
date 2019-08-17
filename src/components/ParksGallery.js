import React from 'react';
import { Link } from 'react-router-dom';

class ParksGallery extends React.Component {

  render() {

    return (

      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="#"><span className="glyphicon glyphicon-picture"></span> PICS</Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/parks_on_map">See Map</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="#">Google Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="container">
        <div className="jumbotron">
          <h1><i className="fas fa-camera-retro"></i> Title</h1>

        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img alt="park" src="https://images.unsplash.com/photo-1553531384-cc64ac80f931" />
            </div>
          </div>
         {/* <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1546627602-6feaf59bf36e" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1544188137-e51fa594e725" />
            </div>
          </div>
           <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1536300877337-25f9347c0499" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1537394752003-baa55b597110" />
            </div>
          </div>
         
          <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1543337601-7532898fc67e" />
            </div>
          </div>
           <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1531179851386-7a872ba3e3dd" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1533189595365-b3fd32cc16d8" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1553531384-46733ed07914" />
            </div>
          </div>
         */}
        </div>
        
      </div>

    </div>

  );

 }
  
};


export default ParksGallery;