# Documentation

## TechStuff Endpoints (Track Team 44 @ Lambda)
## --------------------------------------------------


## Register

[POST] https://techstufflambda.herokuapp.com/auth/register<br/>
Requires:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    username,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    password,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    role_id (is optional, defaults to 1 or "Renter")

## Login

[POST] https://techstufflambda.herokuapp.com/auth/login<br/>
Requires:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    username,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    password

## Users (requires login token)

[GET] https://techstufflambda.herokuapp.com/api/users

## Tech Items

[GET] https://techstufflambda.herokuapp.com/api/techitems<br/>
[PUT] https://techstufflambda.herokuapp.com/api/techitems/:id<br/>
[DELETE] https://techstufflambda.herokuapp.com/api/techitems/:id<br/>
[POST] https://techstufflambda.herokuapp.com/api/techitems<br/>
Requires:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    tech_item_title,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    tech_item_description,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    tech_item_price,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    min_rental_period,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    max_rental_period,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    category_id,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    owner_id

## Rentals

[GET] https://techstufflambda.herokuapp.com/api/rentals<br/>
[POST] https://techstufflambda.herokuapp.com/api/rentals<br/>
Requires:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    rental_period,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    renter_id,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    owner_id,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    tech_item_id