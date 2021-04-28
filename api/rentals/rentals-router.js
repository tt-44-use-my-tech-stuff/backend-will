const router = require('express').Router();
const Rentals = require('./rentals-model')

router.get('/', (req,res)=>{
    Rentals.find()
    .then(item =>{
      res.status(200).json(item)
    })
    .catch(() =>{
      res.status(404).json({message: "Could not find rentals."})
    })
})

router.post('/', (req,res)=>{
  const {
    renter_id,
    rental_period,
    owner_id,
    tech_item_id
    } = req.body;
  if(!renter_id || !rental_period || !owner_id || !tech_item_id){
    res.status(403).json("Must have: renter_id, rental_period, owner_id, tech_item_id")
  }else{
    Rentals.add(req.body)
    .then(addedTechItem =>{
      res.status(201).json(addedTechItem);
    })
    .catch(()=>{
      res.status(401).json("Cannot add rental")
    })
  }
})

module.exports = router;