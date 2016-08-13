import React, { Component } from 'react';

export default class Work extends Component {
	render() {
		return (
			<div className='projects-menu-container'>
				{this.props.children}
			</div>
		);
	}
}