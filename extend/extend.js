var pJS = window.pJS || {};

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
          this.deepExtend(obj, args[i][key])
        } else {
          obj[key] = args[i][key];
        }
      }
    }
    return obj;
  };

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

  var firstPerson = pjs.extend(person, arms, legs);
  console.log(firstPerson);
  var newPerson = pjs.deepExtend({}, person, arms, legs);
  console.log(newPerson);

}(pJS));
