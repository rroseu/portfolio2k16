import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div className='about-container-outer'>
				<div className='about-container-inner'>
					<div className='about-left'>
						<h2>Hi, I'm Rachel.</h2>
						<h3 className='about-label'>I'm a creative technologist.</h3>
					</div>
					<div className='about-right'>
						<p>My background is in human–computer interaction, human-centered design, and qualitative UX research. I experiment with code and interactive media to imagine new ways of engaging with the world.<br /><br />Previously I worked at <a className="job-link" href="http://junior.io" target="_blank">Junior</a>, <a className="job-link" href="http://www.schemadesign.com" target="_blank">Schema Design</a>, <a className="job-link" href="http://www.intel.com" target="_blank">Intel</a>, and <a className="job-link" href="http://wwww.ibm.com" target="_blank">IBM</a>, and was a student at the <a className="job-link" href="http://www.sfpc.io" target="_blank">School for Poetic Computation</a> in New York.<br/><br/><a className='email-link' href='mailto:rachel.ulgado@gmail.com'>Feel free to drop me a line.</a><br/></p>
					</div>
				</div>
			</div>
		);
	}
}