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
					<p>I'm a developer & designer living in the bay area. My background is in human–computer interaction and qualitative UX research. I am a mostly self-taught developer experimenting with code and interactive media to explore new ways of engaging with the world.</p>
					</div>
			</div>
		);
	}
}