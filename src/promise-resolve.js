var promise = Promise.resolve()
// 下面语句，会报错：TypeError: Promise resolver undefined is not a function
// 必须指定构造函数：function(resolve, reject) {...}
// var promise = new Promise()

promise
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
