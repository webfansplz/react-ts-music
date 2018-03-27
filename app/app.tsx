import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../store/index';
import Routes from './router/index';
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
render(<App />, document.getElementById('root'));
