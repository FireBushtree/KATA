import customCall from '..';

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

describe('call', () => {
  test('change this target', () => {
    const originRes = sayHobby.call(obj);
    const r1 = customCall(sayHobby, obj);
    expect(r1).toBe(originRes);
  });

  test('Indefinite length parameter', () => {
    const originRes = addAge.call(obj, 10, 10, 30);
    const r1 = customCall(addAge, obj, 10, 10, 30);
    expect(r1).toBe(originRes);
  });

  test('this can be null, if null, this is window', () => {
    const r1 = customCall(sayHobby, null);
    expect(r1).toBe(undefined);

    window.hobby = 'basketball';
    const r2 = customCall(sayHobby, null);
    expect(r2).toBe('basketball');
  });

  test('function will get current return value', () => {
    const res = customCall(emptyFunc, obj);
    expect(res).toBe(undefined);
  });
});
