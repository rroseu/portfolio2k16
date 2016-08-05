import React, { Component } from 'react';
import Project from './project';
import { projects } from '../data/projects';

export default class Work extends Component {
	renderMenu() {
		const menuTitles = projects.map(function (project) {
			return project.title;
		});

		return (
			<div className='projects-menu-container'>
				<ul>
					{
						menuTitles.map(function (title) {
							return (
							 <li key={title}>
							 	<div className='title-container'>{title}</div>
							 </li>
							);
						})
					}
				</ul>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div className='page header'>
					<h2>Work</h2>
					<div className="page header-divider"></div>
				</div>
				{this.renderMenu()}
			</div>
		);
	}
}