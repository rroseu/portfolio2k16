import React, { Component } from 'react'; 

export default class Nav extends Component {
	render() {
		return (
			<div className="nav-container">
				<ul className="nav-links">
					<li className="nav-link">About</li>
					<li className="nav-link">/</li>
					<li className="nav-link">Work</li>
					<li className="nav-link">/</li>
					<li className="nav-link">Resume</li>
					<li className="nav-link">/</li>
					<li className="nav-link">Contact</li>
				</ul>
			</div>
		)
	}	
}