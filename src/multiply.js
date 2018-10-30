'use strict';

function multiply(a = 1, b = 1, c = 1) {
  if (!isInteger(a) || !isInteger(b) || !isInteger(c)) {
    throw new Error('All parameters must be integers');
  }
  return a * b * c;
}

function isInteger(number) {
  return Math.round(number) === number;
}

module.exports = multiply;
