
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/LoginController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcTG9naW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJyZXF1aXJlIiwic2luZ2xldG9uIiwid2VjaGF0U2RrIiwiZXZlbnRDZW50ZXIiLCJldmVudERlZiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUHJvZ3Jlc3NCYXIiLCJ0eXBlIiwiTGFiZWxUaXAiLCJMYWJlbCIsIk5vZGVCdG5Mb2dpbiIsIk5vZGUiLCJvbkxvYWQiLCJjdXJTY2VuZSIsIlNjZW5lIiwiTG9naW4iLCJub2RlIiwiYWN0aXZlIiwicmVnaXN0ZXJFdmVudCIsImluaXRMb2dpbk1vZHVsZSIsIm9uRGVzdHJveSIsInVucmVnaXN0ZXJFdmVudCIsImFkZEV2ZW50T2JzZXJ2ZXIiLCJQcmVsb2FkU2NlbmUiLCJwcmVsb2FkQWxsU2NlbmUiLCJyZW1vdmVFdmVudE9ic2VydmVyIiwib25DbGlja1d4TG9naW4iLCJpc1dlQ2hhdCIsImxvZ2luIiwic2VsZiIsImhpZGVMb2dpbkJ0biIsInByb2dyZXNzRnVuYyIsInByb2dyZXNzIiwic3RyaW5nIiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzRnVjIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJIYWxsIiwibG9hZE1hbmFnZXIiLCJsb2FkQWxsU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJSSxRQUFRLEdBQUdKLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBSyxFQUFFLENBQUNDLEtBQUgs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RyxTQUFiQSxVQUFhLEdBQVk7QUFDekJuQyxNQUFBQSxFQUFFLENBQUNvQyxRQUFILENBQVlDLFNBQVosQ0FBc0IzQyxPQUFPLENBQUNrQixLQUFSLENBQWMwQixJQUFwQztBQUNILEtBRkQ7O0FBSUExQyxJQUFBQSxTQUFTLENBQUMyQyxXQUFWLENBQXNCQyxZQUF0QixDQUFtQ1gsWUFBbkMsRUFBaURNLFVBQWpEO0FBQ0gsR0EzRUk7QUE2RUxQLEVBQUFBLFlBN0VLLDBCQTZFVztBQUNaLFFBQUcsQ0FBQyxLQUFLZCxJQUFULEVBQWU7QUFDZixTQUFLTixZQUFMLENBQWtCTyxNQUFsQixHQUEyQixLQUEzQjtBQUNIO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBnYW1lRGVmID0gcmVxdWlyZShcImdhbWVEZWZcIik7XHJcbmxldCBzaW5nbGV0b24gPSByZXF1aXJlKFwic2luZ2xldG9uXCIpO1xyXG5sZXQgd2VjaGF0U2RrID0gcmVxdWlyZShcIndlY2hhdFNka1wiKTtcclxubGV0IGV2ZW50Q2VudGVyID0gcmVxdWlyZShcImV2ZW50Q2VudGVyXCIpO1xyXG5sZXQgZXZlbnREZWYgPSByZXF1aXJlKFwiZXZlbnREZWZcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFByb2dyZXNzQmFyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgTGFiZWxUaXA6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBOb2RlQnRuTG9naW46IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBzaW5nbGV0b24uY3VyU2NlbmUgPSBnYW1lRGVmLlNjZW5lLkxvZ2luO1xyXG4gICAgICAgIHRoaXMuTGFiZWxUaXAubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5pbml0TG9naW5Nb2R1bGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWdpc3RlckV2ZW50ICgpIHtcclxuICAgICAgICBldmVudENlbnRlci5hZGRFdmVudE9ic2VydmVyKGV2ZW50RGVmLlByZWxvYWRTY2VuZSwgdGhpcy5wcmVsb2FkQWxsU2NlbmUsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bnJlZ2lzdGVyRXZlbnQgKCkge1xyXG4gICAgICAgIGV2ZW50Q2VudGVyLnJlbW92ZUV2ZW50T2JzZXJ2ZXIoZXZlbnREZWYuUHJlbG9hZFNjZW5lLCB0aGlzLnByZWxvYWRBbGxTY2VuZSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRMb2dpbk1vZHVsZSAoKSB7XHJcbiAgICAgICAgdGhpcy53ZWNoYXRTZGsgPSBuZXcgd2VjaGF0U2RrKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xpY2tXeExvZ2luICgpIHtcclxuICAgICAgICBpZiAodGhpcy53ZWNoYXRTZGsuaXNXZUNoYXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLndlY2hhdFNkay5sb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVsb2FkQWxsU2NlbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHByZWxvYWRBbGxTY2VuZSAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaGlkZUxvZ2luQnRuKCk7XHJcbiAgICAgICAgdGhpcy5MYWJlbFRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzRnVuYyA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuUHJvZ3Jlc3NCYXIpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuUHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5MYWJlbFRpcC5zdHJpbmcgPSBcIuato+WcqOi/m+WFpea4uOaIj++8jOivt+iAkOW/g+etieW+he+9nlwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuUHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgc2VsZi5MYWJlbFRpcC5zdHJpbmcgPSBcIuato+WcqOi/m+WFpea4uOaIj++8jOW9k+WJjeWKoOi9vSBcIiArIChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuato+WcqOi/m+WFpea4uOaIj++8jOW9k+WJjeWKoOi9vSBcIiArIChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgc3VjY2Vzc0Z1YyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdhbWVEZWYuU2NlbmUuSGFsbCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2luZ2xldG9uLmxvYWRNYW5hZ2VyLmxvYWRBbGxTY2VuZShwcm9ncmVzc0Z1bmMsIHN1Y2Nlc3NGdWMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlTG9naW5CdG4gKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLm5vZGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLk5vZGVCdG5Mb2dpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19