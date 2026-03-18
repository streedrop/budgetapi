DROP DATABASE IF EXISTS budgetapi;
CREATE DATABASE IF NOT EXISTS budgetapi;
USE budgetapi;

CREATE TABLE IF NOT EXISTS categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255) NULL,
  is_income BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  amount DECIMAL(10,2) NOT NULL,
  description VARCHAR(255) NOT NULL,
  category_id INT,
  date DATE NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS keywords (
  id INT PRIMARY KEY AUTO_INCREMENT,
  keyword VARCHAR(50) NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
);

CREATE TABLE IF NOT EXISTS monthly_budget (
  category_id INT NOT NULL,
  month DATE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (category_id, month),
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

