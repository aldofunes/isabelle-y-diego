import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const GuestWishes = new Mongo.Collection('guest-wishes');

GuestWishes.schema = new SimpleSchema({
  name: {
    type: String,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  wish: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

GuestWishes.attachSchema(GuestWishes.schema);
