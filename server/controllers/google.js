const models = require('../models');

const getRepsByAddress = (req, res) => {
  const { address } = req.body;

  models.google.getRepsByAddress(address, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.status(200).send(data);
  });
};

module.exports = {
  getRepsByAddress,
};
