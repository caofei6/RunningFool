/***
 * gameCamera控制脚本
 */
var gameCtrBase = require("gameCtrBase");

cc.Class({
    extends: gameCtrBase,

    update () {
        if (!this.ctrCamera) return;
        if (this.NodePerson.y <= 0) {
            this.node.y = 0;
        }
        else if (this.NodePerson.y >= 720) {
            this.node.y = 720;
        }
        else {
            this.node.y = this.NodePerson.y;
        }
    },
});
