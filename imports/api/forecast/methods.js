import { HTTP } from 'meteor/http';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const getForecast = new ValidatedMethod({
  name: 'forecast.get',
  validate: new SimpleSchema({
    apiKey: { type: String },
    latitude: { type: String },
    longitude: { type: String },
  }).validator(),
  run({ apiKey, latitude, longitude }) {
    const url = `https://api.forecast.io/forecast/${apiKey}/${latitude},${longitude}`;
    return HTTP.get(url, {
      params: {
        units: 'si',
        lang: 'es',
        exclude: ['minutely', 'hourly', 'alerts', 'flags'],
      },
    });
  },
});
