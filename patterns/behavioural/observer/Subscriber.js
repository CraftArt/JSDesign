'use strict';

/*global module, require*/
var Subscriber = function Subscriber(subName, onEventCallback){
    this.id = subName;
    this.update = onEventCallback;

    this.subscribe = function subscribe(publisher){
        publisher.attach(this);
    };

    this.unsubscribe = function unsubscribe(publisher){
        publisher.detach(this);
    };
};

module.exports = Subscriber;