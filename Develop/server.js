const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

// Setting up Express 
const PORT = process.env.port || 3001;
const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Sets up Express.js to parse JSON and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for Notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for Wildcard (404 error page not found)
app.get('*', function(res, res){
 res.sendFile(path.join(__dirname, './public/404/html')),
 res.status(404)
});

// localhost PORT (3001 or process environment)
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
