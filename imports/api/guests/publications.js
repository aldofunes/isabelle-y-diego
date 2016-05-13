import { Meteor } from 'meteor/meteor';

import { Guests } from './model.js';

Meteor.publish('guests', function guestsPublication() {
  return Guests.find();
});
