# Employee Tracker

A command-line application for managing a company's employee database. This application allows users to view and manage departments, roles, and employees using Node.js, Inquirer, and MySQL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Employee-Tracker.git

1- Navigate to the project directory:
cd Employee-Tracker

2- Install the required dependencies:
npm install

3- Set up your MySQL database:
Create a database named employee_db.
Run the SQL scripts from db/schema.sql to create the necessary tables.

4- Update the MySQL connection settings:

Open the db/connection.js file and update the host, user, password, and database fields to match your MySQL configuration.

5- Start the application:
node index


                                Usage
When you run the application, you'll be presented with a menu of options. You can use the arrow keys to navigate through the options and press Enter to select one. Here are the available options:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
Exit
Choose an option to perform the corresponding action.

                                Features
View and manage departments, roles, and employees.
Add new departments, roles, and employees.
Update the role of an existing employee.