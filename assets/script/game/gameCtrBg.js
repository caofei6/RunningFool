/***
 * gameBg控制脚本
 */
var gameCtrBase = require("gameCtrBase");

cc.Class({
    extends: gameCtrBase,

    update () {
        if(!this.ctrBg) return;
        if(this.node.x <= this.bgMoveMinX) {
            this.node.x = this.bgMoveStartX;
        }
        this.node.x -= this.bgMoveStep;
    },
});
