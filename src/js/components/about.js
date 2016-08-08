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
					<p className='emphasize'>Hi, I'm Rachel.</p>
					<p>I'm an interactive developer & designer with a background in human–computer interaction and qualitative UX research.</p><br/>	
					<p>I experiment using code as an medium to explore new ways of engaging with the world. I aim to create works that enable participation through interactivity and to promote honest design through openness and transparency.</p>
					</div>
			</div>
		);
	}
}