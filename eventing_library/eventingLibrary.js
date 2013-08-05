/**
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 */

var mixEvents = function(obj) {
  obj._events = {};
  obj.on = function(event, callback) {
    obj._events[event] = callback;
  }
  obj.trigger = function(event, args) {
    obj._events[event].apply(obj, args);
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
// => Should log 'Age changed'

