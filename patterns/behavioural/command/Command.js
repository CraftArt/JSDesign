'use strict';

/*global module, require*/
var utils = require(appRoot + 'utils'),
    Interface = utils.Interface;

//Command Interface enforcing execute method implementation
var _CommandInterface = new Interface('_CommandInterface', ['execute']);

var _Command = function(commandConfig){
    if(commandConfig === undefined){
        return;
    }
    Interface.ensureImplements(commandConfig.actions, _CommandInterface);
    this.execute = commandConfig.actions.execute;
    this.value = commandConfig.value;
};

module.exports = _Command;