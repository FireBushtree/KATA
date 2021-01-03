module.exports = {
  "src/**/*.js": [
    "prettier -c --write",
    "eslint --fix --ext .js src",
    "git add"
  ]
};
