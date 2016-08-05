import React, { Component } from 'react';
import { projects } from '../data/projects';

export default class Project extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props) {
			console.log('[PROPS: ]', this.props);
		}
		console.log('Projects: ', projects);
		console.log('Params: ', this.props.params.project);

		return (
			<div className='project-container'>
				<h2>Project title goes here</h2>
				<div className='hero-container'>
					Project hero image goes here
				</div>
				<div className='description-container'>
					<p>Project description goes here</p>
					<span><a href='<Project/website/link/goes/here>' target='_blank'>website</a></span>
				</div>
				<div className='relatedLinks-container'>
					Project related links go here
				</div>
			</div>
		);
	}
}