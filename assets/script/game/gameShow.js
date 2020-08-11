/***
 * 顶部得分显示
 */

var singleton = require("singleton");
var eventCenter = require("eventCenter");
var eventDef = require("eventDef");

cc.Class({
    extends: cc.Component,

    properties: {
        LabelScore: {
            type: cc.Label,
            default: null
        }
    },

    onLoad () {
        eventCenter.addEventObserver(eventDef.Update_GameScore, this.updateGameScore, this);
    },

    onDestroy () {
        eventCenter.removeEventObserver(eventDef.Update_GameScore, this.updateGameScore, this);
    },

    start () {
        this.initGameScore();
    },

    initGameScore () {
        if(!this.LabelScore) return;
        this.LabelScore.string = "得分：0";
    },

    updateGameScore () {
        if(!this.LabelScore) return;
        this.LabelScore.string = "得分：" + singleton.gameData.getGameScore();
    },
});
