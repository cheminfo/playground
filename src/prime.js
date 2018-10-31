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
  var binSize = 1000000;
  var numberOfBins = 50000;
  var pi = require('./piarray');

  if (!isInteger(n)) throw new Error('n must be an integer');
  if (n <= 0) throw new Error('n must be greater than 0');
  if (n === 1) return 2;

  var binWhereIsn;
  for (var bin = 0; bin < numberOfBins; bin++) {
    if (pi[bin] >= n) {
      binWhereIsn = bin;
      break;
    }
  }

  var lastOfBin = (binWhereIsn + 1) * binSize - 1;
  var flags = [];
  for (var it = 0; it < binSize; it++) {
    flags[it] = false;
  }

  if (binWhereIsn === 0) {
    flags[0] = true;
    flags[1] = true;
  }

  var firstNumberOfBin = binWhereIsn * binSize;
  for (var i = 2; i <= Math.sqrt(lastOfBin); i++) {
    if (isPrime(i)) {
      var aux = Math.floor(firstNumberOfBin / i); // get the floor
      var firstMultipleOfiGreaterThanFirstNumberOfBin;
      if (aux * i === firstNumberOfBin) {
        firstMultipleOfiGreaterThanFirstNumberOfBin = aux * i;
      } else {
        firstMultipleOfiGreaterThanFirstNumberOfBin = aux * i + i;
      }
      for (var j = firstMultipleOfiGreaterThanFirstNumberOfBin - firstNumberOfBin; j < binSize; j += i) {
        if (flags[j] === true) {
          continue;
        } else if (j + firstNumberOfBin !== i) {
          flags[j] = true;
        }
      }
    }
  }

  if (binWhereIsn === 0) {
    j = 0;
  } else {
    j = pi[binWhereIsn - 1];
  }

  for (var l = 0; l < binSize; l++) {
    if (flags[l] === false) {
      j++;
      if (j === n) {
        return firstNumberOfBin + l;
      }
    }
  }

  throw new Error('The answer was not found');
}

function isInteger(number) {
  return Math.round(number) === number;
}

console.log(getNthPrime(450000000));


module.exports.isPrime = isPrime;
module.exports.getNthPrime = getNthPrime;
