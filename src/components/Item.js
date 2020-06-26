import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h1>{searchTerm} Pictures[Item.js]</h1>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
