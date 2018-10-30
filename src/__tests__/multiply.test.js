'use strict';

const multiply = require('../multiply');

describe('test multiply', () => {
  it('with 0 parameters', () => {
    expect(multiply()).toBe(1);
  });

  it('with 1 parameters', () => {
    expect(multiply(33)).toBe(33);
  });

  it('with 2 parameters', () => {
    expect(multiply(5, 10)).toBe(50);
  });

  it('with 3 parameters', () => {
    expect(multiply(5, 10, 2)).toBe(100);
  });

  it('First is not integer', function () {
    expect(function () {
      multiply('hello', 10, 20);
    }).toThrowError('All parameters must be integers');
  });

  it('Second is not integer', function () {
    expect(function () {
      multiply(10, 'hello', 20);
    }).toThrowError('All parameters must be integers');
  });

  it('Third is not integer', function () {
    expect(function () {
      multiply(20, 10, 'hello');
    }).toThrowError('All parameters must be integers');
  });
});
