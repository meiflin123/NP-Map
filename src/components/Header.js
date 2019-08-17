import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
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
  );

};


export default Header;