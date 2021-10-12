const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

const routeApi = require("./src/config/routes/api_route");
const routeUser = require("./src/config/routes/user_route");
const routeFavorite = require("./src/config/routes/favorite_route");

app.use(
  session({
    secret: "showcaseprd",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});
app.use(express.json());
app.use(routeApi);
app.use(routeUser);
app.use(routeFavorite);

const port = process.eventNames.PORT || 3010;

app.listen(port, () => {
  console.log(`Server is running in port ${port} !`);
});
