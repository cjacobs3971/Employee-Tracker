// index.js

const inquirer = require('inquirer');
const {
  getAllDepartments,
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
