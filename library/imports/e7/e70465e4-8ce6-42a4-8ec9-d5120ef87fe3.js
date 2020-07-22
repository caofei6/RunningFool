"use strict";
cc._RF.push(module, 'e7046XkjOZCpI7J1RIO+H/j', 'eventCenter');
// script/utils/eventCenter.js

"use strict";

function EventGroup() {
  this.head = null;
  this.iter = null;
  this.length = 0;

  EventGroup.prototype.getLength = function () {
    return this.length;
  };

  EventGroup.prototype.addObserver = function (observer, target) {
    if (observer == null) return;

    if (this.head == null) {
      this.head = {
        ob: observer,
        target: target,
        next: null
      };
      this.length = 1;
      return;
    }

    var node = this.head;
    var last = null;

    while (node != null) {
      if (node.ob === observer && node.target === target) {
        return;
      }

      last = node;
      node = node.next;
    }

    this.length += 1;
    last.next = {
      ob: observer,
      target: target,
      next: null
    };
  };

  EventGroup.prototype.removeObserver = function (observer, target) {
    if (observer == null || this.head == null) return;

    if (this.head.ob === observer && this.head.target === target) {
      if (this.head === this.iter) {
        this.iter = this.iter.next;
      }

      this.head = this.head.next;
      this.length--;
      return;
    }

    var node = this.head;

    while (node.next != null) {
      if (node.next.ob === observer && node.next.target === target) {
        if (this.iter === node.next) {
          this.iter = node.next.next;
        }

        node.next = node.next.next;
        this.length--;
        return;
      }

      node = node.next;
    }
  };

  EventGroup.prototype.removeAll = function () {
    this.iter = null;
    this.head = null;
    this.length = 0;
  };

  EventGroup.prototype.emitByArray = function (array) {
    this.iter = this.head;

    while (this.iter != null) {
      var temp = this.iter;

      if (temp.target) {
        temp.ob.call(temp.target, array);
      } else {
        temp.ob(array);
      }

      if (this.iter && temp === this.iter) {
        this.iter = this.iter.next;
      }
    }

    this.iter = null;
  };

  EventGroup.prototype.emit = function () {
    this.iter = this.head;

    while (this.iter != null) {
      var temp = this.iter;

      if (temp.target) {
        var _temp$ob;

        (_temp$ob = temp.ob).call.apply(_temp$ob, [temp.target].concat(Array.prototype.slice.call(arguments)));
      } else {
        temp.ob.apply(temp, arguments);
      }

      if (this.iter && temp === this.iter) {
        this.iter = this.iter.next;
      }
    }

    this.iter = null;
  };
}

var eventCenter = {
  _eventGroup: {},
  getEventGroup: function getEventGroup(evt) {
    return eventCenter._eventGroup[evt];
  },
  addEventObserver: function addEventObserver(evt, observer, target) {
    if (evt == null) {
      console.log("addEventObserver evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (!eg) {
      eg = new EventGroup();
      eventCenter._eventGroup[evt] = eg;
    }

    eg.addObserver(observer, target);
  },
  removeEventObserver: function removeEventObserver(evt, observer, target) {
    if (evt == null) {
      console.log("removeEventObserver evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (!eg) {
      eg.removeObserver(observer, target);

      if (eg.getLength() === 0) {
        delete eventCenter._eventGroup[evt];
      }
    }
  },
  emitEvent: function emitEvent(evt) {
    if (evt == null) {
      console.log("emitEvent evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (eg) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      eg.emit.apply(eg, params);
    }
  },
  emitEventByArray: function emitEventByArray(evt, array) {
    if (evt == null) {
      console.log("emitEventByArray evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (eg) {
      eg.emitByArray(array);
    }
  },
  removeAll: function removeAll() {
    var eg = eventCenter._eventGroup;

    for (var key in eg) {
      eg[key].removeAll();
    }

    eventCenter._eventGroup = null;
  }
};
module.exports = eventCenter;

cc._RF.pop();