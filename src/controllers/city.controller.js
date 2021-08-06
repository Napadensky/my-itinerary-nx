const City = require('../models/City');

const cityCreate = async (req, res, next) => {
  const { name, country, phrase, img } = req.body
  const city = await City.create({ name, country, phrase, img })
  if (!city) return next(new Error('No se pudo crear la Ciudad'))
  res.status(201).json({ message: 'se guardo con exito', data: city })
}

const cityList = async (req, res) => {
  try {
    const cities = await City.find({})
    res.status(200).json({ message: 'listo', data: city })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
const cityDelete = async (req, res) => { res.send('Hello World') }
const cityUpdate = async (req, res) => { res.send('Hello World') }


module.exports = {
  cityList,
  cityDelete,
  cityUpdate,
  cityCreate
}