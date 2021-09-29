const express = require("express");
const app = express();

const routeApi = require("./src/config/routes/api_route");
const routeUser = require("./src/config/routes/user_route");

app.use(routeApi);
app.use(routeUser);
app.use(express.json());

const port = process.eventNames.PORT || 3010;

app.listen(port, () => {
  console.log(`Server is running in port ${port} !`);
});
