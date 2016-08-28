require('html!./index.html');

import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return <p>Whatever</p>;
  }
}

const appDiv = document.createElement('div');
appDiv.id = 'app';
document.body.appendChild(appDiv);

render(<App />, appDiv);
