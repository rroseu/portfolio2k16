import React, { Component } from 'react';
import Landing from './landing';

export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Landing />
				{this.props.children}
			</div>
		);
	}
}