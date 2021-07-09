const axios = require('axios');
const qs = require('qs');
const config = require('../configapi');

const getJurisdictions = (cb) => {
  axios.get(`${config.openStatesURL}/jurisdictions`, {
    params: {
      apikey: config.openStatesAPI,
      classification: 'state',
    },
  })
    .then((response) => {
      const { data } = response;
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    });
};

const getBillsByState = (id, cb) => {
  axios.get(`${config.openStatesURL}/bills`, {
    params: {
      apikey: config.openStatesAPI,
      jurisdiction: id,
    },
  })
    .then((response) => {
      const { data } = response;
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    });
};

const getBillDetails = (id, cb) => {
  axios.get(`${config.openStatesURL}/bills/ocd-bill/${id}`, {
    params: {
      apikey: config.openStatesAPI,
      include: ['sponsorships', 'abstracts', 'actions', 'sources', 'documents', 'versions', 'votes'],
    },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
  })
    .then((response) => {
      const { data } = response;
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    });
};

module.exports = {
  getJurisdictions,
  getBillsByState,
  getBillDetails,
};
