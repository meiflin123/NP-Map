DROP DATABASE IF EXISTS national_parks;

CREATE DATABASE national_parks;

USE national_parks;


CREATE TABLE parks (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE posts (
  id int NOT NULL AUTO_INCREMENT,
  park_id int NOT NULL,
  content varchar(255) NOT NULL,
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
