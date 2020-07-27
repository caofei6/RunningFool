/***
 * Monster脚本
 */

var singleton = require("singleton");

cc.Class({
    extends: cc.Component,

    properties: {
        SpriteMonster: {
            default: null,
            type: cc.Sprite
        },

        PhysicsBoxCollider: {
            default: null,
            type: cc.PhysicsBoxCollider
        },

        Animation: {
            default: null,
            type: cc.Animation
        }
    },

    update () {
        this.node.x -= 80;
    },

    init(params) {
        this.imagePath = params.imagePath;
        this.animName = params.animName;
        this.initImage();
        this.initAnimationByName();
        this.initPhysicsBoxCollider();
    },

    initImage() {
        if (!this.imagePath || !this.SpriteMonster) return;
        singleton.loadManager.loadSpriteFrame(this.SpriteMonster, this.imagePath, this);
    },

    initAnimationByName() {
        if (!this.animName || !this.Animation) return;
        this.Animation.play(this.animName);
    },

    initPhysicsBoxCollider() {
        if (!this.PhysicsBoxCollider) return;
        this.PhysicsBoxCollider.size = this.node.getContentSize();
    },
});
