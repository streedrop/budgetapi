USE budgetapi;

INSERT INTO categories (name, description) VALUES
('Salary', "My salary working at McDonald's"),
('Rent', "Monthly payment"),
('Leisure', null),
('Transport', "Gas, bus, metro, etc."),
('Food', "Grocery store and restaurants");

INSERT INTO transactions (amount, description, category_id) VALUES
(3000.00, 'Monthly salary', 1),
(-1200.00, 'February rent', 2),
(-85.50, 'Whole Foods', 5),
(-42.30, 'Local market', 5),
(-25.00, 'Movie tickets', 3),
(-60.00, 'Gas', 4),
(-120.75, 'Costco run', 5),
(2800.00, 'Monthly salary', 1),
(-950.00, 'Rent payment', 2);