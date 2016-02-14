"use strict";

var Publisher = function Publisher() {

    var _cache = require("./cache");
    var _publish = function (id) {
        //Arguments not accessible as an array by using args
        var args = [].splice.call(arguments, 1);

        //Check if id is already used, if not, make it an empty array so that callbacks could be pushed inside it
        if (!_cache[id]) {
            _cache[id] = [];
        }

        //
        for (var i = 0, length = _cache[id].length; i < length; i++) {
            //This context is null, apply used as it takes an array of argument
            //so we need not worry about the argument structure as to how it might look like unlike call()
            _cache[id][i].apply(null, args);
        }
    };

    this.publish = _publish;
};

module.exports = Publisher;