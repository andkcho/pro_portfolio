// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // root route loads contact.html which is the page that users can leave me
  // contact info if they are interested in hiring me.
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  });

  app.get("/resume", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resume.html"))
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"))
  });

};
