require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});