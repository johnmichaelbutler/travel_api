const express = require('express');
const { getLocations, addLocation } = require('../controllers/locations');
const router = express.Router();

// const getCoordinatesData = async () => {
//   try {
//     let data = await geocoder.geocode('Harlingen, Texas 78550');
//     return data;
//   } catch(e) {
//     console.log(e);
//   }
// }


// router.get('/',  async (req, res, next) => {
//   let data = await getCoordinatesData();
//   let lat = data[0].latitude;
//   let long = data[0].longitude;
//   let coordinates = [lat, long];
//   res.send(coordinates);
// });

router.route('/').get(getLocations).post(addLocation);

module.exports = router;