"use strict"

module.exports = function(){

    var _dummy= {
        _value: "DummyValue",
        actions: {
            execute: function(){
                return "I am a " + this._value;
            }
        }
    };
    return {
        dummy: _dummy
    }
}