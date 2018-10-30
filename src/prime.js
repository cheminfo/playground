'use strict';

function isPrime(n) {
  if (!isInteger(n)) throw new Error('Must be an integer');
  if (n < 0) throw new Error('Must be an non negative value');
  if (n === 0 || n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (var i = 3; i < Math.sqrt(n) + 1; i = i + 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function getNthPrime(n) {
  if (!isInteger(n)) throw new Error('n must be an integer');
  if (n <= 0) throw new Error('n must be greater than 0');
  if (n === 1) return 2;
  var countPrimes = 1;
  var imax = 2000000;
  for (var i = 3; i < imax; i = i + 2) {
    if (this.isPrime(i)) {
      countPrimes++;
      if (n === countPrimes) {
        return i;
      }
    }
  }
  throw new Error('The answer was not found, maximum iterations reached');
}

function isInteger(number) {
  return Math.round(number) === number;
}

module.exports.isPrime = isPrime;
module.exports.getNthPrime = getNthPrime;
