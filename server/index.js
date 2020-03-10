const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const path = require('path');
const weatherRouter = require("./routes/weather.route");

require("dotenv").config()

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));  
  } 
)

app.use("/weather", weatherRouter);

app.listen(port, () => console.log('Up and running'))