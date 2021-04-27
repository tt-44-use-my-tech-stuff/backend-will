
exports.seed = function(knex){
    return knex('tech_items').insert([
        { tech_item_title: "Will", tech_item_description: "Cool item", tech_item_price: 11.99, min_rental_period: 24, max_rental_period: 168, category_id: 1, owner_id: 1},
        { tech_item_title: "Emma", tech_item_description: "Nice item", tech_item_price: 12.99, min_rental_period: 24, max_rental_period: 168, category_id: 1, owner_id: 1},
        { tech_item_title: "Alexis", tech_item_description: "Awesome item", tech_item_price: 13.99, min_rental_period: 24, max_rental_period: 168, category_id: 1, owner_id: 1}
    ])
}