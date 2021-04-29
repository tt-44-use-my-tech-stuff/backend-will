const db = require('../data/db-config')

//get all users with their id and username
function find() {
    return db("rentals")
    .select(
      "rental_id",
      "rental_period",
      "renter_id",
      "owner_id",
      "tech_item_id"
      ).orderBy("rental_id");
  }

//get rental by filter
function findBy(filter){
    return db("rentals").where(filter).orderBy("rental_id")
}

//get rental by id
function findById(id) {
    return db("rentals").where("rental_id", id).first();
  }

//add rental to db, return the rental by id
async function add(rental) {
    const [rental_id] = await db("rentals").insert(rental, "rental_id");
    return findById(rental_id);
}

async function update(id, changes){
    await db("rentals").where("rental_id", id).update(changes)
    return findById(id)
}

async function remove(id){
    const deletedItem = await findById(id)
    await db("rentals")
        .where("rental_id", id)
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