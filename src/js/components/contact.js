import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div className='contact-container-outer'>
				<div className='contact-container-inner'>
					<div className='contact-left'>
						<p className='label'>You can find me here: </p>
						<ul className='contact-links'>
							<li>
								<a href='http://www.linkedin.com/in/rachelulgado' target='_blank'>
									<div className='icon-container'>
										<img className='linkedin icon' src='../../assets/social/linkedin.svg' />
									</div>
								</a>
							</li>
							<li>
								<a href='http://www.twitter.com/rachelulgado' target='_blank'>
									<div className='icon-container'>
										<img className='twitter icon' src='../../assets/social/twitter.svg' />
									</div>
								</a>
							</li>
							<li>
								<a href='http://github.com/rroseu' target='_blank'>
									<div className='icon-container'>
										<img className='github icon' src='../../assets/social/github.svg' />
									</div>
								</a>
							</li>
							<li>
								<a href='http://www.behance.net/rachelulgado' target='_blank'>
									<div className='icon-container'>
										<img className='behance icon' src='../../assets/social/behance.svg' />
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div className='contact-right'>
						<p className='label'>Drop me a line</p>
					</div>
				</div>
			</div>
		);
	}
}