const express = require('express');
const upload = require('./helper/imageUpload')
var cors = require('cors')
const app = express();

app.use(cors())

const port = 3000

// image upload api
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(201).send(req.file);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



