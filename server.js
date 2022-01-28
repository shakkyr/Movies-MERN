const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movie');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/movie', movieRoutes);


connectDB();

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    app.use(express.static("client/build"));
    // Express serve up index.html file if it doesn't recognize route
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  app.get("/", () => {
    resiszeBY.send("inside sever");
  });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));