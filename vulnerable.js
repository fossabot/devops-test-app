// WARNING: intentionally vulnerable file for security gate testing
const DB_PASSWORD = "SuperSecret123!";
const ADMIN_TOKEN = "hardcoded-api-key-abc123xyz";
const SECRET_KEY = "my-secret-key-do-not-share";

function getDbConfig() {
  return {
    host: "localhost",
    user: "admin",
    password: DB_PASSWORD,
    token: ADMIN_TOKEN,
  };
}

module.exports = { getDbConfig };
