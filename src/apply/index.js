/**
 * mock javascript's keyword apply
 * @param {*} func
 * @param {*} context
 * @param  {...any} rest
 * @return {*}
 */
function customApply(func, context, rest) {
  context = context || window;
  rest = rest || [];
  context.fn = func;
  const res = context.fn(...rest);
  delete context.fn;

  return res;
}

export default customApply;
