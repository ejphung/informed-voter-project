const axios = require('axios');
const config = require('../configapi');

const getRepsByAddress = (addressString, cb) => {
  axios.get(`${config.googleURL}/representatives`, {
    params: {
      key: config.googleAPI,
      address: addressString,
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

module.exports = {
  getRepsByAddress,
};
