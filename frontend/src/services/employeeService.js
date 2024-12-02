import axios from 'axios';

const API_URL = 'http://localhost:5001/api/employees';

// Fetch all employees
export const getEmployees = async () => await axios.get(API_URL);

// Fetch employee by ID
export const getEmployeeById = async (id) => await axios.get(`${API_URL}/${id}`);

// Create a new employee
export const createEmployee = async (employee) => await axios.post(API_URL, employee);

// Update an employee by ID
export const updateEmployee = async (id, employee) => await axios.put(`${API_URL}/${id}`, employee);

// Delete an employee by ID
export const deleteEmployee = async (id) => await axios.delete(`${API_URL}/${id}`);

// Search employees by criteria (e.g., department or position)
export const searchEmployees = async (criteria, value) => {
    const query = criteria && value ? `?${criteria}=${value}` : '';
    return await axios.get(`${API_URL}/search${query}`);
};
