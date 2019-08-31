import React from 'react';
import { connect } from 'react-redux';
import { createMiniBlog } from '../../actions';
import MiniBlogForm from './MiniBlogForm';

class MiniBlogCreate extends React.Component {

  onSubmit = formProps => {
    this.props.createMiniBlog(formProps)
  }

  render() {
    return (
      <div className="MiniBlog">
        <MiniBlogForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}


export default connect(null, {createMiniBlog })(MiniBlogCreate);