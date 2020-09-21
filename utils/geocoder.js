const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'mapquest',
  apiKey: 'XyNxpovrk6lHYdbxoqkrYiNnR4XLVmaR',
  formatter: null
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;