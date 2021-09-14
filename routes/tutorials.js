const express = require('express');
const {
  create,
  findAll,
  findOne,
  findAllPublished,
  updateOne,
  deleteAll,
  deleteOne,
} = require('../controllers/tutorials');
const router = express.Router();

router.route('/').get(findAll).post(create).delete(deleteAll);
router.route('/published').get(findAllPublished);
router.route('/:id').get(findOne).put(updateOne).delete(deleteOne);

module.exports = router;
