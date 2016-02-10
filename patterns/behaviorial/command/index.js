"use strict";

/*
* This module holds all the commands to demo multiple design patterns
* */
var commands = require("./commandConfigs"),
    _Command = require("./Command");

module.exports = (function(){

    var _dummyCommmand = new _Command(commands.dummy);
    return {
        //TemplateCommand: _TemplateCommand,
        dummyCommand: _dummyCommmand
    }

})();