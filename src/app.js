const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");

const app = express();

// Settings
const port = process.env.PORT || 3000;
app.set("port", port);
// Views Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Other settigns.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// Sessions settings
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
  })
);



// Routes
app.use(require("./routes/index"));

// Static files.

// Starting the server.
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
