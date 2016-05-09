import { Meteor } from 'meteor/meteor';

import { GuestWishes } from './model.js';

Meteor.publish('guestWishes', function guestWishesPublication() {
  return GuestWishes.find();
});
