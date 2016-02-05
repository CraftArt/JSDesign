"use strict";

/*
* This module holds all the commands to demo multiple design patterns
* */
var utils = require("/utils"),
    commands = require("./commandConfigs"),
    Interface = utils.Interface;

module.exports = (function(){

    var _CommandInterface = new Interface("_CommandInterface", ["execute"]),

        _Command = function(commandConfig){
            Interface.ensureImplements(commandConfig.actions, _CommandInterface);
            this.execute = commandConfig.actions.execute;
            this.value = commandConfig.value;
        };

    return {
        //TemplateCommand: _TemplateCommand,
        dummyCommand: new _Command(commands.dummy)
    }

})();