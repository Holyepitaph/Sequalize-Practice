const bcrypt = require('bcrypt')
const router = require('express').Router()

const {MMFirst, MMSecond} = require('../models')
const { tokenExtractor, isAdmin } = require('../util/middleware')

//Get all users address if admin
router.get('/', async (req, res) => {
    const first = await MMFirst.findAll({ 
      include: MMSecond
    })
    res.json(first)
  })

//  Add address to user if user exists and only to matched token to user
  router.post('/', async (req, res) => {
    try {
      const first = await MMFirst.create({...req.body})
      res.json(first)
    } catch(error) {
      return res.status(400).json({ error })
    }
  })



// Changes Address information if admin or address id and user match
router.put('/:firstId',  async (req, res) => {
  try{
    const first = await MMFirst.findOne({
      where: { 
        id: req.params.firstId
      }
    })
        first.quantity = req.body.quantity ? req.body.quantity :first.body.quantity
        await first.save()
        res.json(first)
  }    catch(error) {
      return res.status(400).json({ error })
    }  
})

//Delete with either admin or id matching address
router.delete('/:firstId', async (req, res) => {
    try {
      const first = await MMFirst.findOne({
        where: { 
          id: req.params.firstId
        }
      })
          await first.destroy()
          return res.status(204).end()
    }
    catch(error) {
      return res.status(400).json({ error })
    }  
  })

module.exports = router