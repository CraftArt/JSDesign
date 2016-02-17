'use strict';

/*global module, require*/
module.exports = (function(){

    var Publisher = require('./Publisher'),
        Subscriber = require('./Subscriber');

    var _publisher = new Publisher('dummyPublisher'),
        _subscriber = new Subscriber('dummySubscriber', function update(){
            console.log("I'll be called for all publish events");
        });


    return{
        publisher   : _publisher,
        subscriber  : _subscriber
    };
})();