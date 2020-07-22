
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/physicsManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90e609yB4RL7oZKGKxwljC9', 'physicsManager');
// script/utils/physicsManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    isDebug: false
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvcGh5c2ljc01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpc0RlYnVnIiwib25Mb2FkIiwicGh5TWdyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJkZWJ1Z0RyYXdGbGFncyIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJlX2FhYmJCaXQiLCJlX3BhaXJCaXQiLCJlX2NlbnRlck9mTWFzc0JpdCIsImVfam9pbnRCaXQiLCJlX3NoYXBlQml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFO0FBREQsR0FIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9LO0FBQ04sUUFBSUMsTUFBTSxHQUFHTixFQUFFLENBQUNPLFFBQUgsQ0FBWUMsaUJBQVosRUFBYjtBQUNBRixJQUFBQSxNQUFNLENBQUNHLE9BQVAsR0FBaUIsSUFBakI7O0FBQ0EsUUFBRyxLQUFLTCxPQUFSLEVBQWlCO0FBQ2JFLE1BQUFBLE1BQU0sQ0FBQ0ksY0FBUCxHQUF3QlYsRUFBRSxDQUFDVyxjQUFILENBQWtCQyxRQUFsQixDQUEyQkMsU0FBM0IsR0FDcEJiLEVBQUUsQ0FBQ1csY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJFLFNBRFAsR0FFcEJkLEVBQUUsQ0FBQ1csY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJHLGlCQUZQLEdBR3BCZixFQUFFLENBQUNXLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCSSxVQUhQLEdBSXBCaEIsRUFBRSxDQUFDVyxjQUFILENBQWtCQyxRQUFsQixDQUEyQkssVUFKL0I7QUFLSDtBQUNKO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaXNEZWJ1ZzogZmFsc2VcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgbGV0IHBoeU1nciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIHBoeU1nci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgaWYodGhpcy5pc0RlYnVnKSB7XG4gICAgICAgICAgICBwaHlNZ3IuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfcGFpckJpdCB8XG4gICAgICAgICAgICAgICAgY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9jZW50ZXJPZk1hc3NCaXQgfFxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfam9pbnRCaXQgfFxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXQ7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=