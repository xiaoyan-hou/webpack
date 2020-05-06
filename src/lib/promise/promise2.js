let promise = new Promise(function(resolve, reject) {
    console.log('promise');
    reject();
    resolve();
});

promise.then(function() {
    console.log('resolved');
}).catch(e => {
    console.log('reject');
});
console.log('hi');
