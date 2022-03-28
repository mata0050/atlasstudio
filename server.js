const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error Middleware
app.use(errorHandler);

// Routes
app.use('/api/login', require('./routes/auth/auth'));
app.use('/api/register', require('./routes/auth/register'));
app.use('/api/pose', require('./routes/api/pose'));




// Serve static assets in production
if (process.env.NPM_CONFIG_PRODUCTION) {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`👉Server is listening at http://localhost:${PORT}`);
});
