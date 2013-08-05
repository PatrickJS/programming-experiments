/**
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 */

var mixEvents = function(obj) {
  obj._events = {};
  obj.on = function(event, callback) {
    if (!obj._events[event]) {
      obj._events[event] = [];
    }
    obj._events[event].push(callback);
  }
  obj.trigger = function(event, args) {
    for (var i = 0; i < obj._events[event].length; i++) {
      obj._events[event][i].apply(obj, args);
    }
  }
  return obj;
};


// Consumption code
var obj = {
  name: 'Alice',
  age: 30
};

mixEvents(obj);

obj.on('ageChange', function(){
  console.log('Age changed');
});

obj.age++;
obj.trigger('ageChange');
obj.trigger('ageChange');
obj.trigger('ageChange');
// => Should log 'Age changed'

