var Reflux = require('./src/init');

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