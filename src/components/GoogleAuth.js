import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';



class GoogleAuth extends React.Component {

  state = { isSignedIn: null }

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '87211795519-g1rlphsol14uplul7e4csmq8b8g4qtdp.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    })

  }

  onAuthChange = isSignedIn => {
    if(isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  }

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }
  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui google button" onClick={ this.onSignOut }>
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui google button" onClick={ this.onSignIn }>
          <i className="google icon" />
          Sign In
        </button>
      )
    }
  }
  render () {
    return <div>{ this.renderAuthButton() }</div>
  }


};


export default connect(null, { signIn, signOut })(GoogleAuth);