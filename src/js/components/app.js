import React, { Component } from 'react';
import Nav from './nav';

export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<div className='content-container'>
					{this.props.children}
					<Nav />
				</div>
			</div>
		);
	}
}