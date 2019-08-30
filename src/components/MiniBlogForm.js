import React from 'react';
import { Field, reduxForm } from 'redux-form';
import faker from 'faker';
import { connect } from 'react-redux';
import { createMiniBlog, fetchParks, selectPark } from '../actions';

class MiniBlogCreate extends React.Component {

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
        <textarea style={{ border: '1px solid orange' }} onBlur={input.onBlur} onChange={input.onChange} value={input.value} />

        <div style={{color: '#800000'}}>{ this.renderError(meta)}</div>

      </div>
    );
  }

  onSubmit = formValues => {
    //console.log('here', this.props.parkSelected)
    this.props.createMiniBlog(formValues, this.props.parkSelected);
  }

  selectPark = (e) => {
    this.props.selectPark(e.target.value);
  }
  componentDidMount = () => {
    this.props.fetchParks();
  }

  render() {
    return (
      <div className="MiniBlogForm row">
        <div className="column">
          <img alt="avatar" src={faker.image.avatar()} style={{marginTop: '23px'}}/>
        </div>
        <div className="column">
          <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <select style={{ border: '1px solid orange' }} onChange={ this.selectPark }>
              <option disabled selected value> -- select an option -- </option>
              { this.props.parks.map(park => <option value={park.id} key={park.id}>{park.name}</option>)}
            </select>
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
  if(!formValues.content) {
    error.content='Please enter some content';
  }
  return error
}
const mapStateToProps = state => {
  console.log('mapStateToProps', Object.values(state.parks))
  return {
    parks: Object.values(state.parks),
    parkSelected: state.selectedPark
  }

  
}
const formWrapped = reduxForm({form: 'MiniBlogCreate', validate: validate})(MiniBlogCreate);

export default connect(mapStateToProps, { createMiniBlog, fetchParks, selectPark })(formWrapped)