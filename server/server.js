const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);

// Test route
app.get('/test', (req, res) => res.send('Hello World'));

// Start server
app.listen(5000, () => console.log('Server is running on port 5000'));
