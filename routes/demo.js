var express = require('express');
var router = express.Router();
var patterns = require("root/patterns");
var dummyCom= patterns.command.dummyCommand;
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/command', function(req, res, next){
    res.send(dummyCom.execute());
});

module.exports = router;