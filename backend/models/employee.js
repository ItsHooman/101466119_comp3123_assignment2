const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: String },
    position: { type: String },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
