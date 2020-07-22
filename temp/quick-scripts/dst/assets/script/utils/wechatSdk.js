
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