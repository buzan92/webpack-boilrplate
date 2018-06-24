import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>1234</h1>
        <Hello hello={'Hello world'} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
