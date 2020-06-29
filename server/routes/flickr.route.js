const express = require('express');
const router = express.Router();
const flickr_controller = require('../controllers/flickr.controller');
const constants = require('../lib/constants')
const cors          = require('cors');

router.all('*', cors(constants.CORS_OPTIONS));
router.post('/serachByText', flickr_controller.serachByText);

module.exports = router;
