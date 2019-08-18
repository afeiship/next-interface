(function() {
  var nx = require('next-js-core2');
  var NxInterface = require('../src/next-interface');

  describe('NxInterface.methods', function() {
    test('init', function() {
      var interface1 = new NxInterface('AbstractStore', ['set', 'get', 'del', 'clear']);

      console.log(interface1);


      // console.log(rs1, rs2);

      // expect(rs1).toBe(true);
    });
  });
})();
