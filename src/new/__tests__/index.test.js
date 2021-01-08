import customNew from '..';

function User(name, age) {
  this.name = name;
  this.age = 23;
}

User.prototype.sayName = function() {
  return this.name;
};

describe('new keyword', () => {
  test('default', () => {
    const originUser = new User('owen', 23);
    const user = customNew(User, 'owen', 23);
    expect(user).toMatchObject(originUser);
  });

  test('can get prototype\'s property', () => {
    const user = customNew(User, 'owen', 23);
    expect(user.sayName()).toBe('owen');
  });

  test('if constructor return a object, object is typeof response', () => {
    function AnotherUser() {
      this.name = 'foo';

      return {
        age: 23,
        hobby: 'games',
      };
    }

    const user = customNew(User, 'owen', 23);
    expect(user).toMatchObject({name: 'owen', age: 23});

    const anotherUser = customNew(AnotherUser, 'owen', 23);
    expect(anotherUser).toMatchObject({age: 23, hobby: 'games'});
  });
});
