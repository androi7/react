import React from 'react';
import {fetchJson} from './Fetch';

export default class Info extends React.Component{
	constructor() {
		super();
		this.state = {
			json: ''
		};
		
	}

	componentDidMount() {
		fetchJson().then(res => {
      		this.setState({
      			json: res
      		});
      	});
	}

	render() {
		const {json: j} = this.state.json;
		return <p>{`Info: ${j}`}</p>;
	}
}