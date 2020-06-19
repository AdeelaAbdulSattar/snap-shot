import React, { Component } from "react";
import ReactDOM from "react-dom";
import PhotoContextProvider from "./components/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Item from "./components/Item";
import "./index.css";

class Index extends Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route
              render={(props) => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              />
              <Route path="/food" render={() => <Item searchTerm="food" />} />
              <Route path="/bird" render={() => <Item searchTerm="bird" />} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
