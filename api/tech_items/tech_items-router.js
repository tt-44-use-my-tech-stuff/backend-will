const router = require('express').Router();
const TechItems = require('./tech_items-model')

router.get('/', (req,res)=>{
    TechItems.find()
    .then(item =>{
      res.status(200).json(item)
    })
    .catch(() =>{
      res.status(404).json({message: "Could not find tech_items."})
    })
})

module.exports = router;