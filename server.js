const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api")(app);
require("./routes/html")(app);
require("./routes/scrape")(app);

//const MONGODB_URI



app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
