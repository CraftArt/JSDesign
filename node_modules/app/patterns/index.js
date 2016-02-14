'use strict';

/*global module, require*/
module.exports = (function(){
    var _behavioural = require('./behavioural'),
        _creational = require('./creational'),
        _structural = require('./structural'),
        _pubsub = require('./pubsub');

    return{
        command     : _behavioural.command,
        template    : _behavioural.template,

        publisher   : _pubsub.publisher,
        subscriber  : _pubsub.subscriber,

        dummyC      : _creational.dummy,
        dummyS      : _structural.dummy
    };
})();
