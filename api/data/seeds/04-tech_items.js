
exports.seed = function(knex){
    return knex('tech_items').insert([
        { tech_item_title: "Camera", tech_item_description: "Cool item", tech_item_price: 11.99, min_rental_period: 24, max_rental_period: 168, category_id: 1, owner_id: 1},
        { tech_item_title: "Computer", tech_item_description: "Nice item", tech_item_price: 12.99, min_rental_period: 24, max_rental_period: 168, category_id: 1, owner_id: 1},
        { tech_item_title: "Audio Mixer", tech_item_description: "Awesome item", tech_item_price: 13.99, min_rental_period: 24, max_rental_period: 168, category_id: 1, owner_id: 1}
    ])
}