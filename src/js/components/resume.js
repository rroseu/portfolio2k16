import React, { Component } from 'react';

// redo this ! 

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
				<p className='emphasize'>M.S. Human Centered Design & Engineering</p>
				<p>University of Washington</p><br/>
				<p className='emphasize'>Student</p>
				<p>School for Poetic Computation</p><br/>
				<p className='emphasize'>B.S. Informatics (HCI Specialization)</p> 
				<p>University of California Irvine</p><br/>
				<p className='emphasize'>B.A. Anthropology</p>
				<p>University of California Irvine</p>
			</div>
		);
	}

	renderExperience() {
		return (
			<div className='content'>
				<h3>Experience</h3>
				<p className='emphasize'>Design Technologist Apprentice</p>
				<p>Junior, San Francisco, CA</p><br/>
				<p className='emphasize'>Creative Technologist in Residence</p>
				<p>Schema Design, Seattle, WA</p><br/>
				<p className='emphasize'>UX Design Graduate Intern</p>
				<p>Intel, Hillsboro, OR</p><br/>
				<p className='emphasize'>Graduate Researcher</p>
				<p>University of Washington, Seattle, WA</p><br/>
				<p className='emphasize'>UX Design Intern</p>
				<p>IBM, Costa Mesa, CA</p><br/>
			</div>
		);
	}

	renderTechnicalSkills() {
		return (
			<div className='content'>
				<h3>Technical Skills & Design Tools</h3>
				<p>HTML, CSS (Sass, Bourbon, Neat, Bootstrap), Javascript (JQuery, Node, React, Redux), Git, Webpack. <br/><br/> Java (Android, Processing), basic knowledge of openFrameworks, Arduino, & Unity. <br/><br/>Sketch 3, Illustrator, Photoshop, Balsamiq, Pixate, Cinema 4D.</p>
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