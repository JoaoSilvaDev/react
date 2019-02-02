import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import RealtimeSearch from './01-realtime-search/App';

const routing = (
    <Router>
        <div>
            <ul>
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/01">01 Realtime Search</Link></li>
            </ul>
            <Route exact path="/01" component={RealtimeSearch} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
