const express = require("express");
const cors = require("cors");

var app = express();
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//End-point to get webhook calls from Event Mesh
app.post("/", function (req, res) {
  //Check the body and send acknowledge response back
  if (req.body.message == '') {
    error = 'no message';
    console.error("Error - " + error);
    res.send(error);
  } else {
    console.log("Body message: " + JSON.stringify(req.body));
    var jsonResponse = JSON.stringify({response: 'Thanks, message received!'});
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(jsonResponse);
  }
});
  var port = process.env.PORT || 30000;
  app.listen(port, function () {
    console.log("app listening on port " + port);
});