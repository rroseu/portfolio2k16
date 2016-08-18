import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div className='contact-container-outer'>
				<div className='contact-container-inner'>
					<ul className='contact-links'>
						<li>
							<a href='mailto:rachel.ulgado@gmail.com'>
								<div className='contact-title-container'>
									<div className='link-container'>
										<span>Email</span>
									</div>
									<div className='icon-container'>
										<img className='email icon' src='../../assets/social/email.svg' />
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href='http://www.linkedin.com/in/rachelulgado' target='_blank'>
								<div className='contact-title-container'>
									<div className='link-container'>
										<span>LinkedIn</span>
									</div>
									<div className='icon-container'>
										<img className='linkedin icon' src='../../assets/social/linkedin.svg' />
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href='http://www.twitter.com/rachelulgado' target='_blank'>
								<div className='contact-title-container'>
									<div className='link-container'>
										<span>Twitter</span>
									</div>
									<div className='icon-container'>
										<img className='twitter icon' src='../../assets/social/twitter.svg' />
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href='http://github.com/rroseu' target='_blank'>
								<div className='contact-title-container'>
									<div className='link-container'>
										<span>GitHub</span>
									</div>
									<div className='icon-container'>
										<img className='github icon' src='../../assets/social/github.svg' />
									</div>
								</div>
							</a>
						</li>
						<li>
							<a href='http://www.behance.net/rachelulgado' target='_blank'>
								<div className='contact-title-container'>
									<div className='link-container'>
										<span>Behance</span>
									</div>
									<div className='icon-container'>
										<img className='behance icon' src='../../assets/social/behance.svg' />
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}