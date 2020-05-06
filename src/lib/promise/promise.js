
function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  }
  
timeout(100).then((value) => {
console.log(value);
});

function Promise(executor) {
    var self = this;
    self.status = 'pending';
    self.data = undefined;
    self.onResolvedCallback = []; // 为什么是个数组呢? 对应promise 什么用法
    self.onRejectedCallback = []; 
    function resolve(value) {
        if(self.status === 'pending') {
            self.status = 'resolved';
            self.data = value; // ? 用处是什么呢？
            for (let i = 0; i < self.onResolvedCallback.length; i ++) {
                self.onResolvedCallback[i](value);
            }
        }
    }
    function reject(reason) {
        if(self.status === 'pending') {
            self.status = 'rejected';
            self.data = reason;
            for(let i = 0; i < self.onRejectedCallback.length; i++) {
                self.onRejectedCallback[i](reason);
            }
        }
    }
    try {
        executor(resolve, reject);
    } catch (error) {
       reject(error);
    }
}
Promise.prototype.then = function(onResolved, onRejected) {
    var self = this;
    var promise2;
    onResolved = typeof onResolved === 'function' ? onResolved : function(v) { return v;};
    onRejected = typeof onRejected === 'function' ? onRejected : function(r) { return r;};

    if (self.status === 'resolved') {
        return promise2 = new Promise(function(resolve, reject){
            try {   
                var x = onResolved(self.data);
                if ( x instanceof Promise) {
                    x.then(resolve, reject)
                }
                resolve(x);
            } catch (error) {
                reject(error);
            }
        });
    }
    if (self.status === 'rejected') {
        promise2 = new Promise(function(resolve, reject){
            try {
                var x = onRejected(self.data);
                if ( x instanceof Promise) {
                    x.then(resolve, reject);
                }
            } catch (error) {
                reject(e);
            }
        });
    }
    if (self.status === 'pending') {
        promise2 = new Promise(function(resolve, reject){
            self.onResolvedCallback.push(function(value){
                try {
                    var x = resolve(self.data);
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (error) {
                    reject(error);
                }
            });
            self.onRejectedCallback.push(function(reason) {
                try {
                    var x = onRejected(self.data);
                    if (x instanceof Promise) {
                        x.then(resolve, reject);
                    }
                } catch (error) {
                    reject(error);
                }
            })
        });
    }

}
Promise.prototype.catch = function(onRejected) {
    return this.then.call(null, onRejected);
}