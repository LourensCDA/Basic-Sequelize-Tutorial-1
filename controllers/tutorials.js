const Tutorial = require('../models/Tutorial');

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  // Validate request
  // res.status(200).json(req.);
  if (!req.body.title) {
    res.status(400).json({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // Save Tutorial in the database
  data = await Tutorial.create(tutorial);

  res.status(201).json(data);
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  data = await Tutorial.findAll({ where: condition });

  res.status(200).json(data);
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;

  data = await Tutorial.findByPk(id);

  res.status(200).json(data);
};

// Update a Tutorial by the id in the request
exports.updateOne = async (req, res) => {
  const id = req.params.id;

  num = await Tutorial.update(req.body, { where: { id: id } });

  if (num == 1) {
    res.status(200).json({
      message: 'Tutorial was updated successfully.',
    });
  } else {
    res.status(400).json({
      message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
    });
  }
};

// Delete a Tutorial with the specified id in the request
exports.deleteOne = async (req, res) => {
  const id = req.params.id;

  num = await Tutorial.destroy({ where: { id: id } });
  if (num == 1) {
    res.status(200).json({
      message: 'Tutorial was deleted successfully.',
    });
  } else {
    res.status(400).json({
      message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
    });
  }
};

// Delete all Tutorials from the database.
exports.deleteAll = async (req, res) => {
  nums = Tutorial.destroy({
    where: {},
    truncate: false,
  });
  res.status(200).json({
    message: `${nums} Tutorials were deleted successfully!`,
  });
};

// Find all published Tutorials
exports.findAllPublished = async (req, res) => {
  data = await Tutorial.findAll({ where: { published: true } });

  res.status(200).json(data);
};
