const { Router } = require('express');
const { check } = require('express-validator');
const { cityDelete, cityList, cityUpdate, cityCreate } = require('../controllers/city.controller');
const { cityChecks, checkErrors } = require('../errors');
const router = Router();

router
  .post('/', cityChecks, checkErrors, cityCreate)
  .delete('/', cityDelete)
  .put('/', cityUpdate)
  .get('/', cityList)

module.exports = router;