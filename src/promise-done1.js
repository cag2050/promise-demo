let promise = Promise.resolve()

promise
    .then(() => {
        JSON.parse('this is not json')
    })
    .catch((error) => {
        console.error(error)
    })

// 如果这个解析失败的异常被正常捕获的话则没什么问题，但是如果编码时忘记了处理该异常（没有添加catch语句），一旦出现异常，那么查找异常发生的源头将会变得非常棘手，这就是使用promise需要注意的一点。