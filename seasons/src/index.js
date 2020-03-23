import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props); // reference to React.Component function

    this.state ={
      latitude: null, // we dont know what it is yet but eventually we will
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //setState updates state // never do a direct state assignment -- no this.state.latitude = ...
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    
  return (
    <div>
      Latitude: {this.state.latitude} <br />
      Error: {this.state.errorMessage}
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'))