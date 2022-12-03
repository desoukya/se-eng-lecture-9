const { v4 } = require('uuid');
const db = require('../db');
const roles = require('../constants/roles');

module.exports = (app) => {
  // Register HTTP endpoint to create new user
  app.post('/api/v1/users', async (req, res) => {
    const newUser = {
      id: v4(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      major: req.body.major,
      roleId: roles.student
    };
    const user = await db('users').insert(newUser).returning('*');
    return res.json(user);
  });

  // Register HTTP endpoint to get all users
  app.get('/api/v1/users', async (req, res) => {
    const results = await db.select('*').from('users');
    return res.json(results)
  });
};
