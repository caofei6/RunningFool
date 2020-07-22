"use strict";
cc._RF.push(module, 'ef229mugkRCAJepadAeyvu7', 'loadResource');
// script/utils/loadResource.js

"use strict";

var gameDef = require("gameDef");

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {},
  loadAllScene: function loadAllScene(progressFunc, successFunc) {
    var SceneArray = gameDef.SceneArray;

    var onShowProgress = function onShowProgress(completedCount, totalCount) {
      var val = completedCount / totalCount;
      if (progressFunc) progressFunc(val);
    };

    var onSuccessLoad = function onSuccessLoad() {
      if (successFunc) successFunc();
    };

    for (var i = 0; i < SceneArray.length; i++) {
      cc.director.preloadScene(SceneArray[i], onShowProgress, onSuccessLoad);
    }
  }
});

cc._RF.pop();