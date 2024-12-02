import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/employeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState('');
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const response = await getEmployees(searchCriteria, searchValue);
        setEmployees(response.data);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        loadEmployees();
    };

    return (
        <div>
            <h2 className="text-center mb-4">Employee List</h2>
            <form className="mb-3" onSubmit={handleSearch}>
                <div className="row">
                    <div className="col-md-4">
                        <select
                            className="form-control"
                            value={searchCriteria}
                            onChange={(e) => setSearchCriteria(e.target.value)}
                        >
                            <option value="">Select Criteria</option>
                            <option value="department">Department</option>
                            <option value="position">Position</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Value"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
            </form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.position}</td>
                            <td>
                                {/* Your Update/Delete buttons */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
