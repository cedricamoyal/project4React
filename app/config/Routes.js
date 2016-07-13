import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Search from '../components/Search';
import UserDetails from '../components/UserDetails';
import Countries from '../components/Countries';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/details/:username" component={UserDetails} />
      <Route path="/countries" component={Countries} />
    </Route>
  </Router>
);

export default routes;
