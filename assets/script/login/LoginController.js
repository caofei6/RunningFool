let gameDef = require("gameDef");
let singleton = require("singleton");
let wechatSdk = require("wechatSdk");
let eventCenter = require("eventCenter");
let eventDef = require("eventDef");

cc.Class({
    extends: cc.Component,

    properties: {
        ProgressBar: {
            type: cc.ProgressBar,
            default: null
        },

        LabelTip: {
            type: cc.Label,
            default: null
        },

        NodeBtnLogin: {
            type: cc.Node,
            default: null
        }
    },

    onLoad () {
        singleton.curScene = gameDef.Scene.Login;
        this.LabelTip.node.active = false;
        this.ProgressBar.node.active = false;
        this.registerEvent();
        this.initLoginModule();
    },

    onDestroy () {
        this.unregisterEvent();
    },

    registerEvent () {
        eventCenter.addEventObserver(eventDef.PreloadScene, this.preloadAllScene, this);
    },

    unregisterEvent () {
        eventCenter.removeEventObserver(eventDef.PreloadScene, this.preloadAllScene, this);
    },

    initLoginModule () {
        this.wechatSdk = new wechatSdk();
    },

    onClickWxLogin () {
        if (this.wechatSdk.isWeChat()) {
            this.wechatSdk.login();
        }
        else {
            this.preloadAllScene();
        }
    },

    preloadAllScene () {
        let self = this;
        this.hideLoginBtn();
        this.LabelTip.node.active = true;
        this.ProgressBar.node.active = true;
        let progressFunc = function (progress) {
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

        let successFuc = function () {
            cc.director.loadScene(gameDef.Scene.Hall);
        };

        singleton.loadManager.loadAllScene(progressFunc, successFuc);
    },

    hideLoginBtn () {
        if(!this.node) return;
        this.NodeBtnLogin.active = false;
    },

});
