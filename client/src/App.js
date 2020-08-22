import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import ArticlesList from './components/ArticlesList';
import Login from './components/Login';
import SignUpComponent from './components/SignUp';
import './App.css';
import AddArticleComponent from './components/AddArticle';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ArticlesList />
      <Login />
      <SignUpComponent />
      <AddArticleComponent />
    </div>
  );
}

export default App;
