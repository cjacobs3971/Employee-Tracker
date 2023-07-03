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
  async function getAllRoles() {
    try {
      const [rows] = await connection.query('SELECT * FROM roles');
      return rows;
    } catch (error) {
      throw error;
    }
  }
// Create a new employee
async function createEmployee(employee) {
    return connection.promise().query("INSERT INTO employees SET ?", employee);
  }
  
  // Remove an employee with the given id
  async function removeEmployee(employeeId) {
    return connection.promise().query(
      "DELETE FROM employees WHERE id = ?",
      employeeId
    );
  }
  
  // Update an employee's role
  async function updateEmployeeRole(employeeId, roleId) {
    return connection.promise().query(
      "UPDATE employees SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }
    // Update the given employee's manager
   async function updateEmployeeManager(employeeId, managerId) {
        return this.connection.promise().query(
          "UPDATE employee SET manager_id = ? WHERE id = ?",
          [managerId, employeeId]
        );
      }    

module.exports = {
  getAllDepartments,
    getAllManagers,
    getAllEmployees,
    getAllRoles,
    createEmployee,
    updateEmployeeRole,
    removeEmployee,
    updateEmployeeManager,
  // Add more functions for other database operations
};
