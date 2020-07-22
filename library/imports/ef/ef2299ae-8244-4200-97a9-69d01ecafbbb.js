"use strict";
cc._RF.push(module, 'ef229mugkRCAJepadAeyvu7', 'loadManager');
// script/utils/loadManager.js

"use strict";

var gameDef = require("gameDef");

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {},
  loadScene: function loadScene(sceneName, successCallback) {
    cc.director.loadScene(sceneName, successCallback);
  },
  loadPrefab: function loadPrefab(progressFunc, successFunc) {
    var SceneArray = gameDef.SceneArray;

    var onShowProgress = function onShowProgress(completedCount, totalCount) {
      var val = completedCount / totalCount;
      if (progressFunc) progressFunc(val);
    };

    var onSuccessLoad = function onSuccessLoad() {
      if (successFunc) successFunc();
    };

    cc.loader.loadRes();
  }
});

cc._RF.pop();