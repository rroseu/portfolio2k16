import React, { Component } from 'react';
import Nav from './nav';

export default class Contact extends Component {
	render() {
		return (
			<div className='app-container'>
				<div className='content-container'>
					<Nav />
					<div className='contact-container'>
						<p>email: rachel[dot]ulgado[at]@gmail.com</p><br/>
						<p>twitter: <a href='http://www.twitter.com/rachelulgado' target='_blank'>@rachelulgado</a></p><br/>
						<p>linkedin: <a href='http://www.linkedin.com/in/rachelulgado
' target='_blank'>rachelulgado</a></p>
					</div>
				</div>
			</div>
		);
	}
}