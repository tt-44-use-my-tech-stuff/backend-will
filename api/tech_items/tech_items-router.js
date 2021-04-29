const router = require('express').Router();
const TechItems = require('./tech_items-model')

router.get('/', (req,res)=>{
    TechItems.find()
    .then(item =>{
      res.status(200).json(item)
    })
    .catch(err =>{
      res.status(404).json({message:"Cannot find tech items.", err: err, errMsg: err.message })
    })
})

router.post('/', (req,res)=>{
  const {
    tech_item_title,
    tech_item_description,
    tech_item_price,
    min_rental_period,
    max_rental_period,
    category_id,
    owner_id
    } = req.body;
  if(!tech_item_title || !tech_item_description || !tech_item_price || !min_rental_period || !max_rental_period || !owner_id || !category_id){
    res.status(403).json("Must have: tech_item_title, tech_item_description, tech_item_price, min_rental_period, max_rental_period, category_id, owner_id")
  }else{
    TechItems.add(req.body)
    .then(addedTechItem =>{
      res.status(201).json(addedTechItem);
    })
    .catch(err =>{
      res.status(401).json({message:"Cannot add item.", err: err, errMsg: err.message })
    })
  }
})

router.put('/:id', (req,res)=>{
  const changes = req.body
  TechItems.update(req.params.id, changes)
  .then(updatedItem =>{
    res.status(201).json(updatedItem)
  })
  .catch(err =>{
    res.status(401).json({message: "Cannot update item.", err: err, errMsg: err.message })
  })
})

router.delete('/:id', (req,res)=>{
  TechItems.remove(req.params.id)
  .then(deletedItem =>{
    res.status(201).json(deletedItem)
  })
  .catch(err =>{
    res.status(401).json({message:"Cannot delete item.", err: err, errMsg: err.message })
  })
})

module.exports = router;