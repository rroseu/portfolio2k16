import React, { Component } from 'react';
import _ from 'lodash';
import { projects } from '../data/projects';

export default class Project extends Component {
	render() {
		var currentProject;
		
		if (this.props.params.url) {
			currentProject = projects[this.props.params.url];
		}

		return (
			<div className='app-container'>
				<div className='content-container'>
					<div className='page header'>
						<h2>{currentProject.title}</h2>
						<div className="page header-divider"></div>
					</div>
					<div className='hero-container'>
						<img src={currentProject.hero} />
					</div>
					<div className='description-container'>
						<p>{currentProject.description}</p>
						<span><a href={currentProject.link}>website</a></span>
					</div>
					<div className='relatedLinks-container'>
						Project related links go here
					</div>
				</div>
			</div>
		);
	}
}