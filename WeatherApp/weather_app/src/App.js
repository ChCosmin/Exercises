import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WeekForecast from './components/WeekForecast';
import HourlyForecast from './components/HourlyForecast';

import {
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Weather Forecast</h1>
        </header>
        <div className="App-intro">
          <Switch>
            <Route exact path='/' component={WeekForecast} />
            <Route exact path='/Sunday'    component={(props) => <HourlyForecast {...props}/>} />
            <Route exact path='/Monday'    component={(props) => <HourlyForecast {...props}/>} />
            <Route exact path='/Tuesday'   component={(props) => <HourlyForecast {...props}/>} />
            <Route exact path='/Wednesday' component={(props) => <HourlyForecast {...props}/>} />
            <Route exact path='/Thursday'  component={(props) => <HourlyForecast {...props}/>} />
            <Route exact path='/Friday'    component={(props) => <HourlyForecast {...props}/>} />
            <Route exact path='/Saturday'  component={(props) => <HourlyForecast {...props}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
