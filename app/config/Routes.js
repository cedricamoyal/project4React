import React from 'react';
import ReactRouter, { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/Main';
import Countries from '../components/Countries';


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Countries} />
    </Route>
  </Router>
);

export default routes;
