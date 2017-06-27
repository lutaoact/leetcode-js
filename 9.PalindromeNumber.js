'use strict';

/*
9. Palindrome Number

Determine whether an integer is a palindrome. Do this without extra space.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x > 0 && x % 10 === 0)) return false;

  let sum = 0;
  while (x > sum) {
    sum = sum * 10 + x % 10;
    x = x / 10 | 0;
  }
  return x === sum || x === (sum / 10 | 0);
};

console.log(isPalindrome(10));
console.log(isPalindrome(121));
console.log(isPalindrome(10201));