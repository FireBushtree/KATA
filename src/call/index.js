/**
 * custom `call` function, understand what happened when use call
 * @param {*} func
 * @param {*} context
 * @param  {...any} rest
 * @return {*} any
 */
function customCall(func, context, ...rest) {
  context = context || window;
  context.fn = func;
  const res = context.fn(...rest);
  delete context.fn;

  return res;
}

export default customCall;
