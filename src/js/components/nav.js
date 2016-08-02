import React, { Component } from 'react'; 
import { Link } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<div className='nav-container'>
				<div className='nav-inner-container'>
					<ul className='nav-links'>
						<Link to='/about' activeClassName='nav-link-active' className='nav-content nav-link'>about</Link>
						<li className='nav-content divider'>/</li>
						<Link to='/work' activeClassName='nav-link-active' className='nav-content nav-link'>work</Link>
						<li className='nav-content divider'>/</li>
						<Link to='/resume' activeClassName='nav-link-active' className='nav-content nav-link'>resume</Link>
						<li className='nav-content divider'>/</li>
						<Link to='/contact' activeClassName='nav-link-active' className='nav-content nav-link'>contact</Link>
					</ul>
				</div>
			</div>
		)
	}	
}