let singleton = require("singleton");
let eventCenter = require("eventCenter");
let eventDef = require("eventDef");

cc.Class({
    extends: cc.Component,

    ctor() {
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
    isWeChat() {
        return cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME;
    },

    // 判断Session是否过期
    checkWxSession() {
        wx.checkSession({
            success() {
                //session_key 未过期，并且在本生命周期一直有效
                return true;
            },
            fail() {
                // session_key 已经失效，需要重新执行登录流程
                return false;
            }
        })
    },

    // 登录
    login () {
        console.log("wechatSdk login..");
        this.successFunc = successFunc;
        if (this.wxSessionVaild) {
            this.getUserInfo();
        }
    },

    // 初始化授权按钮
    initLoginButton() {
        let self = this;
        let wx = window['wx'];
        let sysInfo = wx.getSystemInfoSync();
        let width = sysInfo.screenWidth;
        let height = sysInfo.screenHeight;
        wx.getSetting({
            success(res) {
                console.log("UserAuthSetting: " + res.authSetting);
                if (res.authSetting["scope.userInfo"]) {
                    console.log("The user has the scope!");
                    self.getUserInfo();
                } else {
                    console.log("The user hasn't the scope!");
                    let button = wx.createUserInfoButton({
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
                            lineHeight: height,
                        }
                        // 授权按钮全屏
                    });
                    button.onTap(function (res) {
                        if (res.userInfo) {
                            self.userInfo = res.userInfo;
                            singleton.userData.setUserWxData(self.userInfo);
                            eventCenter.emitEvent(eventDef.LoginSuccess);
                            button.destroy();
                        } else {
                            console.log("The user cncelled the authorization!");
                        }
                    })
                }
            }
        })
    },

    // 获取用户信息
    getUserInfo() {
        let self = this;
        wx.getUserInfo({
            success(res) {
                console.log("The userInfo is " + JSON.stringify(res.userInfo));
                self.userInfo = res.userInfo;
                singleton.userData.setUserWxData(self.userInfo);
                eventCenter.emitEvent(eventDef.LoginSuccess);
            }
        });
    },
});
