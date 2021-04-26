
exports.seed = function (knex){
    return knex('categories').insert([
        { category_name: "phone"},
        { category_name: "camera"},
        { category_name: "computer"},
        { category_name: "gadget"}
    ])
}