const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db'); // Ensure this exists and is correct

// Load environment variables
console.log('Loading .env file...');
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Debug: Log the current working directory and .env file path
console.log('Current Directory:', process.cwd());
console.log('.env File Path:', path.resolve(__dirname, '.env'));

// Check if MONGO_URI is loaded correctly
if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is undefined. Please check your .env file.');
    process.exit(1); // Exit process if critical env variables are missing
}

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes'); // Ensure these exist
const employeeRoutes = require('./routes/employeeRoutes');

app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
