// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var express = require("express");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// ================================================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app, path);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});