var promise = new Promise((resolve, reject) => {
    resolve(1)
})

promise
    .then(data => {
        console.log(data)
        return 2
    })
    .then(data => {
        console.log(data)
    })