"use strict"

var utils = require("root/utils"),
    Interface = utils.Interface;

var _CommandInterface = new Interface("_CommandInterface", ["execute"])
var _Command = function(commandConfig){
    if(commandConfig === undefined){
        return;
    }
    Interface.ensureImplements(commandConfig.actions, _CommandInterface);
    this.execute = commandConfig.actions.execute;
    this.value = commandConfig.value;
};

module.exports = _Command;