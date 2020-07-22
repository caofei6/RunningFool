

cc.Class({
    extends: cc.Component,

    ctor () {
        this.resetData();
    },

    release () {
        this.resetData();
    },

    resetData () {
        this.userWxData = null;
    },

    setUserWxData (data) {
        this.userWxData = data;
    },

    getUserWxData () {
        return this.userWxData;
    }
});