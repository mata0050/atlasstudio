const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/auth', require('./routes/auth/auth'));
app.use('/auth/register', require('./routes/auth/register'));



// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`👉Server is listening at http://localhost:${PORT}`);
});
