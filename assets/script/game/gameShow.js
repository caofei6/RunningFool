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
        var param0 = {
            contentStr: "您好呀，橙子同学"
        }
        var param1 = {
            contentStr: "陈思成，你真可爱呀"
        }
        var param2 = {
            contentStr: "成成，你真漂亮"
        }
        var param3 = {
            contentStr: "如果说，1+1=2，那么橙子就是无穷∞"
        }
        var param4 = {
            contentStr: "陈思成，你看什么看？"
        }
        var param5 = {
            contentStr: "再看我就打你哦....."
        }
        var param6 = {
            contentStr: "橙子，来跳个舞吧 -。-"
        }

        eventCenter.emitEvent(eventDef.Launch_DanMu, param1);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param0);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param2);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param3);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param4);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param5);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param6);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param5);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param3);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param2);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param4);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param0);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param1);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param2);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param6);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param4);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param5);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param2);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param3);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param4);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param1);
        eventCenter.emitEvent(eventDef.Launch_DanMu, param0);
    }
});
