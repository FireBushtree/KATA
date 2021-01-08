function customNew(func, ...rest) {
  const obj = {};
  obj.__proto__ = func.prototype;
  const res = func.call(obj, ...rest);

  return typeof res === 'object' ? res : obj;
}

export default customNew;
