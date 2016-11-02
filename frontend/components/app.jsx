import React from 'react';
import NavigationContainer from "./navigation/navigation_container.js"

const App = ({ children }) => (
  <div>
    <NavigationContainer/>
    { children }
  </div>
);

export default App;
