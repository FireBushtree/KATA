import customCall from '..';

const obj = {
  name: 'owen',
  age: 23,
};

/**
 * @return {string} name
 */
function sayName() {
  // eslint-disable-next-line no-invalid-this
  return this.name;
}

describe('call', () => {
  test('change this target', () => {
    const res = customCall(sayName, obj);
    expect(res).toBe('owen');
  });
});
