/**
 * async().then().catch().then().done()
 */
if (typeof Promise.prototype.done === 'undefined') {
    Promise.prototype.done = function (onFulfilled, onRejected) {
        this.then(onFulfilled, onRejected).catch(function (reason) {
            setTimeout(function () {
                throw reason
            }, 0);
        })
    }
}

/**
 * async().then().catch().finally(someFun)
 */
if (typeof Promise.prototype.finally === 'undefined') {
    Promise.prototype.finally = function (cb) {
        let P = this.constructor;
        return this.then(
            value => P.resolve(cb()).then(() => value),
            reason => P.resolve(cb()).then(() => {
                throw reason
            })
        );
    }
}