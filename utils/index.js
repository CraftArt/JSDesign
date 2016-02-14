'use strict';

/*global module, require*/
module.exports = (function(){
    var _logger = require('./log');
    var _interface = require('./helpers/Interface');

    return {
        logger: _logger,
        Interface: _interface
    };

})();
