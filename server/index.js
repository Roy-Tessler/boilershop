/* eslint-disable quotes */

// npm packages
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");

// basic connections
const app = express();
const db = require("./db/db");

// setup a database store for all sessions so they're not just stored in server memory
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dbStore = new SequelizeStore({ db });
dbStore.sync();

// logging middleware
app.use(morgan("dev"));

// static files path
app.use(express.static(path.join(__dirname, "../public")));

// parsing middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*** SESSION MANAGEMENT ***/
// session management using connect-session-sequelize as set above
const { Customer } = require("./db");
const SESSION_SECRET = require("../secret");

app.use(
  session({
    secret: process.env.SESSION_SECRET || SESSION_SECRET,
    store: dbStore,
    resave: false,
    saveUninitialized: false
  })
);

// using `passport` package for managing logins
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((customer, done) => {
  try {
    done(null, customer.id);
  } catch (e) {
    done(e);
  }
});
passport.deserializeUser((id, done) => {
  Customer.findByPk(id)
    .then(customer => done(null, customer))
    .catch(done);
});
// routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));
app.use("/weather", require("./api/weather"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// initialization
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
db.sync().then(() => {
  app.listen(port, function() {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
  });
});
