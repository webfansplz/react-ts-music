import * as React from "react";
import routes from "./routerList";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "../page/Login/Login";
const FadeInRoute = ({ component: Component, path, isLogin }) => {
  return (
    <Route
      path={path}
      render={props => {
        return isLogin ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};
class Routes extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={() =>
              this.state.isLogin ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              )}
          />
          <Route exact path="/login" component={Login} />
          {routes.map((v, i) => (
            <FadeInRoute
              path={v.path}
              component={v.component}
              key={i}
              isLogin={this.state.isLogin}
            />
          ))}
        </div>
      </Router>
    );
  }
}
export default Routes;
