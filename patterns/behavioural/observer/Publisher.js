'use strict';

/*global module, require*/
var Publisher = function Publisher(pubName) {

    var _subscriptionList = {};

    this.id = pubName;
    this.attach = function attach(subscriber){
        if(!_subscriptionList[subscriber.id]){
            _subscriptionList[subscriber.id] = {};
            _subscriptionList[subscriber.id].update = subscriber.update;
            return "Subscriber " + subscriber.id + ' registered with ' + this.id + 'publisher';
        } else{
            return "Subscriber " + subscriber.id + ' already listening to ' + this.id + 'publisher';
        }
    };

    this.detach = function detach(subscriber){
        if(!_subscriptionList[subscriber.id]){
            return 'Subscriber ' + subscriber.id + ' not found to detach from ' + this.id;
        }
        _subscriptionList[subscriber.id] = null;
        return 'Subscriber ' + subscriber.id + ' found and detached from ' + this.id;
    };

    this.publish = function publish(id) {
        //Arguments not accessible as an array by using args
        var args = [].splice.call(arguments, 1);
        if (!_subscriptionList[id]) {
            return 'Subscriber ' + id + ' not yet subscribed to '+ this.id;
        } else {
            _subscriptionList[id].update();
        }
        return 'Event published from dummyPublisher to dummySubscriber.';
    };
};

module.exports = Publisher;