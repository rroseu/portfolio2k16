import React, { Component } from 'react'; 
import { Link } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<div className='nav-container'>
				<ul className='nav-links'>
					<Link to='/about' className='nav-content nav-link'>About</Link>
					<li className='nav-content divider'>/</li>
					<Link to='/work' className='nav-content nav-link'>Work</Link>
					<li className='nav-content divider'>/</li>
					<Link to='/resume' className='nav-content nav-link'>Resume</Link>
					<li className='nav-content divider'>/</li>
					<Link to='/contact' className='nav-content nav-link'>Contact</Link>
				</ul>
			</div>
		)
	}	
}