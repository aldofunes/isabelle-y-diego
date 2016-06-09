import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Confirmations } from './model.js';
import { insertGuest } from '../guests/methods.js';

export const insertConfirmation = new ValidatedMethod({
  name: 'confirmations.insert',

  validate: new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
    },
    'guests.$.firstName': {
      type: String,
    },
    'guests.$.lastName': {
      type: String,
    },
    'guests.$.isGoing': {
      type: Boolean,
    },
  }).validator(),

  run({ email, guests }) {
    const confirmation = Confirmations.findOne({ email });
    let confirmationId = '';

    if (confirmation) {
      confirmationId = confirmation._id;
    } else {
      confirmationId = Confirmations.insert({
        email,
        createdAt: new Date(),
      });
    }

    guests.forEach((guest) => {
      insertGuest.call({
        confirmationId,
        firstName: guest.firstName,
        lastName: guest.lastName,
        isGoing: guest.isGoing,
      });
    });
    return confirmationId;
  },
});
