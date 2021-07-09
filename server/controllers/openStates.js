const models = require('../models');

const getJurisdictions = (req, res) => {
  models.openStates.getJurisdictions((err, data) => {
    if (err) {
      res.send(err);
    }
    res.status(200).send(data);
  });
};

const getBillsByState = (req, res) => {
  const { jurisdiction } = req.query;
  console.log(req.query);

  models.openStates.getBillsByState(jurisdiction, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.status(200).send(data);
  });
};

const getBillDetails = (req, res) => {
  const { id } = req.params;

  models.openStates.getBillDetails(id, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.status(200).send(data);
  });
};

module.exports = {
  getJurisdictions,
  getBillsByState,
  getBillDetails,
};
