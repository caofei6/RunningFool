
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvcGh5c2ljc01hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpc0RlYnVnIiwidHlwZSIsIkJvb2xlYW4iLCJvbkxvYWQiLCJwaHlNZ3IiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsImRlYnVnRHJhd0ZsYWdzIiwiUGh5c2ljc01hbmFnZXIiLCJEcmF3Qml0cyIsImVfYWFiYkJpdCIsImVfcGFpckJpdCIsImVfY2VudGVyT2ZNYXNzQml0IiwiZV9qb2ludEJpdCIsImVfc2hhcGVCaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKO0FBREQsR0FIUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVLO0FBQ04sUUFBSUMsTUFBTSxHQUFHUixFQUFFLENBQUNTLFFBQUgsQ0FBWUMsaUJBQVosRUFBYjtBQUNBRixJQUFBQSxNQUFNLENBQUNHLE9BQVAsR0FBaUIsSUFBakI7O0FBQ0EsUUFBRyxLQUFLUCxPQUFSLEVBQWlCO0FBQ2JJLE1BQUFBLE1BQU0sQ0FBQ0ksY0FBUCxHQUF3QlosRUFBRSxDQUFDYSxjQUFILENBQWtCQyxRQUFsQixDQUEyQkMsU0FBM0IsR0FDcEJmLEVBQUUsQ0FBQ2EsY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJFLFNBRFAsR0FFcEJoQixFQUFFLENBQUNhLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCRyxpQkFGUCxHQUdwQmpCLEVBQUUsQ0FBQ2EsY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJJLFVBSFAsR0FJcEJsQixFQUFFLENBQUNhLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCSyxVQUovQjtBQUtIO0FBQ0o7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpc0RlYnVnOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogY2MuQm9vbGVhblxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGxldCBwaHlNZ3IgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBwaHlNZ3IuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmKHRoaXMuaXNEZWJ1Zykge1xuICAgICAgICAgICAgcGh5TWdyLmRlYnVnRHJhd0ZsYWdzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3BhaXJCaXQgfFxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfY2VudGVyT2ZNYXNzQml0IHxcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0O1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19