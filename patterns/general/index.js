'use strict';

/*global module, require*/

var Pact = require('./Pact');

module.exports = (function(){
    var _pact = new Pact();
    return {
        promise: _pact
    };
})();