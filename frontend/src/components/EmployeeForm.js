import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, getEmployeeById, updateEmployee } from '../services/employeeService';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({ firstName: '', lastName: '', email: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadEmployee();
        }
    }, [id]);

    const loadEmployee = async () => {
        const result = await getEmployeeById(id);
        setEmployee(result.data);
    };

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateEmployee(id, employee);
        } else {
            await createEmployee(employee);
        }
        navigate('/');
    };

    return (
        <div>
            <h2>{id ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="btn btn-success me-2" type="submit">Save</button>
                <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
