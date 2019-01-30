import React, { Component } from 'react';
import './App.css';
import Info from './components/Info';

class App extends Component {

	constructor() {
		super();
		this.getInfo = this.getInfo.bind(this);
		this.state = {
			check: false
		};
	}

	getInfo() {
			this.setState({
				check: true
			});
		}

  render() {
  	const check  = this.state.check;
    return (
      <div className="App">
      <button onClick={this.getInfo}>Get Info</button>
            {check ? <Info /> : null}
      </div>
    );
  }
}

export default App;
