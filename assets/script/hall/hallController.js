let gameDef = require("gameDef");
let singleton = require("singleton");

cc.Class({
    extends: cc.Component,

    properties: {
        NodeBtnNormal: {
            type: cc.Node,
            default: null
        },

        NodeBtnCrazy: {
            type: cc.Node,
            default: null
        },
    },

    onLoad () {
        singleton.curScene = gameDef.Scene.Hall;
    },

    start () {
        this.startNodeBtnAnim();
    },

    startNodeBtnAnim () {
        this.NodeBtnNormal.runAction(cc.repeatForever(cc.sequence(
            cc.moveBy(0.3, cc.v2(0, 10)),
            cc.moveBy(0.3, cc.v2(0, -10))
        )));

        this.NodeBtnCrazy.runAction(cc.repeatForever(cc.sequence(
            cc.moveBy(0.3, cc.v2(0, 10)),
            cc.moveBy(0.3, cc.v2(0, -10))
        )))
    },

    onClickNormalBtn () {
        singleton.curGameMode = gameDef.Mode.Normal;
        cc.director.loadScene(gameDef.Scene.Game);
    },

    onClickCrazyBtn () {
        singleton.curGameMode = gameDef.Mode.Crazy;
        cc.director.loadScene(gameDef.Scene.Game);
    },
});
