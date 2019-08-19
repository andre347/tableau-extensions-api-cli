const path = require("path");
const os = require("os");

module.exports = questions = [
  {
    type: "text",
    name: "name",
    message: "What is the name of the Extension?",
    default: path.basename(process.cwd())
  },
  {
    type: "input",
    name: "version",
    message: "What is the version?",
    default: "1.0"
  },
  {
    type: "text",
    name: "description",
    message: "What is the description?"
  },
  {
    type: "text",
    name: "author",
    message: "What is your name?",
    default: os.userInfo().username
  },
  {
    type: "text",
    name: "email",
    message: "What is your e-mail address?"
  },
  {
    type: "text",
    name: "organization",
    message: "What is your organization name?"
  },
  {
    type: "text",
    name: "organizationURL",
    message: "What is your organization url?"
  },
  {
    type: "text",
    name: "url",
    message: "What is the URL of the Extension (HTTP/S)?",
    default: "http://localhost:3000"
  },
  {
    type: "confirm",
    name: "fulldata",
    message: "Do you need full data access?",
    default: false
  },
  {
    type: "confirm",
    name: "config",
    message: "Use Config Window?",
    default: true
  }
];
