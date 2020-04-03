import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
  // constructor(props) {
  //   super(props); // reference to React.Component function

  //   this.state ={
  //     latitude: null, // we dont know what it is yet but eventually we will
  //     errorMessage: ''
  //   };
  // }

  // same as constructor
  state = { latitude: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }


  // putting your conditional render in a function reduces amount of returns in your actual render method
  renderContent() {
// {this.state.errorMessage && !this.state.latitude ? this.state.errorMessage : }
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.latitude) {
      // return <div>Latitude: {this.state.latitude}</div>
      return <div><SeasonDisplay latitude={this.state.latitude} /></div>
    }

    return <Loader message="Please accept location request" />

  // return (
  //   <div>
  //     Latitude: {this.state.latitude} <br />
  //     Error: {this.state.errorMessage}
  //   </div>
  // )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))