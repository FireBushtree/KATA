/**
 * @param {*} func
 * @param {*} context
 * @param  {...any} rest
 * @return {function}
 */
function customBind(func, context, ...rest) {
  function fBoud(...innerRest) {
    return func.call(
      this instanceof fBoud ? this : context,
      ...rest,
      ...innerRest
    );
  }

  function ProxyPrototype() {}

  ProxyPrototype.prototype = func.prototype;
  fBoud.prototype = new ProxyPrototype();

  return fBoud;
}

export default customBind;
