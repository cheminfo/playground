'use strict';

const playground = require('..');

describe('Playground test', () => {
  it('Something to test', () => {
    expect(playground(5, 10)).toBe(50);
  });
});
