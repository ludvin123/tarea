const express = require("express");
const app     = express();
const path    = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));

app.use("/", express.static("public"));

app.post("/find", (request, response) => {
   console.log(request.body.first_name);
   console.log(request.body.full_name);
   console.log(request.body.gender);
   console.log(request.body.old);
   console.log(request.body.music);
   response.json({"method": "post", "success": true});
});

app.get("/find", (request, response) => {
   console.log(request.query.first_name);
   console.log(request.query.full_name);
   console.log(request.query.gender);
   console.log(request.query.old);
   console.log(request.query.music);
   response.json({"method": "get", "success": true});
});



app.listen(8080, function () {
 console.log('Listening on port 8080!')
})
