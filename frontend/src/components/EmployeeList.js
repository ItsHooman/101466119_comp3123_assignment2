import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../services/employeeService';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await getEmployees(search);
        setEmployees(result.data);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        await loadEmployees();
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        loadEmployees();
    };

    return (
        <div>
            <h2 className="text-center mb-4">Employee List</h2>
            <form className="mb-3" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Search by Department or Position"
                    value={search}
                    onChange={handleSearch}
                />
                <button className="btn btn-primary">Search</button>
            </form>
            <table className="table table-striped table-bordered">
                {/* Table as before */}
            </table>
        </div>
    );
};

export default EmployeeList;
