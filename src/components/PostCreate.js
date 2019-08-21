import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostCreate extends React.Component {
  render() {
    return (
      <div className="PostCreate">
      {console.log(this.props)}
        <form>
          <Field name="title"/>
          <Field name="description" />

        </form>
      </div>

    )
  }
  

}



export default reduxForm({form: 'PostCreate'})(PostCreate);