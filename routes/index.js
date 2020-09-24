var express = require('express');
let fs = require("fs");
let db = "data/data.json";
var router = express.Router();

var data = {
  serverData: {
	  version: "0.1",
	  started: new Date()
  }
}

let posts = [];

try {
  let file = fs.readFileSync(db, {encoding:'utf8'});
  posts = JSON.parse(file);
} catch(e) {
  console.log(`Error reading file: ${db}.  ${e}`);
  fs.writeFileSync(db, JSON.stringify(posts));
}

data.posts = posts;
data.messages = posts.length;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("messages", {data});
});

router.post('/document-event', function(req, res, next) {
  let store = req.body;
  posts.push(store);

  data.messages = posts.length;
  fs.writeFileSync(db, JSON.stringify(posts));
  res.send(store);
});


module.exports = router;
