const db = require("../models");
// Access to DB
const Game = db.games;

// Create and Save a new Game
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Game
  const game = new Game({
    name: req.body.name,
    description: req.body.description,
    release:  req.body.release,
    published: req.body.published ? req.body.published : false
  });

  // Save Game in the database
  game
    .save(game)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Game."
      });
    });
};

// Retrieve all Games from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Game.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving games."
      });
    });
};

// Find a single Game with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Game.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Game with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Game with id=" + id });
    });
};

// Update a Game by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Game.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `¡Cannot update Game with id=${id}. Maybe Game was not found!`
        });
      } else res.send({ message: "Game was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Game with id=" + id
      });
    });
};

// Delete a Game with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Game.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Game with id=${id}.¡Game was not found!`
        });
      } else {
        res.send({
          message: "¡Game was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "ERRPR: Could not delete Game with id=" + id
      });
    });
};

// Delete all Games from the database
exports.deleteAll = (req, res) => {
  Game.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} ¡Games were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || " Some error occurred while removing in db all games."
      });
    });
};

// Find all published Games
exports.findAllPublished = (req, res) => {
  Game.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving published games."
      });
    });
};
