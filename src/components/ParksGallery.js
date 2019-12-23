import React from 'react';

class ParksGallery extends React.Component {


  render() {
    return (

      <div>
        <div className="container">
          <div className="jumbotron">
            <h1><i className="fas fa-camera-retro"></i> Welcome To National Parks!</h1>
            <p id="add-pic">
              <a className="btn btn-lg btn-success" href=''>add pictures</a>
            </p>
          </div>

          <div className="row" style={{display:"flex", flexWrap:"wrap"}}>
            <div className="col-md-3 col-sm-6">
              <div className="thumbnail">
                <img className="parks" alt="park" src="https://images.unsplash.com/photo-1553531384-cc64ac80f931" />
              </div>
            </div>
          <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1546627602-6feaf59bf36e" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1544188137-e51fa594e725" />
            </div>
          </div>
           <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1536300877337-25f9347c0499" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1537394752003-baa55b597110" />
            </div>
          </div>
         
          <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1543337601-7532898fc67e" />
            </div>
          </div>
           <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1531179851386-7a872ba3e3dd" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1533189595365-b3fd32cc16d8" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src="https://images.unsplash.com/photo-1553531384-46733ed07914" />
            </div>
          </div>
        
        </div>
        
      </div>

    </div>

  );

 }
  
};


export default ParksGallery;