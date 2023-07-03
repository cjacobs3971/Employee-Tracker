// db/index.js

const connection = require('./connection');

// Perform database queries or operations using the 'connection' object

// Example function to get all departments
async function getAllDepartments() {
  try {
    const [rows] = await connection.query('SELECT * FROM departments');
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllManagers() {
    try {
      const [rows] = await connection.query('SELECT * FROM employees WHERE manager_id = 1');
      return rows;
    } catch (error) {
      throw error;
    }
  }
  async function getAllEmployees() {
    try {
      const [rows] = await connection.query('SELECT * FROM employeess');
      return rows;
    } catch (error) {
      throw error;
    }
  }
  // Create a new employee
  async function createEmployee(employee) {
    return this.connection.promise().query("INSERT INTO employee SET ?", employee);
  }

  // Remove an employee with the given id
  async function removeEmployee(employeeId) {
    return this.connection.promise().query(
      "DELETE FROM employee WHERE id = ?",
      employeeId
    );
  }

module.exports = {
  getAllDepartments,
    getAllManagers,
    getAllEmployees,
    createEmployee,
    removeEmployee,
  // Add more functions for other database operations
};
