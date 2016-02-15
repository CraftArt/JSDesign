'use strict';

/*global module, require*/
module.exports = (function(){

    var Publisher = require('./Publisher'),
        Subscriber = require('./Subscriber');

    var _publisher = new Publisher(),
        _subscriber = new Subscriber();


    return{
        publisher   : _publisher,
        subscriber  : _subscriber
    };
})();