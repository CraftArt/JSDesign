'use strict';

/*global module, require*/
var Pact = function(){

    var status = 'progress',
        fail = [],
        done = [],
        result;

    this.done = function(signMeUp){
        done.push(signMeUp);

        if(status === 'done'){
            signMeUp(result);
        }

        return this;
    };

    this.resolve = function(bravo){

        if(status != 'progress'){
            throw 'Pact already honored with a status ' + status;
        }

        status = 'done';
        result = bravo;

        // The result fed to all the callbacks should always be the same, Thus the name Pact
        for(var i= 0, length=done.length ; i<length; i++){
            done[i](result);
        }

        return this;
    };

    this.fail = function(thumbsDown){

        if(status != 'progress'){
            throw 'Pact already honored with a status ' + status;
        }

        status = 'failed';
        result = thumbsDown;

        for(var i= 0, length = fail.length ; i<length; i++){
            fail[i](result);
        }

        return this;
    };

    this.failed = function(thereThere){
        fail.push(thereThere);

        if(status === 'failed'){
            thereThere(result);
        }

        return this;
    };
};

module.exports = Pact;