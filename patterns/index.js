"use strict";

module.exports = (function(){
    var _behavorial = require("./behaviorial"),
        _creational = require("./creational"),
        _structural = require("./structural"),
        _general = require("./general");

    return{
        command : _behavorial.command,
        template: _behavorial.template,
        general: _general,

        dummyC  : _creational.dummy,
        dummyS  : _structural.dummy
    }
})();