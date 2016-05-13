import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

import '../imports/api/guestWishes/model.js';
import '../imports/api/guestWishes/methods.js';

import '../imports/api/guests/model.js';
import '../imports/api/guests/methods.js';

import '../imports/api/confirmations/model.js';
import '../imports/api/confirmations/methods.js';

import 'jquery';

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
