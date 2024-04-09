const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const cors = require('cors');
const route = require('./api/routes/Route.js');
const routes = require('./api/routes/Auth.js');
const path = require('path');
dotenv.config();
const envFilePath = path.resolve(__dirname, '.env');

// Load environment variables from the custom .env file
dotenv.config({ path: envFilePath });
 

mongoose.connect(process.env.MONGO_URL, {

}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000; // Use the environment port or default to 8000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/project", route);
app.use("/admin", routes);

// Deployment
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/Portfolio_website/dist")));
  
    app.get("*", (req, res) => 
      res.sendFile(path.resolve(__dirname1, "Portfolio_website", "dist", "index.html"))
    );
  }
else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
