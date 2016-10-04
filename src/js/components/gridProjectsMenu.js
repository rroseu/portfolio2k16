import React, { Component } from 'react';
import _ from 'lodash';
import { projects } from '../data/projects';
import { Link } from 'react-router';

export default class GridProjectsMenu extends Component {

	renderGridItems() {
		return (
			_.map(projects, (project) => {
				return (
					<Link to={`${project.route}`} key={ project.title } className='grid-item-link'>
						<div className="grid-item-container">
							<p className="title-container">{ project.title }</p>
							<div className="grid-item-container-content" id={project.id}>
								<div className="grid-item-container-hover">
									{ project.caption }
								</div>
							</div>
						</div>
					</Link>
				);
			})
		);
	}

	render() {
		return (
			<div className='grid-row-items'>
				{ this.renderGridItems() }
			</div>
		);
	}
}