const bcrypt = require('bcrypt')
const router = require('express').Router()

const {OTOTMFourth, OTOTMFirst,OTOTMSecond,OTOTMThird} = require('../models')
const { tokenExtractor, isAdmin } = require('../util/middleware')

//Get all users address if admin
router.get('/', async (req, res) => {
    const fourth = await OTOTMFourth.findAll({ 
      include: [OTOTMFirst, OTOTMSecond]
    })
    res.json(fourth)
  })

//  Add address to user if user exists and only to matched token to user
  router.post('/', async (req, res) => {
    try {
      const first = await OTOTMFirst.findByPk(req.body.OTOTMFirstId)
      const fourth = await OTOTMFourth.create({...req.body, OTOTOMFirstId: first.id})
      res.json(fourth)
    } catch(error) {
      return res.status(400).json({ error })
    }
  })



// Changes Address information if admin or address id and user match
router.put('/:fourthId',  async (req, res) => {
  try{
    const fourth = await OTOTMFourth.findOne({
      where: { 
        id: req.params.fourthId
      }
    })
        first.quantity = req.body.quantity ? req.body.quantity :first.body.quantity
        await fourth.save()
        res.json(fourth)
  }    catch(error) {
      return res.status(400).json({ error })
    }  
})

//Delete with either admin or id matching address
router.delete('/:fourthId', async (req, res) => {
    try {
      const fourth = await OTOTMFourth.findOne({
        where: { 
          id: req.params.fourthId
        }
      })
          await fourth.destroy()
          return res.status(204).end()
    }
    catch(error) {
      return res.status(400).json({ error })
    }  
  })

module.exports = router