import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        "shark",
        "whale",
        "tiger",
        "lion",
        "giraffe",
        "racoon",
        "golfin",
        "crocodile",
        "pig",
        "serpent",
        "snake",
        "moose",
        "octopus",
        "monkey",
        "fox",
        "wolf",
        "lemur",
        "kangaroo",
        "duck",
        "chicken",
        "koala",
        "panda",
        "bear",
      ],
      searchInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchInput: e.target.value});
  }

  GetList() {
    const result = this.state.items.filter(i => i.includes(this.state.searchInput));
    const listItems = result.map((d) => <li key={d} className="list-item">{d}</li>);
    return <ul className="list">{listItems}</ul>;  
  }

  render() {
    return (
      <div className="app">
        <h1>{this.state.searchInput}</h1>
        <input type="text" value={this.state.searchInput} onChange={this.handleChange.bind(this)} className="search-bar"/>
        {this.GetList()}
      </div>
    );
  }
}

export default App;
