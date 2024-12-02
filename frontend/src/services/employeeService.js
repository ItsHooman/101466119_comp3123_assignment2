import axios from 'axios';

const API_URL = 'http://localhost:5001/api/employees';

export const getEmployees = async () => await axios.get(API_URL);
export const getEmployeeById = async (id) => await axios.get(`${API_URL}/${id}`);
export const createEmployee = async (employee) => await axios.post(API_URL, employee);
export const updateEmployee = async (id, employee) => await axios.put(`${API_URL}/${id}`, employee);
export const deleteEmployee = async (id) => await axios.delete(`${API_URL}/${id}`);
