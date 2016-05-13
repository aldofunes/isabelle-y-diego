import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from '../../ui/layouts/MainLayout.jsx';
import Home from '../../ui/pages/Home.jsx';
import Recommendations from '../../ui/pages/Recommendations.jsx';
import Confirmations from '../../ui/pages/Confirmations.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/recommendations" component={Recommendations} />
      <Route path="/confirmations" component={Confirmations} />
    </Route>
  </Router>
);
