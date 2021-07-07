const models = require('../models');

const getJurisdictions = (req, res) => {
  models.openStates.getJurisdictions((err, data) => {
    if (err) {
      res.send(err);
    }
    res.status(200).send(data);
  });
};

module.exports = {
  getJurisdictions,
};
