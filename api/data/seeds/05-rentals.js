
exports.seed = function(knex){
    return knex('users').insert([
        { tech_item_id: 2, rental_period: 24, renter_id: 1,  owner_id: 1},
        { tech_item_id: 2, rental_period: 48, renter_id: 1, owner_id: 2},
        { tech_item_id: 2, rental_period: 72, renter_id: 1, owner_id: 3}
    ])
}