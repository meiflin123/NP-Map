import React from 'react';
import { Field, reduxForm } from 'redux-form';
import faker from 'faker';

class PostCreate extends React.Component {

  renderError({ error, touched }){
    console.log(touched, error)
    if(error && touched) {
      return (
        <div className="error message">
          <div className="header">{error}
          </div>
        </div>
      )
    }

  }

  renderInput = ({ input, label, meta }) => {
    const className =`field ${meta.error && meta.touched? 'error' : ''}`
    return(
      <div className={className}>
        <label style={{ color: 'green', fontFamily: 'fantasy' }}>{label}</label>
        {label === 'Enter Park'? <input style={{ border: '1px solid orange'}} onBlur={input.onBlur} onChange={input.onChange} value={input.value} /> 
        : <textarea style={{ border: '1px solid orange' }} onBlur={input.onBlur} onChange={input.onChange} value={input.value} />}

        <div style={{color: '#800000'}}>{ this.renderError(meta)}</div>

      </div>
    ) ;
  }

  onSubmit(formValues){
    console.log(formValues);

  }

  render() {
    return (
      <div className="PostCreate row">
        <div className="column">
          <img alt="avatar" src={faker.image.avatar()} style={{marginTop: '23px'}}/>
        </div>
        <div className="column">
          <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          
          
            <Field name="park" label="Enter Park" component={ this.renderInput }/>
            <Field name="content" label="Any New Experience To Share?" component={ this.renderInput} />
            <button className="ui orange button">Share</button>
          </form>
        </div>
      </div>

    )
  }
}

const validate = formValues => {
  const error = {};
  if(!formValues.park) {
    error.park='Please enter a park';
  }
  if(!formValues.content) {
    error.content='Please enter some content';
  }
  return error
}


export default reduxForm({form: 'PostCreate', validate: validate})(PostCreate);