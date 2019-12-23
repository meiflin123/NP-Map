import './SurveyForm.css';
import React from 'react';
import $ from 'jquery';

const fieldData = 
    [
      {field: $('#input-email'), parent: $('#input-email').parent(), name: 'email', status: 'fail', msg:'Please enter a valid email address'}, 
      {field: $('#input-size'), parent: $('#input-size').parent(), name: 'businessSize', status: 'fail', msg:'Please select a business size'}, 
      {field: $('[name="importance"]'), parent: $('[name="importance"]').parent().parent(), name: 'importance', status: 'fail', msg:'Please pick an important thing'}
    ]


class SurveyForm extends React.Component {
  state = {inputEmail: '', parentEle: '', sizeSelect: null, importanceRadio: ''};

  onInputChange = e => {
    console.log(e.target.value)
    this.setState({inputEmail: e.target.value});
    this.validate('email', 0);

  }

  validate = (field, idx) => {
    console.log('here')
    let parentEl = fieldData[idx].parent;
    let errorMsg = fieldData[idx].msg;

    //email
    if(field === 'email') {
      let reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
      let emailInput = this.state.inputEmail;
      if(!reg.test(emailInput)){
        this.renderErrorMsg(parentEl, errorMsg, 0);
      } else {
        this.renderSuccess(parentEl, 0)
      }
    }

  }

  renderErrorMsg = (parentEl, msg, fieldIdx) => {

    let field = fieldData[fieldIdx].field;

    console.log(field)
    if(!parentEl.hasClass('error')) {
      parentEl.addClass('error');
    }

    // red border for non radios section Idx
    if(fieldIdx !== 2) {
      field.css('border', '1px solid #C41337');
    }

    parentEl.attr('data-errormsg', msg);
    fieldData[fieldIdx].status = 'fail';
  }

  renderSuccess = (parentEl, fieldIdx) => {
    let field = fieldData[fieldIdx].field;
    parentEl.prop('data-errormsg', null)
    parentEl.removeClass('error');
    
    // green border for non radios section Idx
    if(fieldIdx !== 2) {
      field.css('border', '1px solid #00873F');
    }
    
    fieldData[fieldIdx].status = 'sucess';
  }


  render() {

    return (
      <div className="container">
        <form className="surveyForm">   
          <h2 className="title"><div className="ellipse"><i className="fa fa-calendar" aria-hidden="true"></i></div><br /><br />Fill a Survey</h2>
          <h1>Help us improve our website by answering the following questions below</h1>

          <div className="form-field" data-errormsg="">
            <label className="email">Email</label>
            <input onChange={this.onInputChange} type="email" id="input-email" value={this.state.inputEmail}required placeholder="Enter your email" />
          </div>

          <div className="form-field" data-errormsg="">
            <label className="rating">Rating Score</label>
              <select id="input-size" required>
                <option selected disabled>Select rating</option>    
                <option value="1">1(bad)</option>
                <option value="2">2(so so)</option>
                <option value="3">3(okay)</option>
                <option value="4">4(good)</option>
                <option value="5">5(Great)</option>
              </select>
          </div>

          <div className="form-field" data-errormsg="">
            <p id="input-importance">What is the most important feature to you on our website?</p>
            <ul className="radios">
              <li><input id="1" type="radio" name="importance" value="1" /><span>Google login</span></li>
              <li><input id="2" type="radio" name="importance" value="2" /><span>Add pictures</span></li>
              <li><input id="3" type="radio" name="importance" value="3" /><span>Gallery of pictures</span></li>
              <li><input id="4" type="radio" name="importance" value="4" /><span>Pins of parks on map</span></li>
              <li><input id="5" type="radio" name="importance" value="5" /><span>Searchbar for park</span></li>
              <li><input id="6" type="radio" name="importance" value="6" /><span>Layout of website</span></li>
              <li><input id="7" type="radio" name="importance" value="7" /><span>Collapsable Nav Bar</span></li>
  
            </ul>
          </div>
          <button id="submitSurvey"><span>Continue to submit your thoughts!</span></button>
        </form>
      </div>

    )
  }
}

export default SurveyForm
  
  