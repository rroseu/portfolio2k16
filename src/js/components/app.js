import React, { Component } from 'react';
import Nav from './nav';

export default class App extends Component {
	renderHeader() {
		// this seems a bit overcomplicated for what it is trying to accomplish.
		// but apparently react-router dropped support for named routes
		// console.log(this.props.location.pathname);

		var headerName = this.props.location.pathname.replace(/^\/|\/$/g, '');
		var upperCasedHeaderName = headerName.charAt(0).toUpperCase() + headerName.slice(1);

		return (
			<div className='header-container-outer'>
				<div className='page header' id={headerName}>
					<h2>{ upperCasedHeaderName }</h2>
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