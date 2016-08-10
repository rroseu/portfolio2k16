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
						_.map(projects, (project) => {
							return (
								<li key={project.title}>
									<div className='title-container'>
										<span className='outer'>
											<Link to={`${project.route}`}><span className='inner'>{project.title}</span></Link>
										</span>
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