
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
    eventCenter.addEventObserver(eventDef.loadAllPrefab, this.onLoadAllPrefab, this);
  },
  unregisterEvent: function unregisterEvent() {
    eventCenter.removeEventObserver(eventDef.loadAllPrefab, this.onLoadAllPrefab, this);
  },
  initLoginModule: function initLoginModule() {
    this.wechatSdk = new wechatSdk();
  },
  onClickWxLogin: function onClickWxLogin() {
    if (this.wechatSdk.isWeChat()) {
      this.wechatSdk.login();
    } else {
      this.onLoadPrefab();
    }
  },
  onLoadPrefab: function onLoadPrefab() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbG9naW4vTG9naW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJyZXF1aXJlIiwic2luZ2xldG9uIiwid2VjaGF0U2RrIiwiZXZlbnRDZW50ZXIiLCJldmVudERlZiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUHJvZ3Jlc3NCYXIiLCJ0eXBlIiwiTGFiZWxUaXAiLCJMYWJlbCIsIk5vZGVCdG5Mb2dpbiIsIk5vZGUiLCJvbkxvYWQiLCJjdXJTY2VuZSIsIlNjZW5lIiwiTG9naW4iLCJub2RlIiwiYWN0aXZlIiwicmVnaXN0ZXJFdmVudCIsImluaXRMb2dpbk1vZHVsZSIsIm9uRGVzdHJveSIsInVucmVnaXN0ZXJFdmVudCIsImFkZEV2ZW50T2JzZXJ2ZXIiLCJsb2FkQWxsUHJlZmFiIiwib25Mb2FkQWxsUHJlZmFiIiwicmVtb3ZlRXZlbnRPYnNlcnZlciIsIm9uQ2xpY2tXeExvZ2luIiwiaXNXZUNoYXQiLCJsb2dpbiIsIm9uTG9hZFByZWZhYiIsInNlbGYiLCJoaWRlTG9naW5CdG4iLCJwcm9ncmVzc0Z1bmMiLCJwcm9ncmVzcyIsInN0cmluZyIsInRvRml4ZWQiLCJjb25zb2xlIiwibG9nIiwic3VjY2Vzc0Z1YyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiSGFsbCIsImxvYWRNYW5hZ2VyIiwibG9hZEFsbFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUksUUFBUSxHQUFHSixPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFFQUssRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ0ksV0FEQTtBQUVULGlCQUFTO0FBRkEsS0FETDtBQU1SRSxJQUFBQSxRQUFRLEVBQUU7QUFDTkQsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNPLEtBREg7QUFFTixpQkFBUztBQUZILEtBTkY7QUFXUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1ZILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUyxJQURDO0FBRVYsaUJBQVM7QUFGQztBQVhOLEdBSFA7QUFvQkxDLEVBQUFBLE1BcEJLLG9CQW9CSztBQUNOZCxJQUFBQSxTQUFTLENBQUNlLFFBQVYsR0FBcUJqQixPQUFPLENBQUNrQixLQUFSLENBQWNDLEtBQW5DO0FBQ0EsU0FBS1AsUUFBTCxDQUFjUSxJQUFkLENBQW1CQyxNQUFuQixHQUE0QixLQUE1QjtBQUNBLFNBQUtYLFdBQUwsQ0FBaUJVLElBQWpCLENBQXNCQyxNQUF0QixHQUErQixLQUEvQjtBQUNBLFNBQUtDLGFBQUw7QUFDQSxTQUFLQyxlQUFMO0FBQ0gsR0ExQkk7QUE0QkxDLEVBQUFBLFNBNUJLLHVCQTRCUTtBQUNULFNBQUtDLGVBQUw7QUFDSCxHQTlCSTtBQWdDTEgsRUFBQUEsYUFoQ0ssMkJBZ0NZO0FBQ2JsQixJQUFBQSxXQUFXLENBQUNzQixnQkFBWixDQUE2QnJCLFFBQVEsQ0FBQ3NCLGFBQXRDLEVBQXFELEtBQUtDLGVBQTFELEVBQTJFLElBQTNFO0FBQ0gsR0FsQ0k7QUFvQ0xILEVBQUFBLGVBcENLLDZCQW9DYztBQUNmckIsSUFBQUEsV0FBVyxDQUFDeUIsbUJBQVosQ0FBZ0N4QixRQUFRLENBQUNzQixhQUF6QyxFQUF3RCxLQUFLQyxlQUE3RCxFQUE4RSxJQUE5RTtBQUNILEdBdENJO0FBd0NMTCxFQUFBQSxlQXhDSyw2QkF3Q2M7QUFDZixTQUFLcEIsU0FBTCxHQUFpQixJQUFJQSxTQUFKLEVBQWpCO0FBQ0gsR0ExQ0k7QUE0Q0wyQixFQUFBQSxjQTVDSyw0QkE0Q2E7QUFDZCxRQUFJLEtBQUszQixTQUFMLENBQWU0QixRQUFmLEVBQUosRUFBK0I7QUFDM0IsV0FBSzVCLFNBQUwsQ0FBZTZCLEtBQWY7QUFDSCxLQUZELE1BR0s7QUFDRCxXQUFLQyxZQUFMO0FBQ0g7QUFDSixHQW5ESTtBQXFETEEsRUFBQUEsWUFyREssMEJBcURXO0FBQ1osUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS3ZCLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQkMsTUFBbkIsR0FBNEIsSUFBNUI7QUFDQSxTQUFLWCxXQUFMLENBQWlCVSxJQUFqQixDQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7O0FBQ0EsUUFBSWUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBVUMsUUFBVixFQUFvQjtBQUNuQyxVQUFJLENBQUNILElBQUksQ0FBQ3hCLFdBQVYsRUFBdUI7O0FBQ3ZCLFVBQUkyQixRQUFRLElBQUksQ0FBaEIsRUFBbUI7QUFDZkgsUUFBQUEsSUFBSSxDQUFDeEIsV0FBTCxDQUFpQjJCLFFBQWpCLEdBQTRCLENBQTVCO0FBQ0FILFFBQUFBLElBQUksQ0FBQ3RCLFFBQUwsQ0FBYzBCLE1BQWQsR0FBdUIsZUFBdkI7QUFDQTtBQUNIOztBQUNESixNQUFBQSxJQUFJLENBQUN4QixXQUFMLENBQWlCMkIsUUFBakIsR0FBNEJBLFFBQTVCO0FBQ0FILE1BQUFBLElBQUksQ0FBQ3RCLFFBQUwsQ0FBYzBCLE1BQWQsR0FBdUIsaUJBQWlCLENBQUNELFFBQVEsR0FBRyxHQUFaLEVBQWlCRSxPQUFqQixDQUF5QixDQUF6QixDQUFqQixHQUErQyxHQUF0RTtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBaUIsQ0FBQ0osUUFBUSxHQUFHLEdBQVosRUFBaUJFLE9BQWpCLENBQXlCLENBQXpCLENBQWpCLEdBQStDLEdBQTNEO0FBQ0gsS0FWRDs7QUFZQSxRQUFJRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQ3pCcEMsTUFBQUEsRUFBRSxDQUFDcUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCNUMsT0FBTyxDQUFDa0IsS0FBUixDQUFjMkIsSUFBcEM7QUFDSCxLQUZEOztBQUlBM0MsSUFBQUEsU0FBUyxDQUFDNEMsV0FBVixDQUFzQkMsWUFBdEIsQ0FBbUNYLFlBQW5DLEVBQWlETSxVQUFqRDtBQUNILEdBM0VJO0FBNkVMUCxFQUFBQSxZQTdFSywwQkE2RVc7QUFDWixRQUFHLENBQUMsS0FBS2YsSUFBVCxFQUFlO0FBQ2YsU0FBS04sWUFBTCxDQUFrQk8sTUFBbEIsR0FBMkIsS0FBM0I7QUFDSDtBQWhGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZURlZiA9IHJlcXVpcmUoXCJnYW1lRGVmXCIpO1xubGV0IHNpbmdsZXRvbiA9IHJlcXVpcmUoXCJzaW5nbGV0b25cIik7XG5sZXQgd2VjaGF0U2RrID0gcmVxdWlyZShcIndlY2hhdFNka1wiKTtcbmxldCBldmVudENlbnRlciA9IHJlcXVpcmUoXCJldmVudENlbnRlclwiKTtcbmxldCBldmVudERlZiA9IHJlcXVpcmUoXCJldmVudERlZlwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgUHJvZ3Jlc3NCYXI6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIExhYmVsVGlwOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICBOb2RlQnRuTG9naW46IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgc2luZ2xldG9uLmN1clNjZW5lID0gZ2FtZURlZi5TY2VuZS5Mb2dpbjtcbiAgICAgICAgdGhpcy5MYWJlbFRpcC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xuICAgICAgICB0aGlzLmluaXRMb2dpbk1vZHVsZSgpO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudCgpO1xuICAgIH0sXG5cbiAgICByZWdpc3RlckV2ZW50ICgpIHtcbiAgICAgICAgZXZlbnRDZW50ZXIuYWRkRXZlbnRPYnNlcnZlcihldmVudERlZi5sb2FkQWxsUHJlZmFiLCB0aGlzLm9uTG9hZEFsbFByZWZhYiwgdGhpcyk7XG4gICAgfSxcblxuICAgIHVucmVnaXN0ZXJFdmVudCAoKSB7XG4gICAgICAgIGV2ZW50Q2VudGVyLnJlbW92ZUV2ZW50T2JzZXJ2ZXIoZXZlbnREZWYubG9hZEFsbFByZWZhYiwgdGhpcy5vbkxvYWRBbGxQcmVmYWIsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBpbml0TG9naW5Nb2R1bGUgKCkge1xuICAgICAgICB0aGlzLndlY2hhdFNkayA9IG5ldyB3ZWNoYXRTZGsoKTtcbiAgICB9LFxuXG4gICAgb25DbGlja1d4TG9naW4gKCkge1xuICAgICAgICBpZiAodGhpcy53ZWNoYXRTZGsuaXNXZUNoYXQoKSkge1xuICAgICAgICAgICAgdGhpcy53ZWNoYXRTZGsubG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkUHJlZmFiKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkUHJlZmFiICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmhpZGVMb2dpbkJ0bigpO1xuICAgICAgICB0aGlzLkxhYmVsVGlwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5Qcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBwcm9ncmVzc0Z1bmMgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5Qcm9ncmVzc0JhcikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IDEpIHtcbiAgICAgICAgICAgICAgICBzZWxmLlByb2dyZXNzQmFyLnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICBzZWxmLkxhYmVsVGlwLnN0cmluZyA9IFwi5q2j5Zyo6L+b5YWl5ri45oiP77yM6K+36ICQ5b+D562J5b6F772eXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgICAgc2VsZi5MYWJlbFRpcC5zdHJpbmcgPSBcIuato+WcqOi/m+WFpea4uOaIj++8jOW9k+WJjeWKoOi9vSBcIiArIChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmraPlnKjov5vlhaXmuLjmiI/vvIzlvZPliY3liqDovb0gXCIgKyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHN1Y2Nlc3NGdWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2FtZURlZi5TY2VuZS5IYWxsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzaW5nbGV0b24ubG9hZE1hbmFnZXIubG9hZEFsbFNjZW5lKHByb2dyZXNzRnVuYywgc3VjY2Vzc0Z1Yyk7XG4gICAgfSxcblxuICAgIGhpZGVMb2dpbkJ0biAoKSB7XG4gICAgICAgIGlmKCF0aGlzLm5vZGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5Ob2RlQnRuTG9naW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxufSk7XG4iXX0=