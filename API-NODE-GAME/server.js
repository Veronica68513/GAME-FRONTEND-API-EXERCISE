const express = require("express");
const cors = require("cors");
const app = express();

// CORS: define url frontend app (permit cors)
var corsOptions = {
  origin: "http://localhost:4200"
};

// permit access from url frontend app
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// connect to database
const db = require("./app/models");
db.mongoose.set('strictQuery', false);
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("¡Congratulations! ¡Connected to the database!");
  })
  .catch(err => {
    console.log("¡Cannot connect to the database! Revise the error:", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "¡Welcome to our game API!" });
});

//require routes
require("./app/routes/game.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
