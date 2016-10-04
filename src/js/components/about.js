import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div className='about-container-outer'>
				<div className='about-container-inner'>
					<div className='about-left'>
						<h2>Hi, I'm Rachel.</h2>
						<h3>I'm a creative technologist.</h3>
					</div>
					<div className='about-right'>
						<p>My background is in human–computer interaction, and human-centered design, and qualitative UX research. I experiment with code and interactive media to imagine new ways of engaging with the world. <br /><br />Previously I worked at Junior, Schema Design, Intel, and IBM, and was a student at the School for Poetic Computation in New York.</p>
					</div>
				</div>
			</div>
		);
	}
}