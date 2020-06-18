import React, { Component } from "react";
import ReactDOM from "react-dom";
import PhotoContextProvider from "./components/PhotoContext";

class Index extends Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <div>
        Hellow
        <PhotoContextProvider></PhotoContextProvider>
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
