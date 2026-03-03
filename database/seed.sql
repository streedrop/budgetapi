USE budgetapi;

INSERT INTO categories (name, description) VALUES
('Salary', "My salary working at McDonald's"),
('Rent', "Monthly payment"),
('Leisure', null),
('Transport', "Gas, bus, metro, etc."),
('Food', "Grocery store and restaurants");

INSERT INTO transactions (amount, description, category_id, date) VALUES
(3000.00, 'Monthly salary', 1, '2026-01-01'),
(-1200.00, 'February rent', 2, '2026-01-02'),
(-85.50, 'Whole Foods', 5, '2026-01-03'),
(-42.30, 'Local market', 5, '2026-01-04'),
(-25.00, 'Movie tickets', 3, '2026-01-05'),
(-60.00, 'Gas', 4, '2026-01-06'),
(-120.75, 'Costco run', 5, '2026-01-07'),
(2800.00, 'Monthly salary', 1, '2026-01-08'),
(-950.00, 'Rent payment', 2, '2026-01-09');