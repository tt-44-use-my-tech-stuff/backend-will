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
    .catch(()=>{
      res.status(401).json("Cannot add item")
    })
  }
})

module.exports = router;