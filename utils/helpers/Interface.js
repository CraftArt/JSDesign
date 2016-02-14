'use strict';

/*Usage:
* var interface = new Interface('InterfaceName', ['methodA', 'methodB']);
* var implementor = {
*   publicProp: 'value',
*   fun: {
*       methodA: function(){
*           return 'In Overridden function A';;
*       },
*       methodB: function(){
*           return 'In Overridden function B';
*       }
*   }
* }
* function ClassName(conf){
*   //Implements check
*   Interface.ensureImplements(conf.fun, interface);
*   this.name = conf.publicProp;
*   this.methods = conf.fun;
* }
*
* var objectName = new ClassName(implementor);
*
* */

var Interface = function(interfaceName, methods){
    if(arguments.length != 2){
        throw new Error('Interface constructor called '+arguments.length+' arguments.');
    }

    this.name = interfaceName;
    this.methods=[];

    for(var i=0, len = methods.length; i < len; i++){
        if(typeof methods[i] !== 'string'){
            throw new Error('Interface Constructor expects method name as String');
        }
        this.methods.push(methods[i]);
    }
}

//Static method enforcing Implementation by the implementing object
Interface.ensureImplements = function(object){
    if(arguments.length < 2){
        throw new Error('Interface.ensureImplements expects 2 arguments but got '+arguments.length);
    }

    for(var i = 1, len = arguments.length; i< len; i++){
        var _interface = arguments[i];
        //check if object is an instance of Interface
        if(_interface.constructor !== Interface){
            throw new Error('Interface.ensureImplements expects the second argument to be an instance of the Interface constructor.');
        }
        for(var j = 0, methodsLen = _interface.methods.length; j< methodsLen; j++){
            var method = _interface.methods[j];
            if(!object[method] || typeof object[method] !== 'function'){
                throw new Error('This Class does not implement the ' + _interface.name + ' interface correctly. The method ' + method + ' was not found.');
            }
        }
    }
}

/*
* Interface Constructor exported
* Usage: var InterfaceLib = require('PathTOThisModule');
* var iName = new InterfaceLib('iName', [methods]);
* */
module.exports = Interface;