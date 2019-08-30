DROP DATABASE IF EXISTS national_parks;

CREATE DATABASE national_parks;

USE national_parks;


CREATE TABLE parks (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE miniBlogs (
  id int NOT NULL AUTO_INCREMENT,
  content varchar(255) NOT NULL,
  park_id varchar(50) NOT NULL,
  user_id varchar(50) NOT NULL, 
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  miniBlog_id int NOT NULL,
  PRIMARY KEY(id)
);

-- parks
INSERT into parks (name) VALUES ("Channel Islands National Park");
INSERT into parks (name) VALUES ("Death Valley National Park");
INSERT into parks (name) VALUES ("Joshua Tree National Park");
INSERT into parks (name) VALUES ("Lassen Volcanic National Park");
INSERT into parks (name) VALUES ("Pinnacles National Park");
INSERT into parks (name) VALUES ("Redwood National and State Parks");
INSERT into parks (name) VALUES ("Sequoia & Kings Canyon National Parks");
INSERT into parks (name) VALUES ("Yosemite National Park");

-- test
INSERT into miniBlogs(content, park_id, user_id) VALUES ("testcontent", '5', '2');

