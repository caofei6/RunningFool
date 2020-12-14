/***
 * gameGrass控制脚本
 */
var gameCtrBase = require("gameCtrBase");
var singleton = require("singleton");

cc.Class({
    extends: gameCtrBase,

    properties: {
        RigidBody: {
            type: cc.RigidBody,
            default: null
        }
    },

    start () {
        singleton.nodeGrass = this.node;
    },

    update () {
        if(!this.ctrGrass) return;
        if(this.node.x <= this.grassMoveMinX) {
            this.node.x = this.grassMoveStartX;
        }
        this.node.x -= this.grassMoveStep;
    },
});
