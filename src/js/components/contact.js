import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div>
				<div className='page header'>
					<h2>Contact</h2>
					<div className="page header-divider"></div>
				</div>
				<div className='contact-container'>
					<ul>
						<li>
							<div className='title-container'>
								<a href='mailto:rachel.ulgado@gmail.com'>Email</a>
							</div>
						</li>
						<li>
							<div className='title-container'>
								<a href='http://www.linkedin.com/in/rachelulgado' target='_blank'>LinkedIn</a>
							</div>
						</li>
						<li>
							<div className='title-container'>
								<a href='http://github.com/rroseu' target='_blank'>GitHub</a>
							</div>
						</li>
						<li>
							<div className='title-container'>
								<a href='http://www.twitter.com/rachelulgado' target='_blank'>Twitter</a>
							</div>
						</li>
						<li>
							<div className='title-container'>
								<a href='http://www.behance.net/rachelulgado' target='_blank'>Behance</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}