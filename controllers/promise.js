'use strict';

/*global module, require, appRoot*/
var promise = require(appRoot + 'patterns/general').promise;

setTimeout(function(){
    promise.resolve();
}, 2000);

setTimeout(function(){
    promise.done(function(data){
        console.log('I am done.');
    });
}, 2000);

promise.done(function(data){
    console.log('I m auto called.');
});

/*var promise2 = new Pact();
promise2.failed(function(data){

}).done(function(){

});*/