USE budgetapi;

INSERT INTO categories (name, description) VALUES
  ('Dev Salary', 'My salary during my internship'),
  ('Ref Salary', 'My salary working as an improv referee'),
  ('Rent', null),
  ('Restaurants', 'Bad food spendings'),
  ('Groceries', 'Good food spendings');

INSERT INTO transactions (amount, description, is_expense, category_id, date) VALUES
  (21.23, 'O''Tacos', 1, 4, '2025-02-03'),
  (19.78, 'Waverly', 1, 4, '2025-02-03'),
  (87.27, 'Métro', 1, 5, '2025-02-03'),
  (5.98, 'Métro', 1, 5, '2025-02-04'),
  (20.44, 'Pizza Pizza', 1, 4, '2025-02-07'),
  (10.34, 'McDonald''s', 1, 4, '2025-02-08'),
  (35.38, 'La Toxica', 1, 4, '2025-02-10'),
  (52.31, 'Métro', 1, 5, '2025-02-5'),
  (5.9, 'Métro', 1, 5, '2025-02-5'),
  (19.78, 'Waverly', 1, 4, '2025-02-13'),
  (27.29, 'Patati & Patata', 1, 4, '2025-02-13'),
  (41.08, 'Métro', 1, 5, '2025-02-15'),
  (18.82, 'A&W', 1, 4, '2025-02-18'),
  (20.98, 'Brocca', 1, 4, '2025-02-20'),
  (10.31, 'McDonald''s', 1, 4, '2025-02-20'),
  (3.49, 'Tim Hortons', 1, 4, '2025-02-22'),
  (57.97, 'Métro', 1, 5, '2025-02-23'),
  (20.53, 'Brocca', 1, 4, '2025-02-23'),
  (774, 'Monthly rent', 1, 3, '2025-02-23'),
  (20.14, 'Métro', 1, 5, '2025-02-24'),
  (13.8, 'Pok Pok', 1, 4, '2025-02-28'),
  (17.07, 'Palace Doner', 1, 4, '2025-02-28'),
  (387.4, 'Monthly rent', 1, 3, '2025-02-02'),
  (189, 'Tournoi 2', 0, 2, '2025-02-24'),
  (788.43, 'Paie semaines 3-3', 0, 1, '2025-02-03'),
  (788.43, 'Paie semaines 4-5', 0, 1, '2025-02-18');