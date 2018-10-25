'use strict';

const multiply = require('../multiply');

describe('test multiply', () => {
  it('with 2 parameters', () => {
    expect(multiply(5, 10)).toBe(50);
  });

  it('with 3 parameters', () => {
    expect(multiply(5, 10, 2)).toBe(100);
  });
});
