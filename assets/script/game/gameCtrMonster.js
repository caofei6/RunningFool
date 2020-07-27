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

    update () {
        this._super();
        if (!this.ctrMonster) return;
        if (this.curMonsterNum >= this.monsterMaxNum) return;
        if (this.curFrame % 60 === this.monsterCreateTime) {
            this.createMonster();
        }
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
        var monsterNode = cc.instantiate(this.PrefabMonster);
        monsterNode.getComponent(gameMonster).init(data);
        monsterNode.setPosition(cc.v2(0, 0));
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
