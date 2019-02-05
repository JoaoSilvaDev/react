import React, { Component } from 'react';
import './css/leaderboard-style.css';
import Leaderboard from './components/Leaderboard';

class App extends Component {
  render() {
    return (
      <div className="leaderboard-app">
        <Leaderboard/>
      </div>
    );
  }
}

export default App;
