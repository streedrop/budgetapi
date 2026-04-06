DROP DATABASE IF EXISTS budgetapi;
CREATE DATABASE IF NOT EXISTS budgetapi;
USE budgetapi;

CREATE TABLE IF NOT EXISTS categories (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255) NULL,
  is_income BOOLEAN NOT NULL,
  icon INT NOT NULL
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
  source ENUM('description', 'category') NOT NULL,
  match_type ENUM('contains', 'equals') NOT NULL,
  keyword VARCHAR(50) NOT NULL,
  action ENUM('move', 'ignore', 'rename') NOT NULL,
  category_id INT,
  new_name VARCHAR(255),
  PRIMARY KEY (source, keyword),
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
  CHECK (action != 'move' OR category_id IS NOT NULL),
  CHECK (action != 'rename' OR new_name IS NOT NULL)
);

CREATE TABLE IF NOT EXISTS monthly_budget (
  category_id INT NOT NULL,
  month DATE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (category_id, month),
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

