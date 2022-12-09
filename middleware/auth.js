const { v4 } = require('uuid');
const db = require('../db');
const roles = require('../constants/roles');

module.exports = function(req, res, next) {
  // if this request doesn't have any cookies, that means it isn't
  // authenticated. Return an error code.
  if (!req.cookies) {
    res.status(401).end()
    return
  }

  // We can obtain the session token from the requests cookies, which come with every request
  const sessionToken = req.cookies['session_token']
  if (!sessionToken) {
    // If the cookie is not set, return an unauthorized status
    res.status(401).end()
    return
  }

  // We then get the session of the user from our session map
  // that we set in the signinHandler
  userSession = sessions[sessionToken]
  if (!userSession) {
    // If the session token is not present in session map, return an unauthorized error
    res.status(401).end()
    return
  }
  // if the session has expired, return an unauthorized error, and delete the 
  // session from our map
  if (userSession.isExpired()) {
    delete sessions[sessionToken]
    res.status(401).end()
    return
  }

  // If all checks have passed, we can consider the user authenticated and
  // send a welcome message
  res.send(`Welcome  ${userSession.username}!`).end()
};
