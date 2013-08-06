var pJS = window.pJS || {};

;(function(pjs) {

  pjs.bind = function(method, context) {

    return function(args) {
      args = args && [].slice.call(args);
      method.apply(context, args);
    };
  };

  var alice = {
   name: 'alice',
   shout: function(){
     alert(this.name);
   }
  };
  var boundShout = pJS.bind(alice.shout, alice);
  boundShout(); // alerts 'alice'
  boundShout = pJS.bind(alice.shout, {name: 'bob'});
  boundShout(); // alerts 'bob'

}(pJS));
