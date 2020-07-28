import App from './components/app';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';
import getRoutes from './routes';
import {Provider} from 'react-redux';



render((
  	<Provider store={store}>
	  <Router history={browserHistory}>
		{getRoutes(store)}
	</Router>
	</Provider>
), document.getElementById('app'));
