// WARNING: intentionally vulnerable file for security gate testing
const crypto = require("crypto");
const vm = require("vm");
const { exec } = require("child_process");

// S5542: weak cipher algorithm - SonarQube Vulnerability
function encryptData(data) {
  const cipher = crypto.createCipher("des", "weakkey");
  return cipher.update(data, "utf8", "hex") + cipher.final("hex");
}

// S2083: path traversal - SonarQube Vulnerability
const fs = require("fs");
function readFile(userInput) {
  return fs.readFileSync("/var/data/" + userInput);
}

// S4790: weak hashing - SonarQube Vulnerability
function hashPassword(pwd) {
  return crypto.createHash("md5").update(pwd).digest("hex");
}

// CRITICAL: S4721 - OS command injection (SonarQube CRITICAL)
// User input passed directly to exec without sanitization
function runCommand(userInput) {
  exec("ls " + userInput, (err, stdout) => {
    console.log(stdout);
  });
}

// CRITICAL: S1523 - Code injection via eval (SonarQube CRITICAL)
// Dynamically executing user-controlled code
function calculate(expression) {
  return eval(expression);
}

// CRITICAL: SQL Injection - S3649 (SonarQube CRITICAL)
// User input concatenated directly into SQL query
function getUserById(db, userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.query(query);
}

module.exports = { encryptData, readFile, hashPassword, runCommand, calculate, getUserById };
