/***
 * 游戏相关数据
 */

cc.Class({
    extends: cc.Component,

    ctor () {
        this.resetData();
    },

    release () {
        this.resetData();
    },

    resetData () {
        this.gameScore = 0;
    },

    addGameScore () {
        this.gameScore++;
    },

    getGameScore () {
        return this.gameScore;
    },
});
