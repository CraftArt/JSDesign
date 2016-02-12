"use strict";

module.exports = (function(){

    var _pub = require("./publisher");
    var _sub = require("./subscriber");

    return{
        publisher: _pub,
        subscriber: _sub
    };
})();