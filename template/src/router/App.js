import React from "react";
import { Router as BrowserRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionsHomepage from "../redux/actions/homePage";
/// .env
const appUrl = process.env.REACT_APP_CONSTANT;
const newHistory = createBrowserHistory();

class App extends React.Component {
  componentDidMount() {
    this.props.actions.getInitialState(" Nikola");
  }
  componentDidCatch(err, errorInfo) {
    return window.alert(err);
  }

  render() {
    return (
      <>
        <BrowserRouter history={newHistory}>
          <Switch>
            {routes.map((route, index) => (
              <route.type
                key={index}
                exact={route.exact}
                path={route.path}
                component={() => (
                  <route.component props={this.props[route.state]} />
                )}
                location={route.location}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    homePage: state.homePage.data,
    pageNotFound: "404"
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionsHomepage, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
