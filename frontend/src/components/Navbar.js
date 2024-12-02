import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Call the logout endpoint (if backend handles logout logic)
            await axios.post('http://localhost:5001/api/users/logout');

            // Clear any authentication token or session data
            localStorage.removeItem('authToken');

            // Redirect the user to the login page
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Employee Management</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add Employee</Link>
                        </li>
                        <li className="nav-item">
                            <button
                                className="btn btn-outline-light nav-link"
                                style={{ border: 'none', cursor: 'pointer' }}
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
