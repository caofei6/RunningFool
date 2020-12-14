/***
 * gameMonster控制脚本
 */
var gameCtrBase = require("gameCtrBase");
var gameDef = require("gameDef");
var gameMonster = require("gameMonster");
var utils = require("utils");

cc.Class({
    extends: gameCtrBase,

    properties: {
        PrefabMonster: {
            type: cc.Prefab,
            default: null
        },

        NodeRoot: {
            type: cc.Node,
            default: null
        }
    },

    onLoad () {
        this._super();
        this.startCreateMonster();
    },

    update () {
        this._super();
    },

    startCreateMonster () {
        var self = this;
        var callback = function () {
            if (!self.ctrMonster) return self.NodeRoot.unschedule(callback);
            self.createMonster();
        };
        this.schedule(callback, 6);
    },

    createMonster () {
        if (!this.PrefabMonster) return;

        let monsterTypeNum = Object.keys(gameDef.MonsterType).length;
        // let monsterType = utils.getRandomNum(0, monsterTypeNum - 1);
        let monsterType = 3
        let monsterArr = gameDef.MonsterMap[monsterType];
        let monsterData = monsterArr[utils.randomNum(0, monsterArr.length - 1)];

        var data = {};
        data.imagePath = monsterData.path;
        data.animName = monsterData.name;
        data.monsterType = monsterData.type;
        data.baseVelocityX = this.baseVelocityX;
        var monsterNode = cc.instantiate(this.PrefabMonster);
        var nodeScript = monsterNode.getComponent(gameMonster);
        nodeScript.init(data);
        this.NodeRoot.addChild(monsterNode);
        nodeScript.resetPosition();
        this.curMonsterNum++;
    },
});
