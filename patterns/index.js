"use strict";

module.exports = (function(){
    var _behavorial = require("./behaviorial"),
        _creational = require("./creational"),
        _structural = require("./structural");

    return{
        command : _behavorial.command,
        template: _behavorial.template,

        dummyC  : _creational.dummy,
        dummyS  : _structural.dummy
    }
})();