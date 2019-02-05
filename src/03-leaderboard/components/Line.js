import React, { Component } from 'react';
import Cell from './Cell'

class Line extends Component {
    render() {
        return(
            <div className="leaderboard-line">
                <Cell field='Name' value={this.props.user.name}/>
                <Cell field='Age' value={this.props.user.age}/>
                <Cell field='Country' value={this.props.user.country}/>
            </div> 
        );
    }    
}

export default Line;