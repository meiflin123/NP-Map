import React from 'react';
//import Modal from '../Modal';
import { connect } from 'react-redux';
import { fetchMiniBlog, deleteMiniBlog } from '../../actions';
import { Link } from 'react-router-dom'
import history from '../../history';

class MiniBlogDelete extends React.Component {
 

  componentDidMount() {
    this.props.fetchMiniBlog(this.props.match.params.id);

  };

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button onClick={ () => this.props.deleteMiniBlog(id) }className="ui negative button">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );
  };
  
  renderContent() {
    if (!this.props.miniBlog) {
      return "Are you sure you want to delete this miniblog?"
    }
    return `Are you sure you want to delete this miniblog?`
  };

  render() {
    return (
      <div>
        {/*<Modal header="Delete Mini Blog" 
               content= {this.renderContent() }
               actions={ this.renderActions() }
               onDismiss={ () => history.push('/mini_blog')}

        />*/}
        MiniBlogDelete
      </div>
    );
  };
}

const mapStatesToProps = (state,ownProps) => {
  return {
    miniBlog: state.miniBlog[ownProps.match.params.id]
  };
};


export default connect(mapStatesToProps, { fetchMiniBlog, deleteMiniBlog })(MiniBlogDelete);