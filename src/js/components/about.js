import React, { Component } from 'react';
import Nav from './nav';

export default class About extends Component {
	render() {
		return (
			<div className='app-container'>
				<Nav />
				<div className='content-container'>
					<div className='about-container'>
						<p>Hi, I'm Rachel.</p>
						<p>I'm an interactive developer & designer based in the Bay Area (originally from Southern California). My background is in human–computer interaction and qualitative UX research.</p>		
					</div>
				</div>
			</div>
		)
	}
}