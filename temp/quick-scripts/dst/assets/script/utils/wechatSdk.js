
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