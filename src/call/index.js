/**
 * Mock javascript's keyword call
 * @param {*} func
 * @param {*} context
 * @param  {...any} rest
 * @return {*}
 */
function customCall(func, context, ...rest) {
  context = context || window;
  context.fn = func;
  const res = context.fn(...rest);
  delete context.fn;

  return res;
}

export default customCall;
