import * as React from 'react';
import { render } from 'react-dom';
import Routes from './router/index';
class App extends React.Component {
  render() {
    return <Routes />;
  }
}
render(<App />, document.getElementById('root'));
