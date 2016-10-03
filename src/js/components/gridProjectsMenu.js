import React, { Component } from 'react';
import _ from 'lodash';
import { projects } from '../data/projects';
import { Link } from 'react-router';

export default class GridProjectsMenu extends Component {

	renderGridItems() {
		return (
			_.map(projects, (project) => {
				return (
					<Link to={`${project.route}`} key={ project.title } className='grid-item-container'>
						<div>
							<p className="title-container">{ project.title }</p>
							<div className="grid-item-container-inner" id={ project.id }>
								<div className="hover-content-container">
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