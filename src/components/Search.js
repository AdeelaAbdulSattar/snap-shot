import React, { Component } from "react";
import { render } from "@testing-library/react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  render(
    <div>
      <h1>{searchTerm} Images- Search.js </h1>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
