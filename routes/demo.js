'use strict';

/*global module, require*/
var express = require('express'),
    router = express.Router(),
    controller = require(appRoot + 'controllers');

/* GET demo listing. */
router.get('/', function(req, res) {
    res.send('You have reached the GOF demo.');
});

router.get('/command', function(req, res){
    res.send(controller.dummyCommandOutput);
});

router.get('/publish', function(req, res){
    var result = controller.publish();
    res.send( result );
});

router.get('/subscribe', function(req, res){
    var result = controller.subscribe();
    res.send( result );
});

router.get('/unsubscribe', function(req, res){
    var result = controller.unsubscribe();
    res.send(result);
});

module.exports = router;
