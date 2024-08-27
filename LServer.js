const express = require('express');
const path = require('path');
const fs = require("fs");


const app = express();

app.use(
    express.json(),
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.static(path.join(__dirname, 'FrontEnd')));

  app.get('/', (req, res) => {
  
    res.sendFile(path.join(__dirname, 'FrontEnd', 'WelcomePage.html'));
    
  });
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log("Example app listening on port 3000");
  });