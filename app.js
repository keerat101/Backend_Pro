const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const apiRoutes = require("./routes/api");

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
