# Schema Information

## Users

column name     | data type | details
--------------- | --------- | -------------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## Playlists

column name | data type | details
----------- | --------- | -------------------------------------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
user_id     | integer   | not null, foreign key (references users), indexed

## Comments

column name | data type | details
----------- | --------- | --------------------------------------------
id          | integer   | not null, primary key
body        | text      | not null
playlist_id | integer   | not null, foreign key (references playlists)
user_id     | integer   | not null, foreign key (references users)

## Tags

column name | data type | details
----------- | --------- | -------------------------
id          | integer   | not null, primary key
title       | string    | not null, unique, indexed

## Songs

column name | data type | details
----------- | --------- | --------------------------------------------
id          | integer   | not null, primary key
title       | string    | not null, default anonymous
artist      | string    | not null, default anonymous
url         | string    | not null
user_id     | integer   | not null, foreign key
