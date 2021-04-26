
exports.seed = function (knex){
    return knex('users').insert([
        { username: "Will", password: "1234"},
        { username: "Emma", password: "1234"},
        { username: "Alexis", password: "1234"}
    ])
}