import React, { Component } from 'react';

export default class Resume extends Component {
	renderEducation() {
		return (
			<div className='content'>
				<h3 className='underline'>Education</h3>
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
				<h3 className='underline'>Experience</h3>
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
				<h3 className='underline'>Technical Skills</h3>
				<p>HTML, CSS (Sass), Javascript (JQuery, Node, React), Git. Java (Android, Processing), basic knowledge of openFrameworks, Arduino, & Unity.</p>
			</div>
		);
	}

	renderTools() {
		return (
			<div className='content'>
				<h3 className='underline'>Design Tools</h3>
				<p>Sketch 3, Illustrator, Photoshop, Balsamiq, Pixate, Cinema 4D</p>
			</div>
		);
	}	

	render() { 
		return (
			<div className='resume-outer-container'>
				<a href='https://dl.dropboxusercontent.com/u/4599418/resume2016.pdf' target='_blank'>
					<div className='button-container pdf-container'>
						<span className='button-text'>download .pdf</span>
					</div>
				</a>	
				<div className='resume-container'>
					<div className='left'>
						{this.renderEducation()}
					</div>
					<div className='middle'>
						{this.renderExperience()}
					</div>
					<div className='right'>
						{this.renderTechnicalSkills()}
						{this.renderTools()}
					</div>
				</div>
			</div>
		);
	}
}