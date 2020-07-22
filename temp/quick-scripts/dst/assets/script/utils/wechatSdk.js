
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcd2VjaGF0U2RrLmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsInJlcXVpcmUiLCJldmVudENlbnRlciIsImV2ZW50RGVmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImN0b3IiLCJjb25zb2xlIiwibG9nIiwiaXNXZUNoYXQiLCJ1c2VySW5mbyIsInVzZXJJbmZvQ2FsbGJhY2siLCJ3eFNlc3Npb25WYWlsZCIsImNoZWNrV3hTZXNzaW9uIiwiaW5pdExvZ2luQnV0dG9uIiwic3lzIiwiYnJvd3NlclR5cGUiLCJCUk9XU0VSX1RZUEVfV0VDSEFUX0dBTUUiLCJ3eCIsImNoZWNrU2Vzc2lvbiIsInN1Y2Nlc3MiLCJmYWlsIiwibG9naW4iLCJzdWNjZXNzRnVuYyIsImdldFVzZXJJbmZvIiwic2VsZiIsIndpbmRvdyIsInN5c0luZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpZHRoIiwic2NyZWVuV2lkdGgiLCJoZWlnaHQiLCJzY3JlZW5IZWlnaHQiLCJnZXRTZXR0aW5nIiwicmVzIiwiYXV0aFNldHRpbmciLCJidXR0b24iLCJjcmVhdGVVc2VySW5mb0J1dHRvbiIsInR5cGUiLCJ0ZXh0Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJvblRhcCIsInVzZXJEYXRhIiwic2V0VXNlcld4RGF0YSIsImVtaXRFdmVudCIsIlByZWxvYWRTY2VuZSIsImRlc3Ryb3kiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBRyxFQUFFLENB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QUFDeEIsUUFBUixFQUFrQjtBQUNkZSxjQUFBQSxJQUFJLENBQUNmLFFBQUwsR0FBZ0J3QixHQUFHLENBQUN4QixRQUFwQjtBQUNBWCxjQUFBQSxTQUFTLENBQUNrRCxRQUFWLENBQW1CQyxhQUFuQixDQUFpQ3pCLElBQUksQ0FBQ2YsUUFBdEM7QUFDQVQsY0FBQUEsV0FBVyxDQUFDa0QsU0FBWixDQUFzQmpELFFBQVEsQ0FBQ2tELFlBQS9CO0FBQ0FoQixjQUFBQSxNQUFNLENBQUNpQixPQUFQO0FBQ0gsYUFMRCxNQUtPO0FBQ0g5QyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjtBQUNIO0FBQ0osV0FURDtBQVVIO0FBQ0o7QUFuQ1MsS0FBZDtBQXFDSCxHQXpGSTtBQTJGTDtBQUNBZ0IsRUFBQUEsV0E1RksseUJBNEZTO0FBQ1YsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQVAsSUFBQUEsRUFBRSxDQUFDTSxXQUFILENBQWU7QUFDWEosTUFBQUEsT0FEVyxtQkFDSGMsR0FERyxFQUNFO0FBQ1QzQixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBcUI4QyxJQUFJLENBQUNDLFNBQUwsQ0FBZXJCLEdBQUcsQ0FBQ3hCLFFBQW5CLENBQWpDO0FBQ0FlLFFBQUFBLElBQUksQ0FBQ2YsUUFBTCxHQUFnQndCLEdBQUcsQ0FBQ3hCLFFBQXBCO0FBQ0FYLFFBQUFBLFNBQVMsQ0FBQ2tELFFBQVYsQ0FBbUJDLGFBQW5CLENBQWlDekIsSUFBSSxDQUFDZixRQUF0QztBQUNBVCxRQUFBQSxXQUFXLENBQUNrRCxTQUFaLENBQXNCakQsUUFBUSxDQUFDa0QsWUFBL0I7QUFDSDtBQU5VLEtBQWY7QUFRSDtBQXRHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2luZ2xldG9uID0gcmVxdWlyZShcInNpbmdsZXRvblwiKTtcclxubGV0IGV2ZW50Q2VudGVyID0gcmVxdWlyZShcImV2ZW50Q2VudGVyXCIpO1xyXG5sZXQgZXZlbnREZWYgPSByZXF1aXJlKFwiZXZlbnREZWZcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgY3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndlY2hhdFNkayBjdG9yXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNXZUNoYXQoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBlbnYgaXNuJ3Qgd2VjaGF0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJJbmZvQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud3hTZXNzaW9uVmFpbGQgPSB0aGlzLmNoZWNrV3hTZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TG9naW5CdXR0b24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5Yik5pat5piv5ZCm5pivd3hcclxuICAgIGlzV2VDaGF0KCkge1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMuYnJvd3NlclR5cGUgPT09IGNjLnN5cy5CUk9XU0VSX1RZUEVfV0VDSEFUX0dBTUU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWIpOaWrVNlc3Npb27mmK/lkKbov4fmnJ9cclxuICAgIGNoZWNrV3hTZXNzaW9uKCkge1xyXG4gICAgICAgIHd4LmNoZWNrU2Vzc2lvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Nlc3Npb25fa2V5IOacqui/h+acn++8jOW5tuS4lOWcqOacrOeUn+WRveWRqOacn+S4gOebtOacieaViFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXNzaW9uX2tleSDlt7Lnu4/lpLHmlYjvvIzpnIDopoHph43mlrDmiafooYznmbvlvZXmtYHnqItcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOeZu+W9lVxyXG4gICAgbG9naW4gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2VjaGF0U2RrIGxvZ2luLi5cIik7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzRnVuYyA9IHN1Y2Nlc3NGdW5jO1xyXG4gICAgICAgIGlmICh0aGlzLnd4U2Vzc2lvblZhaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWIneWni+WMluaOiOadg+aMiemSrlxyXG4gICAgaW5pdExvZ2luQnV0dG9uKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgd3ggPSB3aW5kb3dbJ3d4J107XHJcbiAgICAgICAgbGV0IHN5c0luZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHN5c0luZm8uc2NyZWVuV2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHN5c0luZm8uc2NyZWVuSGVpZ2h0O1xyXG4gICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyQXV0aFNldHRpbmc6IFwiICsgcmVzLmF1dGhTZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgaGFzIHRoZSBzY29wZSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1c2VyIGhhc24ndCB0aGUgc2NvcGUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaOiOadg+aMiemSruWFqOWxj1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5vblRhcChmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGV0b24udXNlckRhdGEuc2V0VXNlcld4RGF0YShzZWxmLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2VudGVyLmVtaXRFdmVudChldmVudERlZi5QcmVsb2FkU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgY25jZWxsZWQgdGhlIGF1dGhvcml6YXRpb24hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXJJbmZvIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzLnVzZXJJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgc2luZ2xldG9uLnVzZXJEYXRhLnNldFVzZXJXeERhdGEoc2VsZi51c2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICBldmVudENlbnRlci5lbWl0RXZlbnQoZXZlbnREZWYuUHJlbG9hZFNjZW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==