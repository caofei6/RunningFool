var singleton = require("singleton");

cc.Class({
    extends: cc.Component,

    onLoad () {
        singleton.gameMgr = this;
    },

    start () {

    },

    checkIsGetScore (nodeMonster) {
        if(!singleton.nodePerson || !nodeMonster) return;
        return nodeMonster.x < singleton.nodePerson.x;
    },
});
