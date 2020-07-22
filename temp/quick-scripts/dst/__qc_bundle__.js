
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/core/gameDef');
require('./assets/script/core/singleton');
require('./assets/script/data/userData');
require('./assets/script/def/eventDef');
require('./assets/script/def/prefabDef');
require('./assets/script/hall/hallController');
require('./assets/script/login/LoginController');
require('./assets/script/main');
require('./assets/script/utils/eventCenter');
require('./assets/script/utils/loadManager');
require('./assets/script/utils/physicsManager');
require('./assets/script/utils/wechatSdk');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/physicsManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90e609yB4RL7oZKGKxwljC9', 'physicsManager');
// script/utils/physicsManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isDebug: false
  },
  onLoad: function onLoad() {
    var phyMgr = cc.director.getPhysicsManager();
    phyMgr.enabled = true;

    if (this.isDebug) {
      phyMgr.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_pairBit | cc.PhysicsManager.DrawBits.e_centerOfMassBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvcGh5c2ljc01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpc0RlYnVnIiwib25Mb2FkIiwicGh5TWdyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJkZWJ1Z0RyYXdGbGFncyIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJlX2FhYmJCaXQiLCJlX3BhaXJCaXQiLCJlX2NlbnRlck9mTWFzc0JpdCIsImVfam9pbnRCaXQiLCJlX3NoYXBlQml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFO0FBREQsR0FIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9LO0FBQ04sUUFBSUMsTUFBTSxHQUFHTixFQUFFLENBQUNPLFFBQUgsQ0FBWUMsaUJBQVosRUFBYjtBQUNBRixJQUFBQSxNQUFNLENBQUNHLE9BQVAsR0FBaUIsSUFBakI7O0FBQ0EsUUFBRyxLQUFLTCxPQUFSLEVBQWlCO0FBQ2JFLE1BQUFBLE1BQU0sQ0FBQ0ksY0FBUCxHQUF3QlYsRUFBRSxDQUFDVyxjQUFILENBQWtCQyxRQUFsQixDQUEyQkMsU0FBM0IsR0FDcEJiLEVBQUUsQ0FBQ1csY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJFLFNBRFAsR0FFcEJkLEVBQUUsQ0FBQ1csY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJHLGlCQUZQLEdBR3BCZixFQUFFLENBQUNXLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCSSxVQUhQLEdBSXBCaEIsRUFBRSxDQUFDVyxjQUFILENBQWtCQyxRQUFsQixDQUEyQkssVUFKL0I7QUFLSDtBQUNKO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaXNEZWJ1ZzogZmFsc2VcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbGV0IHBoeU1nciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIHBoeU1nci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgaWYodGhpcy5pc0RlYnVnKSB7XG4gICAgICAgICAgICBwaHlNZ3IuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfcGFpckJpdCB8XG4gICAgICAgICAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9jZW50ZXJPZk1hc3NCaXQgfFxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfam9pbnRCaXQgfFxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXQ7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/core/singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0042cFYsopA6JTKd7xHCAKA', 'singleton');
// script/core/singleton.js

"use strict";

var singleton = {};
module.exports = singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29yZS9zaW5nbGV0b24uanMiXSwibmFtZXMiOlsic2luZ2xldG9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTLEdBQUcsRUFBaEI7QUFJQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixTQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgc2luZ2xldG9uID0ge1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbmdsZXRvbjsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/wechatSdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db178cndaVN653+3C3z/ut7', 'wechatSdk');
// script/utils/wechatSdk.js

"use strict";

var singleton = require("singleton");

var eventCenter = require("eventCenter");

var eventDef = require("eventDef");

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    console.log("wechatSdk ctor");

    if (!this.isWeChat()) {
      console.log("The env isn't wechat");
      return;
    }

    this.userInfo = null;
    this.userInfoCallback = null;
    this.wxSessionVaild = this.checkWxSession();
    this.initLoginButton();
  },
  // 判断是否是wx
  isWeChat: function isWeChat() {
    return cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME;
  },
  // 判断Session是否过期
  checkWxSession: function checkWxSession() {
    wx.checkSession({
      success: function success() {
        //session_key 未过期，并且在本生命周期一直有效
        return true;
      },
      fail: function fail() {
        // session_key 已经失效，需要重新执行登录流程
        return false;
      }
    });
  },
  // 登录
  login: function login() {
    console.log("wechatSdk login..");
    this.successFunc = successFunc;

    if (this.wxSessionVaild) {
      this.getUserInfo();
    }
  },
  // 初始化授权按钮
  initLoginButton: function initLoginButton() {
    var self = this;
    var wx = window['wx'];
    var sysInfo = wx.getSystemInfoSync();
    var width = sysInfo.screenWidth;
    var height = sysInfo.screenHeight;
    wx.getSetting({
      success: function success(res) {
        console.log("UserAuthSetting: " + res.authSetting);

        if (res.authSetting["scope.userInfo"]) {
          console.log("The user has the scope!");
          self.getUserInfo();
        } else {
          console.log("The user hasn't the scope!");
          var button = wx.createUserInfoButton({
            type: 'text',
            text: '',
            style: {
              left: width / 2,
              top: height / 2,
              width: width,
              height: height,
              backgroundColor: '#00000000',
              color: '#ffffff',
              fontSize: 20,
              textAlign: "center",
              lineHeight: height
            } // 授权按钮全屏

          });
          button.onTap(function (res) {
            if (res.userInfo) {
              self.userInfo = res.userInfo;
              singleton.userData.setUserWxData(self.userInfo);
              eventCenter.emitEvent(eventDef.PreloadScene);
              button.destroy();
            } else {
              console.log("The user cncelled the authorization!");
            }
          });
        }
      }
    });
  },
  // 获取用户信息
  getUserInfo: function getUserInfo() {
    var self = this;
    wx.getUserInfo({
      success: function success(res) {
        console.log("The userInfo is " + JSON.stringify(res.userInfo));
        self.userInfo = res.userInfo;
        singleton.userData.setUserWxData(self.userInfo);
        eventCenter.emitEvent(eventDef.PreloadScene);
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvd2VjaGF0U2RrLmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsInJlcXVpcmUiLCJldmVudENlbnRlciIsImV2ZW50RGVmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImN0b3IiLCJjb25zb2xlIiwibG9nIiwiaXNXZUNoYXQiLCJ1c2VySW5mbyIsInVzZXJJbmZvQ2FsbGJhY2siLCJ3eFNlc3Npb25WYWlsZCIsImNoZWNrV3hTZXNzaW9uIiwiaW5pdExvZ2luQnV0dG9uIiwic3lzIiwiYnJvd3NlclR5cGUiLCJCUk9XU0VSX1RZUEVfV0VDSEFUX0dBTUUiLCJ3eCIsImNoZWNrU2Vzc2lvbiIsInN1Y2Nlc3MiLCJmYWlsIiwibG9naW4iLCJzdWNjZXNzRnVuYyIsImdldFVzZXJJbmZvIiwic2VsZiIsIndpbmRvdyIsInN5c0luZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpZHRoIiwic2NyZWVuV2lkdGgiLCJoZWlnaHQiLCJzY3JlZW5IZWlnaHQiLCJnZXRTZXR0aW5nIiwicmVzIiwiYXV0aFNldHRpbmciLCJidXR0b24iLCJjcmVhdGVVc2VySW5mb0J1dHRvbiIsInR5cGUiLCJ0ZXh0Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJvblRhcCIsInVzZXJEYXRhIiwic2V0VXNlcld4RGF0YSIsImVtaXRFdmVudCIsIlByZWxvYWRTY2VuZSIsImRlc3Ryb3kiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBRyxFQUFFLENBQUND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eEIsUUFBUixFQUFrQjtBQUNkZSxjQUFBQSxJQUFJLENBQUNmLFFBQUwsR0FBZ0J3QixHQUFHLENBQUN4QixRQUFwQjtBQUNBWCxjQUFBQSxTQUFTLENBQUNrRCxRQUFWLENBQW1CQyxhQUFuQixDQUFpQ3pCLElBQUksQ0FBQ2YsUUFBdEM7QUFDQVQsY0FBQUEsV0FBVyxDQUFDa0QsU0FBWixDQUFzQmpELFFBQVEsQ0FBQ2tELFlBQS9CO0FBQ0FoQixjQUFBQSxNQUFNLENBQUNpQixPQUFQO0FBQ0gsYUFMRCxNQUtPO0FBQ0g5QyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjtBQUNIO0FBQ0osV0FURDtBQVVIO0FBQ0o7QUFuQ1MsS0FBZDtBQXFDSCxHQXpGSTtBQTJGTDtBQUNBZ0IsRUFBQUEsV0E1RksseUJBNEZTO0FBQ1YsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQVAsSUFBQUEsRUFBRSxDQUFDTSxXQUFILENBQWU7QUFDWEosTUFBQUEsT0FEVyxtQkFDSGMsR0FERyxFQUNFO0FBQ1QzQixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBcUI4QyxJQUFJLENBQUNDLFNBQUwsQ0FBZXJCLEdBQUcsQ0FBQ3hCLFFBQW5CLENBQWpDO0FBQ0FlLFFBQUFBLElBQUksQ0FBQ2YsUUFBTCxHQUFnQndCLEdBQUcsQ0FBQ3hCLFFBQXBCO0FBQ0FYLFFBQUFBLFNBQVMsQ0FBQ2tELFFBQVYsQ0FBbUJDLGFBQW5CLENBQWlDekIsSUFBSSxDQUFDZixRQUF0QztBQUNBVCxRQUFBQSxXQUFXLENBQUNrRCxTQUFaLENBQXNCakQsUUFBUSxDQUFDa0QsWUFBL0I7QUFDSDtBQU5VLEtBQWY7QUFRSDtBQXRHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2luZ2xldG9uID0gcmVxdWlyZShcInNpbmdsZXRvblwiKTtcbmxldCBldmVudENlbnRlciA9IHJlcXVpcmUoXCJldmVudENlbnRlclwiKTtcbmxldCBldmVudERlZiA9IHJlcXVpcmUoXCJldmVudERlZlwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIGN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2VjaGF0U2RrIGN0b3JcIik7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzV2VDaGF0KCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGVudiBpc24ndCB3ZWNoYXRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gbnVsbDtcbiAgICAgICAgdGhpcy51c2VySW5mb0NhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy53eFNlc3Npb25WYWlsZCA9IHRoaXMuY2hlY2tXeFNlc3Npb24oKTtcbiAgICAgICAgdGhpcy5pbml0TG9naW5CdXR0b24oKTtcbiAgICB9LFxuXG4gICAgLy8g5Yik5pat5piv5ZCm5pivd3hcbiAgICBpc1dlQ2hhdCgpIHtcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5icm93c2VyVHlwZSA9PT0gY2Muc3lzLkJST1dTRVJfVFlQRV9XRUNIQVRfR0FNRTtcbiAgICB9LFxuXG4gICAgLy8g5Yik5patU2Vzc2lvbuaYr+WQpui/h+acn1xuICAgIGNoZWNrV3hTZXNzaW9uKCkge1xuICAgICAgICB3eC5jaGVja1Nlc3Npb24oe1xuICAgICAgICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICAvL3Nlc3Npb25fa2V5IOacqui/h+acn++8jOW5tuS4lOWcqOacrOeUn+WRveWRqOacn+S4gOebtOacieaViFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICAgICAgLy8gc2Vzc2lvbl9rZXkg5bey57uP5aSx5pWI77yM6ZyA6KaB6YeN5paw5omn6KGM55m75b2V5rWB56iLXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICAvLyDnmbvlvZVcbiAgICBsb2dpbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2VjaGF0U2RrIGxvZ2luLi5cIik7XG4gICAgICAgIHRoaXMuc3VjY2Vzc0Z1bmMgPSBzdWNjZXNzRnVuYztcbiAgICAgICAgaWYgKHRoaXMud3hTZXNzaW9uVmFpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyDliJ3lp4vljJbmjojmnYPmjInpkq5cbiAgICBpbml0TG9naW5CdXR0b24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHd4ID0gd2luZG93Wyd3eCddO1xuICAgICAgICBsZXQgc3lzSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgIGxldCB3aWR0aCA9IHN5c0luZm8uc2NyZWVuV2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBzeXNJbmZvLnNjcmVlbkhlaWdodDtcbiAgICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlckF1dGhTZXR0aW5nOiBcIiArIHJlcy5hdXRoU2V0dGluZyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1tcInNjb3BlLnVzZXJJbmZvXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgaGFzIHRoZSBzY29wZSFcIik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1c2VyIGhhc24ndCB0aGUgc2NvcGUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGhlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaOiOadg+aMiemSruWFqOWxj1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLm9uVGFwKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZXRvbi51c2VyRGF0YS5zZXRVc2VyV3hEYXRhKHNlbGYudXNlckluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2VudGVyLmVtaXRFdmVudChldmVudERlZi5QcmVsb2FkU2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgY25jZWxsZWQgdGhlIGF1dGhvcml6YXRpb24hXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1c2VySW5mbyBpcyBcIiArIEpTT04uc3RyaW5naWZ5KHJlcy51c2VySW5mbykpO1xuICAgICAgICAgICAgICAgIHNlbGYudXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICAgICAgICAgICAgc2luZ2xldG9uLnVzZXJEYXRhLnNldFVzZXJXeERhdGEoc2VsZi51c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgZXZlbnRDZW50ZXIuZW1pdEV2ZW50KGV2ZW50RGVmLlByZWxvYWRTY2VuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/eventCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7046XkjOZCpI7J1RIO+H/j', 'eventCenter');
// script/utils/eventCenter.js

"use strict";

function EventGroup() {
  this.head = null;
  this.iter = null;
  this.length = 0;

  EventGroup.prototype.getLength = function () {
    return this.length;
  };

  EventGroup.prototype.addObserver = function (observer, target) {
    if (observer == null) return;

    if (this.head == null) {
      this.head = {
        ob: observer,
        target: target,
        next: null
      };
      this.length = 1;
      return;
    }

    var node = this.head;
    var last = null;

    while (node != null) {
      if (node.ob === observer && node.target === target) {
        return;
      }

      last = node;
      node = node.next;
    }

    this.length += 1;
    last.next = {
      ob: observer,
      target: target,
      next: null
    };
  };

  EventGroup.prototype.removeObserver = function (observer, target) {
    if (observer == null || this.head == null) return;

    if (this.head.ob === observer && this.head.target === target) {
      if (this.head === this.iter) {
        this.iter = this.iter.next;
      }

      this.head = this.head.next;
      this.length--;
      return;
    }

    var node = this.head;

    while (node.next != null) {
      if (node.next.ob === observer && node.next.target === target) {
        if (this.iter === node.next) {
          this.iter = node.next.next;
        }

        node.next = node.next.next;
        this.length--;
        return;
      }

      node = node.next;
    }
  };

  EventGroup.prototype.removeAll = function () {
    this.iter = null;
    this.head = null;
    this.length = 0;
  };

  EventGroup.prototype.emitByArray = function (array) {
    this.iter = this.head;

    while (this.iter != null) {
      var temp = this.iter;

      if (temp.target) {
        temp.ob.call(temp.target, array);
      } else {
        temp.ob(array);
      }

      if (this.iter && temp === this.iter) {
        this.iter = this.iter.next;
      }
    }

    this.iter = null;
  };

  EventGroup.prototype.emit = function () {
    this.iter = this.head;

    while (this.iter != null) {
      var temp = this.iter;

      if (temp.target) {
        var _temp$ob;

        (_temp$ob = temp.ob).call.apply(_temp$ob, [temp.target].concat(Array.prototype.slice.call(arguments)));
      } else {
        temp.ob.apply(temp, arguments);
      }

      if (this.iter && temp === this.iter) {
        this.iter = this.iter.next;
      }
    }

    this.iter = null;
  };
}

var eventCenter = {
  _eventGroup: {},
  getEventGroup: function getEventGroup(evt) {
    return eventCenter._eventGroup[evt];
  },
  addEventObserver: function addEventObserver(evt, observer, target) {
    if (evt == null) {
      console.log("addEventObserver evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (!eg) {
      eg = new EventGroup();
      eventCenter._eventGroup[evt] = eg;
    }

    eg.addObserver(observer, target);
  },
  removeEventObserver: function removeEventObserver(evt, observer, target) {
    if (evt == null) {
      console.log("removeEventObserver evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (!eg) {
      eg.removeObserver(observer, target);

      if (eg.getLength() === 0) {
        delete eventCenter._eventGroup[evt];
      }
    }
  },
  emitEvent: function emitEvent(evt) {
    if (evt == null) {
      console.log("emitEvent evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (eg) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      eg.emit.apply(eg, params);
    }
  },
  emitEventByArray: function emitEventByArray(evt, array) {
    if (evt == null) {
      console.log("emitEventByArray evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (eg) {
      eg.emitByArray(array);
    }
  },
  removeAll: function removeAll() {
    var eg = eventCenter._eventGroup;

    for (var key in eg) {
      eg[key].removeAll();
    }

    eventCenter._eventGroup = null;
  }
};
module.exports = eventCenter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvZXZlbnRDZW50ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRHcm91cCIsImhlYWQiLCJpdGVyIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiZ2V0TGVuZ3RoIiwiYWRkT2JzZXJ2ZXIiLCJvYnNlcnZlciIsInRhcmdldCIsIm9iIiwibmV4dCIsIm5vZGUiLCJsYXN0IiwicmVtb3ZlT2JzZXJ2ZXIiLCJyZW1vdmVBbGwiLCJlbWl0QnlBcnJheSIsImFycmF5IiwidGVtcCIsImNhbGwiLCJlbWl0IiwiYXJndW1lbnRzIiwiZXZlbnRDZW50ZXIiLCJfZXZlbnRHcm91cCIsImdldEV2ZW50R3JvdXAiLCJldnQiLCJhZGRFdmVudE9ic2VydmVyIiwiY29uc29sZSIsImxvZyIsImVnIiwicmVtb3ZlRXZlbnRPYnNlcnZlciIsImVtaXRFdmVudCIsInBhcmFtcyIsImVtaXRFdmVudEJ5QXJyYXkiLCJrZXkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVNBLFVBQVQsR0FBc0I7QUFFbEIsT0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxDQUFkOztBQUVBSCxFQUFBQSxVQUFVLENBQUNJLFNBQVgsQ0FBcUJDLFNBQXJCLEdBQWlDLFlBQVk7QUFDekMsV0FBTyxLQUFLRixNQUFaO0FBQ0gsR0FGRDs7QUFJQUgsRUFBQUEsVUFBVSxDQUFDSSxTQUFYLENBQXFCRSxXQUFyQixHQUFtQyxVQUFVQyxRQUFWLEVBQW9CQyxNQUFwQixFQUE0QjtBQUMzRCxRQUFJRCxRQUFRLElBQUksSUFBaEIsRUFBc0I7O0FBQ3RCLFFBQUksS0FBS04sSUFBTCxJQUFhLElBQWpCLEVBQXVCO0FBQ25CLFdBQUtBLElBQUwsR0FBWTtBQUFDUSxRQUFBQSxFQUFFLEVBQUVGLFFBQUw7QUFBZUMsUUFBQUEsTUFBTSxFQUFDQSxNQUF0QjtB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QSxRQUFHSSxFQUFILEVBQU87QUFBQSx3Q0FOa0JHLE1BTWxCO0FBTmtCQSxRQUFBQSxNQU1sQjtBQUFBOztBQUNISCxNQUFBQSxFQUFFLENBQUNULElBQUgsT0FBQVMsRUFBRSxFQUFTRyxNQUFULENBQUY7QUFDSDtBQUNKLEdBN0NhO0FBK0NkQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVVIsR0FBVixFQUFlUixLQUFmLEVBQXNCO0FBQ3BDLFFBQUdRLEdBQUcsSUFBSSxJQUFWLEVBQWdCO0FBQ1pFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0E7QUFDSDs7QUFDRCxRQUFJQyxFQUFFLEdBQUdQLFdBQVcsQ0FBQ0UsYUFBWixDQUEwQkMsR0FBMUIsQ0FBVDs7QUFDQSxRQUFHSSxFQUFILEVBQU87QUFDSEEsTUFBQUEsRUFBRSxDQUFDYixXQUFILENBQWVDLEtBQWY7QUFDSDtBQUNKLEdBeERhO0FBMERkRixFQUFBQSxTQUFTLEVBQUUscUJBQVk7QUFDbkIsUUFBSWMsRUFBRSxHQUFHUCxXQUFXLENBQUNDLFdBQXJCOztBQUNBLFNBQUssSUFBSVcsR0FBVCxJQUFnQkwsRUFBaEIsRUFBb0I7QUFDaEJBLE1BQUFBLEVBQUUsQ0FBQ0ssR0FBRCxDQUFGLENBQVFuQixTQUFSO0FBQ0g7O0FBQ0RPLElBQUFBLFdBQVcsQ0FBQ0MsV0FBWixHQUEwQixJQUExQjtBQUNIO0FBaEVhLENBQWxCO0FBbUVBWSxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLFdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIEV2ZW50R3JvdXAoKSB7XG5cbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMuaXRlciA9IG51bGw7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgRXZlbnRHcm91cC5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgRXZlbnRHcm91cC5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIsIHRhcmdldCkge1xuICAgICAgICBpZiAob2JzZXJ2ZXIgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5oZWFkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHtvYjogb2JzZXJ2ZXIsIHRhcmdldDp0YXJnZXQsIG5leHQ6IG51bGx9O1xuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHZhciBsYXN0ID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG5vZGUub2IgPT09IG9ic2VydmVyICYmIG5vZGUudGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0ID0gbm9kZTtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZW5ndGggKz0gMTtcbiAgICAgICAgbGFzdC5uZXh0ID0ge29iOiBvYnNlcnZlciwgdGFyZ2V0OiB0YXJnZXQsIG5leHQ6IG51bGx9O1xuICAgIH1cblxuICAgIEV2ZW50R3JvdXAucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKG9ic2VydmVyID09IG51bGwgfHwgdGhpcy5oZWFkID09IG51bGwpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaGVhZC5vYiA9PT0gb2JzZXJ2ZXIgJiYgdGhpcy5oZWFkLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZih0aGlzLmhlYWQgPT09IHRoaXMuaXRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlciA9IHRoaXMuaXRlci5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCAtLTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUgKG5vZGUubmV4dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0Lm9iID09PSBvYnNlcnZlciAmJiBub2RlLm5leHQudGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVyID09PSBub2RlLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyID0gbm9kZS5uZXh0Lm5leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUubmV4dCA9IG5vZGUubmV4dC5uZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMubGVuZ3RoIC0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEdyb3VwLnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBFdmVudEdyb3VwLnByb3RvdHlwZS5lbWl0QnlBcnJheSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICB0aGlzLml0ZXIgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlICh0aGlzLml0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHRlbXAgPSB0aGlzLml0ZXI7XG4gICAgICAgICAgICBpZiAodGVtcC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wLm9iLmNhbGwodGVtcC50YXJnZXQsIGFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlbXAub2IoYXJyYXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVyICYmIHRlbXAgPT09IHRoaXMuaXRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlciA9IHRoaXMuaXRlci5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlciA9IG51bGw7XG4gICAgfVxuXG5cbiAgICBFdmVudEdyb3VwLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLml0ZXIgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlICh0aGlzLml0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHRlbXAgPSB0aGlzLml0ZXI7XG4gICAgICAgICAgICBpZiAodGVtcC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wLm9iLmNhbGwodGVtcC50YXJnZXQsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wLm9iKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuaXRlciAmJiB0ZW1wID09PSB0aGlzLml0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXIgPSB0aGlzLml0ZXIubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZXIgPSBudWxsO1xuICAgIH1cbn1cblxudmFyIGV2ZW50Q2VudGVyID0ge1xuXG4gICAgX2V2ZW50R3JvdXA6IHt9LFxuXG4gICAgZ2V0RXZlbnRHcm91cDogZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gZXZlbnRDZW50ZXIuX2V2ZW50R3JvdXBbZXZ0XTtcbiAgICB9LFxuXG4gICAgYWRkRXZlbnRPYnNlcnZlcjogZnVuY3Rpb24gKGV2dCwgb2JzZXJ2ZXIsIHRhcmdldCkge1xuICAgICAgICBpZihldnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRFdmVudE9ic2VydmVyIGV2dCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVnID0gZXZlbnRDZW50ZXIuZ2V0RXZlbnRHcm91cChldnQpO1xuICAgICAgICBpZiAoIWVnKSB7XG4gICAgICAgICAgICBlZyA9IG5ldyBFdmVudEdyb3VwKCk7XG4gICAgICAgICAgICBldmVudENlbnRlci5fZXZlbnRHcm91cFtldnRdID0gZWc7XG4gICAgICAgIH1cbiAgICAgICAgZWcuYWRkT2JzZXJ2ZXIob2JzZXJ2ZXIsIHRhcmdldCk7XG4gICAgfSxcblxuICAgIHJlbW92ZUV2ZW50T2JzZXJ2ZXI6IGZ1bmN0aW9uIChldnQsIG9ic2VydmVyLCB0YXJnZXQpIHtcbiAgICAgICAgaWYoZXZ0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlRXZlbnRPYnNlcnZlciBldnQgaXMgbnVsbFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWcgPSBldmVudENlbnRlci5nZXRFdmVudEdyb3VwKGV2dCk7XG4gICAgICAgIGlmICghZWcpIHtcbiAgICAgICAgICAgIGVnLnJlbW92ZU9ic2VydmVyKG9ic2VydmVyLCB0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGVnLmdldExlbmd0aCgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGV2ZW50Q2VudGVyLl9ldmVudEdyb3VwW2V2dF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdEV2ZW50OiBmdW5jdGlvbiAoZXZ0LCAuLi5wYXJhbXMpIHtcbiAgICAgICAgaWYoZXZ0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW1pdEV2ZW50IGV2dCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlZyA9IGV2ZW50Q2VudGVyLmdldEV2ZW50R3JvdXAoZXZ0KTtcbiAgICAgICAgaWYoZWcpIHtcbiAgICAgICAgICAgIGVnLmVtaXQoLi4ucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0RXZlbnRCeUFycmF5OiBmdW5jdGlvbiAoZXZ0LCBhcnJheSkge1xuICAgICAgICBpZihldnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbWl0RXZlbnRCeUFycmF5IGV2dCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlZyA9IGV2ZW50Q2VudGVyLmdldEV2ZW50R3JvdXAoZXZ0KTtcbiAgICAgICAgaWYoZWcpIHtcbiAgICAgICAgICAgIGVnLmVtaXRCeUFycmF5KGFycmF5KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVnID0gZXZlbnRDZW50ZXIuX2V2ZW50R3JvdXA7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBlZykge1xuICAgICAgICAgICAgZWdba2V5XS5yZW1vdmVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudENlbnRlci5fZXZlbnRHcm91cCA9IG51bGw7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudENlbnRlcjsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hall/hallController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvaGFsbC9oYWxsQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJnYW1lRGVmIiwicmVxdWlyZSIsInNpbmdsZXRvbiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTm9kZUJ0bk5vcm1hbCIsInR5cGUiLCJOb2RlIiwiTm9kZUJ0bkNyYXp5Iiwib25Mb2FkIiwiY3VyU2NlbmUiLCJTY2VuZSIsIkhhbGwiLCJzdGFydCIsInN0YXJ0Tm9kZUJ0bkFuaW0iLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJtb3ZlQnkiLCJ2MiIsIm9uQ2xpY2tOb3JtYWxCdG4iLCJjdXJHYW1lTW9kZSIsIk1vZGUiLCJOb3JtYWwiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIkdhbWUiLCJvbkNsaWNrQ3JhenlCdG4iLCJDcmF6eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLElBREU7QUFFWCxpQkFBUztBQUZFLEtBRFA7QUFNUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1ZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQURDO0FBRVYsaUJBQVM7QUFGQztBQU5OLEdBSFA7QUFlTEUsRUFBQUEsTUFmSyxvQkFlSztBQUNOVCxJQUFBQSxTQUFTLENBQUNVLFFBQVYsR0FBcUJaLE9BQU8sQ0FBQ2EsS0FBUixDQUFjQyxJQUFuQztBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxLQW5CSyxtQkFtQkk7QUFDTCxTQUFLQyxnQkFBTDtBQUNILEdBckJJO0FBdUJMQSxFQUFBQSxnQkF2QkssOEJBdUJlO0FBQ2hCLFNBQUtULGFBQUwsQ0FBbUJVLFNBQW5CLENBQTZCZCxFQUFFLENBQUNlLGFBQUgsQ0FBaUJmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FDMUNoQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULENBQWYsQ0FEMEMsRUFFMUNsQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEVBQVYsQ0FBZixDQUYwQyxDQUFqQixDQUE3QjtBQUtBLFNBQUtYLFlBQUwsQ0FBa0JPLFNBQWxCLENBQTRCZCxFQUFFLENBQUNlLGFBQUgsQ0FBaUJmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FDekNoQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULENBQWYsQ0FEeUMsRUFFekNsQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEVBQVYsQ0FBZixDQUZ5QyxDQUFqQixDQUE1QjtBQUlILEdBakNJO0FBbUNMQyxFQUFBQSxnQkFuQ0ssOEJBbUNlO0FBQ2hCcEIsSUFBQUEsU0FBUyxDQUFDcUIsV0FBVixHQUF3QnZCLE9BQU8sQ0FBQ3dCLElBQVIsQ0FBYUMsTUFBckM7QUFDQXRCLElBQUFBLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQjNCLE9BQU8sQ0FBQ2EsS0FBUixDQUFjZSxJQUFwQztBQUNILEdBdENJO0FBd0NMQyxFQUFBQSxlQXhDSyw2QkF3Q2M7QUFDZjNCLElBQUFBLFNBQVMsQ0FBQ3FCLFdBQVYsR0FBd0J2QixPQUFPLENBQUN3QixJQUFSLENBQWFNLEtBQXJDO0FBQ0EzQixJQUFBQSxFQUFFLENBQUN1QixRQUFILENBQVlDLFNBQVosQ0FBc0IzQixPQUFPLENBQUNhLEtBQVIsQ0FBY2UsSUFBcEM7QUFDSDtBQTNDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZURlZiA9IHJlcXVpcmUoXCJnYW1lRGVmXCIpO1xubGV0IHNpbmdsZXRvbiA9IHJlcXVpcmUoXCJzaW5nbGV0b25cIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIE5vZGVCdG5Ob3JtYWw6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgTm9kZUJ0bkNyYXp5OiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBzaW5nbGV0b24uY3VyU2NlbmUgPSBnYW1lRGVmLlNjZW5lLkhhbGw7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zdGFydE5vZGVCdG5BbmltKCk7XG4gICAgfSxcblxuICAgIHN0YXJ0Tm9kZUJ0bkFuaW0gKCkge1xuICAgICAgICB0aGlzLk5vZGVCdG5Ob3JtYWwucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4zLCBjYy52MigwLCAxMCkpLFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMywgY2MudjIoMCwgLTEwKSlcbiAgICAgICAgKSkpO1xuXG4gICAgICAgIHRoaXMuTm9kZUJ0bkNyYXp5LnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMywgY2MudjIoMCwgMTApKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjMsIGNjLnYyKDAsIC0xMCkpXG4gICAgICAgICkpKVxuICAgIH0sXG5cbiAgICBvbkNsaWNrTm9ybWFsQnRuICgpIHtcbiAgICAgICAgc2luZ2xldG9uLmN1ckdhbWVNb2RlID0gZ2FtZURlZi5Nb2RlLk5vcm1hbDtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdhbWVEZWYuU2NlbmUuR2FtZSk7XG4gICAgfSxcblxuICAgIG9uQ2xpY2tDcmF6eUJ0biAoKSB7XG4gICAgICAgIHNpbmdsZXRvbi5jdXJHYW1lTW9kZSA9IGdhbWVEZWYuTW9kZS5DcmF6eTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdhbWVEZWYuU2NlbmUuR2FtZSk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/userData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '556d9cctf5DZbEZ1gWvUOpH', 'userData');
// script/data/userData.js

"use strict";

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    this.resetData();
  },
  release: function release() {
    this.resetData();
  },
  resetData: function resetData() {
    this.userWxData = null;
  },
  setUserWxData: function setUserWxData(data) {
    this.userWxData = data;
  },
  getUserWxData: function getUserWxData() {
    return this.userWxData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGF0YS91c2VyRGF0YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiY3RvciIsInJlc2V0RGF0YSIsInJlbGVhc2UiLCJ1c2VyV3hEYXRhIiwic2V0VXNlcld4RGF0YSIsImRhdGEiLCJnZXRVc2VyV3hEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxJQUhLLGtCQUdHO0FBQ0osU0FBS0MsU0FBTDtBQUNILEdBTEk7QUFPTEMsRUFBQUEsT0FQSyxxQkFPTTtBQUNQLFNBQUtELFNBQUw7QUFDSCxHQVRJO0FBV0xBLEVBQUFBLFNBWEssdUJBV1E7QUFDVCxTQUFLRSxVQUFMLEdBQWtCLElBQWxCO0FBQ0gsR0FiSTtBQWVMQyxFQUFBQSxhQWZLLHlCQWVVQyxJQWZWLEVBZWdCO0FBQ2pCLFNBQUtGLFVBQUwsR0FBa0JFLElBQWxCO0FBQ0gsR0FqQkk7QUFtQkxDLEVBQUFBLGFBbkJLLDJCQW1CWTtBQUNiLFdBQU8sS0FBS0gsVUFBWjtBQUNIO0FBckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgY3RvciAoKSB7XG4gICAgICAgIHRoaXMucmVzZXREYXRhKCk7XG4gICAgfSxcblxuICAgIHJlbGVhc2UgKCkge1xuICAgICAgICB0aGlzLnJlc2V0RGF0YSgpO1xuICAgIH0sXG5cbiAgICByZXNldERhdGEgKCkge1xuICAgICAgICB0aGlzLnVzZXJXeERhdGEgPSBudWxsO1xuICAgIH0sXG5cbiAgICBzZXRVc2VyV3hEYXRhIChkYXRhKSB7XG4gICAgICAgIHRoaXMudXNlcld4RGF0YSA9IGRhdGE7XG4gICAgfSxcblxuICAgIGdldFVzZXJXeERhdGEgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyV3hEYXRhO1xuICAgIH1cbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbG9naW4vTG9naW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJyZXF1aXJlIiwic2luZ2xldG9uIiwid2VjaGF0U2RrIiwiZXZlbnRDZW50ZXIiLCJldmVudERlZiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUHJvZ3Jlc3NCYXIiLCJ0eXBlIiwiTGFiZWxUaXAiLCJMYWJlbCIsIk5vZGVCdG5Mb2dpbiIsIk5vZGUiLCJvbkxvYWQiLCJjdXJTY2VuZSIsIlNjZW5lIiwiTG9naW4iLCJub2RlIiwiYWN0aXZlIiwicmVnaXN0ZXJFdmVudCIsImluaXRMb2dpbk1vZHVsZSIsIm9uRGVzdHJveSIsInVucmVnaXN0ZXJFdmVudCIsImFkZEV2ZW50T2JzZXJ2ZXIiLCJsb2FkQWxsUHJlZmFiIiwib25Mb2FkQWxsUHJlZmFiIiwicmVtb3ZlRXZlbnRPYnNlcnZlciIsIm9uQ2xpY2tXeExvZ2luIiwiaXNXZUNoYXQiLCJsb2dpbiIsIm9uTG9hZFByZWZhYiIsInNlbGYiLCJoaWRlTG9naW5CdG4iLCJwcm9ncmVzc0Z1bmMiLCJwcm9ncmVzcyIsInN0cmluZyIsInRvRml4ZWQiLCJjb25zb2xlIiwibG9nIiwic3VjY2Vzc0Z1YyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiSGFsbCIsImxvYWRNYW5hZ2VyIiwibG9hZEFsbFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUksUUFBUSxHQUFHSixPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFFQUssRUFB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QUFJRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQ3pCcEMsTUFBQUEsRUFBRSxDQUFDcUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCNUMsT0FBTyxDQUFDa0IsS0FBUixDQUFjMkIsSUFBcEM7QUFDSCxLQUZEOztBQUlBM0MsSUFBQUEsU0FBUyxDQUFDNEMsV0FBVixDQUFzQkMsWUFBdEIsQ0FBbUNYLFlBQW5DLEVBQWlETSxVQUFqRDtBQUNILEdBM0VJO0FBNkVMUCxFQUFBQSxZQTdFSywwQkE2RVc7QUFDWixRQUFHLENBQUMsS0FBS2YsSUFBVCxFQUFlO0FBQ2YsU0FBS04sWUFBTCxDQUFrQk8sTUFBbEIsR0FBMkIsS0FBM0I7QUFDSDtBQWhGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZURlZiA9IHJlcXVpcmUoXCJnYW1lRGVmXCIpO1xubGV0IHNpbmdsZXRvbiA9IHJlcXVpcmUoXCJzaW5nbGV0b25cIik7XG5sZXQgd2VjaGF0U2RrID0gcmVxdWlyZShcIndlY2hhdFNka1wiKTtcbmxldCBldmVudENlbnRlciA9IHJlcXVpcmUoXCJldmVudENlbnRlclwiKTtcbmxldCBldmVudERlZiA9IHJlcXVpcmUoXCJldmVudERlZlwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgUHJvZ3Jlc3NCYXI6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIExhYmVsVGlwOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICBOb2RlQnRuTG9naW46IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgc2luZ2xldG9uLmN1clNjZW5lID0gZ2FtZURlZi5TY2VuZS5Mb2dpbjtcbiAgICAgICAgdGhpcy5MYWJlbFRpcC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xuICAgICAgICB0aGlzLmluaXRMb2dpbk1vZHVsZSgpO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudCgpO1xuICAgIH0sXG5cbiAgICByZWdpc3RlckV2ZW50ICgpIHtcbiAgICAgICAgZXZlbnRDZW50ZXIuYWRkRXZlbnRPYnNlcnZlcihldmVudERlZi5sb2FkQWxsUHJlZmFiLCB0aGlzLm9uTG9hZEFsbFByZWZhYiwgdGhpcyk7XG4gICAgfSxcblxuICAgIHVucmVnaXN0ZXJFdmVudCAoKSB7XG4gICAgICAgIGV2ZW50Q2VudGVyLnJlbW92ZUV2ZW50T2JzZXJ2ZXIoZXZlbnREZWYubG9hZEFsbFByZWZhYiwgdGhpcy5vbkxvYWRBbGxQcmVmYWIsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBpbml0TG9naW5Nb2R1bGUgKCkge1xuICAgICAgICB0aGlzLndlY2hhdFNkayA9IG5ldyB3ZWNoYXRTZGsoKTtcbiAgICB9LFxuXG4gICAgb25DbGlja1d4TG9naW4gKCkge1xuICAgICAgICBpZiAodGhpcy53ZWNoYXRTZGsuaXNXZUNoYXQoKSkge1xuICAgICAgICAgICAgdGhpcy53ZWNoYXRTZGsubG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkUHJlZmFiKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkUHJlZmFiICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmhpZGVMb2dpbkJ0bigpO1xuICAgICAgICB0aGlzLkxhYmVsVGlwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5Qcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBwcm9ncmVzc0Z1bmMgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGlmICghc2VsZi5Qcm9ncmVzc0JhcikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IDEpIHtcbiAgICAgICAgICAgICAgICBzZWxmLlByb2dyZXNzQmFyLnByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICBzZWxmLkxhYmVsVGlwLnN0cmluZyA9IFwi5q2j5Zyo6L+b5YWl5ri45oiP77yM6K+36ICQ5b+D562J5b6F772eXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5Qcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgICAgICAgc2VsZi5MYWJlbFRpcC5zdHJpbmcgPSBcIuato+WcqOi/m+WFpea4uOaIj++8jOW9k+WJjeWKoOi9vSBcIiArIChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmraPlnKjov5vlhaXmuLjmiI/vvIzlvZPliY3liqDovb0gXCIgKyAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMikgKyBcIiVcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHN1Y2Nlc3NGdWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2FtZURlZi5TY2VuZS5IYWxsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzaW5nbGV0b24ubG9hZE1hbmFnZXIubG9hZEFsbFNjZW5lKHByb2dyZXNzRnVuYywgc3VjY2Vzc0Z1Yyk7XG4gICAgfSxcblxuICAgIGhpZGVMb2dpbkJ0biAoKSB7XG4gICAgICAgIGlmKCF0aGlzLm5vZGUpIHJldHVybjtcbiAgICAgICAgdGhpcy5Ob2RlQnRuTG9naW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/core/gameDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ff59d3SPlA/ZrCBzM9ObAz', 'gameDef');
// script/core/gameDef.js

"use strict";

var gameDef = {};
gameDef.SceneArray = ["login", "hall", "game"];
gameDef.Scene = {
  Login: "login",
  Hall: "hall",
  Game: "game"
};
gameDef.Mode = {
  Normal: 0,
  Crazy: 1
};
module.exports = gameDef;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29yZS9nYW1lRGVmLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJTY2VuZUFycmF5IiwiU2NlbmUiLCJMb2dpbiIsIkhhbGwiLCJHYW1lIiwiTW9kZSIsIk5vcm1hbCIsIkNyYXp5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPLEdBQUcsRUFBZDtBQUVBQSxPQUFPLENBQUNDLFVBQVIsR0FBcUIsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQixDQUFyQjtBQUNBRCxPQUFPLENBQUNFLEtBQVIsR0FBZ0I7QUFDWkMsRUFBQUEsS0FBSyxFQUFFLE9BREs7QUFFWkMsRUFBQUEsSUFBSSxFQUFFLE1BRk07QUFHWkMsRUFBQUEsSUFBSSxFQUFFO0FBSE0sQ0FBaEI7QUFNQUwsT0FBTyxDQUFDTSxJQUFSLEdBQWU7QUFDWEMsRUFBQUEsTUFBTSxFQUFFLENBREc7QUFFWEMsRUFBQUEsS0FBSyxFQUFFO0FBRkksQ0FBZjtBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLE9BQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBnYW1lRGVmID0ge307XG5cbmdhbWVEZWYuU2NlbmVBcnJheSA9IFtcImxvZ2luXCIsIFwiaGFsbFwiLCBcImdhbWVcIl07XG5nYW1lRGVmLlNjZW5lID0ge1xuICAgIExvZ2luOiBcImxvZ2luXCIsXG4gICAgSGFsbDogXCJoYWxsXCIsXG4gICAgR2FtZTogXCJnYW1lXCIsXG59O1xuXG5nYW1lRGVmLk1vZGUgPSB7XG4gICAgTm9ybWFsOiAwLFxuICAgIENyYXp5OiAxXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZURlZjsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/def/eventDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41040SEeF5P6arEQq3q1COQ', 'eventDef');
// script/def/eventDef.js

"use strict";

var eventDef = {};
eventDef.loadAllPrefab = "loadAllPrefab";
module.exports = eventDef;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGVmL2V2ZW50RGVmLmpzIl0sIm5hbWVzIjpbImV2ZW50RGVmIiwibG9hZEFsbFByZWZhYiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFFQUEsUUFBUSxDQUFDQyxhQUFULEdBQXlCLGVBQXpCO0FBR0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBldmVudERlZiA9IHt9O1xuXG5ldmVudERlZi5sb2FkQWxsUHJlZmFiID0gXCJsb2FkQWxsUHJlZmFiXCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudERlZjsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/loadManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef229mugkRCAJepadAeyvu7', 'loadManager');
// script/utils/loadManager.js

"use strict";

var gameDef = require("gameDef");

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {},
  loadScene: function loadScene(sceneName, successCallback) {
    cc.director.loadScene(sceneName, successCallback);
  },
  loadPrefab: function loadPrefab(progressFunc, successFunc) {
    var SceneArray = gameDef.SceneArray;

    var onShowProgress = function onShowProgress(completedCount, totalCount) {
      var val = completedCount / totalCount;
      if (progressFunc) progressFunc(val);
    };

    var onSuccessLoad = function onSuccessLoad() {
      if (successFunc) successFunc();
    };

    cc.loader.loadRes();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvbG9hZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiZ2FtZURlZiIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiY3RvciIsImxvYWRTY2VuZSIsInNjZW5lTmFtZSIsInN1Y2Nlc3NDYWxsYmFjayIsImRpcmVjdG9yIiwibG9hZFByZWZhYiIsInByb2dyZXNzRnVuYyIsInN1Y2Nlc3NGdW5jIiwiU2NlbmVBcnJheSIsIm9uU2hvd1Byb2dyZXNzIiwiY29tcGxldGVkQ291bnQiLCJ0b3RhbENvdW50IiwidmFsIiwib25TdWNjZXNzTG9hZCIsImxvYWRlciIsImxvYWRSZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsSUFISyxrQkFHRyxDQUVQLENBTEk7QUFRTEMsRUFBQUEsU0FSSyxxQkFRTUMsU0FSTixFQVFpQkMsZUFSakIsRUFRa0M7QUFDbkNOLElBQUFBLEVBQUUsQ0FBQ08sUUFBSCxDQUFZSCxTQUFaLENBQXNCQyxTQUF0QixFQUFpQ0MsZUFBakM7QUFDSCxHQVZJO0FBWUxFLEVBQUFBLFVBWkssc0JBWU1DLFlBWk4sRUFZb0JDLFdBWnBCLEVBWWlDO0FBQ2xDLFFBQUlDLFVBQVUsR0FBR2IsT0FBTyxDQUFDYSxVQUF6Qjs7QUFDQSxRQUFJQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQVVDLGNBQVYsRUFBMEJDLFVBQTFCLEVBQXNDO0FBQ3ZELFVBQUlDLEdBQUcsR0FBR0YsY0FBYyxHQUFDQyxVQUF6QjtBQUNBLFVBQUdMLFlBQUgsRUFBaUJBLFlBQVksQ0FBQ00sR0FBRCxDQUFaO0FBQ3BCLEtBSEQ7O0FBS0EsUUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFZO0FBQzVCLFVBQUdOLFdBQUgsRUFBZ0JBLFdBQVc7QUFDOUIsS0FGRDs7QUFJQVYsSUFBQUEsRUFBRSxDQUFDaUIsTUFBSCxDQUFVQyxPQUFWO0FBQ0g7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGdhbWVEZWYgPSByZXF1aXJlKFwiZ2FtZURlZlwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIGN0b3IgKCkge1xuXG4gICAgfSxcblxuXG4gICAgbG9hZFNjZW5lIChzY2VuZU5hbWUsIHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lLCBzdWNjZXNzQ2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICBsb2FkUHJlZmFiKHByb2dyZXNzRnVuYywgc3VjY2Vzc0Z1bmMpIHtcbiAgICAgICAgbGV0IFNjZW5lQXJyYXkgPSBnYW1lRGVmLlNjZW5lQXJyYXk7XG4gICAgICAgIGxldCBvblNob3dQcm9ncmVzcyA9IGZ1bmN0aW9uIChjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IGNvbXBsZXRlZENvdW50L3RvdGFsQ291bnQ7XG4gICAgICAgICAgICBpZihwcm9ncmVzc0Z1bmMpIHByb2dyZXNzRnVuYyh2YWwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBvblN1Y2Nlc3NMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoc3VjY2Vzc0Z1bmMpIHN1Y2Nlc3NGdW5jKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoKVxuICAgIH0sXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/def/prefabDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45f23PvGe1LNrn0U7CY8fr3', 'prefabDef');
// script/def/prefabDef.js

"use strict";

var prefabDef = {};
prefabDef.Person = "prefab/SpritePerson";
module.exports = prefabDef;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvZGVmL3ByZWZhYkRlZi5qcyJdLCJuYW1lcyI6WyJwcmVmYWJEZWYiLCJQZXJzb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBRyxFQUFoQjtBQUVBQSxTQUFTLENBQUNDLE1BQVYsR0FBbUIscUJBQW5CO0FBR0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsU0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwcmVmYWJEZWYgPSB7fTtcblxucHJlZmFiRGVmLlBlcnNvbiA9IFwicHJlZmFiL1Nwcml0ZVBlcnNvblwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcHJlZmFiRGVmOyJdfQ==
//------QC-SOURCE-SPLIT------
