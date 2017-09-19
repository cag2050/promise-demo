let promiseTry = require('es6-promise-try')

const func = () => console.log('now')
promiseTry(func)
console.log('next')

// es6 中没有 Promise.try()

// * 使用 Promise.try() 的好处：
// 1. 让同步函数同步执行，异步函数异步执行
// 1. 更好地管理异常