/**
 * Extend is a function that copies all of the properties from a source object
 * onto the target object.
 *
 * A shallow-copy version of extend will copy all the top-level properties from
 * a source object, copying the value of all primitive values (strings, numbers,
 * etc.) but copying only a reference to objects and arrays.
 *
 * A deep-copy version of extend will recursively copy all properties of the
 * source object, giving the target a unique copy of any objects and arrays.
 *
 * Write a shallow-copy version of extend, and then write a deep-copy version.
 * Make your deep-copy extend handle an arbitrary number of source objects.
 */
window.pJS = pJS || {};

;(function(pjs) {
  pjs.extend = function(obj, args) {
    args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < args.length; i++) {
      for (var key in args[i]) {
        obj[key] = args[i][key];
      }
    }
    return obj;
  };

  pjs.deepExtend = function(obj, args) {
    args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < args.length; i++) {
      for (var key in args[i]) {
        if (typeof args[i][key] === 'object') {
          extend(obj, args[i][key])
        } else {
          obj[key] = args[i][key];
        }
      }
    }
    return obj;
  };

}(pJS));

;(function() {
  var person = {
    name: 'Alice',
    body: 'slim'
  },
  arms = {
    leftArm:  'left-hand',
    rightArm: {
      hand: {
        fingers: 5
      }
    }
  },
  legs = {
    leftLeg:  'left-leg',
    rightLeg: 'right-leg'
  };

  var firstPerson = pJS.extend(person, arms, legs);
  console.log(firstPerson);
  var newPerson = pJS.deepExtend({}, person, arms, legs);
  console.log(newPerson);

}());
