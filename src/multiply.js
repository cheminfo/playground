'use strict';

function multiply(a = 1, b = 1, c = 1) {
  if (!isInteger(a)) throw new Error('Must be integer');
  return a * b * c;
}

function isInteger(number) {
  return Math.round(number) === number;
}

module.exports = multiply;
