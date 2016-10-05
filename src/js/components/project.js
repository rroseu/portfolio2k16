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
				currentProject: projects[this.props.params.url],
				loadingImages: true
			}
		}
	}

	renderDescription() {
		return (
			<div className='description-container project-content-container first'>
				<h1 className='project-title'>{ this.state.currentProject.title }</h1>
				<p>{this.state.currentProject.description}</p>
				{this.renderWebsiteButton()}
			</div>
		);
	}

	renderResponsibilities() {
		if (this.state.currentProject.responsibilities) {
			return (
				<div className='responsibilities-container project-content-container'>
					<h2>My role</h2>
					<p>{this.state.currentProject.responsibilities}</p>
				</div>
			);
		}
	}

	renderWebsiteButton() {
		if (this.state.currentProject.link) {
			return (
				<div className='button-container-outer'>
					<br/>
					<a href={this.state.currentProject.link} target='_blank'>
						<div className='button-container'>
							<span>View project</span>
						</div>
					</a>	
				</div>
			);
		}
	} 

	createIframeMarkup() {
		return {
			__html: this.state.currentProject.video
		}
	}

	renderVideo() {
		if (this.state.currentProject.video) {
			return (
				<div dangerouslySetInnerHTML={this.createIframeMarkup()} />
			);
		}
	}

	// image rendering -----

	handleImageLoad() {
		const galleryElement = this.refs.gallery;
		this.setState({
			loading: !this.imagesLoaded(galleryElement)
		});
	}

	renderImage(url) {
		return (
			<img key={url} src={url} onLoad={this.handleImageLoad.bind(this)}/>
		);
	}

	imagesLoaded(element) {
		const imageElements = element.querySelectorAll('img');
		for (const image of imageElements) {
			if (!image.complete) {
				return false;
			}
		}
		return true;
	}

	renderImages() {
		if (this.state.currentProject.images) {
			return (
				<div className='images-container' ref='gallery'>
					{ this.state.currentProject.images.map(imageUrl => this.renderImage(imageUrl)) }
				</div>
			); 
		} 
	}

	renderRelatedLinks() {
		if (this.state.currentProject.relatedLinks && this.state.currentProject.relatedLinks.length !== 0) {
			return (
				<div className='project-links-container project-content-container'>
					<h2>Related Links</h2>
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
				<div className='tools-container project-content-container'>
					<h2>Tools</h2>
					<p>{this.state.currentProject.tools}</p>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='project-container-outer'>
				<div className='project-container-inner' id={this.props.params.url}>
					<div className='project-info-container'>
						{this.renderDescription()}
						{this.renderResponsibilities()}
						{this.renderTools()}
						{this.renderRelatedLinks()}
					</div>
					<div className='project-images-links-container'>
						{this.renderImages()}
						{this.renderVideo()}
					</div>
				</div>
			</div>
		);
	}
}