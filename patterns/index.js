'use strict';

/*global module, require*/
module.exports = (function(){
    var _behavioural = require('./behavioural'),
        _creational = require('./creational'),
        _structural = require('./structural'),
        _promise = require('./general/pact');

    return{
        command     : _behavioural.command,
        template    : _behavioural.template,
        observer    : _behavioural.observer,

        Promise     : _general.promise,
        dummyC      : _creational.dummy,
        dummyS      : _structural.dummy
    };
})();
