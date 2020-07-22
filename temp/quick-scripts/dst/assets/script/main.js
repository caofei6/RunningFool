
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

var loadManager = require("loadManager");

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
    singleton.loadManager = new loadManager();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFpbi5qcyJdLCJuYW1lcyI6WyJzaW5nbGV0b24iLCJyZXF1aXJlIiwidXNlckRhdGEiLCJsb2FkTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJpbml0R2FtZURhdGEiLCJpbml0R2FtZVNjZW5lIiwiaW5pdEdhbWVTdGF0aW9uIiwiaW5pdEdhbWVNb2RlIiwiaW5pdEdhbWVVdGlscyIsIm9uRGVzdHJveSIsInJlbGVhc2UiLCJzdGFydCIsImN1clNjZW5lIiwiY3VyR2FtZU1vZGUiLCJjdXJHYW1lU3RhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlDLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFFQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSztBQUNOSixJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS0MsSUFBaEM7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNILEdBZEk7QUFnQkxDLEVBQUFBLFNBaEJLLHVCQWdCUTtBQUNUakIsSUFBQUEsU0FBUyxDQUFDRSxRQUFWLENBQW1CZ0IsT0FBbkI7QUFDSCxHQWxCSTtBQW9CTEMsRUFBQUEsS0FwQkssbUJBb0JJLENBRVIsQ0F0Qkk7QUF3QkxOLEVBQUFBLGFBeEJLLDJCQXdCWTtBQUNiLFFBQUdiLFNBQVMsQ0FBQ29CLFFBQWIsRUFBdUI7QUFDbkIsYUFBT3BCLFNBQVMsQ0FBQ29CLFFBQWpCO0FBQ0FwQixNQUFBQSxTQUFTLENBQUNvQixRQUFWLEdBQXFCLElBQXJCO0FBQ0g7QUFDSixHQTdCSTtBQStCTEwsRUFBQUEsWUEvQkssMEJBK0JXO0FBQ1osUUFBSWYsU0FBUyxDQUFDcUIsV0FBZCxFQUEyQjtBQUN2QixhQUFPckIsU0FBUyxDQUFDcUIsV0FBakI7QUFDQXJCLE1BQUFBLFNBQVMsQ0FBQ3FCLFdBQVYsR0FBd0IsSUFBeEI7QUFDSDtBQUNKLEdBcENJO0FBc0NMUCxFQUFBQSxlQXRDSyw2QkFzQ2M7QUFDZixRQUFJZCxTQUFTLENBQUNzQixjQUFkLEVBQThCO0FBQzFCLGFBQU90QixTQUFTLENBQUNzQixjQUFqQjtBQUNBdEIsTUFBQUEsU0FBUyxDQUFDc0IsY0FBVixHQUEyQixJQUEzQjtBQUNIO0FBQ0osR0EzQ0k7QUE2Q0xWLEVBQUFBLFlBN0NLLDBCQTZDVztBQUNaLFFBQUlaLFNBQVMsQ0FBQ0UsUUFBZCxFQUF3QjtBQUNwQixhQUFPRixTQUFTLENBQUNxQixXQUFqQjtBQUNBckIsTUFBQUEsU0FBUyxDQUFDcUIsV0FBVixHQUF3QixJQUF4QjtBQUNIOztBQUNEckIsSUFBQUEsU0FBUyxDQUFDRSxRQUFWLEdBQXFCLElBQUlBLFFBQUosRUFBckI7QUFDSCxHQW5ESTtBQXFETGMsRUFBQUEsYUFyREssMkJBcURZO0FBQ2JoQixJQUFBQSxTQUFTLENBQUNHLFdBQVYsR0FBd0IsSUFBSUEsV0FBSixFQUF4QjtBQUNIO0FBdkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzaW5nbGV0b24gPSByZXF1aXJlKFwic2luZ2xldG9uXCIpO1xubGV0IHVzZXJEYXRhID0gcmVxdWlyZShcInVzZXJEYXRhXCIpO1xubGV0IGxvYWRNYW5hZ2VyID0gcmVxdWlyZShcImxvYWRNYW5hZ2VyXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMuaW5pdEdhbWVEYXRhKCk7XG4gICAgICAgIHRoaXMuaW5pdEdhbWVTY2VuZSgpO1xuICAgICAgICB0aGlzLmluaXRHYW1lU3RhdGlvbigpO1xuICAgICAgICB0aGlzLmluaXRHYW1lTW9kZSgpO1xuICAgICAgICB0aGlzLmluaXRHYW1lVXRpbHMoKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95ICgpIHtcbiAgICAgICAgc2luZ2xldG9uLnVzZXJEYXRhLnJlbGVhc2UoKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIGluaXRHYW1lU2NlbmUgKCkge1xuICAgICAgICBpZihzaW5nbGV0b24uY3VyU2NlbmUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzaW5nbGV0b24uY3VyU2NlbmU7XG4gICAgICAgICAgICBzaW5nbGV0b24uY3VyU2NlbmUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRHYW1lTW9kZSAoKSB7XG4gICAgICAgIGlmIChzaW5nbGV0b24uY3VyR2FtZU1vZGUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzaW5nbGV0b24uY3VyR2FtZU1vZGU7XG4gICAgICAgICAgICBzaW5nbGV0b24uY3VyR2FtZU1vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRHYW1lU3RhdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaW5nbGV0b24uY3VyR2FtZVN0YXRpb24pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzaW5nbGV0b24uY3VyR2FtZVN0YXRpb247XG4gICAgICAgICAgICBzaW5nbGV0b24uY3VyR2FtZVN0YXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXRHYW1lRGF0YSAoKSB7XG4gICAgICAgIGlmIChzaW5nbGV0b24udXNlckRhdGEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzaW5nbGV0b24uY3VyR2FtZU1vZGU7XG4gICAgICAgICAgICBzaW5nbGV0b24uY3VyR2FtZU1vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHNpbmdsZXRvbi51c2VyRGF0YSA9IG5ldyB1c2VyRGF0YSgpO1xuICAgIH0sXG5cbiAgICBpbml0R2FtZVV0aWxzICgpIHtcbiAgICAgICAgc2luZ2xldG9uLmxvYWRNYW5hZ2VyID0gbmV3IGxvYWRNYW5hZ2VyKCk7XG4gICAgfSxcbn0pO1xuIl19