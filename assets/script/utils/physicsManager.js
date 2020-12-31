
cc.Class({
    extends: cc.Component,

    properties: {
        isDebug: false
    },

    onLoad () {
        let phyMgr = cc.director.getPhysicsManager();
        let collisonMgr = cc.director.getCollisionManager();
        phyMgr.enabled = true;
        collisonMgr.enabled = true;
        collisonMgr.enabledDebugDraw = true;
        if(this.isDebug) {
            phyMgr.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit;
        }
    },
});
