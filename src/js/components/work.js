import React, { Component } from 'react';
import Nav from './nav';
import { projects } from '../data/projects';

export default class Work extends Component {
	renderSideMenu() {
		return (
			<div className='sidemenu'>
				<div className="section section-work">
					<ul className="projects">
						{
							projects.map(function (project) {
								return (
									<li key={project.title}>{project.title}</li>
								);
							})
						}
					</ul>
				</div>
			</div>
		);
	}

	render() {
		console.log(projects);
		return (
			<div className='app-container'>
				<div className='content-container'>
					<Nav />
					{this.renderSideMenu()}
					<div className='project-container'>
						{ projects[1].title }
					</div>
				</div>
			</div>
		);
	}
}