import React, { Component } from 'react';
import Nav from './nav';

export default class Work extends Component {
	renderSideMenu() {
		return (
			<div className='sidemenu'>
				<div className="section section-work">
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
			</div>
		);
	}

	render() {
		return (
			<div className='app-container'>
				<div className='content-container'>
					<Nav />
					{this.renderSideMenu()}
					<div className='project-container'>
						hello a project will go here
					</div>
				</div>
			</div>
		);
	}
}