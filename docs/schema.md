# Schema Information

## users

column name | data type | details
---- | ---------------- | -------
id | integer | not null, primary key
email | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique

## photos

column name | data type | details
---- | ---------------- | -------
id | integer | not null, primary key
title | string |
caption | string |
img_url | string | not null, unique
user_id | integer | not null, foreign key (references users), indexed
album_id | integer | not null foreign key (references albums), indexed

## albums

column name | data type | details
---- | ---------------- | -------
id | integer | not null, primary key
user_id | integer | not null, foreign key (references users), indexed
title | string | not null
description | string |
thumbnail_url | string | not null

## Comments

column name | data type | details
---- | ---------------- | -------
id | integer | not null, primary key
user_id | integer | not null, foreign key (references users), indexed
photo_id | integer | not null, foreign key (references photos), indexed
body | text | not null


## tags

column name | data type | details
---- | ---------------- | -------
id | integer | not null, primary key
photo_id | integer | not null
tag_name | string | not null
