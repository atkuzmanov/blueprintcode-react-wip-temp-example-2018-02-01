import express from 'express';
import React from 'react';
import getRoutes from './client/app/routes';
import AppComponent from './client/app/components/app';
import { renderToString } from 'react-dom/server';
import {createLocation} from 'history/lib/LocationUtils';
import { RouterContext, match } from 'react-router';
import {Provider} from 'react-redux';
import renderIndex from './renderIndex';
import store from './client/app/store';
import compress from 'compression';

const app = new express();
app.use(compress());

if (process.env.NODE_ENV !== 'live-production') {
  const webpack = require('webpack');
  const config = require('../webpack-config/webpack.config.client.js');
  const compiler = webpack(config);
  
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath:config.output.publicPath
  }))
  app.use(webpackHotMiddleware(compiler))
}

app.use(express.static('dist/client'));

app.get('/status',  (req, res) => {
  res.sendStatus(200).end('OK.');
});

app.use((req, res) => {
  const location = createLocation(req.url);
  const routes = getRoutes(store);
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error.');
    }
    if (!renderProps) return res.status(404).end('Not found.');

    const InitialComponent = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    const componentHTML = renderToString(InitialComponent);

    res.send(renderIndex(componentHTML));
  });
});

app.listen(8080, () => {
  console.log('Application listening on port 8080.');
});

