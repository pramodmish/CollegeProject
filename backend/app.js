const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const cookie = require("cookie-parser");
const userRoutes = require("./Routers/userRouter");
const blogRouter = require("./Routers/blogRouter");
dotenv.config({ path: ".env" });
const mongo = require("./DB/connection");
mongo.connecting();
const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookie());
app.use("/api/v1", userRoutes);
app.use("/api/v1", blogRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is run on port:${process.env.PORT}`);
});
