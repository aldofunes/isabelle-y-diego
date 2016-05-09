import {Meteor} from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { GuestWishes } from './model.js';

export const insertGuestWish = new ValidatedMethod({
  name: 'guestWishes.insert',

  validate: GuestWishes.schema.pick(['name', 'email', 'wish']).validator(),

  run({ name, email, wish }) {
    GuestWishes.insert({
      name,
      email,
      wish,
      createdAt: new Date(), // current time
    });
  },
});

export const insertMailingRecipient = new ValidatedMethod({
  name: 'mailing.insert',

  validate: GuestWishes.schema.pick(['name', 'email']).validator(),

  run({ name, email }) {
    if (!this.isSimulation) {
      const apiKey = Meteor.settings.mailgun.apiKey;
      const domain = Meteor.settings.mailgun.domain;
      const listName = Meteor.settings.mailgun.listName;

      const mailgun = require('mailgun-js')({ apiKey, domain });
      const list = mailgun.lists(listName);

      list.members().create({
        subscribed: true,
        address: email,
        name,
      });
    }
  },
});