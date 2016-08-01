import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideMenu extends Component {
	renderWork() {
		return (
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
		);
	}

	render() {
		return (
			<div className="sidemenu">
				{this.renderWork()}
			</div>
		);
	}
}