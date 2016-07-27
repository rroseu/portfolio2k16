import React, { Component } from 'react';
import Nav from './Nav';

export default class Landing extends Component {
	render() {
		return (
			<div className="landing-container">
				<div className="landing header-container">
					<h1>Rachel Rose Ulgado</h1>
						–
					<p>
						Interactive developer & designer based in the Bay Area.
					</p>
				</div>
				<Nav />
			</div>
		);
	}
} 