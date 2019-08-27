DROP DATABASE IF EXISTS national_parks;

CREATE DATABASE national_parks;

USE national_parks;


CREATE TABLE parks (


)
CREATE TABLE posts (
  id int NOT NULL AUTO_INCREMENT,
  park varchar(50) NOT NULL,
  content varchar(255) NOT NULL,
  PRIMARY KEY(id)
)

