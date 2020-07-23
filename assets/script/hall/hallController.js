let gameDef = require("gameDef");
let resourceDef = require("resourceDef");
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
        singleton.curScene = resourceDef.SceneMap.Hall;
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
        cc.director.loadScene(resourceDef.SceneMap.Game);
    },

    onClickCrazyBtn () {
        singleton.curGameMode = gameDef.Mode.Crazy;
        cc.director.loadScene(resourceDef.SceneMap.Game);
    },
});
