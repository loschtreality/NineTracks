import React from 'react';
import NavigationContainer from "NavigationContainer"

const App = ({ children }) => (
  <div>
    <NavigationContainer/>
    { children }
  </div>
);

export default App;
