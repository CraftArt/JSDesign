'use strict';

/*global module, require*/
var Subscriber = function Subscriber(subName, onEventCallback){
    this.id = subName;
    this.update = onEventCallback;

    this.subscribe = function subscribe(publisher){
        return publisher.attach(this);
    };

    this.unsubscribe = function unsubscribe(publisher){
        return publisher.detach(this);
    };
};

module.exports = Subscriber;