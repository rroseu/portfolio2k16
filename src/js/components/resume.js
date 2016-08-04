import React, { Component } from 'react';

// REDO THIS SOON YOU LAZY SACK OF SHIT
export default class Resume extends Component {
	renderEducation() {
		return (
			<div className='section-container'>
				<div className='label-container'>
					<h3>Education</h3>
				</div>
				<div className='content'>
					<p className='emphasize'>M.S. Human Centered Design & Engineering</p>
					<p>University of Washington</p>
					<p>2013 - 2015</p><br/>
					<p className='emphasize'>Student</p>
					<p>School for Poetic Computation</p>
					<p>Fall 2014</p><br/>
					<p className='emphasize'>B.S. Informatics (Human–Computer Interaction Specialization)</p>
					<p className='emphasize'>B.A. Anthropology</p>
					<p>University of California Irvine</p>
					<p>2008 - 2013</p>
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
					<p className='emphasize'>Design Technologist Apprentice</p>
					<p>Junior, San Francisco, CA</p>
					<p>January - May 2016</p><br/>
					<p className='emphasize'>Creative Technologist in Residence</p>
					<p>Schema Design</p>
					<p>April - October 2015</p><br/>
					<p className='emphasize'>UX Design Graduate Intern</p>
					<p>Intel</p>
					<p>June - September 2014</p><br/>
					<p className='emphasize'>Graduate Researcher</p>
					<p>University of Washington</p>
					<p>September 2013 - June 2014</p><br/>
					<p className='emphasize'>UX Design Intern</p>
					<p>IBM</p>
					<p>July 2012 - June 2013</p><br/>
					<p className='emphasize'>Undergraduate Researcher</p>
					<p>University of California Irvine</p>
					<p>June 2011 - March 2013</p>
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
					<p>Fox, S., Ulgado, R. R., & Rosner, D. (2015, February). <a className='publication-title' href='http://dl.acm.org/citation.cfm?id=2675223' target='_blank'> Hacking Culture, Not Devices: Access and Recognition in Feminist Hackerspaces.</a> In Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work & Social Computing (pp. 56-68). ACM.</p><br />
					<p>Ulgado, R. R. <a className='publication-title' href='https://github.com/allisonburtch/Critical-Theory-of-Technology/blob/master/zine.pdf' target="_blank">“On Imaginary Real Utopia.”</a> Critical Theory of Technology Zine by The School for Poetic Computation, Fall 2014.</p><br />
					<p>Ulgado, R. R., Nguyen, K., Custodio, V. E., Waterhouse, A., Weiner, R., & Hayes, G. (2013, June). <a className='publication-title' href='http://dl.acm.org/citation.cfm?id=2485870' target='_blank'> VidCoach: A mobile video modeling system for youth with special needs.</a> In Proceedings of the 12th International Conference on Interaction Design and Children (pp. 581-584). ACM.</p><br/>
					<p>Hayes, G.R., Custodio, V.E., Haimson, O.L., Nguyen, K., Ringland, K.E., Ulgado, R.R., Waterhouse, A., and Weiner, R. <a className='publication-title' href='http://content.iospress.com/articles/journal-of-vocational-rehabilitation/jvr775' target='_blank'>Mobile video modeling for employment interviews for individuals with autism.</a> Journal of Vocational Rehabilitation.</p><br/>
					<p>Nguyen, K., Custodio, V.E., Ulgado, R.R., Weiner, R., Waterhouse, A., O’Neal, L., and Hayes, G.R. <a className='publication-title' href='https://www.researchgate.net/publication/268143717_Evaluation_of_the_Use_of_Mobile_Video_Modeling_for_Job_Interviews' target='_blank'>Evaluation of the Use of Mobile Video Modeling for Job Interviews.</a> 2014 International Meeting for Autism Research.</p>
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
					<p className='emphasize'>CODAME Art + Tech Festival, San Francisco, CA.</p>
					<p>Installation Artist</p><br/>
					<p className='emphasize'>Socially Engaged Arts Practice in HCI, CHI 2014, Toronto.</p>  
					<p>Workshop Participant</p><br/>
					<p className='emphasize'>Eyeo Festival, 2013.</p>
					<p>Student Volunteer</p><br/> 
					<p className='emphasize'>Designing for Children with Special Needs in Multiple Settings.
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