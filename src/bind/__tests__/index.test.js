import customBind from '..';

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

describe('bind', () => {
  test('return value is a function', () => {
    const res = customBind();
    expect(typeof res).toBe('function');
  });

  test('expect return value', () => {
    const func = customBind(sayHobby, obj);
    const res = func();
    expect(res).toBe('game');
  });

  test(`
    Uncertain parameters, when bind can set params,
    call binded function can set params
  `, () => {
    const func = customBind(addAge, obj, 10, 10, 10);
    const res = func(10, 10, 10);

    const originFunc = addAge.bind(obj, 10, 10, 10);
    const originRes = originFunc(10, 10, 10);
    expect(res).toBe(originRes);
  });
});
