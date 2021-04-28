# Documentation

## TechStuff Endpoints (Track Team 44 @ Lambda)
## --------------------------------------------------


## Register

[POST] https://techstufflambda.herokuapp.com/auth/register<br/>
Requires:<br/>
    username,<br/>
    password,<br/>
    role_id (is optional, defaults to 1 or "Renter")

## Login

[POST] https://techstufflambda.herokuapp.com/auth/login<br/>
Requires:<br/>
    username,<br/>
    password

## Users (requires login token)

[GET] https://techstufflambda.herokuapp.com/api/users

## Tech Items

[GET] https://techstufflambda.herokuapp.com/api/rentals<br/>
[POST] https://techstufflambda.herokuapp.com/api/techitems<br/>
Requires:<br/>
    tech_item_title,<br/>
    tech_item_description,<br/>
    tech_item_price,<br/>
    min_rental_period,<br/>
    max_rental_period,<br/>
    category_id,<br/>
    owner_id

## Rentals

[GET] https://techstufflambda.herokuapp.com/api/rentals<br/>
[POST] https://techstufflambda.herokuapp.com/api/rentals<br/>
Requires:<br/>
    rental_period,<br/>
    renter_id,<br/>
    owner_id,<br/>
    tech_item_id