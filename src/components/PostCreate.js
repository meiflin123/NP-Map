import React from 'react';
import { Field, reduxForm } from 'redux-form';
import faker from 'faker';

class PostCreate extends React.Component {

  renderInput({ input, label }) {
    return(
      <div className="field">
        <label style={{ color: '#95b5c2', fontFamily: 'fantasy' }}>{label}</label>
        {label === 'Enter Park'? <input style={{ border: '1px solid orange'}} onChange={input.onChange} value={input.value} /> : <textarea style={{ border: '1px solid orange' }} onChange={input.onChange} value={input.value} />}
      </div>
    ) ;
  }

  onSubmit(formValues){
    console.log(formValues);

  }
  render() {
    return (
      <div class="PostCreate row">
        <div class="column">
          <img alt="avatar" src={faker.image.avatar()} style={{marginTop: '23px'}}/>
        </div>
        <div class="column">
          <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          
          
            <Field name="park" label="Enter Park" component={ this.renderInput }/>
            <Field name="description" label="Any New Experience To Share?" component={ this.renderInput} />
            <button className="ui orange button">Share</button>
          </form>
        </div>
      </div>

    )
  }
  

}



export default reduxForm({form: 'PostCreate'})(PostCreate);