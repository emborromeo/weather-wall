import React from 'react';
import './App.css';



var moment = require('moment');



const Day = ({ reading }) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)
  
    let icon = reading.weather[0].icon
  
    
    return (
      <div className="col-sm-2 col-md-2">
        <div className="card">
          <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
          <span className="card-sub">{moment(newDate).format('MMMM Do')}</span>
          {/*  <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>*/}
          <div className="card-body">

            <img className="weather-condition" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />    
        

            <h2>{Math.round(reading.main.temp)} °C</h2>



          </div>
        </div>
      </div>
    )  
 

  }
  
  export default Day;