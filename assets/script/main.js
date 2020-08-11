let singleton = require("singleton");
let userData = require("userData");
let gameData = require("gameData");
let loadManager = require("loadManager");

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
        singleton.gameData.release();
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
        singleton.userData = new userData();
        singleton.gameData = new gameData();
    },

    initGameUtils () {
        singleton.loadManager = new loadManager();
    },
});
