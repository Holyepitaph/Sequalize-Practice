const bcrypt = require('bcrypt')
const router = require('express').Router()

const {MMSecond, MMFirst} = require('../models')
const { tokenExtractor, isAdmin } = require('../util/middleware')

//Get all users address if admin
router.get('/', async (req, res) => {
    const second = await MMSecond.findAll({ 
      include: MMFirst
    })
    res.json(second)
  })

//  Add address to user if user exists and only to matched token to user
  router.post('/', async (req, res) => {
    try {
      const second = await MMSecond.create({...req.body})
      res.json(second)
    } catch(error) {
      return res.status(400).json({ error })
    }
  })



// Changes Address information if admin or address id and user match
router.put('/:secondId',  async (req, res) => {
  try{
    const second = await MMSecond.findOne({
      where: { 
        id: req.params.secondId
      }
    })
    second.quantity = req.body.quantity ? req.body.quantity :second.body.quantity
        await second.save()
        res.json(second)
  }    catch(error) {
      return res.status(400).json({ error })
    }  
})

//Delete with either admin or id matching address
router.delete('/:secondId', async (req, res) => {
    try {
      const second = await MMSecond.findOne({
        where: { 
          id: req.params.secondId
        }
      })
          await second.destroy()
          return res.status(204).end()
    }
    catch(error) {
      return res.status(400).json({ error })
    }  
  })

module.exports = router