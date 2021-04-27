const db = require('../data/db-config')

//get all users with their id and username
function find() {
    return db("users").select("user_id", "username", "role_id").orderBy("user_id");
  }

//get user by filter
function findBy(filter){
    return db("users").where(filter).orderBy("user_id")
}

//get user by id
function findById(id) {
    return db("users").where({id}).first();
  }

//add user to db, return the user by id
async function add(user) {
    const [id] = await db("users").insert(user, "user_id");
    return findById(id);
}

module.exports = {
    find,
    findBy,
    findById,
    add
}