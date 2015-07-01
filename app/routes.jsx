import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';

var routes = (
  <Route path='/' handler={App}>
    <DefaultRoute name='home' handler={Home}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
