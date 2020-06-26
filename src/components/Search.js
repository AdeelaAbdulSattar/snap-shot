import React from "react";
import { render } from "@testing-library/react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  return (
    <div>
      <h1>{searchTerm} Images- Search.js </h1>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
