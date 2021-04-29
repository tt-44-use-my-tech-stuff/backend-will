const db = require('../data/db-config')

//get all users with their id and username
function find() {
    return db("tech_items")
    .select(
      "tech_item_id",
      "tech_item_title",
      "tech_item_description",
      "tech_item_price",
      "min_rental_period",
      "max_rental_period",
      "category_id",
      "owner_id"
      ).orderBy("tech_item_id");
  }

//get tech_item by filter
function findBy(filter){
    return db("tech_items").where(filter).orderBy("tech_item_id")
}

//get tech_item by id
function findById(tech_item_id) {
    return db("tech_items").where("tech_item_id", tech_item_id).first();
  }

//add tech_item to db, return the tech_item by id
async function add(tech_item) {
    const [tech_item_id] = await db("tech_items").insert(tech_item, ["tech_item_id"]);
    return findById(tech_item_id);
}


async function update(tech_item_id, changes){
    await db("tech_items").where("tech_item_id", tech_item_id).update(changes)
    return findById(tech_item_id)
}

async function remove(tech_item_id){
    const deletedItem = await findById(tech_item_id)
    await db("tech_items")
        .where("tech_item_id", tech_item_id)
        .del()
    return deletedItem;
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove
}