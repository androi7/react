import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info';

class App extends Component {
	constructor() {
		super();
		this.getInfo = this.getInfo.bind(this);
		let m = '';
	}

	getInfo() {
			this.m = <Info />;
		}

  render() {
    return (
      <div className="App">
      <button onClick={this.getInfo}>Get Info</button>
            {this.m}
      </div>
    );
  }
}

export default App;
