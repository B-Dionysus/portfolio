drop database portfolio;
create database portfolio;
use portfolio;
create table admin(id int not null auto_increment primary key, name varchar(255), password varchar(255), accesLevel int);
create table projectCat(id int not null auto_increment primary key, title varchar(255), about varchar(1000), tabName varchar(255), thumbnail varchar(1000), addedBy int, displayOrder int, status int);
create table projects(id int not null auto_increment primary key, title varchar(255), displayName varchar(255), projectId int, about varchar(1000), externalLink varchar(255), thumbnail varchar(1000), imageGallery varchar(1000), addedBy int, displayOrder int, status int);
create table status(id int not null auto_increment primary key, status varchar(255));
