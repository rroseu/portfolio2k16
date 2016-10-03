import React, { Component } from 'react';

export default class Work extends Component {
	// render() {
	// 	return (
	// 		<div className='projects-menu-container-outer'>
	// 			<div className='projects-menu-container-inner'>
	// 				{this.props.children}
	// 			</div>
	// 		</div>
	// 	);
	// }

	render() {
		return (
			<div className='grid-projects-container-outer'>
				<div className='grid-projects-container-inner'>
					{this.props.children}
				</div>
			</div>
		);
	}
}