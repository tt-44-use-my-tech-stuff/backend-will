
exports.seed =  function(knex){
    return knex('roles').insert([
        { role_name: "Renter"},
        { role_name: "Owner"}
    ])
}