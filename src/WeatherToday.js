import React from 'react';
import Today from './Today';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class WeatherToday extends React.Component {
  state = {
    dayData: []
  }

  render() {
    return (
    
      <div className="container-weather" >     
      {/*<div className="container-weather" style={{backgroundImage:` url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      }}>          */}
     
      </div>
      
    )
  }
}

export default WeatherToday;