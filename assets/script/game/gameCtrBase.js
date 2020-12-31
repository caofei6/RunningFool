/***
 * gameCtr基类
 */
var eventCenter = require("eventCenter");
var eventDef = require("eventDef");
var singleton = require("singleton");

var gameCtrBase = cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        this.registerEvent();
        this.initPlayerNode();
        this.initPlayData();
    },

    onDestroy () {
        this.unregisterEvent();
    },

    registerEvent () {
        eventCenter.addEventObserver(eventDef.GameOver, this.onGameOver, this);
        eventCenter.addEventObserver(eventDef.AddScore, this.addScore, this);
    },

    unregisterEvent () {
        eventCenter.removeEventObserver(eventDef.GameOver, this.onGameOver, this);
        eventCenter.removeEventObserver(eventDef.AddScore, this.addScore, this);
    },

    initPlayData () {
        this.curFrame = 0;
        this.baseVelocityX = 500;
        this.baseVelocityY = 900;
        this.bgMoveStartX = -640;
        this.bgMoveMinX = -3500;
        this.bgMoveStep = 5;

        this.grassMoveStartX = -640;
        this.grassMoveMinX = -3500;
        this.grassMoveStep = 10;

        this.monsterPoolMaxNum = 10;
        this.monsterCreateTime = 20;
        this.monsterMaxNum = 5;
        this.curMonsterNum = 0;

        this.ctrBg = true;
        this.ctrGrass = true;
        this.ctrCamera = true;
        this.ctrMonster = true;
    },

    initPlayerNode () {
        this.NodePerson = cc.find("Canvas/SpritePerson");
    },

    start () {

    },

    update () {
        this.curFrame ++;
    },

    onGameOver () {
        this.ctrBg = false
        this.ctrGrass = false;
        this.ctrCamera = false;
        this.ctrMonster = false;
    },

    addScore () {
        singleton.gameData.addGameScore();
        eventCenter.emitEvent(eventDef.Update_GameScore);
    },
});


module.exports = gameCtrBase;
