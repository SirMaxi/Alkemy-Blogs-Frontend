import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './pages/Home/home';
import Details from './pages/Detail/detail';
import Create from './pages/Create/create';
import Update from './pages/Update/update';
import Post from './pages/Post/post';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/update" component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
