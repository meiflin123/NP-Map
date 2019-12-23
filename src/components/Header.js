import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

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
            <Link className="navbar-brand" to="/"><span className="glyphicon glyphicon-picture"></span> PICS</Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/mini_blog">Mini Blog</Link></li>
              <li><Link to="/parks_on_map">See Map</Link></li>

            </ul>
            <ul className="nav navbar-nav navbar-right">
               <li><Link><GoogleAuth /></Link></li>
               <li><Link to="/survey">Fill a Survey</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );

};


export default Header;