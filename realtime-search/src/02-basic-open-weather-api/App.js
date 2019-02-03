import React, { Component } from 'react';
import './css/App.css';

const api_key = '4ae91ae648f05b04fe3d55778777460c';
const cityid = '2267057';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isLoading: true,
      searchInput: ''
    }
  }

  componentDidMount() {
    this.getWeather(cityid);
  }

  getWeather(id){
    const url = 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&APPID='+ api_key;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false}))
  }

  render() {
    console.log(this.state.isLoading);
    return (
      <div className="app">
        {this.state.isLoading || this.state.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <div>
             <p className="cityName">{this.state.data.name }</p>
             <p className="info">{this.state.data.weather[0].main}</p>
             <p className="info">{this.state.data.main.temp - 273.15}°C</p>
             <img className="icon" src={"http://openweathermap.org/img/w/" + this.state.data.weather[0].icon + ".png"}/>
           </div>
        )}
      </div>
    );
  }
}

export default App;
