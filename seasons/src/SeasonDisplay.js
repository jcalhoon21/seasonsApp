import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    icon: 'sun'
  },
  winter: {
    text: 'Burrr it\'s cold!',
    icon: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if(month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  // console.log(props.latitude)
  const season = getSeason(props.latitude, new Date().getMonth());
  // console.log(season);
  // const text = season === 'winter' ? 'Burrr it\'s chilly!' : 'Let\'s hit the beach!';
  // const icon = season === 'winter' ? 'snowflake' : 'sun';
  const {text, icon} = seasonConfig[season]; // {text, icon}

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  )
}

export default SeasonDisplay;