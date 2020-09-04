/***
 * gameMonster控制脚本
 */
var gameCtrBase = require("gameCtrBase");
var gameDef = require("gameDef");
var gameMonster = require("gameMonster");

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
        let monsterType = this.getRandomNum(0, monsterTypeNum - 1);
        let monsterArr = gameDef.MonsterMap[monsterType];
        let monsterData = monsterArr[this.getRandomNum(0, monsterArr.length - 1)];

        var data = {};
        data.imagePath = monsterData.path;
        data.animName = monsterData.name;
        data.monsterType = monsterData.type;
        data.baseVelocityX = this.baseVelocityX;
        var monsterNode = cc.instantiate(this.PrefabMonster);
        monsterNode.getComponent(gameMonster).init(data);
        monsterNode.setPosition(cc.v2(1000, 0));
        this.NodeRoot.addChild(monsterNode);
        this.curMonsterNum++;
    },

    getRandomNum (min, max) {
        if(arguments.length === 1){
            arguments[1] = arguments[0];
            arguments[0] = 0;
        }
        return Math.floor(Math.random() * (arguments[1] - arguments[0] + 1) + arguments[0]);
    }
});
