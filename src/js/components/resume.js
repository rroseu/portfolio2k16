import React, { Component } from 'react';

export default class Resume extends Component {
	renderEducation() {
		return (
			<div className='content'>
				<h2>Education</h2>
				<p className='emphasize'>M.S. Human Centered Design & Engineering</p>
				<p>University of Washington</p><br/>
				<p className='emphasize'>Student</p>
				<p>School for Poetic Computation</p><br/>
				<p className='emphasize'>B.S. Informatics (Human–Computer Interaction),</p>
				<p className='emphasize'>B.A. Anthropology</p>
				<p>University of California Irvine</p>
			</div>
		);
	}

	renderExperience() {
		return (
			<div className='content'>
				<h2>Experience</h2>
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
				<h2>Technical Skills</h2>
				<p>HTML, CSS (Sass), Javascript (JQuery, Node, React), Git. Java (Android, Processing), basic knowledge of openFrameworks, Arduino, & Unity.</p>
			</div>
		);
	}

	renderTools() {
		return (
			<div className='section-container'>
				<div className='label-container'>
					<h2>Design Tools</h2>
				</div>
				<div className='content'>
					<p>Sketch 3, Illustrator, Photoshop, Balsamiq, Pixate, Cinema 4D</p>
				</div>
			</div>
		);
	}	

	render() { 
		return (
			<div>
				<div className='page header'>
					<h2>Resume</h2>
					<div className="page header-divider"></div>
				</div>
				<div className='resume'>
					<div className='left'>
						{this.renderEducation()}
						{this.renderTechnicalSkills()}
					</div>
					<div className='right'>
						{this.renderExperience()}
					</div>
				</div>
			</div>
		);
	}
}