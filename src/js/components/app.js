import React, { Component } from 'react';
import Nav from './nav';
import { Link } from 'react-router';

export default class App extends Component {
	renderHeader() {
		// react-router dropped support for named routes
		// console.log(this.props.location.pathname);

		var headerName = this.props.location.pathname.replace(/^\/|\/$/g, '');
		// var upperCasedHeaderName = headerName.charAt(0).toUpperCase() + headerName.slice(1);

		return (
			<div className='header-container-outer'>
				<div className='page header' id={headerName}>
					<Link to='/'>
						<h2>Rachel Rose Ulgado</h2>
					</Link>
					<div className="page header-divider"></div>
				</div>
			</div>
		);
	}

	render() {
		var header;

		if (this.props.location.pathname !== '/') {
			header = this.renderHeader();
		}

		return (
			<div className='app-container-inner'>
				{ header }
				{this.props.children}
				<Nav currentPath={this.props.location.pathname.replace(/^\/|\/$/g, '')} />
			</div>
		);
	}
}