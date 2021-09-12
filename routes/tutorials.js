const express = require('express');
const { create } = require('../controllers/tutorials');
const router = express.Router();

router.route('/').post(create);

module.exports = router;
