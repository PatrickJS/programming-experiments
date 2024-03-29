/**
 * Write a function that accepts a number `n` as its input and returns a boolean
 * value representing whether or not `n` is a power of 2.
 *
 * If your answer is iterative, try solving it using recursion (and vice versa).
 * Once you've solved the problem both ways, see if you can devise a clever way
 * of solving the problem using bitwise operators.
 */

Number.prototype.isPowerOfTwo = function() {
  return (this !== 0) && ((this & (this - 1)) === 0);
};



console.log((10).isPowerOfTwo());
console.log((4).isPowerOfTwo());
