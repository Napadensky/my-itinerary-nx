const { itineraryDelete, itineraryList, itineraryUpdate, itineraryCreate } = require('../controllers/itinerary.controller');
const { cityChecks, checkErrors } = require('../errors');
const { Router } = require('express');
const router = Router();

router
  .post('/', cityChecks, checkErrors, itineraryCreate)
  .delete('/', itineraryDelete)
  .put('/', itineraryUpdate)
  .get('/', itineraryList)

module.exports = router;