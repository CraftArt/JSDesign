'use strict';

/*global module, require*/
module.exports = (function(){
    var _behavioural = require('./behavioural'),
        _creational = require('./creational'),
        _structural = require('./structural');

    return{
        command     : _behavioural.command,
        template    : _behavioural.template,
        observer    : _behavioural.observer,

        dummyC      : _creational.dummy,
        dummyS      : _structural.dummy
    };
})();
