var express = require('express');
var router = express.Router();

var posts = [];

router.get('/', function(req, res, next) {
  let send = "Total posts stored: " + posts.length + "<br>";
  send += JSON.stringify(posts, "<br>", 2);
  res.send(posts);
});

router.post('/document-event', function(req, res, next) {
  posts.push(req.body);

  res.send({status: 'success', body: req.body});
});


module.exports = router;
