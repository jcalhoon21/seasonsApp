import React from 'react';
import ReactDOM from 'react-dom';

//Functional Component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position, 'position'),
//     (err) => console.log(err)
//   );

//   return (
//     <div>
//       Latitude: 
//     </div>
//   )
// };


//Class Based Component
class App extends React.Component {
    
  render() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position, 'position'),
    (err) => console.log(err)
    );
    
  return <div> Latitude: </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))