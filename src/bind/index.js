function customBind(func, context, ...rest) {
  function fBound(...innerRest) {
    const res = func.call(
      this instanceof ProxyPrototype ? this : context,
      ...rest,
      ...innerRest
    );

    return res;
  }

  function ProxyPrototype() {}

  ProxyPrototype.prototype = func.prototype;
  fBound.prototype = new ProxyPrototype();

  return fBound;
}

export default customBind;
