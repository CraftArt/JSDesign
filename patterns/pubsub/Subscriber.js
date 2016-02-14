'use strict';

var Subscriber = function Subscriber(){

    var _cache = require('./cache');
    var _subscribe = function(id, callback){
        if(!_cache[id]){
            _cache[id] = [callback];
        } else {
            _cache[id].push(callback);
        }
    };

    this.subscribe = _subscribe;
};

module.exports = Subscriber;