
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFpbi5qcyJdLCJuYW1lcyI6WyJzaW5nbGV0b24iLCJyZXF1aXJlIiwidXNlckRhdGEiLCJsb2FkUmVzb3VyY2UiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImdhbWUiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwiaW5pdEdhbWVEYXRhIiwiaW5pdEdhbWVTY2VuZSIsImluaXRHYW1lU3RhdGlvbiIsImluaXRHYW1lTW9kZSIsImluaXRHYW1lVXRpbHMiLCJvbkRlc3Ryb3kiLCJyZWxlYXNlIiwic3RhcnQiLCJjdXJTY2VuZSIsImN1ckdhbWVNb2RlIiwiY3VyR2FtZVN0YXRpb24iLCJsb2FkTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlDLFFBQVEsR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBSUUsWUFBWSxHQUFHRixPQUFPLENBQUMsY0FBRCxDQUExQjs7QUFFQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSztBQUNOSixJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS0MsSUFBaEM7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNILEdBZEk7QUFnQkxDLEVBQUFBLFNBaEJLLHVCQWdCUTtBQUNUakIsSUFBQUEsU0FBUyxDQUFDRSxRQUFWLENBQW1CZ0IsT0FBbkI7QUFDSCxHQWxCSTtBQW9CTEMsRUFBQUEsS0FwQkssbUJBb0JJLENBRVIsQ0F0Qkk7QUF3QkxOLEVBQUFBLGFBeEJLLDJCQXdCWTtBQUNiLFFBQUdiLFNBQVMsQ0FBQ29CLFFBQWIsRUFBdUI7QUFDbkIsYUFBT3BCLFNBQVMsQ0FBQ29CLFFBQWpCO0FBQ0FwQixNQUFBQSxTQUFTLENBQUNvQixRQUFWLEdBQXFCLElBQXJCO0FBQ0g7QUFDSixHQTdCSTtBQStCTEwsRUFBQUEsWUEvQkssMEJBK0JXO0FBQ1osUUFBSWYsU0FBUyxDQUFDcUIsV0FBZCxFQUEyQjtBQUN2QixhQUFPckIsU0FBUyxDQUFDcUIsV0FBakI7QUFDQXJCLE1BQUFBLFNBQVMsQ0FBQ3FCLFdBQVYsR0FBd0IsSUFBeEI7QUFDSDtBQUNKLEdBcENJO0FBc0NMUCxFQUFBQSxlQXRDSyw2QkFzQ2M7QUFDZixRQUFJZCxTQUFTLENBQUNzQixjQUFkLEVBQThCO0FBQzFCLGFBQU90QixTQUFTLENBQUNzQixjQUFqQjtBQUNBdEIsTUFBQUEsU0FBUyxDQUFDc0IsY0FBVixHQUEyQixJQUEzQjtBQUNIO0FBQ0osR0EzQ0k7QUE2Q0xWLEVBQUFBLFlBN0NLLDBCQTZDVztBQUNaLFFBQUlaLFNBQVMsQ0FBQ0UsUUFBZCxFQUF3QjtBQUNwQixhQUFPRixTQUFTLENBQUNxQixXQUFqQjtBQUNBckIsTUFBQUEsU0FBUyxDQUFDcUIsV0FBVixHQUF3QixJQUF4QjtBQUNIOztBQUNEckIsSUFBQUEsU0FBUyxDQUFDRSxRQUFWLEdBQXFCLElBQUlBLFFBQUosRUFBckI7QUFDSCxHQW5ESTtBQXFETGMsRUFBQUEsYUFyREssMkJBcURZO0FBQ2JoQixJQUFBQSxTQUFTLENBQUN1QixXQUFWLEdBQXdCLElBQUlwQixZQUFKLEVBQXhCO0FBQ0g7QUF2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHNpbmdsZXRvbiA9IHJlcXVpcmUoXCJzaW5nbGV0b25cIik7XG5sZXQgdXNlckRhdGEgPSByZXF1aXJlKFwidXNlckRhdGFcIik7XG5sZXQgbG9hZFJlc291cmNlID0gcmVxdWlyZShcImxvYWRSZXNvdXJjZVwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmluaXRHYW1lRGF0YSgpO1xuICAgICAgICB0aGlzLmluaXRHYW1lU2NlbmUoKTtcbiAgICAgICAgdGhpcy5pbml0R2FtZVN0YXRpb24oKTtcbiAgICAgICAgdGhpcy5pbml0R2FtZU1vZGUoKTtcbiAgICAgICAgdGhpcy5pbml0R2FtZVV0aWxzKCk7XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSAoKSB7XG4gICAgICAgIHNpbmdsZXRvbi51c2VyRGF0YS5yZWxlYXNlKCk7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICBpbml0R2FtZVNjZW5lICgpIHtcbiAgICAgICAgaWYoc2luZ2xldG9uLmN1clNjZW5lKSB7XG4gICAgICAgICAgICBkZWxldGUgc2luZ2xldG9uLmN1clNjZW5lO1xuICAgICAgICAgICAgc2luZ2xldG9uLmN1clNjZW5lID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0R2FtZU1vZGUgKCkge1xuICAgICAgICBpZiAoc2luZ2xldG9uLmN1ckdhbWVNb2RlKSB7XG4gICAgICAgICAgICBkZWxldGUgc2luZ2xldG9uLmN1ckdhbWVNb2RlO1xuICAgICAgICAgICAgc2luZ2xldG9uLmN1ckdhbWVNb2RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0R2FtZVN0YXRpb24gKCkge1xuICAgICAgICBpZiAoc2luZ2xldG9uLmN1ckdhbWVTdGF0aW9uKSB7XG4gICAgICAgICAgICBkZWxldGUgc2luZ2xldG9uLmN1ckdhbWVTdGF0aW9uO1xuICAgICAgICAgICAgc2luZ2xldG9uLmN1ckdhbWVTdGF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbml0R2FtZURhdGEgKCkge1xuICAgICAgICBpZiAoc2luZ2xldG9uLnVzZXJEYXRhKSB7XG4gICAgICAgICAgICBkZWxldGUgc2luZ2xldG9uLmN1ckdhbWVNb2RlO1xuICAgICAgICAgICAgc2luZ2xldG9uLmN1ckdhbWVNb2RlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzaW5nbGV0b24udXNlckRhdGEgPSBuZXcgdXNlckRhdGEoKTtcbiAgICB9LFxuXG4gICAgaW5pdEdhbWVVdGlscyAoKSB7XG4gICAgICAgIHNpbmdsZXRvbi5sb2FkTWFuYWdlciA9IG5ldyBsb2FkUmVzb3VyY2UoKTtcbiAgICB9LFxufSk7XG4iXX0=