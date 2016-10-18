var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
  res.json({'testMessage': 'everything is going to be ok', 'someNumber': 457});
});

module.exports = router;
