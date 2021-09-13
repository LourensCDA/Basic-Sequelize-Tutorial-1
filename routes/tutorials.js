const express = require('express');
const { create, findAll } = require('../controllers/tutorials');
const router = express.Router();

router.route('/').get(findAll).post(create);

module.exports = router;
