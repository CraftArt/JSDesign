'use strict';

/*global module, require*/
module.exports = (function(){

    var _dummy= {
        value: 'DummyValue',
        actions: {
            execute: function(){
                return 'I am a ' + this.value;
            }
        }
    };

    return {
        dummy: _dummy
    };
})();