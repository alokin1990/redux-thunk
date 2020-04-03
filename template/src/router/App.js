import React from "react";
import { Router as BrowserRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes/routes";
import { connect } from "react-redux";

const path = process.env.REACT_APP_HOME_URL;
const newHistory = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter history={newHistory}>
          <Switch>
            {routes.map((route, index) => (
              <route.type key={index} exact={route.exact} path={path + route.path} component={() => <route.component props={this.props.homepage.data} />} location={route.location} />
            ))}
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { homepage: state.homePage };
};

export default connect(mapStateToProps)(App);
