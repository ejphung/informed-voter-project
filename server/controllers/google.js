const models = require('../models');

const getRepsByAddress = (req, res) => {
  const { address } = req.query;

  models.google.getRepsByAddress(address, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
};

module.exports = {
  getRepsByAddress,
};
