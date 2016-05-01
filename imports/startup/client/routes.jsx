import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from '../../ui/layouts/MainLayout.jsx';
import Home from '../../ui/pages/Home.jsx';
import Hotels from '../../ui/pages/Hotels.jsx';
import RSVP from '../../ui/pages/RSVP.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="hotels" component={Hotels} />
      <Route path="rsvp" component={RSVP} />
    </Route>
  </Router>
);
