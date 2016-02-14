"use strict";

module.exports = (function () {

    var _cache = require("./cache");
    var _pub = function (id) {
        //Arguments not accessible as an array by using args
        var args = [].splice.call(arguments, 1);

        //Check if id is already used, if not, make it an empty array so that callbacks could be pushed inside it
        if (!_cache[id]) {
            cache[id] = [];
        }

        //
        for (var i = 0, length = cache[id].length; i < length; i++) {
            //This context is null, apply used as it takes an array of argument
            //so we need not worry about the argument structure as to how it might look like unlike call()
            cache[id][i].apply(null, args);
        }
    };

    return {
        pub: _pub
    }
})();