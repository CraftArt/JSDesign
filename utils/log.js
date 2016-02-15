'use strict';

/*global module, require*/
module.exports = (function(){
    var _log = '';
    var _add = function(msg){
        _log += msg + '\n';
    };

    var _show = function(){
        console.log(_log);
    };

    return {
        add: _add,
        show: _show
    };
});