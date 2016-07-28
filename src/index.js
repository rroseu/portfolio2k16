import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './js/components/app';
import Work from './js/components/work';
import Resume from './js/components/resume';
import Contact from './js/components/contact';

require('./styles/main.scss');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App} />
		<Route path='work' component={Work} />
		<Route path='resume' component={Resume} />
		<Route path='contact' component={Contact} />
	</Router>,
	document.getElementById('app')
);