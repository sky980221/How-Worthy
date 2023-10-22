import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostPage from './app/post/PostPage';
import LoginPage from './app/login/LoginPage';
import RegisterPage from './app/register/RegisterPage';
import RatingPage from './app/rating/RatingPage';
import RedirectURI from './app/login/components/RedirectURI';

const App = () => {
  return (
    <Routes>
      <Route Component={PostPage} path="/post" />
      <Route Component={LoginPage} path="/" />
      <Route Component={RegisterPage} path="/register" />
      <Route Component={RatingPage} path="/rating" />
      <Route Component={RedirectURI} path="/post" />
    </Routes>
  );
};

export default App;
