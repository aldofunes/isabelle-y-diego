import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Confirmations = new Mongo.Collection('confirmations');

Confirmations.schema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  createdAt: {
    type: Date,
  },
});

Confirmations.attachSchema(Confirmations.schema);
