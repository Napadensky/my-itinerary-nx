const { cityDelete, cityList, cityUpdate, cityCreate } = require('../controllers/city.controller');
const { cityChecks, checkErrors } = require('../errors');
const { Router } = require('express');
const router = Router();

router
  .post('/', cityChecks, checkErrors, cityCreate)
  .delete('/', cityDelete)
  .put('/', cityUpdate)
  .get('/', cityList)

module.exports = router;