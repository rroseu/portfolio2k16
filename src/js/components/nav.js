import React, { Component } from 'react'; 
import { Link } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<div className='nav-container'>
				<ul className='nav-links'>
					<Link to='/about' className='nav-link'>About</Link>
					<li className='nav-link nav-divider'>/</li>
					<Link to='/work' className='nav-link'>Work</Link>
					<li className='nav-link nav-divider'>/</li>
					<Link to='/resume' className='nav-link'>Resume</Link>
					<li className='nav-link nav-divider'>/</li>
					<Link to='/contact' className='nav-link'>Contact</Link>
				</ul>
			</div>
		)
	}	
}