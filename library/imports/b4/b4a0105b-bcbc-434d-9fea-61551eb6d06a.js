"use strict";
cc._RF.push(module, 'b4a01BbvLxDTZ/qYVUettBq', 'LoginController');
// script/login/LoginController.js

"use strict";

var gameDef = require("gameDef");

var singleton = require("singleton");

var wechatSdk = require("wechatSdk");

cc.Class({
  "extends": cc.Component,
  properties: {
    ProgressBar: {
      type: cc.ProgressBar,
      "default": null
    },
    LabelTip: {
      type: cc.Label,
      "default": null
    }
  },
  onLoad: function onLoad() {
    singleton.curScene = gameDef.Scene.Login;
    this.LabelTip.node.active = false;
    this.ProgressBar.node.active = false;
    this.initLoginModule();
  },
  initLoginModule: function initLoginModule() {
    this.wechatSdk = new wechatSdk();
  },
  onClickWxLogin: function onClickWxLogin() {
    var self = this;
    this.LabelTip.node.active = true;
    this.ProgressBar.node.active = true;

    if (this.wechatSdk.isWeChat()) {
      this.wechatSdk.login(function () {
        self.preloadAllScene();
      });
    } else {
      this.preloadAllScene();
    }
  },
  preloadAllScene: function preloadAllScene() {
    var self = this;

    var progressFunc = function progressFunc(progress) {
      if (!self.ProgressBar) return;

      if (progress >= 100) {
        self.ProgressBar.progress = 100;
        self.LabelTip.string = "正在进入游戏，请耐心等待～";
        return;
      }

      self.ProgressBar.progress = progress;
      self.LabelTip.string = "正在进入游戏，当前加载" + (progress * 100).toFixed(2) + "%";
      console.log("正在进入游戏，当前加载" + (progress * 100).toFixed(2) + "%");
    };

    var successFuc = function successFuc() {
      cc.director.loadScene(gameDef.Scene.Hall);
    };

    singleton.loadManager.loadAllScene(progressFunc, successFuc);
  }
});

cc._RF.pop();