
exports.seed = function(knex){
    return knex('rentals').insert([
        { rental_period: 24, owner_id: 1, renter_id: 3, tech_item_id: 1},
        { rental_period: 48, owner_id: 2, renter_id: 2, tech_item_id: 2},
        { rental_period: 72, owner_id: 3, renter_id: 1, tech_item_id: 2}
    ])
}