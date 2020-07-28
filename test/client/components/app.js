import App from '../../../src/client/app/components/app.js';
import ReactTestUtils from 'react-addons-test-utils';
import React from 'react';
var ReactDOM = require('react-dom');

import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect';

let renderer = createRenderer();

describe("App Component", () => {
  it('App contains an h1 tag', () => {
    renderer.render(<App/>);
    let renderedElement = renderer.getRenderOutput();
    expect(renderedElement.props.children).toEqual(
      <h1>blueprint template</h1>
    );
  });
});
