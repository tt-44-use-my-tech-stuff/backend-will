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
    .catch(err =>{
      res.status(401).json({message:"Cannot add rental.", err: err, errMsg: err.message })
    })
  }
})

router.put('/:id', (req,res)=>{
  const changes = req.body
  Rentals.update(req.params.id, changes)
  .then(updatedRental =>{
    res.status(201).json(updatedRental)
  })
  .catch(err =>{
    res.status(401).json({message: "Cannot update rental.", err: err, errMsg: err.message })
  })
})

router.delete('/:id', (req,res)=>{
  Rentals.remove(req.params.id)
  .then(deletedRental =>{
    res.status(201).json(deletedRental)
  })
  .catch(err =>{
    res.status(401).json({message:"Cannot delete rental.", err: err, errMsg: err.message })
  })
})

module.exports = router;