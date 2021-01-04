# Call

模拟`javascript`中的`call`方法的实现。 [参考链接](https://github.com/mqyqingfeng/Blog/issues/11)

## 注意点

1. 正确改变函数的`this`指向

2. 可以接受不定量的参数， 作为调用时的实参

3. `this`可以为`null`, 当为`null`是指向`window`

4. 函数得到正确的返回值
