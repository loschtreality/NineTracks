import React from 'react';
import Nav from "Nav"

const App = ({ children }) => (
  <div>
    <Nav/>
    { children }
  </div>
);

export default App;
