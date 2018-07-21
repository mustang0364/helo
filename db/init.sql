drop table  post;

create table  post (
  id serial primary key,
  title text,
  img text,
  content text,
  author_id text
);
select * from post
drop table  users;

create table  users (
  id serial primary key,
  username text,
  password text,
  profile_pic text
);
select * from users