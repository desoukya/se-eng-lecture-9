const db = require('../db');

module.exports = function(app) {
  // Register HTTP endpoint to render /index page
  app.get('/', (req, res) => {
    // res.render tells the server to return
    // predefined html in the views directory
    // @param1 is the name of the view (ie index)
    // @param2 data (in this case JSON) passed to view for injection
    return res.render('index', {
      title: "Software Engineering",
      name: "Dr. Amr Desouky - Lecture 8 - Building UI"
    });
  });

  // Register HTTP endpoint to render /users page
  app.get('/users', async (req, res) => {
    const users = await db.select('*').from('users');
    return res.render('users', { users });
  });

  // Register HTTP endpoint to render /courses page
  app.get('/courses', async (req, res) => {
    const courses = await db.select('*').from('courses');
    return res.render('courses', { courses });
  });
  // Register HTTP endpoint to render /enrollment page
  app.get('/enrollment', async (req, res) => {
    const enrollment = await db.select('*')
    .from('enrollment')
    .where('userId', '=', 'b6610db9-c70c-4598-addd-aeb30dda45da')
    .innerJoin('users', 'enrollment.userId', 'users.id')
    .innerJoin('courses', 'enrollment.courseId', 'courses.id');

    console.log('enrollment', enrollment)
    return res.render('enrollment', { enrollment });
  });
  // Register HTTP endpoint to render /users/add page
  app.get('/users/add', async (req, res) => {
    return res.render('add-user');
  });
};
