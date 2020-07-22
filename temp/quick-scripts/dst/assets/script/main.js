
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8479b9tizNEXL684Aj2/SWf', 'main');
// script/main.js

"use strict";

var singleton = require("singleton");

var userData = require("userData");

var loadResource = require("loadResource");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
    this.initGameData();
    this.initGameScene();
    this.initGameStation();
    this.initGameMode();
    this.initGameUtils();
  },
  onDestroy: function onDestroy() {
    singleton.userData.release();
  },
  start: function start() {},
  initGameScene: function initGameScene() {
    if (singleton.curScene) {
      delete singleton.curScene;
      singleton.curScene = null;
    }
  },
  initGameMode: function initGameMode() {
    if (singleton.curGameMode) {
      delete singleton.curGameMode;
      singleton.curGameMode = null;
    }
  },
  initGameStation: function initGameStation() {
    if (singleton.curGameStation) {
      delete singleton.curGameStation;
      singleton.curGameStation = null;
    }
  },
  initGameData: function initGameData() {
    if (singleton.userData) {
      delete singleton.curGameMode;
      singleton.curGameMode = null;
    }

    singleton.userData = new userData();
  },
  initGameUtils: function initGameUtils() {
    singleton.loadManager = new loadResource();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsInJlcXVpcmUiLCJ1c2VyRGF0YSIsImxvYWRSZXNvdXJjZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJpbml0R2FtZURhdGEiLCJpbml0R2FtZVNjZW5lIiwiaW5pdEdhbWVTdGF0aW9uIiwiaW5pdEdhbWVNb2RlIiwiaW5pdEdhbWVVdGlscyIsIm9uRGVzdHJveSIsInJlbGVhc2UiLCJzdGFydCIsImN1clNjZW5lIiwiY3VyR2FtZU1vZGUiLCJjdXJHYW1lU3RhdGlvbiIsImxvYWRNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFDQSxJQUFJRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBQTFCOztBQUVBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9LO0FBQ05KLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRQyxrQkFBUixDQUEyQixLQUFLQyxJQUFoQztBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsZUFBTDtBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsU0FoQkssdUJBZ0JRO0FBQ1RqQixJQUFBQSxTQUFTLENBQUNFLFFBQVYsQ0FBbUJnQixPQUFuQjtBQUNILEdBbEJJO0FBb0JMQyxFQUFBQSxLQXBCSyxtQkFvQkksQ0FFUixDQXRCSTtBQXdCTE4sRUFBQUEsYUF4QkssMkJBd0JZO0FBQ2IsUUFBR2IsU0FBUyxDQUFDb0IsUUFBYixFQUF1QjtBQUNuQixhQUFPcEIsU0FBUyxDQUFDb0IsUUFBakI7QUFDQXBCLE1BQUFBLFNBQVMsQ0FBQ29CLFFBQVYsR0FBcUIsSUFBckI7QUFDSDtBQUNKLEdBN0JJO0FBK0JMTCxFQUFBQSxZQS9CSywwQkErQlc7QUFDWixRQUFJZixTQUFTLENBQUNxQixXQUFkLEVBQTJCO0FBQ3ZCLGFBQU9yQixTQUFTLENBQUNxQixXQUFqQjtBQUNBckIsTUFBQUEsU0FBUyxDQUFDcUIsV0FBVixHQUF3QixJQUF4QjtBQUNIO0FBQ0osR0FwQ0k7QUFzQ0xQLEVBQUFBLGVBdENLLDZCQXNDYztBQUNmLFFBQUlkLFNBQVMsQ0FBQ3NCLGNBQWQsRUFBOEI7QUFDMUIsYUFBT3RCLFNBQVMsQ0FBQ3NCLGNBQWpCO0FBQ0F0QixNQUFBQSxTQUFTLENBQUNzQixjQUFWLEdBQTJCLElBQTNCO0FBQ0g7QUFDSixHQTNDSTtBQTZDTFYsRUFBQUEsWUE3Q0ssMEJBNkNXO0FBQ1osUUFBSVosU0FBUyxDQUFDRSxRQUFkLEVBQXdCO0FBQ3BCLGFBQU9GLFNBQVMsQ0FBQ3FCLFdBQWpCO0FBQ0FyQixNQUFBQSxTQUFTLENBQUNxQixXQUFWLEdBQXdCLElBQXhCO0FBQ0g7O0FBQ0RyQixJQUFBQSxTQUFTLENBQUNFLFFBQVYsR0FBcUIsSUFBSUEsUUFBSixFQUFyQjtBQUNILEdBbkRJO0FBcURMYyxFQUFBQSxhQXJESywyQkFxRFk7QUFDYmhCLElBQUFBLFNBQVMsQ0FBQ3VCLFdBQVYsR0FBd0IsSUFBSXBCLFlBQUosRUFBeEI7QUFDSDtBQXZESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2luZ2xldG9uID0gcmVxdWlyZShcInNpbmdsZXRvblwiKTtcclxubGV0IHVzZXJEYXRhID0gcmVxdWlyZShcInVzZXJEYXRhXCIpO1xyXG5sZXQgbG9hZFJlc291cmNlID0gcmVxdWlyZShcImxvYWRSZXNvdXJjZVwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5pbml0R2FtZURhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXRHYW1lU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmluaXRHYW1lU3RhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEdhbWVNb2RlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0R2FtZVV0aWxzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgc2luZ2xldG9uLnVzZXJEYXRhLnJlbGVhc2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEdhbWVTY2VuZSAoKSB7XHJcbiAgICAgICAgaWYoc2luZ2xldG9uLmN1clNjZW5lKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzaW5nbGV0b24uY3VyU2NlbmU7XHJcbiAgICAgICAgICAgIHNpbmdsZXRvbi5jdXJTY2VuZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0R2FtZU1vZGUgKCkge1xyXG4gICAgICAgIGlmIChzaW5nbGV0b24uY3VyR2FtZU1vZGUpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHNpbmdsZXRvbi5jdXJHYW1lTW9kZTtcclxuICAgICAgICAgICAgc2luZ2xldG9uLmN1ckdhbWVNb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRHYW1lU3RhdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNpbmdsZXRvbi5jdXJHYW1lU3RhdGlvbikge1xyXG4gICAgICAgICAgICBkZWxldGUgc2luZ2xldG9uLmN1ckdhbWVTdGF0aW9uO1xyXG4gICAgICAgICAgICBzaW5nbGV0b24uY3VyR2FtZVN0YXRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEdhbWVEYXRhICgpIHtcclxuICAgICAgICBpZiAoc2luZ2xldG9uLnVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzaW5nbGV0b24uY3VyR2FtZU1vZGU7XHJcbiAgICAgICAgICAgIHNpbmdsZXRvbi5jdXJHYW1lTW9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpbmdsZXRvbi51c2VyRGF0YSA9IG5ldyB1c2VyRGF0YSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0R2FtZVV0aWxzICgpIHtcclxuICAgICAgICBzaW5nbGV0b24ubG9hZE1hbmFnZXIgPSBuZXcgbG9hZFJlc291cmNlKCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19