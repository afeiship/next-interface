(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxInterface = nx.declare('nx.Interface', {
    statics: {
      ensure: function(inObject, inImplements) {
        var len = inImplements.length;
        for (var i = 0; i < len; i++) {
          var interface = inImplements[i];
          if (interface.constructor !== NxInterface) {
            nx.error('Function Interface.ensure expect args');
          }
          var methods = interface.methods;
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
