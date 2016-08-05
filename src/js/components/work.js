import React, { Component } from 'react';

export default class Work extends Component {
	render() {
		return (
			<div>
				<div className='page header'>
					<h2>Work</h2>
					<div className="page header-divider"></div>
				</div>
				<div className='projects-container'>
					{this.props.children}
				</div>
			</div>
		);
	}
}