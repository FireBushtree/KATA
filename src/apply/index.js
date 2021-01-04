/**
 * custom `apply` function
 * @param {*} func
 * @param {*} context
 * @param  {Array} params
 * @return {*}
 */
function customApply(func, context, params = []) {
  context = context || window;
  context.fn = func;
  const res = context.fn(...params);
  delete context.fn;

  return res;
}

export default customApply;
