# Exercise 1

## What columns violate 1NF?
- dinner_date, food_code and food_description columns violate 1NF.
- dinner_date row values are not consistent.
- food_code rows have multiple values.
- food_description rows also have multiple values.

## What entities do you recognize that could be extracted?
- members, dinners, venues and foods can be extracted as new entities.

## Name all the tables and columns that would make a 3NF compliant solution.
- a members table with member_id(pk), member_name and member_address columns
- a dinners table with dinner_id(pk), dinner_date columns
- a venues table with venue_code(pk), venue_description columns
- a foods table with food_code(pk), food_description columns

