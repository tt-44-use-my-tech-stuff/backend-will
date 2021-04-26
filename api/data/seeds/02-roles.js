
exports.seed = function(knex){
    return knex('roles').insert([
        { role_name: "owner"},
        { role_name: "renterrrrrrrr"}
    ])
}