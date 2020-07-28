import React from 'react';
import App from './components/app';
import { Route } from 'react-router';

function loadTopic(store) {
	return (nextState, replace, callback) => {
		store.dispatch(fetchTopicToBeEdited(nextState.params.topicId));
		callback();
	}
}

const getRoutes = (store) => {
	return (<Route name="app" component={App} path="/"></Route>
	)
};

export default getRoutes;