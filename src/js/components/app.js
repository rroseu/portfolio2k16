import React, { Component } from 'react';
import Nav from './nav';

export default class App extends Component {
	renderHeader() {
		// this seems a bit overcomplicated for what it is trying to accomplish.
		// but apparently react-router dropped support for named routes

		var headerName = this.props.location.pathname.replace(/^\/|\/$/g, '');
		headerName = headerName.charAt(0).toUpperCase() + headerName.slice(1);

		return (
			<div className='page header'>
				<h2>{ headerName }</h2>
				<div className="page header-divider"></div>
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
				<div className='content-container'>
					{ header }
					{this.props.children}
					<Nav />
				</div>
			</div>
		);
	}
}