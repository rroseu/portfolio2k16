import React, { Component } from 'react';
import _ from 'lodash';
import { projects } from '../data/projects';

export default class Project extends Component {
	constructor(props) {
		super(props);
		var currentProject;

		if (this.props.params.url) {
			this.state = {
				currentProject: projects[this.props.params.url]
			}
		}
	}

	renderDescription() {
		return (
			<div className='description-container'>
				<h2>Description</h2>
				<p>{this.state.currentProject.description}</p>
			</div>
		);
	}

	renderResponsibilities() {
		return (
			<div className='responsibilities-container'>
				<h2>My role</h2>
				<p>{this.state.currentProject.responsibilities}</p>
			</div>
		);
	}

	renderWebsite() {
		if (this.state.currentProject.link) {
			return (
				<div className='website-container'>
					<a href={this.state.currentProject.link}>website</a>
				</div>
			);
		}
	} 

	renderImages() {
		return (
			<img src={this.state.currentProject.hero} />
		);
	}

	renderRelatedLinks() {
		if (this.state.currentProject.relatedLinks.length !== 0) {
			return (
				<div className='project-links-container'>
					<h2>Related Links</h2>
				</div>
			);
		}
	}

	renderTools() {
		if (this.state.currentProject.tools) {
			return (
				<div className='tools-container'>
					<h2>Tools</h2>
					<ul>
					{
						_.map(this.state.currentProject.tools, (tool) => {
							return <li key={tool}>{tool}</li>
						})
					}
					</ul>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='app-container'>
				<div className='content-container'>
					<div className='page header'>
						<h2>{this.state.currentProject.title}</h2>
						<div className="page header-divider"></div>
					</div>
					<div className='project-container'>
						<div className='project-info-container'>
							{this.renderDescription()}
							{this.renderResponsibilities()}
							{this.renderWebsite()}
						</div>
						<div className='project-images-links-container'>
							{this.renderImages()}
							{this.renderRelatedLinks()}
							{this.renderTools()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}