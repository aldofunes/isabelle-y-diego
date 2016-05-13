import { Meteor } from 'meteor/meteor';

import { Confirmations } from './model.js';

Meteor.publish('confirmations', function confirmationsPublication() {
  return Confirmations.find();
});
