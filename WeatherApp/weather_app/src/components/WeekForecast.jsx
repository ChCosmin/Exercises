import React from 'react';
import DayForecast from './DayForecast';
import './WeekForecast.css';
import { Link } from 'react-router-dom';
import moment from 'moment'
import Map from 'es6-map';

class WeekForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: false
    };
  }

  componentDidMount() {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?';
    const city = 'London';
    const country = 'GB';
    const apiKey = '2abcc9e2898935b8665008b1ea118ae2';
    const units = 'metric';

    fetch(url+"q="+city+','+country+'&appid='+apiKey+'&units='+units)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  groupWeatherByDay = (list) => {
    const days = new Map(); // use Map as need we to maintain insertion order
    list.forEach( (w) => {
      const day = moment(w.dt*1000).format("dddd Do MMMM");
      if( !days[day] ) days[day] = []
      days[day].push(w)
    })
    return days;
  }

  getDayTemp = (day, temp) => {
    let low = [];
    let high = [];
    day.map(x => {
      low.push(x.main.temp_min);
      high.push(x.main.temp_max);
    });
    if(temp === 'low') {
      return Math.round(Math.min(...low));
    } else {
      return Math.round(Math.max(...high));
    }
  }

  importWeatherIcons = (icons) => {
    let images = [];
    icons.keys().map( icon => { images.push(icon.replace('./', '')) });
    return images;
  };

  loadIfData = () => {
    const { data } = this.state;
    const weather_icons = this.importWeatherIcons(require.context("../assets/weather-icons", false, /.*\.png$/));
   
    if ( !data ) { 
      return <p>Loading data...</p>
    }

    const weatherRows = this.groupWeatherByDay(data.list || []);
    return (
      <div className="week-forecast"> 
        <p>This weeks forecast in {data.city.name}</p>
        <ul className="week-days">
          {
            Object.keys(weatherRows).map(day => {
              const 
                icon = weather_icons[Math.floor(Math.random()*(16-0+1)+0)],
                weatherData = weatherRows[day],
                low  = this.getDayTemp(weatherRows[day], 'low'),
                high = this.getDayTemp(weatherRows[day], 'high'),
                data = { weatherData, low, high, day },
                dayName = day.replace(/ .*/, '');

              return <li key={`${dayName}-link`}><Link to={{ pathname: `/${dayName}`, state: data }}><DayForecast day={dayName} low={low} high={high} icon={icon}/></Link></li>              
            })
          }
        </ul>
      </div>)
  }
  
  render() {    
    return(
      <div>{this.loadIfData()}</div>
    )
  }
     
}

export default WeekForecast;