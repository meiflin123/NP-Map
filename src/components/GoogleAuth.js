import React from 'react';


class GoogleAuth extends React.Component {


  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '87211795519-g1rlphsol14uplul7e4csmq8b8g4qtdp.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        console.log(this.auth)

      });
    })

  }

  render () {
    return <div>GoogleAuth</div>
  }


};


export default GoogleAuth;