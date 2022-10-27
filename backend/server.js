const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const userRoute = require("./router/user.route");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

port = process.env.PORT || 2000;

connectDB();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRoute);

app.listen(port, () => console.log(`Server listening on ${port}`));
