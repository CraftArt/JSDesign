"use strict";

module.exports = (function(){

    var _cache = require("./cache");
    var _sub = function(id, callback){
        if(!cache[id]){
            cache[id] = [callback];
        } else {
            cache[id].push(callback);
        }
    };

    return{
        sub: _sub
    }
})();