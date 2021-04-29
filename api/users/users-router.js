const router = require('express').Router();
const Users = require('./users-model')
const restricted = require('../middleware/restricted')

router.get('/', restricted, (req,res)=>{
    Users.find()
    .then(user =>{
      res.status(200).json(user)
    })
    .catch(err =>{
      res.status(404).json({message:"Cannot find users.", err: err, errMsg: err.message })
    })
})

module.exports = router;