'use strict';
const Event = require('./event');
const util = require('./util');
var option = util.option;
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

module.exports = Reflux;





