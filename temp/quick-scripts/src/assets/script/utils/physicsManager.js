"use strict";
cc._RF.push(module, '90e609yB4RL7oZKGKxwljC9', 'physicsManager');
// script/utils/physicsManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isDebug: {
      "default": true,
      type: cc.Boolean
    }
  },
  onLoad: function onLoad() {
    var phyMgr = cc.director.getPhysicsManager();
    phyMgr.enabled = true;

    if (this.isDebug) {
      phyMgr.debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_pairBit | cc.PhysicsManager.DrawBits.e_centerOfMassBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
    }
  }
});

cc._RF.pop();