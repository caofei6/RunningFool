"use strict";
cc._RF.push(module, '8d089zVO3BAs4u3z+FwP01o', 'hallController');
// script/hall/hallController.js

"use strict";

var gameDef = require("gameDef");

var singleton = require("singleton");

cc.Class({
  "extends": cc.Component,
  properties: {
    NodeBtnNormal: {
      type: cc.Node,
      "default": null
    },
    NodeBtnCrazy: {
      type: cc.Node,
      "default": null
    }
  },
  onLoad: function onLoad() {
    singleton.curScene = gameDef.Scene.Hall;
  },
  start: function start() {
    this.startNodeBtnAnim();
  },
  startNodeBtnAnim: function startNodeBtnAnim() {
    this.NodeBtnNormal.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.3, cc.v2(0, 10)), cc.moveBy(0.3, cc.v2(0, -10)))));
    this.NodeBtnCrazy.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.3, cc.v2(0, 10)), cc.moveBy(0.3, cc.v2(0, -10)))));
  },
  onClickNormalBtn: function onClickNormalBtn() {
    singleton.curGameMode = gameDef.Mode.Normal;
    cc.director.loadScene(gameDef.Scene.Game);
  },
  onClickCrazyBtn: function onClickCrazyBtn() {
    singleton.curGameMode = gameDef.Mode.Crazy;
    cc.director.loadScene(gameDef.Scene.Game);
  }
});

cc._RF.pop();