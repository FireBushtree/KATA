import customNew from '..';

describe('new keyword', () => {
  test('default', () => {
    expect(customNew(1, 2)).toBe(3);
  });
});
