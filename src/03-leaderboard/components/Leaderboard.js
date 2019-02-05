import React, { Component } from 'react';
import Line from './Line';

class Leaderboard extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {name: 'default1', age: 1, country: 'default1'},
                {name: 'default2', age: 2, country: 'default2'},
                {name: 'default3', age: 3, country: 'default3'},
                {name: 'default4', age: 4, country: 'default4'}
            ]
        }
    }

    render() {
        return(
            <div className="leaderboard">
                {this.state.users.map((user) => {
                    return <Line user={user} key={user.name}/>
                })}
            </div>
        );
    }    
}

export default Leaderboard;