import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position, 'position'),
    (err) => console.log(err)
  );

  return (
    <div>
    empty  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))