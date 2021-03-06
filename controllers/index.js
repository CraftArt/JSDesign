'use strict';

/*global module, require*/
var patterns = require(appRoot + 'patterns'),
    dummyCom = patterns.command.dummyCommand,
    publisher = patterns.observer.publisher,
    subscriber = patterns.observer.subscriber,
    customPromise = require('./promise');

module.exports = (function(){

    var _dummyCommandOutput = dummyCom.execute();

    //Currently subscribing to only one pre-defined publisher
    var _observerSubscribe = function(){
        //Subscriber list in publisher populated with subscriber id as "dummySubscriber"
        return subscriber.subscribe(publisher);
    };

    var _observerEventPublish = function(){
        //Subscriber id set to "dummySubscriber" while subscriber instantiation
        return publisher.publish('dummySubscriber');
    };

    var _observerUnsubscribe = function(){
        return subscriber.unsubscribe(publisher);
    };

    return{
        dummyCommandOutput  : _dummyCommandOutput,
        publish             : _observerEventPublish,
        subscribe           : _observerSubscribe,
        unsubscribe         : _observerUnsubscribe
    };
})();