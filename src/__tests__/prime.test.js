'use strict';

const prime = require('../prime');

describe('test prime', () => {
  it('in isPrime n is not integer', function () {
    expect(function () {
      prime.isPrime('hello');
    }).toThrowError('Must be an integer');
  });

  it('check negative numbers', function () {
    expect(function () {
      prime.isPrime(-50);
    }).toThrowError('Must be an non negative value');
  });

  it('check if 0 is prime', () => {
    expect(prime.isPrime(0)).toBe(false);
  });

  it('check if 1 is prime', () => {
    expect(prime.isPrime(1)).toBe(false);
  });
  it('even numbers are not primes  ', () => {
    expect(prime.isPrime(10)).toBe(false);
  });

  it('check if 2 is prime', () => {
    expect(prime.isPrime(2)).toBe(true);
  });
  it('check if 1299709 is prime', () => {
    expect(prime.isPrime(1299709)).toBe(true);
  });

  it('in getNthPrime n is not integer', function () {
    expect(function () {
      prime.getNthPrime('hello');
    }).toThrowError('n must be an integer');
  });
  it('in getNthPrime n is not greater than 0', function () {
    expect(function () {
      prime.getNthPrime(-5);
    }).toThrowError('n must be greater than 0');
  });

  it('Find the first prime number', () => {
    expect(prime.getNthPrime(1)).toBe(2);
  });

  it('Find the 100000 prime number', () => {
    expect(prime.getNthPrime(100000)).toBe(1299709);
  });

  it('iterations limit', function () {
    expect(function () {
      prime.getNthPrime(250000);
    }).toThrowError('The answer was not found, maximum iterations reached');
  });
});
