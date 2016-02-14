'use strict';

/*global module, require*/
var Subscriber = function Subscriber(){

    var _cache = require('./cache');
    this.subscribe = function(id, callback){
        if(!_cache[id]){
            _cache[id] = [callback];
        } else {
            _cache[id].push(callback);
        }
    };
};

module.exports = Subscriber;