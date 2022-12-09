const db = require('../../db');

module.exports = function(app) {
  // Register HTTP endpoint to render /users page
  app.get('/users', async function(req, res) {
    const users = await db.select('*').from('users');
    return res.render('users', { users });
  });

  // Register HTTP endpoint to render /courses page
  app.get('/courses', async function(req, res) {
    const courses = await db.select('*').from('courses');
    return res.render('courses', { courses });
  });
  // Register HTTP endpoint to render /enrollment page
  app.get('/enrollment', async function(req, res) {
    const enrollment = await db.select('*')
    .from('enrollment')
    .where('userId', '=', 'b6610db9-c70c-4598-addd-aeb30dda45da')
    .innerJoin('users', 'enrollment.userId', 'users.id')
    .innerJoin('courses', 'enrollment.courseId', 'courses.id');

    console.log('enrollment', enrollment)
    return res.render('enrollment', { enrollment });
  });
  // Register HTTP endpoint to render /users/add page
  app.get('/users/add', async function(req, res) {
    return res.render('add-user');
  });
};
