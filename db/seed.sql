-- db/seed.sql

USE employee_db;

-- Insert sample data into departments table
INSERT INTO departments (name) VALUES
  ('Sales'),
  ('Engineering'),
  ('Marketing');

-- Insert sample data into roles table
INSERT INTO roles (title, salary, department_id) VALUES
  ('Sales Manager', 60000, 1),
  ('Software Engineer', 80000, 2),
  ('Marketing Coordinator', 50000, 3);

-- Insert sample data into employees table
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Mike', 'Johnson', 3, 1);
