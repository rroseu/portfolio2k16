import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './js/components/app';
import Landing from './js/components/landing';
import About from './js/components/about';
import Work from './js/components/work';
import ProjectsMenu from './js/components/projectsMenu';
import Project from './js/components/project';
import Resume from './js/components/resume';
import Contact from './js/components/contact';

require('./styles/main.scss');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Landing} /> 
			<Route path='about' component={About} />
			<Route path='work' component={Work}>
				<IndexRoute component={ProjectsMenu} />
				<Route path='/work/:project' component={Project} />
			</Route>
			<Route path='resume' component={Resume} />
			<Route path='contact' component={Contact} />
		</Route>
	</Router>,
	document.getElementById('app')
);