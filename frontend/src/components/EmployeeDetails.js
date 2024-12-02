import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById } from '../services/employeeService';

const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await getEmployeeById(id);
        setEmployee(result.data);
    };

    return (
        <div>
            <h2>Employee Details</h2>
            <p><strong>First Name:</strong> {employee.firstName}</p>
            <p><strong>Last Name:</strong> {employee.lastName}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
        </div>
    );
};

export default EmployeeDetails;
