import React, { Component } from 'react';
import Nav from './nav';
import { Link } from 'react-router';

export default class App extends Component {
	renderHeader() {
		return (
			<div className='header-container-outer'>
				<div className='page header'>
					<Link to='/'>
						<h2>Rachel Rose Ulgado</h2>
						<div className="page header-divider"></div>
					</Link>
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