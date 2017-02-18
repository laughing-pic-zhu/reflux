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

var option = function (str) {
  if (str === null || str === '' || str === undefined) {
    return str
  }
  return str[0].toUpperCase() + str.substr(1)
};

var event = new Event();

var Reflux = {
  createActions: function (items) {
    var obj = {};
    items.forEach(item => {
        obj[item] = function (query) {
          event.trigger(item, query);
        };
      }
    );
    return obj;
  },

  createStore: function (obj) {
    var actions = obj.listenables;

    Object.keys(actions).forEach(action=> {
      var callback = obj['on' + option(action)] || function () {
        };
      event.addSubscribe(action, callback)
    });
    return event
  }
}

var actions = Reflux.createActions(['add', 'edit', 'list', 'delete']);
Reflux.createStore({
  listenables: actions,
  onAdd: function (query) {
    console.log('add');
    console.log(query);
  },
  onEdit: function (query) {
    console.log('edit');
    console.log(query);
  },
  onList: function (query) {
    console.log('list');
    console.log(query);
  },
  onDelete: function (query) {
    console.log('delete');
    console.log(query);
  },
})

actions.edit({ edit: 1 })



