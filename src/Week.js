import React from 'react';
import Day from  './Day';
import Title from './assets/images/weather-wall-title.png';


const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class Week extends React.Component {
  state = {
    fullData: [],
    dayData: []
  }

  componentDidMount = () => {
    const weatherURL =  `http://api.openweathermap.org/data/2.5/forecast?q=Manila,PH&units=metric&APPID=${API_KEY}`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dayData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dayData: dayData
      }, () => console.log(this.state))
    })
  }

  formatDays = () => {
    return this.state.dayData.map((reading, index) => <Day reading={reading} key={index} />)
  }
  render() {
    return (
    
      <div className="container-weather" >     
   
        <div className="header-title">        
         <img src={Title} width='250px'/>

            <h4 className="display-4">Manila, PH</h4>
        </div>
      
        <div className="row justify-content-center" >

          {this.formatDays()}

        </div>
      </div>
      
    )
  }
}

export default Week;