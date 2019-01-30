import React from 'react';
//import 'babel-polyfill';
import 'isomorphic-fetch';

const URL = 'https://www.reddit.com/r/wallpapers.json';

export function fetchJson() {
	return fetch(URL)
		.then(response => response)
		.catch(err => {
			console.error('parsing failed', err);
		});
}