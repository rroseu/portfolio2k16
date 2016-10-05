import React, { Component } from 'react';
import Nav from './nav';
import { Link } from 'react-router';

export default class App extends Component {
	renderHeader() {
		return (
			<div className='header-container-outer'>
				<div className='page header'>
					<div className='header-left'>
						<Link to='/'>
							<h2>Rachel Rose Ulgado</h2>
							<div className="page header-divider"></div>
						</Link>
					</div>
					<div className='header-right'>
						<ul className='nav-links'>
							<Link to='about' activeClassName='nav-link-active' className='nav-link'>ABOUT</Link>
							<li className='nav-divider'></li>
							<Link to='work' activeClassName='nav-link-active' className='nav-link'>WORK</Link>
							<li className='nav-divider'></li>
							<Link to='resume' activeClassName='nav-link-active' className='nav-link'>RESUME</Link>
							</ul>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className='app-container-inner'>
				{ this.renderHeader() }
				{this.props.children}
				<Nav currentPath={this.props.location.pathname.replace(/^\/|\/$/g, '')} />
			</div>
		);
	}
}