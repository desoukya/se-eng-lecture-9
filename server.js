const path = require('path');
const express = require('express');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static('public'));

/**
 * @return HTML to render /index page
 */
app.get('/', (req,res) => {
  // res.render tells the server to return
  // predefined html in the views directory
  // @param1 is the name of the view
  // @param2 data args passed to view for injection  
  res.render('index', {
    title: "Software Design & Architecture",
    name: "Dr. Amr Desouky - Assignment #2"
  });
});

// middleware to catch non-existing routes
app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen('3000', () => {
  console.log('[OK] => HTTP Server listening on http://localhost:3000');
});
