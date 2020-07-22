let singleton = require("singleton");
let userData = require("userData");
let loadResource = require("loadResource");

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        cc.game.addPersistRootNode(this.node);
        this.initGameData();
        this.initGameScene();
        this.initGameStation();
        this.initGameMode();
        this.initGameUtils();
    },

    onDestroy () {
        singleton.userData.release();
    },

    start () {

    },

    initGameScene () {
        if(singleton.curScene) {
            delete singleton.curScene;
            singleton.curScene = null;
        }
    },

    initGameMode () {
        if (singleton.curGameMode) {
            delete singleton.curGameMode;
            singleton.curGameMode = null;
        }
    },

    initGameStation () {
        if (singleton.curGameStation) {
            delete singleton.curGameStation;
            singleton.curGameStation = null;
        }
    },

    initGameData () {
        if (singleton.userData) {
            delete singleton.curGameMode;
            singleton.curGameMode = null;
        }
        singleton.userData = new userData();
    },

    initGameUtils () {
        singleton.loadManager = new loadResource();
    },
});
