"use strict";

/*
* This module holds all the commands to demo multiple design patterns
* */
var utils = require("/utils"),
    Interface = utils.Interface,
    dummyCommandConfig= {
        _value: "DummyValue",
        actions: {
            execute: function(){
                return "I am a " + this._value;
            }
        }
    };


module.exports = (function(){

    var _CommandInterface = new Interface("_CommandInterface", ["execute"]),

        _Command = function(commandConfig){
            Interface.ensureImplements(commandConfig.actions, _CommandInterface);
            this.execute = commandConfig.actions.execute;
            this.value = commandConfig.value;
        };

    return {
        //TemplateCommand: _TemplateCommand,
        DummyCommand: new _Command(dummyCommandConfig)
    }

});