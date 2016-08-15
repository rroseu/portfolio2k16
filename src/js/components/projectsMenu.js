import React, { Component } from 'react';
import _ from 'lodash';
import { projects } from '../data/projects';
import { Link } from 'react-router';

export default class ProjectsMenu extends Component {
	render() {
		return (
			<ul>
				{
					_.map(projects, (project) => {
						return (
							<li key={project.title}>
								<Link to={`${project.route}`}>
									<div className='title-container'>
										<span className='outer'>
											<span className='inner'>{project.title}</span>
										</span>
									</div>
								</Link>
							</li>
						);
					})
				}
			</ul>
		);
	}
}