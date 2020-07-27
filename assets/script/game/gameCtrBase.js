/***
 * gameCtr基类
 */
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {
        this.initPlayerNode();
        this.initPlayData();
    },

    onDestroy () {

    },

    initPlayData () {
        this.curFrame = 0;
        this.baseVelocityX = 200;
        this.baseVelocityY = 800;
        this.bgMoveStartX = -640;
        this.bgMoveMinX = -3500;
        this.bgMoveStep = 5;

        this.grassMoveStartX = -640;
        this.grassMoveMinX = -3500;
        this.grassMoveStep = 10;

        this.monsterCreateTime = 5;
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
});
