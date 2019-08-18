/*!
 * name: next-interface
 * url: https://github.com/afeiship/next-interface
 * version: 1.0.0
 * date: 2019-08-18T14:54:50.947Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxInterface = nx.declare('nx.Interface', {
    statics: {
      ensure: function(inObject, inImplements) {
        var len = inImplements.length;
        for (var i = 0; i < len; i++) {
          var interf = inImplements[i];
          if (interf.constructor !== NxInterface) {
            nx.error('Function Interface.ensure expect args');
          }
          var methods = interf.methods;
          for (var j = 0; j < methods.length; j++) {
            var method = methods[j];
            if (!inObject[method] || typeof inObject[method] !== 'function') {
              nx.error('Interface ' + method + ' must be implement!');
            }
          }
        }
      }
    },
    methods: {
      init: function(inName, inMethods) {
        this.name = inName;
        this.methods = nx.slice(inMethods);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxInterface;
  }
})();

//# sourceMappingURL=next-interface.js.map
