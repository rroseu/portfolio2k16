import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router'
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
				<h2 className='underline'>About</h2>
				<p>{this.state.currentProject.description}</p>
			</div>
		);
	}

	renderResponsibilities() {
		if (this.state.currentProject.responsibilities) {
			return (
				<div className='responsibilities-container'>
					<h2 className='underline'>My role</h2>
					<p>{this.state.currentProject.responsibilities}</p>
				</div>
			);
		}
	}

	renderWebsite() {
		if (this.state.currentProject.link) {
			return (
				<div className='test-container'>
					<h2>
					<a href={this.state.currentProject.link} target='_blank'>
						<div className='website-container'>
							<h2>Launch website<img className='forward' src='../../assets/nav/forward-arrow.svg' /></h2>
						</div>
					</a>	
					</h2>
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
		if (this.state.currentProject.relatedLinks && this.state.currentProject.relatedLinks.length !== 0) {
			return (
				<div className='project-links-container'>
					<h2 className='underline'>Related Links</h2>
					<ul>
					{
						_.map(this.state.currentProject.relatedLinks, (link) => {
							return (
								<li key={link.from}>
									<a href={link.link} target='_blank'>{link.from}</a>
								</li>
							);
						})
					}
					</ul>
				</div>
			);
		}
	}

	renderTools() {
		if (this.state.currentProject.tools) {
			return (
				<div className='tools-container'>
					<h2 className='underline'>Tools</h2>
					<p>{this.state.currentProject.tools}</p>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='app-container'>
				<div className='page header'>
					<h2 className='project-title'>
						<Link to='/work'><img className='back' src='../../assets/nav/back-arrow.svg' /></Link>
						{this.state.currentProject.title}
					</h2>
					<div className="page header-divider"></div>
				</div>
				<div className='content-container'>
					<div className='project-container'>
						<div className='project-info-container'>
							{this.renderDescription()}
							{this.renderResponsibilities()}
							{this.renderTools()}
							{this.renderRelatedLinks()}		
						</div>
						<div className='project-images-links-container'>
							{this.renderImages()}
							{this.renderWebsite()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}