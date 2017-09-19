/**
 * async().then().catch().then().done()
 */
Promise.prototype.done = function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected).catch(function (reason) {
        setTimeout(function () {
            throw reason
        }, 0);
    })
}

/**
 * async().then().catch().finally(someFun)
 */
Promise.prototype.finally = function (cb) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(cb()).then(() => value),
        reason => P.resolve(cb()).then(() => { throw reason })
    );
}