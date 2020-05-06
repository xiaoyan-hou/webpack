class EventEmitter {
    constructor() {
      // handlers是一个map，用于存储事件与回调之间的对应关系
      this.handlers = {}
    }
    $on(eventName, cb) {
        if (!this.handlers[eventName]) { // if no this key, add 
        this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(cb)
    },
    $emit(eventName, ...args) {
      if(!this.handlers[eventName]) {
        return false
      }
  
      if(this.handlers[eventName]) {
        this.handlers[eventName].forEach(cb => {
          cb(...args)
        })
      }
    },
    $off(eventName, cb) {
      const callbacks = this.handlers[eventName];
      if (!callbacks || !callbacks.length) {
        return false;
      }
      let index = callbacks.indexOf(cb)
      while (index !== -1) {
        callbacks.splice(index, 1);
        index = callbacks.indexOf(cb);
      }
    }
}

let event = new EventEmitter();
function e() {
    console.log('on-on');
}
event.$on('key', e);
event.$emit('key');
export {
    event: EventEmitter
}
  