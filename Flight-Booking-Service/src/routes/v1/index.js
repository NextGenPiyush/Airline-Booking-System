const express = require('express');

const{InfoController} = require('../../controllers');

const bookingRoutes = require('./booking');

const router = express.Router();

// router.get('/info', (req, res) => {
//     return res.json({msg: "ok"});
// });
router.get('/info', InfoController.info);  // nore cleaner implementation

router.use('/bookings', bookingRoutes);

module.exports = router;