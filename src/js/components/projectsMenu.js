import React, { Component } from 'react';
import _ from 'lodash';
import { projects } from '../data/projects';
import { Link } from 'react-router';

export default class ProjectsMenu extends Component {
	render() {
		return (
			<div className='projects-menu-container'>
				<ul>
					{
						projects.map(function (project) {
							return (
								<li key={project.title}>
									<div className='title-container'>
										<Link to={`${project.route}`}>{project.title}</Link>
									</div>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}