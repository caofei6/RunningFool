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
        this.initDanmu();
    },

    initGameScore () {
        if(!this.LabelScore) return;
        this.LabelScore.string = "得分：0";
    },

    updateGameScore () {
        if(!this.LabelScore) return;
        this.LabelScore.string = "得分：" + singleton.gameData.getGameScore();
    },

    initDanmu () {
        var info = singleton.userData.getUserWxData();
        var name = info ? info.nickName : "铁子";
        var param = {
            contentStr: "您好呀，" + name + "同学"
        }
        eventCenter.emitEvent(eventDef.Launch_DanMu, param);
    }
});
