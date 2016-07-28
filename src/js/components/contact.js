import React, { Component } from 'react';
import Nav from './nav';

export default class Contact extends Component {
	render() {
		return (
			<div className='app-container'>
				<Nav />
				<div className='content-container'>
					<div className='contact-container'>
						<p>email: rachel[dot]ulgado[at]@gmail.com</p>
						<p>twitter: <a href='http://www.twitter.com/rachelulgado' target='_blank'>@rachelulgado</a></p>
						<p>linkedin: <a href='http://www.linkedin.com/in/rachelulgado
' target='_blank'>rachelulgado</a></p>
					</div>
				</div>
			</div>
		);
	}
}