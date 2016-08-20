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


	// not sure if I want to use this yet
	// renderBanner() {
	// 	return (
	// 		<div className='banner-container'>
	// 			<img className='banner-image' src={this.state.currentProject.banner} />
	// 		</div>
	// 	);
	// }

	renderHeader() {
		return (
			<div className='header-container-outer'>
				<div className='page header project' id='project'>
					<h2 className='project-title'>
						<Link to='/work'><img className='back' src='../../assets/nav/back-arrow.svg' /></Link>
						{this.state.currentProject.title}
					</h2>
					<div className="page header-divider"></div>
				</div>
			</div>
		);
	}

	renderDescription() {
		return (
			<div className='description-container project-content-container'>
				<h2 className='underline'>About</h2>
				<p>{this.state.currentProject.description}</p>
			</div>
		);
	}

	renderResponsibilities() {
		if (this.state.currentProject.responsibilities) {
			return (
				<div className='responsibilities-container project-content-container'>
					<h2 className='underline'>My role</h2>
					<p>{this.state.currentProject.responsibilities}</p>
				</div>
			);
		}
	}

	renderWebsite() {
		if (this.state.currentProject.link) {
			return (
				<div className='button-container-outer'>
					<a href={this.state.currentProject.link} target='_blank'>
						<div className='button-container'>
							<span className='button-text'>View project</span>
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

	// renderImages() {
	// 	if (this.state.currentProject.images) {
	// 		return (
	// 			_.map(this.state.currentProject.images, (image) => {
	// 				return (
	// 					<img key={image} src={image} />
	// 				);
	// 			})
	// 		);
	// 	}
	// }

	// -----

	renderRelatedLinks() {
		if (this.state.currentProject.relatedLinks && this.state.currentProject.relatedLinks.length !== 0) {
			return (
				<div className='project-links-container project-content-container-last'>
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
				<div className='tools-container project-content-container'>
					<h2 className='underline'>Tools</h2>
					<p>{this.state.currentProject.tools}</p>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='app-container-inner'>
				{this.renderHeader()}	
				<div className='project-container-outer'>
					<div className='project-container-inner' id={this.props.params.url}>
						<div className='project-info-container'>
							{this.renderWebsite()}
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
			</div>
		);
	}
}