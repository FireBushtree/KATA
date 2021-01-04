module.exports = {
  'parser': 'babel-eslint',
  'globals': {
    describe: true,
    test: true,
    expect: true,
    window: true,
  },
  'extends': ['eslint:recommended', 'google'],
  'rules': {
    'linebreak-style': [0],
    'no-invalid-this': [0],
  },
};
