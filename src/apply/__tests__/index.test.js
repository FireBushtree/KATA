import customApply from '..';

const obj = {
  name: 'owen',
  age: 23,
  hobby: 'game',
};

/**
 * @return {string} name
 */
function sayHobby() {
  return this.hobby;
}

/**
 * @param {*} years
 * @return {*}
 */
function addAge(...years) {
  let result = this.age;

  for (let i = 0; i < years.length; i++) {
    result += years[i];
  }

  return result;
}

/**
 * empty function
 */
function emptyFunc() {}

describe('apply', () => {
  test('change this target', () => {
    const originRes = sayHobby.apply(obj);
    const r1 = customApply(sayHobby, obj);
    expect(r1).toBe(originRes);
  });

  test('Indefinite length parameter', () => {
    const originRes = addAge.apply(obj, [10, 10, 30]);
    const r1 = customApply(addAge, obj, [10, 10, 30]);
    expect(r1).toBe(originRes);
  });

  test('this can be null, if null, this is window', () => {
    const r1 = customApply(sayHobby, null);
    expect(r1).toBe(undefined);

    window.hobby = 'basketball';
    const r2 = customApply(sayHobby, null);
    expect(r2).toBe('basketball');
  });

  test('function will get current return value', () => {
    const res = customApply(emptyFunc, obj);
    expect(res).toBe(undefined);
  });
});
