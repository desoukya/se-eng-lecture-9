const { v4 } = require('uuid');
const db = require('../../db');
const roles = require('../../constants/roles');

module.exports = function(app) {
  // Register HTTP endpoint to create new user
  app.post('/api/v1/user', async function(req, res) {
    // Check if user already exists in the system
    const userExists = await db.select('*').from('users').where('email', req.body.email);
    console.log('userExists', userExists)
    if (userExists) {
      return res.status(400).send('user exists');
    }
    
    const newUser = {
      id: v4(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      facultyId: req.body.faculty,
      roleId: roles.student,
    };
    const user = await db('users').insert(newUser).returning('*');
    return res.json(user);
  });

  // Register HTTP endpoint to create new user
  app.post('/api/v1/user/login', async function(req, res) {
    // get users credentials from the JSON body
    const { username, password } = req.body
    if (!username) {
      // If the username isn't present, return an HTTP unauthorized code
      return res.status(401);
    }

    // validate the password against our data
    // if invalid, send an unauthorized code
    const expectedPassword = users[username]
    if (!expectedPassword || expectedPassword !== password) {
      res.status(401).end()
      return
    }

    // generate a random UUID as the session token
    const sessionToken = uuid.v4()

    // set the expiry time as 120s after the current time
    const now = new Date()
    const expiresAt = new Date(+now + 120 * 1000)

    // create a session containing information about the user and expiry time
    const session = new Session(username, expiresAt)
    // add the session information to the sessions map
    sessions[sessionToken] = session

    // In the response, set a cookie on the client with the name "session_cookie"
    // and the value as the UUID we generated. We also set the expiry time
    res.cookie("session_token", sessionToken, { expires: expiresAt })
    res.end()
  });
};
