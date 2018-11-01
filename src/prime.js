'use strict';

/**
 *
 *
 * @param {number} n - an non negative integer
 * @return {boolean} - if n is a prime number, it returns true, otherwise it returns false
 */
function isPrime(n) {
  if (!isInteger(n)) throw new Error('Must be an integer');
  if (n < 0) throw new Error('Must be an integer non negative value');
  if (n === 0 || n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i < Math.sqrt(n) + 1; i = i + 2) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 *
 *
 * @param {number} n - an non negative integer
 * @return {number} - returns the nth prime number
 */
function getNthPrime(n) {
  if (!isInteger(n)) throw new Error('n must be an integer');
  if (n <= 0) throw new Error('n must be greater than 0');
  if (n === 1) return 2;

  const pidata = require('./piarray');
  const pi = pidata.piarray;
  const binSize = pidata.binSize;
  const numberOfBins = pidata.numberOfBins;

  let binWhereIsNthPrime;
  for (let bin = 0; bin < numberOfBins; bin++) {
    if (pi[bin] >= n) {
      binWhereIsNthPrime = bin;
      break;
    }
  }

  const lastNumberOfBin = (binWhereIsNthPrime + 1) * binSize - 1;

  let flags = [];
  for (let i = 0; i < binSize; i++) {
    flags[i] = false;
  }

  if (binWhereIsNthPrime === 0) {
    flags[0] = true; // Zero is not a prime number
    flags[1] = true; // One is not a prime number
  }

  const firstNumberOfBin = binWhereIsNthPrime * binSize;

  // sieve bin using prime numbers up to sqrt(lastNumberOfBin)
  for (let i = 2; i <= Math.sqrt(lastNumberOfBin); i++) {
    if (isPrime(i)) {
      let aux = Math.floor(firstNumberOfBin / i); // get the floor
      let firstMultipleOfiGreaterOrEqualThanFirstNumberOfBin;
      if (aux * i === firstNumberOfBin) {
        firstMultipleOfiGreaterOrEqualThanFirstNumberOfBin = aux * i;
      } else {
        firstMultipleOfiGreaterOrEqualThanFirstNumberOfBin = aux * i + i;
      }
      for (let j = firstMultipleOfiGreaterOrEqualThanFirstNumberOfBin - firstNumberOfBin; j < binSize; j += i) {
        // we can not set flag in the prime number, only in its multiples
        if (j + firstNumberOfBin !== i) {
          flags[j] = true;
        }
      }
    }
  }

  // we are located in the position of the last prime number previous to binWherIsNthPrime
  let j;
  if (binWhereIsNthPrime === 0) {
    j = 0;
  } else {
    j = pi[binWhereIsNthPrime - 1];
  }

  // we find the nth prime number in not set flags (prime numbers in the bin)
  for (let i = 0; i < binSize; i++) {
    if (flags[i] === false) {
      j++;
      if (j === n) {
        return firstNumberOfBin + i;
      }
    }
  }

  throw new Error('The answer was not found');
}

/**
 *
 *
 * @param {*} number
 * @return {boolean} - if n is a integer, it returns true, otherwise it returns false
 */
function isInteger(number) {
  return Math.round(number) === number;
}

// console.log(getNthPrime(2119654578));

module.exports.isPrime = isPrime;
module.exports.getNthPrime = getNthPrime;
