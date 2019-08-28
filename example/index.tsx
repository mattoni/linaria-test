import 'react-app-polyfill/ie11';
import { GlobalStyle } from '../src/setup';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Badge } from '../src';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Badge color="error">Hello World</Badge>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
