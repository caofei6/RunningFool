
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbG9naW4vTG9naW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJyZXF1aXJlIiwic2luZ2xldG9uIiwid2VjaGF0U2RrIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJQcm9ncmVzc0JhciIsInR5cGUiLCJMYWJlbFRpcCIsIkxhYmVsIiwib25Mb2FkIiwiY3VyU2NlbmUiLCJTY2VuZSIsIkxvZ2luIiwibm9kZSIsImFjdGl2ZSIsImluaXRMb2dpbk1vZHVsZSIsIm9uQ2xpY2tXeExvZ2luIiwic2VsZiIsImlzV2VDaGF0IiwibG9naW4iLCJwcmVsb2FkQWxsU2NlbmUiLCJwcm9ncmVzc0Z1bmMiLCJwcm9ncmVzcyIsInN0cmluZyIsInRvRml4ZWQiLCJjb25zb2xlIiwibG9nIiwic3VjY2Vzc0Z1YyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiSGFsbCIsImxvYWRNYW5hZ2VyIiwibG9hZEFsbFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUVBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1RDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDSSxXQURBO0FBRVQsaUJBQVM7QUFGQSxLQURMO0FBTVJFLElBQUFBLFFBQVEsRUFBRTtBQUNORCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ08sS0FESDtBQUVOLGlCQUFTO0FBRkg7QUFORixHQUhQO0FBZUxDLEVBQUFBLE1BZkssb0JBZUs7QUFDTlYsSUFBQUEsU0FBUyxDQUFDVyxRQUFWLEdBQXFCYixPQUFPLENBQUNjLEtBQVIsQ0FBY0MsS0FBbkM7QUFDQSxTQUFLTCxRQUFMLENBQWNNLElBQWQsQ0FBbUJDLE1BQW5CLEdBQTRCLEtBQTVCO0FBQ0EsU0FBS1QsV0FBTCxDQUFpQlEsSUFBakIsQ0FBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsU0FBS0MsZUFBTDtBQUNILEdBcEJJO0FBc0JMQSxFQUFBQSxlQXRCSyw2QkFzQmM7QUFDZixTQUFLZixTQUFMLEdBQWlCLElBQUlBLFNBQUosRUFBakI7QUFDSCxHQXhCSTtBQTBCTGdCLEVBQUFBLGNBMUJLLDRCQTBCYTtBQUNkLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS1YsUUFBTCxDQUFjTSxJQUFkLENBQW1CQyxNQUFuQixHQUE0QixJQUE1QjtBQUNBLFNBQUtULFdBQUwsQ0FBaUJRLElBQWpCLENBQXNCQyxNQUF0QixHQUErQixJQUEvQjs7QUFDQSxRQUFJLEtBQUtkLFNBQUwsQ0FBZWtCLFFBQWYsRUFBSixFQUErQjtBQUMzQixXQUFLbEIsU0FBTCxDQUFlbUIsS0FBZixDQUFxQixZQUFZO0FBQzdCRixRQUFBQSxJQUFJLENBQUNHLGVBQUw7QUFDSCxPQUZEO0FBR0gsS0FKRCxNQUtLO0FBQ0QsV0FBS0EsZUFBTDtBQUNIO0FBQ0osR0F0Q0k7QUF3Q0xBLEVBQUFBLGVBeENLLDZCQXdDYztBQUNmLFFBQUlILElBQUksR0FBRyxJQUFYOztBQUNBLFFBQUlJLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQVVDLFFBQVYsRUFBb0I7QUFDbkMsVUFBSSxDQUFDTCxJQUFJLENBQUNaLFdBQVYsRUFBdUI7O0FBQ3ZCLFVBQUlpQixRQUFRLElBQUksR0FBaEIsRUFBcUI7QUFDakJMLFFBQUFBLElBQUksQ0FBQ1osV0FBTCxDQUFpQmlCLFFBQWpCLEdBQTRCLEdBQTVCO0FBQ0FMLFFBQUFBLElBQUksQ0FBQ1YsUUFBTCxDQUFjZ0IsTUFBZCxHQUF1QixlQUF2QjtBQUNBO0FBQ0g7O0FBQ0ROLE1BQUFBLElBQUksQ0FBQ1osV0FBTCxDQUFpQmlCLFFBQWpCLEdBQTRCQSxRQUE1QjtBQUNBTCxNQUFBQSxJQUFJLENBQUNWLFFBQUwsQ0FBY2dCLE1BQWQsR0FBdUIsZ0JBQWdCLENBQUNELFFBQVEsR0FBRyxHQUFaLEVBQWlCRSxPQUFqQixDQUF5QixDQUF6QixDQUFoQixHQUE4QyxHQUFyRTtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBZ0IsQ0FBQ0osUUFBUSxHQUFHLEdBQVosRUFBaUJFLE9BQWpCLENBQXlCLENBQXpCLENBQWhCLEdBQThDLEdBQTFEO0FBQ0gsS0FWRDs7QUFZQSxRQUFJRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQ3pCMUIsTUFBQUEsRUFBRSxDQUFDMkIsUUFBSCxDQUFZQyxTQUFaLENBQXNCaEMsT0FBTyxDQUFDYyxLQUFSLENBQWNtQixJQUFwQztBQUNILEtBRkQ7O0FBSUEvQixJQUFBQSxTQUFTLENBQUNnQyxXQUFWLENBQXNCQyxZQUF0QixDQUFtQ1gsWUFBbkMsRUFBaURNLFVBQWpEO0FBQ0g7QUEzREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGdhbWVEZWYgPSByZXF1aXJlKFwiZ2FtZURlZlwiKTtcbmxldCBzaW5nbGV0b24gPSByZXF1aXJlKFwic2luZ2xldG9uXCIpO1xubGV0IHdlY2hhdFNkayA9IHJlcXVpcmUoXCJ3ZWNoYXRTZGtcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFByb2dyZXNzQmFyOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICBMYWJlbFRpcDoge1xuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgc2luZ2xldG9uLmN1clNjZW5lID0gZ2FtZURlZi5TY2VuZS5Mb2dpbjtcbiAgICAgICAgdGhpcy5MYWJlbFRpcC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdExvZ2luTW9kdWxlKCk7XG4gICAgfSxcblxuICAgIGluaXRMb2dpbk1vZHVsZSAoKSB7XG4gICAgICAgIHRoaXMud2VjaGF0U2RrID0gbmV3IHdlY2hhdFNkaygpO1xuICAgIH0sXG5cbiAgICBvbkNsaWNrV3hMb2dpbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5MYWJlbFRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuUHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy53ZWNoYXRTZGsuaXNXZUNoYXQoKSkge1xuICAgICAgICAgICAgdGhpcy53ZWNoYXRTZGsubG9naW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYucHJlbG9hZEFsbFNjZW5lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZEFsbFNjZW5lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJlbG9hZEFsbFNjZW5lICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgcHJvZ3Jlc3NGdW5jID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYuUHJvZ3Jlc3NCYXIpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSAxMDApIHtcbiAgICAgICAgICAgICAgICBzZWxmLlByb2dyZXNzQmFyLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgICAgICAgIHNlbGYuTGFiZWxUaXAuc3RyaW5nID0gXCLmraPlnKjov5vlhaXmuLjmiI/vvIzor7fogJDlv4PnrYnlvoXvvZ5cIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLlByb2dyZXNzQmFyLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICBzZWxmLkxhYmVsVGlwLnN0cmluZyA9IFwi5q2j5Zyo6L+b5YWl5ri45oiP77yM5b2T5YmN5Yqg6L29XCIgKyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5q2j5Zyo6L+b5YWl5ri45oiP77yM5b2T5YmN5Yqg6L29XCIgKyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHN1Y2Nlc3NGdWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2FtZURlZi5TY2VuZS5IYWxsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzaW5nbGV0b24ubG9hZE1hbmFnZXIubG9hZEFsbFNjZW5lKHByb2dyZXNzRnVuYywgc3VjY2Vzc0Z1Yyk7XG4gICAgfVxuXG59KTtcbiJdfQ==