
cc.Class({
    extends: cc.Component,

    properties: {
        isDebug: false
    },

    onLoad () {
        let phyMgr = cc.director.getPhysicsManager();
        phyMgr.enabled = true;
        if(this.isDebug) {
            phyMgr.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit;
        }
    },
});
