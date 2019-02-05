import React, { Component } from 'react';

class Cell extends Component {
    render()
    {
        return(
            <div className="leaderboard-cell">
                <p className="field">{this.props.field}</p>
                <p className="value">{this.props.value}</p>
            </div>
        );
    }
}

export default Cell;