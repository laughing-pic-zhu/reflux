'use strict';
const Event = require('./event');
const util = require('./util');
const option = util.option;

const Reflux = {
  createActions: function (items) {
    var actions = {};
    items.forEach(item => {
        actions[item] = function () {
        };
      }
    );
    return actions;
  },

  createStore: function (obj) {
    const StateEvent=Event.StateEvent;
    const ActionEvent=Event.ActionEvent;
    const actionEvent = new ActionEvent();
    const stateEvent = new StateEvent();

    const actions = obj.listenables;

    Object.keys(actions).forEach(action=> {
      const callback = obj['on' + option(action)] || function () {
        };
      actionEvent.addSubscribe(action, callback.bind(stateEvent));

      actions[action] = function (query) {
        actionEvent.trigger(action, query);
      };

    });
    return stateEvent
  },
  listenTo: function (store,callback) {
    store.addSubscribe(callback.bind(this));
  }
};

module.exports = Reflux;





