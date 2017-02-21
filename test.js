const Reflux = require('./src/init');
const Mixin = require('./src/mixin');
const actions = Reflux.createActions(['add', 'edit', 'list', 'delete']);

const store = Reflux.createStore({
  listenables: actions,
  onAdd: function (query) {
    console.log('add');
    console.log(query);
    this.trigger(query)
  },
  onEdit: function (query) {
    console.log('edit');
    console.log(query);
    this.trigger(query)
  },
  onList: function (query) {
    console.log('list');
    console.log(query);
  },
  onDelete: function (query) {
    console.log('delete');
    console.log(query);
  }
});

var obj = { a: 1 };

Mixin.onClass(obj, { listenTo: Reflux.listenTo });

obj.listenTo(store, function (query) {
  console.log(query);
  console.log(this)
});

actions.edit({ edit: 1 });