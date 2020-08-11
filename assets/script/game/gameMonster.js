/***
 * Monster脚本
 */

var singleton = require("singleton");
var gameDef = require("gameDef");
var eventCenter = require("eventCenter");
var eventDef = require("eventDef");

cc.Class({
    extends: cc.Component,

    properties: {
        SpriteMonster: {
            default: null,
            type: cc.Sprite
        },

        RigidBody: {
            default: null,
            type: cc.RigidBody
        },

        PhysicsBoxCollider: {
            default: null,
            type: cc.PhysicsBoxCollider
        },

        Animation: {
            default: null,
            type: cc.Animation
        },
    },

    update () {
        this.initMonsterMove();
        this.countScore();
        this.destoryMonster();
    },

    init (params) {
        this.imagePath = params.imagePath;
        this.animName = params.animName;
        this.baseVelocityX = params.baseVelocityX;
        this.monsterType = params.monsterType;
        this.initImageAndCollider();
        this.initMonsterMove();
        this.initMonsterType();
        this.initMonsterCtr();
        this.initMonsterScoreStatus();
    },

    initImageAndCollider() {
        if (!this.imagePath || !this.SpriteMonster) return;
        singleton.loadManager.loadSpriteFrame(this.SpriteMonster, this.imagePath, this, function (originSize) {
            this.PhysicsBoxCollider.size = originSize;
            this.PhysicsBoxCollider.apply();
        }.bind(this));
    },

    initAnimationByName () {
        if (!this.animName || !this.Animation) return;
        this.Animation.play(this.animName);
    },

    initMonsterType () {
        this.node.monsterType = this.monsterType;
    },

    initMonsterMove () {
        this.RigidBody.linearVelocity = cc.v2(-500, 0);
    },

    initMonsterScoreStatus () {
        this.node.monsterScoreStatus ;
    },

    initMonsterCtr () {
        // 高怪，可以踢开
        if(this.monsterType === gameDef.MonsterType.Tall) {
            this.node.message = gameDef.MonsterMessage.Can_kick;
        }

        // 僵尸怪，可以铲
        if(this.monsterType === gameDef.MonsterType.Crazy) {
            this.node.message = gameDef.MonsterMessage.Can_spade;
        }

        // 超级怪，可以点击怪物抬起
        if(this.monsterType === gameDef.MonsterType.Super) {
            var liftMonster = function () {
                this.node.y += 200;
                this.node.off(cc.Node.EventType.TOUCH_START, liftMonster.bind(this), this);
            };
            this.node.message = gameDef.MonsterMessage.Can_lift;
            this.node.on(cc.Node.EventType.TOUCH_START, liftMonster.bind(this), this);
        }
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact (contact, selfCollider, otherCollider) {
        if(selfCollider.node.group !== gameDef.ColliderGroup.Monster || otherCollider.node.group !== gameDef.ColliderGroup.Person) return;

        if(this.monsterType === gameDef.MonsterType.Middle) {

        }

        // if(this.monsterType === )

    },

    countScore () {
        if(singleton.gameMgr.checkIsGetScore(this.node)) {
            singleton.gameData.addGameScore();
            eventCenter.emitEvent(eventDef.Update_GameScore);
        }
    },

    destoryMonster () {
        if(!this.node) return;
        if(this.node.x <= -200) {
            this.node.destroy();
        }
    }

});
