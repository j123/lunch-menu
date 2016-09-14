DROP TABLE IF EXISTS frLunchMenu;
CREATE TABLE frLunchMenu (
  id BIGINT(20) AUTO_INCREMENT,
  menu VARCHAR(200),
  price INT,
  category VARCHAR(50),
  orderDate INT(8),
  nutritionalInfo VARCHAR(200),
  recommend TINYINT(1),
  halalFood TINYINT(1),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
