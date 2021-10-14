const express = require("express");
const app = express();

const routeApi = require("./src/config/routes/api_route");
const routeUser = require("./src/config/routes/user_route");
const routeFavorite = require("./src/config/routes/favorite_route");

app.use(express.json());
app.use(routeApi);
app.use(routeUser);
app.use(routeFavorite);

const port = process.eventNames.PORT || 3010;

app.listen(port, () => {
  console.log(`Server is running in port ${port} !`);
});
