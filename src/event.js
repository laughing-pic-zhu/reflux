var Event = function () {
  this.cache = {};
  this.addSubscribe = function (key, callback) {
    var cache = this.cache;
    cache[key] = cache[key] || [];
    cache[key].push(callback);
  };
  this.trigger = function (key, query) {
    var cache = this.cache;
    var callbacks = cache[key] || [];
    callbacks.forEach(callback=> {
      callback.call(this, query);
    })
  }
};

module.exports = Event
