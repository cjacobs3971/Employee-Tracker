// index.js

const inquirer = require('inquirer');
const {
  getAllDepartments,
    getAllEmployees,
    getAllRoles,
    updateEmployeeRole, 
  // Import other functions for database operations
} = require('./db');

function start() {
  // Present the options to the user and handle their choices
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menuChoice',
        message: 'Please select an option:',
        choices: [
          'View all departments',
          'view all roles', 
          'View all employees', 
          'add a department', 
          'add a role', 
          'add an employee', 
          'update an employee role',
          // Add more choices for other functionalities
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menuChoice) {
        case 'View all departments':
          // Call the function to retrieve and display all departments
          getAllDepartments()
            .then((departments) => {
              console.log(departments);
              start(); // Prompt the user with the menu again
            })
            .catch((error) => {
              console.error(error);
              start(); // Prompt the user with the menu again
            });
          break;
          case 'view all roles':
          // Call the function to retrieve and display all departments
          getAllRoles()
            .then((roles) => {
              console.log(roles);
              start(); // Prompt the user with the menu again
            })
            .catch((error) => {
              console.error(error);
              start(); // Prompt the user with the menu again
            });
          break;
          case 'View all employees':
            getAllEmployees()
              .then((employees) => {
                console.log(employees);
                start();
              })
              .catch((error) => {
                console.error(error);
                start();
              });
            break;
        
          case 'Add a department':
            addDepartment()
              .then(() => {
                console.log('Department added successfully!');
                start();
              })
              .catch((error) => {
                console.error(error);
                start();
              });
            break;
        
          case 'Add a role':
            addRole()
              .then(() => {
                console.log('Role added successfully!');
                start();
              })
              .catch((error) => {
                console.error(error);
                start();
              });
            break;
        
          case 'Add an employee':
            addEmployee()
              .then(() => {
                console.log('Employee added successfully!');
                start();
              })
              .catch((error) => {
                console.error(error);
                start();
              });
            break;
        
          case 'Update an employee role':
            updateEmployeeRole()
              .then(() => {
                console.log('Employee role updated successfully!');
                start();
              })
              .catch((error) => {
                console.error(error);
                start();
              });
            break;
        // Add cases for other menu choices
        case 'Exit':
          console.log('Goodbye!');
          process.exit(0);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Start the application
start();
