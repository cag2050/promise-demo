require('./util/promise-done-finally')

let promise = Promise.resolve()

promise
    .then(() => {
        conole.log('then error')
    })
    .catch((error) => {
        console.log(error)
        JSON.parse('this is not json')
    })
    .done()

// es6 中没有 Promise.done()，本文件开头引入的实现代码

// Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。

// done方法为当最后一个then或catch抛出错误时，我们将无法获取到，因此添加了done方法

// 如果实现和运行环境实现的比较完美的话，就可以进行 unhandled rejection 检测，done也不一定是必须的了。

// 这个例子，共有2个错误，catch捕获的then里面的错误，done捕获的catch里面的错误。
// 如果将then里面的 conole.log('then error') 语句注释掉，因为then里面没有错误了，catch语句也不会执行，所以done就捕获不到catch里面的错误了。
