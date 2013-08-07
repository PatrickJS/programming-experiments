/*
  An easy way to reverse an array is by building a new array of the same size
  but in the opposite order. However, this requires as much extra memory as the
  original array takes up. In-place reversal is a technique that requires no
  extra space. Write an in-place array reversal algorithm that requires O(1)
  space.
*/
/**
 * Given an arbitrary input array, write a function that reverses the contents
 * of the array. Don't use the native Array.prototype.reverse() method.
 *
 * Extra Credit: Don't use an extra array.
 *
 *
 * Here's a sample input to get you going:
 *
 *   [1, 8, 39, null, 2, 9, 'bob']
 */


var reverseArray = function(arr){
  var arrLen = arr.length - 1;
  var halfArrLen = arrLen/2;

  for (var i = 0; i < halfArrLen; i++) {
    var temp = arr[i]
    arr[i] = arr[arrLen - i];
    arr[arrLen - i] = temp;
  }
  return arr;
};

// test
var arr = [1, 8, 39, null, 2, 9, 'bob'];
console.log(reverseArray(arr));
console.log('reversed?: ',reverseArray(arr) === arr.reverse());
