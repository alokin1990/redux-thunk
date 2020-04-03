import React from "react";
import { Router as BrowserRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes/index";
import { connect } from "react-redux";
/// .env
const appUrl = process.env.REACT_APP_CONSTANT;
const newHistory = createBrowserHistory();

class App extends React.Component {
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

export default connect(mapStateToProps)(App);
