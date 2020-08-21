import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import ArticlesList from './components/ArticlesList';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ArticlesList />
      <Login />
    </div>
  );
}

export default App;
