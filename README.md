# Documentation

## TechStuff Endpoints (Track Team 44 @ Lambda)
## --------------------------------------------------


## Register

[POST] https://techstufflambda.herokuapp.com/auth/register
Requires:
    username,
    password,
    role_id (is optional, defaults to 1 or "Renter")

## Login

[POST] https://techstufflambda.herokuapp.com/auth/login
Requires:
    username,
    password

## Users (requires login token)

[GET] https://techstufflambda.herokuapp.com/api/users

## Tech Items

[GET] https://techstufflambda.herokuapp.com/api/techitems
[POST] https://techstufflambda.herokuapp.com/api/techitems
Requires: 
    tech_item_title,
    tech_item_description,
    tech_item_price,
    min_rental_period,
    max_rental_period,
    category_id,
    owner_id

## Rentals

[GET] https://techstufflambda.herokuapp.com/api/rentals
[POST] https://techstufflambda.herokuapp.com/api/rentals
Requires:
    rental_period,
    renter_id,
    owner_id,
    tech_item_id