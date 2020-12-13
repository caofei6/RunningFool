let singleton = require("singleton");
let userData = require("userData");
let gameData = require("gameData");
let danmuData = require("danmuData");
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
        singleton.danmuData.release();
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
        singleton.danmuData = new danmuData();
    },

    initGameUtils () {
        singleton.loadManager = new loadManager();
    },
});
