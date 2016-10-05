import React, { Component } from 'react';

export default class Resume extends Component {
	renderDownloadButton() {
		return (
			<div className='resume-button-container'>
				<a href='https://dl.dropboxusercontent.com/u/4599418/resume2016.pdf' target='_blank'>
					<div className='button-container pdf-container'>
						<span className='button-text'>Download PDF</span>
					</div>
				</a>	
			</div>
		);
	}

	renderEducation() {
		return (
			<div className='content'>
				<h3>Education</h3>
				<div className='content-bullet'>
					<p className='emphasize'>M.S. Human Centered Design & Engineering</p>
					<p>University of Washington</p>
				</div>
				<div className='content-bullet'>
					<p className='emphasize'>Student</p>
					<p>School for Poetic Computation</p>
				</div>
				<div className='content-bullet'>
					<p className='emphasize'>B.S. Informatics (HCI Specialization)</p> 
					<p>University of California Irvine</p>
				</div>
				<div className='content-bullet'>
					<p className='emphasize'>B.A. Anthropology</p>
					<p>University of California Irvine</p>
				</div>
			</div>
		);
	}

	renderExperience() {
		return (
			<div className='content'>
				<h3>Experience</h3>
				<div className='content-bullet'>
					<p className='emphasize'>Design Technologist Apprentice</p>
					<p>Junior, San Francisco, CA</p>
				</div>
				<div className='content-bullet'>
					<p className='emphasize'>Creative Technologist in Residence</p>
					<p>Schema Design, Seattle, WA</p>
				</div>
				<div className='content-bullet'>
					<p className='emphasize'>UX Design Graduate Intern</p>
					<p>Intel, Hillsboro, OR</p>
				</div>
				<div className='content-bullet'>
					<p className='emphasize'>Graduate Researcher</p>
					<p>University of Washington, Seattle, WA</p>
				</div>
				<div className='content-bullet'>
					<p className='emphasize'>UX Design Intern</p>
					<p>IBM, Costa Mesa, CA</p>
				</div>
			</div>
		);
	}

	renderTechnicalSkills() {
		return (
			<div className='content'>
				<h3>Skills & Tools</h3>
				<div className='content-bullet'>
					<p className='emphasize'>Technical</p>
					<p>HTML, CSS (Sass, Bourbon, Neat, Bootstrap), Javascript (JQuery, Node, React, Redux), Git, Webpack. Java (Android, Processing), basic knowledge of openFrameworks, Arduino, & Unity.</p>
				</div>
				<div className='content-bullet'>
					<p className='emphasize'>Design Tools</p>
					<p>Sketch 3, Illustrator, Photoshop, Balsamiq, Pixate, Cinema 4D.</p>
				</div>
			</div>
		);
	}

	render() { 
		return (	
			<div className='resume-container-outer'>
				<div className='resume-container-inner'>
					<div className='resume-sections'>
						<div className='resume-section'>
							{this.renderEducation()}
						</div>
						<div className='resume-section'>
							{this.renderExperience()}
						</div>
						<div className='resume-section'>
							{this.renderTechnicalSkills()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}