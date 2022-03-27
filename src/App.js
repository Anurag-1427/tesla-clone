import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ModelS from './components/Model S/ModelS';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <ModelS />
    </div>
  );
}

export default App;
