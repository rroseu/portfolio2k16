import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div className='content-container'>
				<div className='page header'>
					<h2>About</h2>
					<div className="page header-divider"></div>
				</div>
				<div className='about-container-outer'>
					<div className='about-container-inner'>
						<p className='test'>Hi, I'm Rachel. I'm an interactive developer & designer based in the Bay Area (originally from Southern California). My background is in human–computer interaction and qualitative UX research.</p>	
						</div>
				</div>
			</div>
		);
	}
}