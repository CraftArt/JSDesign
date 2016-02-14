'use strict';

module.exports = (function(){
    var _behavorial = require('./behaviorial'),
        _creational = require('./creational'),
        _structural = require('./structural'),
        _pubsub = require('./pubsub');

    return{
        command     : _behavorial.command,
        template    : _behavorial.template,

        publisher   : _pubsub.publisher,
        subscriber  : _pubsub.subscriber,

        dummyC      : _creational.dummy,
        dummyS      : _structural.dummy
    }
})();