
exports.seed = function(knex){
    return knex('rentals').insert([
        { rental_period: 24},
        { rental_period: 48},
        { rental_period: 72}
    ])
}