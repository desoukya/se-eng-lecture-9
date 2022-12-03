const path = require('path');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const viewRoutes = require('./routes/views');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
// Config setup to allow our HTTP server to serve static files from our public directory
app.use(express.static('public'));
// Config setup to parse JSON payloads from HTTP POST request body
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Register the view & api routes
viewRoutes(app);
apiRoutes(app);

// If request doesn't match any of the above routes then render the 404 page
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Create HTTP Server and Listen for Requests
app.listen(3000);