import * as React from 'react';
import routes from './routerList';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {routes.map((v, i) => <Route path={v.path} component={v.component} key={i} />)}
        </div>
      </Router>
    );
  }
}
export default Routes;
