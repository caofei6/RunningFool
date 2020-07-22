
cc.Class({
    extends: cc.Component,

    properties: {
        isDebug: {
            default: null,
            type: cc.Boolean
        }
    },

    onLoad () {
        let phyMgr = cc.director.getPhysicsManager();
        phyMgr.enabled = true;
        if(this.isDebug) {
            phyMgr.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
                cc.PhysicsManager.DrawBits.e_pairBit |
                cc.PhysicsManager.DrawBits.e_centerOfMassBit |
                cc.PhysicsManager.DrawBits.e_jointBit |
                cc.PhysicsManager.DrawBits.e_shapeBit;
        }
    },
});
