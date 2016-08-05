import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div>
				<div className='page header'>
					<h2>Contact</h2>
					<div className="page header-divider"></div>
				</div>
				<div>
					<p>email: rachel[dot]ulgado[at]@gmail.com</p><br/>
					<p>twitter: <a href='http://www.twitter.com/rachelulgado' target='_blank'>@rachelulgado</a></p><br/>
					<p>linkedin: <a href='http://www.linkedin.com/in/rachelulgado
' target='_blank'>rachelulgado</a></p>
				</div>
			</div>
		);
	}
}