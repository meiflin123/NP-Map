import React from 'react';
import { connect } from 'react-redux';
import { createMiniBlog, fetchParks } from '../actions';
import MiniBlogForm from './MiniBlogForm';

class MiniBlogCreate extends React.Component {

  onSubmit = formProps => {
    this.props.createMiniBlog(formProps)
  }

  render() {
    return (
      <div className="MiniBlogCreate">
        
        <MiniBlogForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}


export default MiniBlogCreate;