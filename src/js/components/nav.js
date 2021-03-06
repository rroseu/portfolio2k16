import React, { Component } from 'react'; 
import { Link } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<div className='nav-container-outer'>
				<div className='nav-container-inner' id={this.props.currentPath}>
					<div className='ul-container'>
						<ul className='nav-links'>
							<Link to='/about' activeClassName='nav-link-active' className='nav-link'>ABOUT</Link>
							<li className='nav-divider'></li>
							<Link to='/work' activeClassName='nav-link-active' className='nav-link'>WORK</Link>
							<li className='nav-divider'></li>
							<Link to='/resume' activeClassName='nav-link-active' className='nav-link'>RESUME</Link>
						</ul>
					</div>
				</div>
			</div>
		)
	}	
}