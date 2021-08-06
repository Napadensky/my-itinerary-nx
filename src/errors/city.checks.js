const cityChecks = [
  check('name', 'Name is require').not().isEmpty(),
  // check('country').isAlphanumeric().withMessage('Name must be alphanumeric'),
  // check('phrase').isAlphanumeric().withMessage('Name must be alphanumeric'),
  // check('img').isAlphanumeric().withMessage('Name must be alphanumeric'),
]

module.exports = { cityChecks }