const { Router } = require('express');
const {check} = require('express-validator');
const {cityDelete,cityList,cityUpdate,cityCreate} = require('../controllers/city.controller');
const {cityChecks, checkErrors} = require('../errors');
const router = Router();

router
.get('/', cityList )
.post('/', cityChecks ,checkErrors, cityCreate )
.delete('/', cityDelete )
.put('/', cityUpdate )

module.exports = router;