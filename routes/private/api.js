const { v4 } = require('uuid');
const db = require('../../connectors/db');
const roles = require('../../constants/roles');

module.exports = function(app) {
  // Register HTTP endpoint to get all users
  app.get('/api/v1/users', async function(req, res) {
    const results = await db.select('*').from('users');
    return res.json(results)
  });
};
