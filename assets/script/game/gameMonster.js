/***
 * Monster脚本
 */

var singleton = require("singleton");
var eventCenter = require("eventCenter");
var gameCtrBase = require("gameCtrBase");
var eventDef = require("eventDef");
var gameDef = require("gameDef");
var utils = require("utils");

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

        Animation: {
            default: null,
            type: cc.Animation
        },

        boxCollision: {
            default: null,
            type: cc.BoxCollider
        }
    },

    onLoad () {
        eventCenter.addEventObserver(eventDef.GameOver, this.onGameOver, this);
    },

    onDestroy () {
        eventCenter.removeEventObserver(eventDef.GameOver, this.onGameOver, this);
    },

    update (dt) {
        this.countScore();
        this.destoryMonster();
        this.moveMonster(dt);
    },

    init (params) {
        this.imagePath = params.imagePath;
        this.animName = params.animName;
        this.baseVelocityX = params.baseVelocityX;
        this.monsterType = params.monsterType;
        this.monsterPool = params.monsterPool;
        this.node.canAddScore = true;
        this.node.isHandel = false;
        this.initImageAndCollider();
        this.initMonsterStatus();
        this.initMonsterCtr();
        this.initMonsterDanmu();
    },

    initImageAndCollider() {
        if (!this.imagePath || !this.SpriteMonster) return;
        singleton.loadManager.loadSpriteFrame(this.SpriteMonster, this.imagePath, this, (size) => {
            this.boxCollision.size = size;
            this.boxCollision.offset = cc.v2(size.width/2, size.height/2);
        });
    },

    initMonsterStatus () {
        var size = utils.getCanvasSize();
        var gap = 50;
        this.node.angle = 0;
        this.node.x = size.width / 2 + 3 * gap;
        this.node.y = singleton.nodeGrass.height - size.height / 2 - gap;

    },

    initAnimationByName () {
        if (!this.animName || !this.Animation) return;
        this.Animation.play(this.animName);
    },

    initMonsterCtr () {
        // 普通怪，跳着通过
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
                if (!self.node.canCtr) return;
                self.node.canCtr = false;
                var delayTime = utils.randomNum(0, 4);
                self.node.stopAllActions();
                self.node.runAction(cc.sequence(
                    cc.moveBy(0.5, cc.v2(0, 200)),
                    cc.delayTime(delayTime),
                    cc.moveBy(0.2, cc.v2(0, -200)).easing(cc.easeBackOut()),
                    cc.callFunc(() => {
                        self.node.canCtr = true;
                    })
                ))
            };

            this.node.canCtr = true;
            this.node.message = gameDef.MonsterMessage.Can_lift;
            this.node.on(cc.Node.EventType.TOUCH_START, liftMonster, this);
        }
    },

    // 移动怪物
    moveMonster (dt) {
        if (this.node.isHandel) return;
        this.node.x -= dt * 180;
    },

    playMonsterDeathAnim () {
        if(this.node.isHandel) return;
        var size = cc.director.getScene().getChildByName("Canvas").getContentSize();
        this.node.stopAllActions();
        this.node.anchorX = 0.5;
        this.node.anchorY = 0.5;
        this.node.runAction(cc.sequence(
            cc.spawn(
                cc.moveTo(1, cc.v2(size.width, size.height)),
                cc.rotateBy(1, 360 * 3)
            ),
            cc.callFunc(() => {
                this.destoryMonster();
            })
        ))
    },

    countScore () {
        if(singleton.gameMgr.checkIsGetScore(this.node) && this.node.canAddScore) {
            this.node.canAddScore = false;
            this.addScore();
        }
    },

    addScore () {
        singleton.gameData.addGameScore();
        eventCenter.emitEvent(eventDef.Update_GameScore);
    },

    destoryMonster () {
        if (!this.node || !this.monsterPool) return;
        if (this.node.x <= -1250) {
            this.monsterPool.put(this.node);
        }
    },

    initMonsterDanmu () {
        if (!this.node.message) return;
        var str = "";
        switch (this.node.message) {
            case gameDef.MonsterMessage.Normal:
                str = "平平无奇～";
                break;
            case gameDef.MonsterMessage.Can_kick:
                str = "发挥你的想象～";
                break;
            case gameDef.MonsterMessage.Can_spade:
                str = "来，蹲下试试～";
                break;
            case gameDef.MonsterMessage.Can_lift:
                str = "你不是厉害吗，跳过去呀！";
                break;
        }

        var param = {
            contentStr: str
        }
        eventCenter.emitEvent(eventDef.Launch_DanMu, param);
    },

    onGameOver () {
        this.playMonsterDeathAnim();
    },

});
