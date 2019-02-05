import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import RealtimeSearch from './01-realtime-search/RealtimeSearchApp';
import OpenWeatherApi from './02-basic-open-weather-api/WeatherApp';
import Leaderboard from './03-leaderboard/LeaderboardApp';

const routing = (
    <Router>
        <div>
            <ul className="nav-background">
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/01">01 Realtime Search</Link></li>
                <li className="nav-link"><Link to="/02">02 Open Weather API</Link></li>
                <li className="nav-link"><Link to="/03">03 Leaderboard</Link></li>
            </ul>
            <Route exact path="/01" component={RealtimeSearch} />
            <Route exact path="/02" component={OpenWeatherApi}/>
            <Route exact path="/03" component={Leaderboard}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
