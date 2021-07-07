const { Router } = require('express');
const controllers = require('./controllers');
const config = require('./configapi');

const router = Router();

router.get('/representatives', controllers.google.getRepsByAddress);

router.get(`${config.openStatesURL}`, controllers.openStates.get);

module.exports = router;
