var express = require('express');
var router = express.Router();
var patterns = require("root/patterns");
var dummyCom = patterns.command.dummyCommand;
var publisher = patterns.publisher;
var subscriber = patterns.subscriber;

/* GET demo listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/command', function(req, res, next){
    res.send(dummyCom.execute());
});

router.get('/publish', function(req, res, next){
    res.send(publisher.publish("testPub"));
});

router.get('/subscribe', function(req, res, next){
    res.send(subscriber.subscribe("testPub", function(dataFromPublisher){
        console.log("Subscribed successfully.");
    }));
});

module.exports = router;
