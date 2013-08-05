/**
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 */

var mixEvents = function() {

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

