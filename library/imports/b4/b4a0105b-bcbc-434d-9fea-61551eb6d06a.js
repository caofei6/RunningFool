"use strict";
cc._RF.push(module, 'b4a01BbvLxDTZ/qYVUettBq', 'LoginController');
// script/login/LoginController.js

"use strict";

var gameDef = require("gameDef");

var singleton = require("singleton");

var wechatSdk = require("wechatSdk");

var eventCenter = require("eventCenter");

var eventDef = require("eventDef");

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
    },
    NodeBtnLogin: {
      type: cc.Node,
      "default": null
    }
  },
  onLoad: function onLoad() {
    singleton.curScene = gameDef.Scene.Login;
    this.LabelTip.node.active = false;
    this.ProgressBar.node.active = false;
    this.registerEvent();
    this.initLoginModule();
  },
  onDestroy: function onDestroy() {
    this.unregisterEvent();
  },
  registerEvent: function registerEvent() {
    eventCenter.addEventObserver(eventDef.PreloadScene, this.preloadAllScene, this);
  },
  unregisterEvent: function unregisterEvent() {
    eventCenter.removeEventObserver(eventDef.PreloadScene, this.preloadAllScene, this);
  },
  initLoginModule: function initLoginModule() {
    this.wechatSdk = new wechatSdk();
  },
  onClickWxLogin: function onClickWxLogin() {
    if (this.wechatSdk.isWeChat()) {
      this.wechatSdk.login();
    } else {
      this.preloadAllScene();
    }
  },
  preloadAllScene: function preloadAllScene() {
    var self = this;
    this.hideLoginBtn();
    this.LabelTip.node.active = true;
    this.ProgressBar.node.active = true;

    var progressFunc = function progressFunc(progress) {
      if (!self.ProgressBar) return;

      if (progress >= 1) {
        self.ProgressBar.progress = 1;
        self.LabelTip.string = "正在进入游戏，请耐心等待～";
        return;
      }

      self.ProgressBar.progress = progress;
      self.LabelTip.string = "正在进入游戏，当前加载 " + (progress * 100).toFixed(2) + "%";
      console.log("正在进入游戏，当前加载 " + (progress * 100).toFixed(2) + "%");
    };

    var successFuc = function successFuc() {
      cc.director.loadScene(gameDef.Scene.Hall);
    };

    singleton.loadManager.loadAllScene(progressFunc, successFuc);
  },
  hideLoginBtn: function hideLoginBtn() {
    if (!this.node) return;
    this.NodeBtnLogin.active = false;
  }
});

cc._RF.pop();