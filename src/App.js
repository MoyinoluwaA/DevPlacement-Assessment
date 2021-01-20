import React from 'react';
import './App.css';
import FullPage from './Components/Fullpage'


function App() {
  module.exports = {
    add: function (a, b) {
        return a + b;
    }
  };
  return (
    <FullPage />
  );
}

export default App;
