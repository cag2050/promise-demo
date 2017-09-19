let promise = new Promise((resolve, reject) => {
    console.log('new promise')
    // resolve(1)
    reject(2)
})

promise
    .then(
        data => {
            console.log(data)
            console.log('resolved')
        },
        error => {
            console.log(error)
            console.log('rejected')
        }
    )

// Promise 新建后就会立即执行。
// 如果Promise状态已经变成resolved，再抛出错误是无效的。