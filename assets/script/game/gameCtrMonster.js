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
        this.initMonsterNodePool();
    },

    update () {
        this._super();
    },

    initMonsterNodePool () {
        if(!this.PrefabMonster) return;
        var maxNum = this.monsterPoolMaxNum;
        this.monsterPool = new cc.NodePool('gameMonster');
        for(let i = 0; i < maxNum; i++) {
            this.monsterPool.put(cc.instantiate(this.PrefabMonster));
        }
    },

    startCreateMonster () {
        var self = this;
        var createCenter = function () {
            if (!self.ctrMonster) return self.unschedule(createCenter);
            self.createMonster();
        };
        this.schedule(createCenter, 8);
    },

    createMonster () {
        if (!this.PrefabMonster) return;

        let monsterTypeNum = Object.keys(gameDef.MonsterType).length;
        let monsterType = utils.randomNum(0, monsterTypeNum - 1);
        let monsterArr = gameDef.MonsterMap[monsterType];
        let monsterData = monsterArr[utils.randomNum(0, monsterArr.length - 1)];

        var data = {};
        data.imagePath = monsterData.path;
        data.animName = monsterData.name;
        data.monsterType = monsterData.type;
        data.baseVelocityX = this.baseVelocityX;

        var node = null;
        if (this.monsterPool.size() > 0) {
            node = this.monsterPool.get();
        }
        else {
            node = cc.instantiate(this.PrefabMonster);
        }

        node.getComponent(gameMonster).init(data);
        node.parent = this.NodeRoot;
        this.curMonsterNum ++;
    },
});
