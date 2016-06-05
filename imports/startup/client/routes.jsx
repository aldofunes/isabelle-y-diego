import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from '../../ui/layouts/MainLayout.jsx';
import Home from '../../ui/pages/Home.jsx';
import Hotels from '../../ui/pages/Hotels.jsx';
import Recommendations from '../../ui/pages/Recommendations.jsx';
import RSVPs from '../../ui/pages/RSVPs.jsx';

export const renderRoutes = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/recommendations" component={Recommendations} />
      <Route path="/hotels" component={Hotels} />
      <Route path="/rsvps" component={RSVPs} />
    </Route>
  </Router>
);
