import React from 'react';
import './HourlyForecast.css';
import { Link } from 'react-router-dom';
import moment from 'moment'

const HourlyForecast = (props) => {
  const data = props.location.state;
  return(
    <div className="hourly-box">
      <Link to="/">Back</Link>
      <div className="hourly-top">
        <p className="hourly-heading"><strong>{data.day}</strong></p>    
      </div>
      <div className="hours">
        <div className="hour-box hour-box-heading">
          <div>Hour</div>
          <div>Weather</div>
          <div>Temp</div>
        </div>
        {
          data.weatherData.map(hour => 
            <div className="hour-box">
              <div className="hour-hour">{`${moment(hour.dt*1000).format("HH:mm")}`}</div>
              <img className="hour-icon" src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`} alt="hour icon"/>
              <div className="hour-temp">{Math.round(hour.main.temp)}°C</div>
            </div>)
        }
      </div>  
    </div>
  )
}

export default HourlyForecast;
