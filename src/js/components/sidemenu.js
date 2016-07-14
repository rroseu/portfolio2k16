import React, { Component } from 'react';

export default class SideMenu extends Component {
	renderAbout() {
		return (
			<div className="section section-about">
				<h1>Rachel Rose Ulgado</h1>
				<h4 id="job-title">designer & developer</h4>
			</div>
		);
	}

	renderWork() {
		return (
			<div className="section section-work">
				<h3>Work</h3>
				<ul className="projects">
					<li className="project-title">Catching Tigers & Flies</li>
					<li>PocktVR</li>
					<li>The Memory Observatory</li>
					<li>Lunaites</li>
					<li>VidCoach</li>
					<li>Euphonious</li>
					<li>Galaxy Audio Visualization</li>
					<li>Series: Little Renders</li>
				</ul>
			</div>
		);
	}

	renderContact() {
		return (
			<div className="section section-contact">
				<h3>Contact</h3>
				<ul>
					<li>rachel.ulgado@gmail.com</li>
					<li>twitter github</li>
				</ul>
			</div>		
		);
	}

	render() {
		return (
			<div className="sidemenu">
				{this.renderAbout()}
				{this.renderWork()}
				{this.renderContact()}
			</div>
		);
	}
}