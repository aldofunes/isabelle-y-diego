import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Guests } from './model.js';

export const insertGuest = new ValidatedMethod({
  name: 'guests.insert',

  validate: Guests.schema.pick(['confirmationId', 'firstName', 'lastName', 'isGoing']).validator(),

  run({ confirmationId, firstName, lastName, isGoing }) {
    Guests.insert({
      confirmationId,
      firstName,
      lastName,
      isGoing,
      createdAt: new Date(),
    });
  },
});
