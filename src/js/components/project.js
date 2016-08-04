import React, { Component } from 'react';

export default class Project extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props) {
			console.log('[PROPS: ]', this.props);
		}
		return (
			<div className='project-container'>
				<h2>{this.props.project.title}</h2>
				<div className='hero-container'>
					<img src={this.props.project.hero} />
				</div>
				<div className='description-container'>
					<p>{this.props.project.description}</p>
					<span><a href={this.props.project.link} target='_blank'>website</a></span>
				</div>
				<div className='relatedLinks-container'>
				</div>
			</div>
		);
	}
}