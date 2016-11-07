import React from 'react';
import NavigationContainer from "NavigationContainer"
import PlayBarContainer from 'PlayBarContainer'

const App = ({ children }) => (
  <div>
    <NavigationContainer/>
    { children }
    <PlayBarContainer/>
  </div>
);

export default App;
