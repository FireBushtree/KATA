import customNew from '..';

function User(name, age) {
  this.name = name;
  this.age = 23;
}

describe('new keyword', () => {
  test('default', () => {
    const originUser = new User('owen', 23);
    const user = customNew(User, 'owen', 23);
    expect(user).toMatchObject(originUser);
  });
});
