const bcrypt = require('bcrypt')
const router = require('express').Router()

const {OTOTMFourth,OTOTMSecond,OTOTMThird} = require('../models')
const { tokenExtractor, isAdmin } = require('../util/middleware')

//Get all users address if admin
router.get('/', async (req, res) => {
    const third = await OTOTMThird.findAll({ 
    })
    res.json(third)
  })

//  Add address to user if user exists and only to matched token to user
  router.post('/', async (req, res) => {
    try {
      const fourth = await OTOTMFourth.findByPk(req.body.OTOTMFourthId)
      const second = await OTOTMSecond.findByPk(req.body.OTOTMSecondId)
      const third = await OTOTMThird.create({OTOTMFourthId: fourth.id, OTOTMSecondId: second.id})
      res.json(third)
    } catch(error) {
      return res.status(400).json({ error })
    }
  })



// Changes Address information if admin or address id and user match
router.put('/',  async (req, res) => {
  try{
      if(req.body.OTOTMFourthId != null){
        const third = await OTOTMThird.findOne({
          where: { 
            OTOTMFourthId: req.body.OTOTMFourthId
          }
        })
        await third.save()
        return res.json(third)
      } else if (req.body.OTOTMSecondId !=null){
        const third = await OTOTMThird.findOne({
          where: { 
            OTOTMSecondId: req.body.OTOTMSecondId
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
 if (req.body.OTOTMFourthId && req.body.OTOTMSecondId){
        const third = await OTOTMThird.findOne({
          where:{
            OTOTMFourthId: req.body.OTOTMFourthId,
            OTOTMSecondId: req.body.OTOTMSecondId
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