import React, { Component } from 'react';
import Project from './project';
import Menu from './menu';
import { projects } from '../data/projects';

export default class Work extends Component {
	renderMenu() {
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

	// render() {
	// 	return (
	// 		<div className='app-container'>
	// 			<div className='content-container'>
	// 				<Nav />
	// 				{this.renderSideMenu()}
	// 				<div className='project-container'>
	// 					{
	// 						projects.map(function (project) {
	// 							return (
	// 								<Project key={project.title} project={project} />
	// 							);
	// 						})
	// 					}
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }
	render() {
		const menuTitles = projects.map(function (project) {
			return project.title;
		});

		return (
			<div className='app-container'>
				<div className='content-container'>
					<Menu titles={menuTitles} />
				</div>
			</div>
		);
	}
}