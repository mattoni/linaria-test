import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/setup';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(Story => (
  <React.Fragment>
    <GlobalStyle />
    <Story />
  </React.Fragment>
));

configure(loadStories, module);
