import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
      <Router>
          <Navbar />
          <div className="container mt-4">
              <Routes>
                  <Route path="/" element={<EmployeeList />} />
                  <Route path="/add" element={<EmployeeForm />} />
                  <Route path="/edit/:id" element={<EmployeeForm />} />
                  <Route path="/view/:id" element={<EmployeeDetails />} />
              </Routes>
          </div>
      </Router>
  );
}


export default App;
