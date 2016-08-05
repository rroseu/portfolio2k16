import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<div className='page header'>
					<h2>About</h2>
					<div className="page header-divider"></div>
				</div>
				<div className='about-container'>
					<p>Hi, I'm Rachel.</p>
					<p>I'm an interactive developer & designer based in the Bay Area (originally from Southern California). My background is in human–computer interaction and qualitative UX research.</p>	
					</div>
			</div>
		);
	}
}