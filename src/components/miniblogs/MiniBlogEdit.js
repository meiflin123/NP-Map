import React from 'react';
import { connect } from 'react-redux';
import { fetchMiniBlogs, editMiniBlog } from '../../actions/index.js';
import MiniBlogForm from './MiniBlogForm';
import _ from 'lodash';

class MiniBlogEdit extends React.Component {

  componentDidMount() {
    this.props.fetchMiniBlogs()
  };

  onSubmit = (formProps)=> {
    //console.log(formProps)
    this.props.editMiniBlog(this.props.match.params.id, formProps)
    
  }
  
  render() {
    if (!this.props.miniBlog) {
      return <div>Loading</div>
    };

    return (
      <div className="MiniBlogEdit">
        <MiniBlogForm initialValues={_.pick(this.props.miniBlog, 'content')} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.miniBlog[ownProps.match.params.id])
  return {
    miniBlog: state.miniBlog[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { editMiniBlog, fetchMiniBlogs })(MiniBlogEdit)