"use strict";
cc._RF.push(module, '556d9cctf5DZbEZ1gWvUOpH', 'userData');
// script/data/userData.js

"use strict";

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    this.resetData();
  },
  release: function release() {
    this.resetData();
  },
  resetData: function resetData() {
    this.userWxData = null;
  },
  setUserWxData: function setUserWxData(data) {
    this.userWxData = data;
  },
  getUserWxData: function getUserWxData() {
    return this.userWxData;
  }
});

cc._RF.pop();