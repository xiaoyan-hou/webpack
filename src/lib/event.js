class EventEmitter {
    constructor() {
      // handlers is a map，save 
      this.handlers = {};
    }
    registerHandler(taskId, eventName, cb) {
      if (!this.handlers[taskId]) {
        this.handlers[taskId] = {};
      }
  
      if (!this.handlers[taskId][eventName]) { // if no this key, add 
        this.handlers[taskId][eventName] = [];
      }
      this.handlers[taskId][eventName].push(cb);
    }
  
    $emitHandler(taskId, eventName, refName, ...args) {
      if (!this.handlers[taskId] || !this.handlers[taskId][eventName]) {
        return false;
      }
  
      if (!refName) {
        this.handlers[taskId][eventName].forEach(cb => {
          cb.handler(...args);
        });
        return;
      }
  
      if (this.handlers[eventName]) {
        this.handlers[eventName].forEach(cb => {
          cb(...args);
        });
      }
    }
    $off(eventName, cb) {
      const callbacks = this.handlers[eventName];
      if (!callbacks || !callbacks.length) {
        return false;
      }
      let index = callbacks.indexOf(cb);
      while (index !== -1) {
        callbacks.splice(index, 1);
        index = callbacks.indexOf(cb);
      }
    }
  }
  const EventBus = (function () {
    let instance = null;
    return function () {
      if (!instance) {
        // 如果为null则new出唯一实例
        instance = new EventEmitter();
      }
      return instance;
    };
  })();
  
  // let event = new EventBus();
  // let event2 = new EventBus();
  // function e() {
  //     console.log('on-on-omomnn-EventEmitter');
  // }
  // event2.$on('key', e);
  // event.$emit('key');
  export default new EventBus();
  