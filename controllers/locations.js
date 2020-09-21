const Location = require('../models/Location');

// @desc Get All Locations
// @route GET /getLocations
// @access Public
exports.getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();
    return res.status(200).json({
      success: true,
      count: locations.length,
      data: locations
    })
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Server error'})
  }
}

exports.addLocation = async (req, res, next) => {
  try {
    const location = await Location.create(req.body);
    return res.status(200).json({
      success: true,
      data: location
    })
  } catch (error) {
    console.error(error);
    if(error.code = 11000) {
      return res.status(400).json({ error: 'Error on backend'})
    }
    res.status(500).json({ error: 'Server error'})
  }
};

// exports.findLocation = async (req, res, next) => {
//   try {
//     const location = await Location.findById(req.id);
//     return res.status(200).json({
//       success: true,
//       data: location
//     })
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error on findLocation in controllers'})
//   }
// }