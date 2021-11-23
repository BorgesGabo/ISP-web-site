const express = require("express");
const bodyParser = require("body-parser");
// const port = 5000;

//create express app
const app = express();

// //create cors
// const cors = require("cors");

//setup server port
const port = process.env.PORT || 5000;

//parse requests of content-type- application/JSON
app.use(express.json());

//define the root route
app.get("/", (req, res) => {
  res.json({
    greeting: "hello world",
  });
});

//require user routes
const userRoutes = require("../server/config/src/routes/user.routes");

// using as a middleware
app.use("/api/v1/users", userRoutes);

app.listen(port, () => console.log(`express server is running at port ${port}`));
