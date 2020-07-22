
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
    isDebug: {
      "default": null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xccGh5c2ljc01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpc0RlYnVnIiwidHlwZSIsIkJvb2xlYW4iLCJvbkxvYWQiLCJwaHlNZ3IiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsImRlYnVnRHJhd0ZsYWdzIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsImVfYWFiYkJpdCIsImVfcGFpckJpdCIsImVfY2VudGVyT2ZNYXNzQml0IiwiZV9qb2ludEJpdCIsImVfc2hhcGVCaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKO0FBREQsR0FIUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVLO0FBQ04sUUFBSUMsTUFBTSxHQUFHUixFQUFFLENBQUNTLFFBQUgsQ0FBWUMsaUJBQVosRUFBYjtBQUNBRixJQUFBQSxNQUFNLENBQUNHLE9BQVAsR0FBaUIsSUFBakI7O0FBQ0EsUUFBRyxLQUFLUCxPQUFSLEVBQWlCO0FBQ2JJLE1BQUFBLE1BQU0sQ0FBQ0ksY0FBUCxHQUF3QlosRUFBRSxDQUFDYSxjQUFILENBQWtCQyxRQUFsQixDQUEyQkMsU0FBM0IsR0FDcEJmLEVBQUUsQ0FBQ2EsY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJFLFNBRFAsR0FFcEJoQixFQUFFLENBQUNhLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCRyxpQkFGUCxHQUdwQmpCLEVBQUUsQ0FBQ2EsY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJJLFVBSFAsR0FJcEJsQixFQUFFLENBQUNhLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCSyxVQUovQjtBQUtIO0FBQ0o7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNEZWJ1Zzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Cb29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBwaHlNZ3IgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHBoeU1nci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmlzRGVidWcpIHtcclxuICAgICAgICAgICAgcGh5TWdyLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcclxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfcGFpckJpdCB8XHJcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2NlbnRlck9mTWFzc0JpdCB8XHJcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcclxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==