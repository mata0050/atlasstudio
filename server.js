const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/login', require('./routes/auth/auth'));
app.use('/api/register', require('./routes/auth/register'));
app.use('/api/pose', require('./routes/api/pose'));

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`👉Server is listening at http://localhost:${PORT}`);
});
