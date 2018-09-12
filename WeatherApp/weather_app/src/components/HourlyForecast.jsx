import React from 'react';
import './HourlyForecast.css';
import { Link } from 'react-router-dom';
import moment from 'moment'

import { AxisLeft, AxisBottom } from '@vx/axis';
import { LinearGradient } from '@vx/gradient';
import { Group } from '@vx/group';
import { appleStock } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AreaClosed } from '@vx/shape';
import { extent, max } from 'd3-array';

const HourlyForecast = (props) => {
  const data = props.location.state;

  function generateChart() {
    let chartData = [];
    data.weatherData.map(row => {
      chartData.push({
        hour: row.dt_txt,
        temp: Math.round(row.main.temp)
      })
    })
    
    const 
      width  = 750,
      height = 400,
      margin = { top: 60, bottom: 60, left: 80, right: 80 },
      xMax = width - margin.left - margin.right,
      yMax = height - margin.top - margin.bottom,

      x = d => new Date(d.hour),
      y = d => d.temp,
    
      xScale = scaleTime({
        range: [0, xMax],
        domain: extent(chartData, x)
      }),
      yScale = scaleLinear({
        range: [yMax, 0],
        domain: [0, max(chartData, y)]
      }),
    
      chart = (
        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <LinearGradient
              from='#fbc2eb'
              to='#a6c1ee'
              id='gradient'
            />
            <AxisLeft
              scale={yScale}
              top={0}
              left={0}
              label={'Temperature °C'}
              stroke={'#1b1a1e'}
              tickTextFill={'#1b1a1e'}
              tickFormat={ yScale => `${yScale}°C`}

            />
            <AxisBottom
              scale={xScale}
              top={yMax}
              label={'Hour'}
              stroke={'#1b1a1e'}
              tickFormat={ xScale => `${xScale.getHours()}:00`}
              tickTextFill={'#1b1a1e'}
            />
            <AreaClosed
              data={chartData}
              xScale={xScale}
              yScale={yScale}
              x={x}
              y={y}
              fill={"url(#gradient)"}
              stroke={""}
            />
          </Group>
        </svg>
      );

    return chart;
  }  

  return(
    <div>
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
      <div className="hourly-graph">
        <h2>Chart of temperature evolution per hour</h2>
        {generateChart()}
      </div>
    </div>
  )
}

export default HourlyForecast;
