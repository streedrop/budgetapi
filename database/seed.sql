USE budgetapi;

INSERT INTO categories (name, description, is_income, icon) VALUES
  ('Dev Salary', 'My salary during my internship', 1, 0),
  ('Ref Salary', 'My salary working as an improv referee', 1, 0),
  ('Rent', null, 0, 0),
  ('Restaurants', 'Bad food spendings', 0, 0),
  ('Groceries', 'Good food spendings', 0, 0);

INSERT INTO rules (source, match_type, keyword, action, category_id, new_string) VALUES
  ('category', 'equals', 'Restaurant', 'move', 4, NULL),
  ('description', 'equals', 'PAIEMENT - MERCI', 'ignore', NULL, NULL),
  ('description', 'contains', 'METRO MARCHE MARCANIO', 'rename', NULL, 'Épicerie');

INSERT INTO transactions (amount, description, category_id, date) VALUES
  (21.23, 'O''Tacos', 4, '2026-02-03'),
  (19.78, 'Waverly', 4, '2026-02-03'),
  (87.27, 'Métro', 5, '2026-02-03'),
  (5.98, 'Métro', 5, '2026-02-04'),
  (20.44, 'Pizza Pizza', 4, '2026-02-07'),
  (10.34, 'McDonald''s', 4, '2026-02-08'),
  (35.38, 'La Toxica', 4, '2026-02-10'),
  (52.31, 'Métro', 5, '2026-02-5'),
  (5.9, 'Métro', 5, '2026-02-5'),
  (19.78, 'Waverly', 4, '2026-02-13'),
  (27.29, 'Patati & Patata', 4, '2026-02-13'),
  (41.08, 'Métro', 5, '2026-02-15'),
  (18.82, 'A&W', 4, '2026-02-18'),
  (20.98, 'Brocca', 4, '2026-02-20'),
  (10.31, 'McDonald''s', 4, '2026-02-20'),
  (3.49, 'Tim Hortons', 4, '2026-02-22'),
  (57.97, 'Métro', 5, '2026-02-23'),
  (20.53, 'Brocca', 4, '2026-02-23'),
  (774, 'Monthly rent', 3, '2026-02-23'),
  (20.14, 'Métro', 5, '2026-02-24'),
  (13.8, 'Pok Pok', 4, '2026-02-28'),
  (17.07, 'Palace Doner', 4, '2026-02-28'),
  (387.4, 'Monthly rent', 3, '2026-02-02'),
  (189, 'Tournoi 2', 2, '2026-02-24'),
  (788.43, 'Paie semaines 2-3', 1, '2026-02-03'),
  (788.43, 'Paie semaines 4-5', 1, '2026-02-18');

INSERT INTO budget (category_id, month, amount) VALUES 
  (1, '2025-01-01', 1500.00),
  (1, '2025-02-01', 1500.00),
  (1, '2025-03-01', 1500.00),
  (1, '2025-04-01', 1500.00),
  (1, '2025-05-01', 1500.00),
  (1, '2025-06-01', 1500.00),
  (1, '2025-07-01', 1500.00),
  (1, '2025-08-01', 750.00),
  (1, '2025-09-01', 0),
  (1, '2025-10-01', 0),
  (1, '2025-11-01', 0),
  (1, '2025-12-01', 0),
  (1, '2026-01-01', 1500.00),
  (1, '2026-02-01', 1500.00),
  (1, '2026-03-01', 1500.00);