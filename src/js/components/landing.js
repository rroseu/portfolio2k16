import React, { Component } from 'react';
import Nav from './nav';

export default class Landing extends Component {
	render() {
		return (
			<div className="landing-container">
				<div className="landing header-container">
					<div className="header">
						<h1>Rachel Rose Ulgado</h1>
						<h1 className="divider">–</h1>
						<p>
							Interactive developer & designer<br />based in the Bay Area.
						</p>
					</div>
				</div>
				<div className="landing nav-container">
					<Nav />
				</div>
			</div>
		);
	}
} 