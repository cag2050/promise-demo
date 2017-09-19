require('./util/promise-done-finally')

let promise = Promise.resolve()

promise
    .then()
    .catch()
    .finally(() => {
        console.log('finally')
    })

// es6 中没有 Promise.finally()，本文件开头引入的实现代码

// finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。
// 它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行。