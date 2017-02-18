var ActionEvent = function () {
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

var StateEvent = function () {
  this.cache = [];
  this.addSubscribe = function (callback) {
    var cache = this.cache || [];
    cache.push(callback);
  };
  this.trigger = function (query) {
    var cache = this.cache || [];
    cache.forEach(function (callback) {
      callback(query);
    })
  }
};

module.exports = {
  ActionEvent: ActionEvent,
  StateEvent: StateEvent
}
