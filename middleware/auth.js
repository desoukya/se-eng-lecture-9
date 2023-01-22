const { v4 } = require('uuid');
const db = require('../connectors/db');
const roles = require('../constants/roles');
const { getSessionToken } = require('../utils/session');

module.exports = async function(req, res, next) {
  const sessionToken = getSessionToken(req);
  if (!sessionToken) {
    return res.status(301).redirect('/');
  }

  // Get the session of the user from the database
  const userSession = await db.select('*').from('se_project.sessions').where('token', sessionToken).first();
  if (!userSession) {
    // If the session token is not present in database, return an unauthorized error
    return res.status(301).redirect('/');
  }
  // if the session has expired, return an unauthorized error
  if (new Date() > userSession.expiresAt) {
    return res.status(301).redirect('/');
  }

  // If all checks have passed, we can consider the user authenticated
  next();
};
