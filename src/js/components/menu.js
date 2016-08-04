import React, { Component } from 'react';

export default class Menu extends Component {
	render() {
		console.log(this.props.titles);
		return (
			<div className='projects-menu-container'>
				<ul>
					{
						this.props.titles.map(function (title) {
							return (
							 <li key={title}>
							 	<div>{title}</div>
							 </li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}