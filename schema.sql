-- USERs
-- name

create table users (
    id serial primary key,
    name text,
    username varchar(200) not null,
    pwhash varchar(300) not null
);

-- TODO's
-- name
-- completed

create table todos (
    id serial primary key,
    name text,
    completed boolean,
    user_id integer references users (id) on delete cascade
);