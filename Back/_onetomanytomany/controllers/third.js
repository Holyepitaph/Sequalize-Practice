const bcrypt = require('bcrypt')
const router = require('express').Router()

const {MMFirst,MMSecond,MMThird} = require('../models')
const { tokenExtractor, isAdmin } = require('../util/middleware')

//Get all users address if admin
router.get('/', async (req, res) => {
    const third = await MMThird.findAll({ 
    })
    res.json(third)
  })

//  Add address to user if user exists and only to matched token to user
  router.post('/', async (req, res) => {
    try {
      const first = await MMFirst.findByPk(req.body.MMFirstId)
      const second = await MMSecond.findByPk(req.body.MMSecondId)
      const third = await MMThird.create({MMFirstId: first.id, MMSecondId: second.id})
      res.json(third)
    } catch(error) {
      return res.status(400).json({ error })
    }
  })



// Changes Address information if admin or address id and user match
router.put('/',  async (req, res) => {
  try{
      if(req.body.MMFirstId != null){
        const third = await MMThird.findOne({
          where: { 
            MMFirstId: req.body.MMFirstId
          }
        })
        await third.save()
        return res.json(third)
      } else if (req.body.MMSecondId !=null){
        const third = await MMThird.findOne({
          where: { 
            MMSecondId: req.body.MMSecondId
          }
        })
        await third.save()
        return res.json(third)
      } else return res.status(400).json("Something Went Wrong Prolly")
  }    catch(error) {
      return res.status(400).json({ error })
    }  
})

//Delete with either admin or id matching address
router.delete('/', async (req, res) => {
  try{
 if (req.body.MMFirstId && req.body.MMSecondId){
        const third = await MMThird.findOne({
          where:{
            MMFirstId: req.body.MMFirstId,
            MMSecondId: req.body.MMSecondId
          }
        })
        await third.destroy()
        return res.status(204).end()
    }else return res.status(400).json("Something Went Wrong Prolly")
}    catch(error) {
    return res.status(400).json({ error })
  }  
  })

module.exports = router