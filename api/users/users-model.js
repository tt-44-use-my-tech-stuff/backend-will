const db = require('../data/db-config')

//get all users with their id and username
function find() {
    return db("users as u")
    .join("roles as r", "u.role_id", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name").orderBy("u.user_id")
  }

//get user by filter
function findBy(filter){
    return db("users").where(filter).orderBy("user_id")
}

//get user by id
function findById(user_id) {
  return db("users")
  .where(user_id, "user_id").first()
}

//add user to db, return the user by id
async function add(user) {
  const [ user_id ] = await db('users').insert(user, ['user_id']);
  return findById(user_id);
}


module.exports = {
    find,
    findBy,
    findById,
    add
}