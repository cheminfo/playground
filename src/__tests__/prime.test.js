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
    }).toThrowError('Must be an integer non negative value');
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

  it('check if 49999999967 is prime', () => {
    expect(prime.isPrime(49999999967)).toBe(true);
  });

  it('check if 49999999963 is prime', () => {
    expect(prime.isPrime(49999999963)).toBe(false);
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

  it('Find the 50th prime number (prime number in first bin)', () => {
    expect(prime.getNthPrime(50)).toBe(229);
  });

  it('Find the 2119654578th prime number (last prime number allowed)', () => {
    expect(prime.getNthPrime(2119654578)).toBe(49999999967);
  });

  it('Find the 2119654579th prime number', function () {
    expect(function () {
      prime.getNthPrime(2119654579);
    }).toThrowError('The answer was not found');
  });
});
