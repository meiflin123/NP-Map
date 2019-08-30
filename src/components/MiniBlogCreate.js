import React from 'react';
import { Field, reduxForm } from 'redux-form';
import faker from 'faker';
import { connect } from 'react-redux';
import { createMiniBlog } from '../actions';
import miniBlog from '../apis/miniBlog';

class MiniBlogCreate extends React.Component {

  state={ parks: []};

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
        {label === 'Enter Title'? <input style={{ border: '1px solid orange'}} onBlur={input.onBlur} onChange={input.onChange} value={input.value} /> 
        : <textarea style={{ border: '1px solid orange' }} onBlur={input.onBlur} onChange={input.onChange} value={input.value} />}

        <div style={{color: '#800000'}}>{ this.renderError(meta)}</div>

      </div>
    ) ;
  }

  onSubmit = formValues => {
    this.props.createMiniBlog(formValues);
  }

  fetchParks = () => {
    miniBlog.get('/parks')
      .then(response => this.setState({ parks: response.data }))
      .catch(error => console.log(error))
  }
  componentDidMount = () => {
    this.fetchParks();
  }

  render() {
    return (
      <div className="MiniBlogCreate row">
        <div className="column">
          <img alt="avatar" src={faker.image.avatar()} style={{marginTop: '23px'}}/>
        </div>
        <div className="column">
          <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <select style={{ border: '1px solid orange' }} onChange={ this.selectPark }>{ this.state.parks.map(park => <option value={park.id} key={park.id}>{park.name}</option>)}</select>
            <Field name="title" label="Enter Title" component={ this.renderInput }/>
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
  if(!formValues.title) {
    error.title='Please enter a park';
  }
  if(!formValues.content) {
    error.content='Please enter some content';
  }
  return error
}

const formWrapped = reduxForm({form: 'MiniBlogCreate', validate: validate})(MiniBlogCreate);

export default connect(null, { createMiniBlog })(formWrapped)