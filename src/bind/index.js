/**
 * @param {*} func
 * @param {*} context
 * @param  {...any} rest
 * @return {function}
 */
function customBind(func, context, ...rest) {
  return function(...innerRest) {
    const res = func.call(context, ...rest, ...innerRest);
    return res;
  };
}

export default customBind;
