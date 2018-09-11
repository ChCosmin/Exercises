import React from 'react';
import './DayForecast.css';

const DayForecast = (props) => (
  <div className="day-box"> 
    <p className="day-name">{props.day}</p>
    <img className="day-icon" src={require(`../assets/weather-icons/${props.icon}`)} alt="day icon"/>
    <p className="day-temp">
      <span>{props.low}&deg;</span>
      <span>{props.high}&deg;</span>
    </p>
  </div>
)

export default DayForecast;