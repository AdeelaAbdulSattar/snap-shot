import React, { Component } from "react";

const Container = ({ searchTerm }) => {
  return (
    <div>
      <h1>{searchTerm}</h1>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Container;
