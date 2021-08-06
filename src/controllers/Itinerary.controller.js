const { Itinerary } = require('../models');

const itineraryCreate = async (req, res, next) => {
  const { name, country, phrase, img } = req.body
  const itinerary = await Itinerary.create({ name, country, phrase, img })
  if (!itinerary) return next(new Error('No se pudo crear la Ciudad'))
  res.status(201).json({ message: 'se guardo con exito', data: itinerary })
}

const itineraryList = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({})
    res.status(200).json({ message: 'listo', data: itineraries })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const itineraryDelete = async (req, res) => {
  const { id } = req.body
  try {
    const itinerary = await Itinerary.findByIdAndRemove(id)
    if (!itinerary) return next(new Error('No se pudo eliminar la Ciudad'))
    res.status(200).json({ message: 'se elimino con exito', data: itinerary })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const itineraryUpdate = async (req, res) => {
  const { id } = req.body
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(id, req.body, { new: true })
    if (!itinerary) return next(new Error('No se pudo actualizar la Ciudad'))
    res.status(200).json({ message: 'se actualizo con exito', data: itinerary })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = {
  itineraryList,
  itineraryDelete,
  itineraryUpdate,
  itineraryCreate
}