import React, { Component } from 'react';
import Nav from './nav';

export default class About extends Component {
	render() {
		return (
			<div className='app-container'>
				<div className='content-container'>
					<Nav />
					<div className='about-container'>
						<p>Hi, I'm Rachel. I'm an interactive developer & designer based in the Bay Area (originally from Southern California). My background is in human–computer interaction and qualitative UX research.</p>	
					</div>
				</div>
			</div>
		)
	}
}