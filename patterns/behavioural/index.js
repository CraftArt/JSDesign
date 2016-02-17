'use strict';

/*global module, require*/
module.exports = (function(){
    var _command = require('./command'),
        _observer = require('./observer');

    return{
        command: _command,
        observer: _observer
    };
})();
