import React, { Component } from 'react';

export default class Work extends Component {
	render() {
		return (
			<div>
				<div className='projects-container'>
					{this.props.children}
				</div>
			</div>
		);
	}
}