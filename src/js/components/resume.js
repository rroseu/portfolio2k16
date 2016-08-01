import React, { Component } from 'react';
import Nav from './nav';

// REDO THIS SOON YOU LAZY SACK OF SHIT
export default class Resume extends Component {
	renderEducation() {
		return (
			<div className='section-container'>
				<div className='label-container'>
					<h3>Education</h3>
				</div>
				<div className='content'>
					<p>M.S. Human Centered Design & Engineering</p>
					<p>University of Washington</p><br/>
					<p>Student</p>
					<p>School for Poetic Computation</p><br/>
					<p>B.S. Informatics (Human–Computer Interaction Specialization)</p>
					<p>University of California Irvine</p><br/>
					<p>B.A. Anthropology</p>
					<p>University of California Irvine</p>
				</div>
			</div>
		);
	}

	renderExperience() {
		return (
			<div className='section-container'> 
				<div className='label-container'>
					<h3>Experience</h3>
				</div>
				<div className='content'>
					<p>Design Technologist Apprentice</p>
					<p>Junior</p><br/>
					<p>Creative Technologist in Residence</p>
					<p>Schema Design</p><br/>
					<p>UX Design Graduate Intern</p>
					<p>Intel</p><br/>
					<p>Graduate Researcher</p>
					<p>University of Washington</p><br/>
					<p>UX Design Intern</p>
					<p>IBM</p><br/>
					<p>Undergraduate Researcher</p>
					<p>University of California Irvine</p>
				</div>
			</div>
		);
	}

	renderTechnicalSkills() {
		return (
			<div className='section-container'>
				<div className='label-container'>
					<h3>Technical Skills</h3>
				</div>
				<div className='content'>
					<p>
						HTML, CSS (Sass), Javascript (JQuery, Node, React), Java (Android, Processing), Git.
					</p>
					<p>Basic knowledge of openFrameworks, Arduino, & Unity.</p>
				</div>
			</div>
		);
	}

	renderTools() {
		return (
			<div className='section-container'>
				<div className='label-container'>
					<h3>Design Tools</h3>
				</div>
				<div className='content'>
					<p>Sketch 3, Illustrator, Photoshop, Balsamiq, Pixate, Cinema 4D</p>
				</div>
			</div>
		);
	}	

	renderPublications() {
		return (
			<div className='section-container'>
				<div className='label-container'>
					<h3>Publications</h3>
				</div>
				<div className='content'>
					<p>Fox, S., Ulgado, R. R., & Rosner, D. (2015, February). Hacking Culture, Not Devices: Access and Recognition in Feminist Hackerspaces. In Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work & Social Computing (pp. 56-68). ACM.</p><br/>
					<p>Ulgado, R. R., Nguyen, K., Custodio, V. E., Waterhouse, A., Weiner, R., & Hayes, G. (2013, June). VidCoach: A mobile video modeling system for youth with special needs. In Proceedings of the 12th International Conference on Interaction Design and Children (pp. 581-584). ACM.</p><br/>
					<p>Hayes, G.R., Custodio, V.E., Haimson, O.L., Nguyen, K., Ringland, K.E., Ulgado, R.R., Waterhouse, A., and Weiner, R. Mobile video modeling for employment interviews for individuals with autism. Journal of Vocational Rehabilitation.</p><br/>
					<p>Nguyen, K., Custodio, V.E., Ulgado, R.R., Weiner, R., Waterhouse, A., O’Neal, L., and Hayes, G.R. Evaluation of the Use of Mobile Video Modeling for Job Interviews. 2014 International Meeting for Autism Research.</p><br/>
					<p>Ulgado, R. R. “On Imaginary Real Utopia.” Critical Theory of Technology Zine by The School for Poetic Computation, Fall 2014.</p>
				</div>
			</div>
		);
	}

	renderEvents() {
		return (
			<div className='section-container'>
				<div className='label-container'>
					<h3>Conferences, Festivals, Workshops</h3>
				</div>
				<div className='content'>
					<p>CODAME Art + Tech Festival, San Francisco, CA.</p>
					<p>Installation Artist</p><br/>
					<p>Workshop on Socially Engaged Arts Practice in HCI, CHI 2014, Toronto.</p>  
					<p>Workshop Participant</p><br/>
					<p>Eyeo Festival, 2013</p>
					<p>Student Volunteer</p><br/> 
					<p>Workshop on Designing for Children with Special Needs in Multiple Settings
	IDC 2013</p>  
					<p>Workshop Participant</p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className='app-container'>
				<div className='content-container'>
					<Nav />
					<div className='resume-container'>
						{this.renderEducation()}
						{this.renderExperience()}
						{this.renderTechnicalSkills()}
						{this.renderTools()}
						{this.renderPublications()}
						{this.renderEvents()}
					</div>
				</div>
			</div>
		);
	}
}