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
					<ul className='contact-links'>
						<li>
							<div className='contact-title-container'>
								<div className='link-container'>
									<a href='mailto:rachel.ulgado@gmail.com'>Email</a>
								</div>
								<div className='icon-container'>
									<img className='email icon' src='../../assets/social/email.svg' />
								</div>
							</div>
						</li>
						<li>
							<div className='contact-title-container'>
								<div className='link-container'>
									<a href='http://www.linkedin.com/in/rachelulgado' target='_blank'>LinkedIn</a>
								</div>
								<div className='icon-container'>
									<img className='linkedin icon' src='../../assets/social/linkedin.svg' />
								</div>
							</div>
						</li>
						<li>
							<div className='contact-title-container'>
								<div className='link-container'>
									<a href='http://www.twitter.com/rachelulgado' target='_blank'>Twitter</a>
								</div>
								<div className='icon-container'>
									<img className='twitter icon' src='../../assets/social/twitter.svg' />
								</div>
							</div>
						</li>
						<li>
							<div className='contact-title-container'>
								<div className='link-container'>
									<a href='http://github.com/rroseu' target='_blank'>GitHub</a>
								</div>
								<div className='icon-container'>
									<img className='github icon' src='../../assets/social/github.svg' />
								</div>
							</div>
						</li>
						<li>
							<div className='contact-title-container'>
								<div className='link-container'>
									<a href='http://www.behance.net/rachelulgado' target='_blank'>Behance</a>
								</div>
								<div className='icon-container'>
									<img className='behance icon' src='../../assets/social/behance.svg' />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}