import React from "react";
import Items from "./components/Items";
import QueryContext from "./context/Query";

const App = () => {
  return (
    <QueryContext>
      <Items />
    </QueryContext>
  );
};

export default App;
