const { Router } = require('express');
const controllers = require('./controllers');
const config = require('./configapi');

const router = Router();

router.get('/representatives', controllers.google.getRepsByAddress);

router.get('/jurisdictions', controllers.openStates.getJurisdictions);

router.get('/bills', controllers.openStates.getBillsByState);

router.get('/bill/:id', controllers.openStates.getBillDetails);

module.exports = router;
