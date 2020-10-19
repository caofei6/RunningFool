/***
 * Monster脚本
 */

var singleton = require("singleton");
var gameDef = require("gameDef");
var eventCenter = require("eventCenter");
var eventDef = require("eventDef");

var gameMonster = {};
gameMonster.destroyPosX = -1250;
gameMonster.moveSpeed = cc.v2(-500, 0);

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

        MonWidget: {
            default: null,
            type: cc.Widget
        }
    },

    update () {
        this.countScore();
        this.destoryMonster();
    },

    init (params) {
        this.imagePath = params.imagePath;
        this.animName = params.animName;
        this.baseVelocityX = params.baseVelocityX;
        this.monsterType = params.monsterType;
        this.initImageAndCollider();
        this.initMonsterType();
        this.initMonsterCtr();
        // this.initMonsterMove();
        this.initMonsterScoreStatus();
        this.node.controlMonster = false;
    },

    initImageAndCollider() {
        if (!this.imagePath || !this.SpriteMonster) return;
        singleton.loadManager.loadSpriteFrame(this.SpriteMonster, this.imagePath, this, function (originSize) {
            this.PhysicsBoxCollider.size = originSize;
            this.PhysicsBoxCollider.apply();
        }.bind(this));
    },

    resetPosition () {
        // this.MonWidget.bottom = 50;
        // this.MonWidget.updateAlignment();
        this.node.x = 20;
    },

    initAnimationByName () {
        if (!this.animName || !this.Animation) return;
        this.Animation.play(this.animName);
    },

    initMonsterType () {
        this.node.monsterType = this.monsterType;
    },

    initMonsterMove () {

    },

    initMonsterScoreStatus () {
        this.node.canAddScore = true;
    },

    initMonsterCtr () {
        // 普通怪
        if(this.monsterType === gameDef.MonsterType.Low || this.monsterType === gameDef.MonsterType.Middle) {
            this.node.message = gameDef.MonsterMessage.Normal;
        }

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
            var self = this;
            var liftMonster = function () {

            };
            this.node.message = gameDef.MonsterMessage.Can_lift;
            this.node.on(cc.Node.EventType.TOUCH_START, liftMonster, this);
        }
    },

    // 只在两个碰撞体开始接触时被调用一次
    onBeginContact (contact, selfCollider, otherCollider) {
        if(selfCollider.node.group !== gameDef.ColliderGroup.Monster || otherCollider.node.group !== gameDef.ColliderGroup.Person) return;

        var message = selfCollider.node.message;
        switch (message) {
            case gameDef.MonsterMessage.Normal:
                break;
            case gameDef.MonsterMessage.Can_kick:
                if(singleton.personStation === gameDef.PersonStation.Kick) {
                    this.controlMonster = true;
                    this.RigidBody.linearVelocity = cc.v2(400, 300);
                }
                break;
            case gameDef.MonsterMessage.Can_spade:
                break;
            case gameDef.MonsterMessage.Can_lift:
                break;

        }

    },

    countScore () {
        if(singleton.gameMgr.checkIsGetScore(this.node) && this.node.canAddScore) {
            this.node.canAddScore = false;
            singleton.gameData.addGameScore();
            eventCenter.emitEvent(eventDef.Update_GameScore);
        }
    },

    destoryMonster () {
        if(!this.node) return;
        if(this.node.x <= gameMonster.destroyPosX) {
            this.node.destroy();
        }
    }

});
