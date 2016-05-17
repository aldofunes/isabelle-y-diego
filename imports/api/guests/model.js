import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Confirmations } from '../confirmations/model.js';

export const Guests = new Mongo.Collection('guests');

Guests.schema = new SimpleSchema({
  confirmationId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  isGoing: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
});

Guests.attachSchema(Guests.schema);

Guests.helpers({
  email() {
    return Confirmations.findOne(this.confirmationId).email;
  },
});
