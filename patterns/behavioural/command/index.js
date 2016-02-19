'use strict';

/*global module, require*/
/*
 * This module holds all the commands to demo multiple design patterns
 * */
var commands = require('./commandConfigs'),
    _Command = require('./Command');

module.exports = (function () {

    var _dummyCommand = new _Command(commands.dummy),
        _publishCommand = new _Command(commands.publish);

    return {
        //TemplateCommand: _TemplateCommand,
        dummyCommand: _dummyCommand,
        publishCommand: _publishCommand
    };

})();
