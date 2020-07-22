
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/core/gameDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ff59d3SPlA/ZrCBzM9ObAz', 'gameDef');
// script/core/gameDef.js

"use strict";

var gameDef = {};
gameDef.SceneArray = ["login", "hall", "game"];
gameDef.Scene = {
  Login: "login",
  Hall: "hall",
  Game: "game"
};
gameDef.Mode = {
  Normal: 0,
  Crazy: 1
};
module.exports = gameDef;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY29yZS9nYW1lRGVmLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJTY2VuZUFycmF5IiwiU2NlbmUiLCJMb2dpbiIsIkhhbGwiLCJHYW1lIiwiTW9kZSIsIk5vcm1hbCIsIkNyYXp5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPLEdBQUcsRUFBZDtBQUVBQSxPQUFPLENBQUNDLFVBQVIsR0FBcUIsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQixDQUFyQjtBQUNBRCxPQUFPLENBQUNFLEtBQVIsR0FBZ0I7QUFDWkMsRUFBQUEsS0FBSyxFQUFFLE9BREs7QUFFWkMsRUFBQUEsSUFBSSxFQUFFLE1BRk07QUFHWkMsRUFBQUEsSUFBSSxFQUFFO0FBSE0sQ0FBaEI7QUFNQUwsT0FBTyxDQUFDTSxJQUFSLEdBQWU7QUFDWEMsRUFBQUEsTUFBTSxFQUFFLENBREc7QUFFWEMsRUFBQUEsS0FBSyxFQUFFO0FBRkksQ0FBZjtBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLE9BQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBnYW1lRGVmID0ge307XG5cbmdhbWVEZWYuU2NlbmVBcnJheSA9IFtcImxvZ2luXCIsIFwiaGFsbFwiLCBcImdhbWVcIl07XG5nYW1lRGVmLlNjZW5lID0ge1xuICAgIExvZ2luOiBcImxvZ2luXCIsXG4gICAgSGFsbDogXCJoYWxsXCIsXG4gICAgR2FtZTogXCJnYW1lXCIsXG59O1xuXG5nYW1lRGVmLk1vZGUgPSB7XG4gICAgTm9ybWFsOiAwLFxuICAgIENyYXp5OiAxXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZURlZjsiXX0=