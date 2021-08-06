const { City } = require('../models');

const cityCreate = async (req, res, next) => {
  const { name, country, phrase, img } = req.body
  const city = await City.create({ name, country, phrase, img })
  if (!city) return next(new Error('No se pudo crear la Ciudad'))
  res.status(201).json({ message: 'se guardo con exito', data: city })
}

const cityList = async (req, res) => {
  try {
    const cities = await City.find({})
    res.status(200).json({ message: 'listo', data: cities })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const cityDelete = async (req, res) => {
  const { id } = req.body
  try {
    const city = await City.findByIdAndRemove(id)
    if (!city) return next(new Error('No se pudo eliminar la Ciudad'))
    res.status(200).json({ message: 'se elimino con exito', data: city })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const cityUpdate = async (req, res) => {
  const { id } = req.body
  try {
    const city = await City.findByIdAndUpdate(id, req.body, { new: true })
    if (!city) return next(new Error('No se pudo actualizar la Ciudad'))
    res.status(200).json({ message: 'se actualizo con exito', data: city })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = {
  cityList,
  cityDelete,
  cityUpdate,
  cityCreate
}