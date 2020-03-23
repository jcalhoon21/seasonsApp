import React from 'react';

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  )
}

// if we plan to use the loader elsewhere, this will be the default message unless we pass one through props
Loader.defaultProps = {
  message: 'Loading...'
}

export default Loader;