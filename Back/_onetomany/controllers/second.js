const bcrypt = require('bcrypt')
const router = require('express').Router()

const {OMSecond,OMFirst} = require('../models')
const { tokenExtractor, isAdmin } = require('../util/middleware')

//Get all users address if admin
router.get('/', async (req, res) => {
    const second = await OMSecond.findAll({ 
      include: [
        {
          model: OMFirst 
        }
      ]
    })
    res.json(second)
  })

//  Add address to user if user exists and only to matched token to user
  router.post('/:firstId', async (req, res) => {
    try {
      const first  = await OMFirst.findByPk(req.params.firstId)
      const second = await OMSecond.create({...req.body,OMFirstId: first.id})
      res.json(second)
    } catch(error) {
      return res.status(400).json({ error })
    }
  })



// Changes Address information if admin or address id and user match
router.put('/:secondId',  async (req, res) => {
  try{
    const second = await OMSecond.findOne({
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
      const second = await OMSecond.findOne({
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