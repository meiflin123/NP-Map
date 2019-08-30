import React from 'react';
import { connect } from 'react-redux';
import { fetchMiniBlogs } from '../actions';
import { Link } from 'react-router-dom';

class MiniBlogList extends React.Component {

  //fetch miniBlog immediately after page rendered.
  componentDidMount() {
    this.props.fetchMiniBlogs();
  };
  
  // have EDIT/DELETE if userId is current user Id
  renderAdmin(miniBlog) {

    if (miniBlog.user_id == this.props.currentUserId) {
      return (
        <div className="small ui buttons right floated content">
         
            <Link to={`/mini_blog/edit/${miniBlog.id}`} className="ui button">
              EDIT
            </Link>
           
            <Link to={`/mini_blog/delete/${miniBlog.id}`} className="ui button">
              Delete
            </Link>
        
        </div>
      );
    }
  };
  
  renderList() {
    console.log('list: ', this.props.miniBlog)
    return this.props.miniBlog.map(miniBlog => {
      return (
        <div className="item" key={miniBlog.id}>

          { this.renderAdmin(miniBlog) }
         
          <i className="large middle aligned icon camera" />
          <div className="content">
          <Link to={`/miniBlog/${miniBlog.id}`} className="header">
            {miniBlog.content}
          </Link>
            
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>MiniBlogs</h2>
        <div className="ui celled list">{this.renderList()}</div>

      </div>
    );

  };
  
};

const mapStatesToProps = state => {
  return { 
    miniBlog: Object.values(state.miniBlog),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};


export default connect(mapStatesToProps, { fetchMiniBlogs })(MiniBlogList);