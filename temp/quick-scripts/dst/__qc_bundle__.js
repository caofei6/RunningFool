
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
require('./assets/script/hall/hallController');
require('./assets/script/login/LoginController');
require('./assets/script/main');
require('./assets/script/utils/loadResource');
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

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    console.log("wechatSdk ctor");

    if (!this.isWeChat()) {
      console.log("The env isn't wechat");
      return;
    }

    this.userInfo = null;
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
  login: function login(successFunc) {
    console.log("wechatSdk login..");
    this.successFunc = successFunc;

    if (this.wxSessionVaild) {
      this.getUserInfo();
      if (successFunc) successFunc();
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
              button.destroy();

              if (self.successFunc) {
                self.successFunc();
              }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvd2VjaGF0U2RrLmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiY3RvciIsImNvbnNvbGUiLCJsb2ciLCJpc1dlQ2hhdCIsInVzZXJJbmZvIiwid3hTZXNzaW9uVmFpbGQiLCJjaGVja1d4U2Vzc2lvbiIsImluaXRMb2dpbkJ1dHRvbiIsInN5cyIsImJyb3dzZXJUeXBlIiwiQlJPV1NFUl9UWVBFX1dFQ0hBVF9HQU1FIiwid3giLCJjaGVja1Nlc3Npb24iLCJzdWNjZXNzIiwiZmFpbCIsImxvZ2luIiwic3VjY2Vzc0Z1bmMiLCJnZXRVc2VySW5mbyIsInNlbGYiLCJ3aW5kb3ciLCJzeXNJbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aWR0aCIsInNjcmVlbldpZHRoIiwiaGVpZ2h0Iiwic2NyZWVuSGVpZ2h0IiwiZ2V0U2V0dGluZyIsInJlcyIsImF1dGhTZXR0aW5nIiwiYnV0dG9uIiwiY3JlYXRlVXNlckluZm9CdXR0b24iLCJ0eXBlIiwidGV4dCIsInN0eWxlIiwibGVmdCIsInRvcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0Iiwib25UYXAiLCJ1c2VyRGF0YSIsInNldFVzZXJXeERhdGEiLCJkZXN0cm95IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxJQUhLLGtCQUdHO0FBQ0pDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaOztBQUVBLFFBQUcsQ0FBQyxLQUFLQyxRQUFMLEVBQUosRUFBcUI7QUFDakJGLE1BQUFBLE9BQU8sQ0FB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QUEsTUFBTSxDQUFDZSxPQUFQOztBQUNBLGtCQUFHMUIsSUFBSSxDQUFDRixXQUFSLEVBQXFCO0FBQ2pCRSxnQkFBQUEsSUFBSSxDQUFDRixXQUFMO0FBQ0g7QUFDSixhQVBELE1BUUs7QUFDRGYsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0NBQVo7QUFDSDtBQUNKLFdBWkQ7QUFhSDtBQUNKO0FBdkNVLEtBQWY7QUF5Q0gsR0E3Rkk7QUErRkw7QUFDQWUsRUFBQUEsV0FoR0sseUJBZ0dVO0FBQ1gsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQVAsSUFBQUEsRUFBRSxDQUFDTSxXQUFILENBQWU7QUFDWEosTUFBQUEsT0FEVyxtQkFDSGMsR0FERyxFQUNDO0FBQ1IxQixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBcUIyQyxJQUFJLENBQUNDLFNBQUwsQ0FBZW5CLEdBQUcsQ0FBQ3ZCLFFBQW5CLENBQWpDO0FBQ0FjLFFBQUFBLElBQUksQ0FBQ2QsUUFBTCxHQUFnQnVCLEdBQUcsQ0FBQ3ZCLFFBQXBCO0FBQ0FULFFBQUFBLFNBQVMsQ0FBQytDLFFBQVYsQ0FBbUJDLGFBQW5CLENBQWlDekIsSUFBSSxDQUFDZCxRQUF0QztBQUNIO0FBTFUsS0FBZjtBQU9IO0FBekdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzaW5nbGV0b24gPSByZXF1aXJlKFwic2luZ2xldG9uXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgY3RvciAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2VjaGF0U2RrIGN0b3JcIik7XG5cbiAgICAgICAgaWYoIXRoaXMuaXNXZUNoYXQoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZW52IGlzbid0IHdlY2hhdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXNlckluZm8gPSBudWxsO1xuICAgICAgICB0aGlzLnd4U2Vzc2lvblZhaWxkID0gdGhpcy5jaGVja1d4U2Vzc2lvbigpO1xuICAgICAgICB0aGlzLmluaXRMb2dpbkJ1dHRvbigpO1xuICAgIH0sXG5cbiAgICAvLyDliKTmlq3mmK/lkKbmmK93eFxuICAgIGlzV2VDaGF0ICgpIHtcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5icm93c2VyVHlwZSA9PT0gY2Muc3lzLkJST1dTRVJfVFlQRV9XRUNIQVRfR0FNRTtcbiAgICB9LFxuXG4gICAgLy8g5Yik5patU2Vzc2lvbuaYr+WQpui/h+acn1xuICAgIGNoZWNrV3hTZXNzaW9uICgpIHtcbiAgICAgICAgd3guY2hlY2tTZXNzaW9uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgKCkge1xuICAgICAgICAgICAgICAgIC8vc2Vzc2lvbl9rZXkg5pyq6L+H5pyf77yM5bm25LiU5Zyo5pys55Sf5ZG95ZGo5pyf5LiA55u05pyJ5pWIXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbCAoKSB7XG4gICAgICAgICAgICAgICAgLy8gc2Vzc2lvbl9rZXkg5bey57uP5aSx5pWI77yM6ZyA6KaB6YeN5paw5omn6KGM55m75b2V5rWB56iLXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICAvLyDnmbvlvZVcbiAgICBsb2dpbiAoc3VjY2Vzc0Z1bmMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3ZWNoYXRTZGsgbG9naW4uLlwiKTtcbiAgICAgICAgdGhpcy5zdWNjZXNzRnVuYyA9IHN1Y2Nlc3NGdW5jO1xuICAgICAgICBpZiAodGhpcy53eFNlc3Npb25WYWlsZCkge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgaWYoc3VjY2Vzc0Z1bmMpIHN1Y2Nlc3NGdW5jKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8g5Yid5aeL5YyW5o6I5p2D5oyJ6ZKuXG4gICAgaW5pdExvZ2luQnV0dG9uICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgd3ggPSB3aW5kb3dbJ3d4J107XG4gICAgICAgIGxldCBzeXNJbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgbGV0IHdpZHRoID0gc3lzSW5mby5zY3JlZW5XaWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHN5c0luZm8uc2NyZWVuSGVpZ2h0O1xuICAgICAgICB3eC5nZXRTZXR0aW5nICh7XG4gICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJBdXRoU2V0dGluZzogXCIgKyByZXMuYXV0aFNldHRpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1c2VyIGhhcyB0aGUgc2NvcGUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFVzZXJJbmZvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1c2VyIGhhc24ndCB0aGUgc2NvcGUhXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGhlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaOiOadg+aMiemSruWFqOWxj1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLm9uVGFwKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZXRvbi51c2VyRGF0YS5zZXRVc2VyV3hEYXRhKHNlbGYudXNlckluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5zdWNjZXNzRnVuYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN1Y2Nlc3NGdW5jKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgdXNlciBjbmNlbGxlZCB0aGUgYXV0aG9yaXphdGlvbiFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICBnZXRVc2VySW5mbyAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzcyhyZXMpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXJJbmZvIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzLnVzZXJJbmZvKSk7XG4gICAgICAgICAgICAgICAgc2VsZi51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgICAgICAgICAgICAgICBzaW5nbGV0b24udXNlckRhdGEuc2V0VXNlcld4RGF0YShzZWxmLnVzZXJJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXX0=
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
                    var __filename = 'preview-scripts/assets/script/utils/loadResource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef229mugkRCAJepadAeyvu7', 'loadResource');
// script/utils/loadResource.js

"use strict";

var gameDef = require("gameDef");

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {},
  loadAllScene: function loadAllScene(progressFunc, successFunc) {
    var SceneArray = gameDef.SceneArray;

    var onShowProgress = function onShowProgress(completedCount, totalCount) {
      var val = completedCount / totalCount;
      if (progressFunc) progressFunc(val);
    };

    var onSuccessLoad = function onSuccessLoad() {
      if (successFunc) successFunc();
    };

    for (var i = 0; i < SceneArray.length; i++) {
      cc.director.preloadScene(SceneArray[i], onShowProgress, onSuccessLoad);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvbG9hZFJlc291cmNlLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImN0b3IiLCJsb2FkQWxsU2NlbmUiLCJwcm9ncmVzc0Z1bmMiLCJzdWNjZXNzRnVuYyIsIlNjZW5lQXJyYXkiLCJvblNob3dQcm9ncmVzcyIsImNvbXBsZXRlZENvdW50IiwidG90YWxDb3VudCIsInZhbCIsIm9uU3VjY2Vzc0xvYWQiLCJpIiwibGVuZ3RoIiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsSUFISyxrQkFHRyxDQUVQLENBTEk7QUFPTEMsRUFBQUEsWUFQSyx3QkFPU0MsWUFQVCxFQU91QkMsV0FQdkIsRUFPb0M7QUFDckMsUUFBSUMsVUFBVSxHQUFHVCxPQUFPLENBQUNTLFVBQXpCOztBQUNBLFFBQUlDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBVUMsY0FBVixFQUEwQkMsVUFBMUIsRUFBc0M7QUFDdkQsVUFBSUMsR0FBRyxHQUFHRixjQUFjLEdBQUNDLFVBQXpCO0FBQ0EsVUFBR0wsWUFBSCxFQUFpQkEsWUFBWSxDQUFDTSxHQUFELENBQVo7QUFDcEIsS0FIRDs7QUFLQSxRQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7QUFDNUIsVUFBR04sV0FBSCxFQUFnQkEsV0FBVztBQUM5QixLQUZEOztBQUlBLFNBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sVUFBVSxDQUFDTyxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4Q2IsTUFBQUEsRUFBRSxDQUFDZSxRQUFILENBQVlDLFlBQVosQ0FBeUJULFVBQVUsQ0FBQ00sQ0FBRCxDQUFuQyxFQUF3Q0wsY0FBeEMsRUFBd0RJLGFBQXhEO0FBQ0g7QUFDSjtBQXJCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZURlZiA9IHJlcXVpcmUoXCJnYW1lRGVmXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgY3RvciAoKSB7XG5cbiAgICB9LFxuXG4gICAgbG9hZEFsbFNjZW5lIChwcm9ncmVzc0Z1bmMsIHN1Y2Nlc3NGdW5jKSB7XG4gICAgICAgIGxldCBTY2VuZUFycmF5ID0gZ2FtZURlZi5TY2VuZUFycmF5O1xuICAgICAgICBsZXQgb25TaG93UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoY29tcGxldGVkQ291bnQsIHRvdGFsQ291bnQpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBjb21wbGV0ZWRDb3VudC90b3RhbENvdW50O1xuICAgICAgICAgICAgaWYocHJvZ3Jlc3NGdW5jKSBwcm9ncmVzc0Z1bmModmFsKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgb25TdWNjZXNzTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKHN1Y2Nlc3NGdW5jKSBzdWNjZXNzRnVuYygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU2NlbmVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFNjZW5lQXJyYXlbaV0sIG9uU2hvd1Byb2dyZXNzLCBvblN1Y2Nlc3NMb2FkKTtcbiAgICAgICAgfVxuICAgIH0sXG59KTsiXX0=
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
    isDebug: {
      "default": true,
      type: cc.Boolean
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvcGh5c2ljc01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpc0RlYnVnIiwidHlwZSIsIkJvb2xlYW4iLCJvbkxvYWQiLCJwaHlNZ3IiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsImRlYnVnRHJhd0ZsYWdzIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsImVfYWFiYkJpdCIsImVfcGFpckJpdCIsImVfY2VudGVyT2ZNYXNzQml0IiwiZV9qb2ludEJpdCIsImVfc2hhcGVCaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKO0FBREQsR0FIUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVLO0FBQ04sUUFBSUMsTUFBTSxHQUFHUixFQUFFLENBQUNTLFFBQUgsQ0FBWUMsaUJBQVosRUFBYjtBQUNBRixJQUFBQSxNQUFNLENBQUNHLE9BQVAsR0FBaUIsSUFBakI7O0FBQ0EsUUFBRyxLQUFLUCxPQUFSLEVBQWlCO0FBQ2JJLE1BQUFBLE1BQU0sQ0FBQ0ksY0FBUCxHQUF3QlosRUFBRSxDQUFDYSxjQUFILENBQWtCQyxRQUFsQixDQUEyQkMsU0FBM0IsR0FDcEJmLEVBQUUsQ0FBQ2EsY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJFLFNBRFAsR0FFcEJoQixFQUFFLENBQUNhLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCRyxpQkFGUCxHQUdwQmpCLEVBQUUsQ0FBQ2EsY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJJLFVBSFAsR0FJcEJsQixFQUFFLENBQUNhLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCSyxVQUovQjtBQUtIO0FBQ0o7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpc0RlYnVnOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogY2MuQm9vbGVhblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGxldCBwaHlNZ3IgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBwaHlNZ3IuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmKHRoaXMuaXNEZWJ1Zykge1xuICAgICAgICAgICAgcGh5TWdyLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3BhaXJCaXQgfFxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfY2VudGVyT2ZNYXNzQml0IHxcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
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
