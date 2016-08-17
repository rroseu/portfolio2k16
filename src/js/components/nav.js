import React, { Component } from 'react'; 
import { Link } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<div className='nav-container-outer'>
				<div className='nav-container-inner'>
					<ul className='nav-links'>
						<Link to='about' activeClassName='nav-link-active' className='nav-link'>About</Link>
						<li className='nav-divider'>/</li>
						<Link to='work' activeClassName='nav-link-active' className='nav-link'>Work</Link>
						<li className='nav-divider'>/</li>
						<Link to='resume' activeClassName='nav-link-active' className='nav-link'>Resume</Link>
						<li className='nav-divider'>/</li>
						<Link to='contact' activeClassName='nav-link-active' className='nav-link'>Contact</Link>
					</ul>
				</div>
			</div>
		)
	}	
}