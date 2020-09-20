const express = require('express');
const router = express.Router();
const unirest = require('unirest');
const NodeGeocoder = require('node-geocoder');

const api_key = process.env.OPENCAGE_API_KEY;

const geocoder = NodeGeocoder({
  provider: 'opencage',
  apiKey: api_key
});

const getCoordinatesData = async () => {
  try {
    let data = await geocoder.geocode('Harlingen, Texas 78550');
    return data;
  } catch(e) {
    console.log(e);
  }
}


router.get('/',  async (req, res, next) => {
  let data = await getCoordinatesData();
  let lat = data[0].latitude;
  let long = data[0].longitude;
  let coordinates = [lat, long];
  res.send(coordinates);
});

module.exports = router;