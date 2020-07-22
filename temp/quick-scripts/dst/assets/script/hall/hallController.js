
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hall/hallController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d089zVO3BAs4u3z+FwP01o', 'hallController');
// script/hall/hallController.js

"use strict";

var gameDef = require("gameDef");

var singleton = require("singleton");

cc.Class({
  "extends": cc.Component,
  properties: {
    NodeBtnNormal: {
      type: cc.Node,
      "default": null
    },
    NodeBtnCrazy: {
      type: cc.Node,
      "default": null
    }
  },
  onLoad: function onLoad() {
    singleton.curScene = gameDef.Scene.Hall;
  },
  start: function start() {
    this.startNodeBtnAnim();
  },
  startNodeBtnAnim: function startNodeBtnAnim() {
    this.NodeBtnNormal.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.3, cc.v2(0, 10)), cc.moveBy(0.3, cc.v2(0, -10)))));
    this.NodeBtnCrazy.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.3, cc.v2(0, 10)), cc.moveBy(0.3, cc.v2(0, -10)))));
  },
  onClickNormalBtn: function onClickNormalBtn() {
    singleton.curGameMode = gameDef.Mode.Normal;
    cc.director.loadScene(gameDef.Scene.Game);
  },
  onClickCrazyBtn: function onClickCrazyBtn() {
    singleton.curGameMode = gameDef.Mode.Crazy;
    cc.director.loadScene(gameDef.Scene.Game);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvaGFsbC9oYWxsQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJnYW1lRGVmIiwicmVxdWlyZSIsInNpbmdsZXRvbiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTm9kZUJ0bk5vcm1hbCIsInR5cGUiLCJOb2RlIiwiTm9kZUJ0bkNyYXp5Iiwib25Mb2FkIiwiY3VyU2NlbmUiLCJTY2VuZSIsIkhhbGwiLCJzdGFydCIsInN0YXJ0Tm9kZUJ0bkFuaW0iLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJtb3ZlQnkiLCJ2MiIsIm9uQ2xpY2tOb3JtYWxCdG4iLCJjdXJHYW1lTW9kZSIsIk1vZGUiLCJOb3JtYWwiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIkdhbWUiLCJvbkNsaWNrQ3JhenlCdG4iLCJDcmF6eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLElBREU7QUFFWCxpQkFBUztBQUZFLEtBRFA7QUFNUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1ZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQURDO0FBRVYsaUJBQVM7QUFGQztBQU5OLEdBSFA7QUFlTEUsRUFBQUEsTUFmSyxvQkFlSztBQUNOVCxJQUFBQSxTQUFTLENBQUNVLFFBQVYsR0FBcUJaLE9BQU8sQ0FBQ2EsS0FBUixDQUFjQyxJQUFuQztBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxLQW5CSyxtQkFtQkk7QUFDTCxTQUFLQyxnQkFBTDtBQUNILEdBckJJO0FBdUJMQSxFQUFBQSxnQkF2QkssOEJBdUJlO0FBQ2hCLFNBQUtULGFBQUwsQ0FBbUJVLFNBQW5CLENBQTZCZCxFQUFFLENBQUNlLGFBQUgsQ0FBaUJmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FDMUNoQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULENBQWYsQ0FEMEMsRUFFMUNsQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEVBQVYsQ0FBZixDQUYwQyxDQUFqQixDQUE3QjtBQUtBLFNBQUtYLFlBQUwsQ0FBa0JPLFNBQWxCLENBQTRCZCxFQUFFLENBQUNlLGFBQUgsQ0FBaUJmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FDekNoQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULENBQWYsQ0FEeUMsRUFFekNsQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEVBQVYsQ0FBZixDQUZ5QyxDQUFqQixDQUE1QjtBQUlILEdBakNJO0FBbUNMQyxFQUFBQSxnQkFuQ0ssOEJBbUNlO0FBQ2hCcEIsSUFBQUEsU0FBUyxDQUFDcUIsV0FBVixHQUF3QnZCLE9BQU8sQ0FBQ3dCLElBQVIsQ0FBYUMsTUFBckM7QUFDQXRCLElBQUFBLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQjNCLE9BQU8sQ0FBQ2EsS0FBUixDQUFjZSxJQUFwQztBQUNILEdBdENJO0FBd0NMQyxFQUFBQSxlQXhDSyw2QkF3Q2M7QUFDZjNCLElBQUFBLFNBQVMsQ0FBQ3FCLFdBQVYsR0FBd0J2QixPQUFPLENBQUN3QixJQUFSLENBQWFNLEtBQXJDO0FBQ0EzQixJQUFBQSxFQUFFLENBQUN1QixRQUFILENBQVlDLFNBQVosQ0FBc0IzQixPQUFPLENBQUNhLEtBQVIsQ0FBY2UsSUFBcEM7QUFDSDtBQTNDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZURlZiA9IHJlcXVpcmUoXCJnYW1lRGVmXCIpO1xubGV0IHNpbmdsZXRvbiA9IHJlcXVpcmUoXCJzaW5nbGV0b25cIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIE5vZGVCdG5Ob3JtYWw6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgTm9kZUJ0bkNyYXp5OiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBzaW5nbGV0b24uY3VyU2NlbmUgPSBnYW1lRGVmLlNjZW5lLkhhbGw7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5zdGFydE5vZGVCdG5BbmltKCk7XG4gICAgfSxcblxuICAgIHN0YXJ0Tm9kZUJ0bkFuaW0gKCkge1xuICAgICAgICB0aGlzLk5vZGVCdG5Ob3JtYWwucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4zLCBjYy52MigwLCAxMCkpLFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMywgY2MudjIoMCwgLTEwKSlcbiAgICAgICAgKSkpO1xuXG4gICAgICAgIHRoaXMuTm9kZUJ0bkNyYXp5LnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMywgY2MudjIoMCwgMTApKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjMsIGNjLnYyKDAsIC0xMCkpXG4gICAgICAgICkpKVxuICAgIH0sXG5cbiAgICBvbkNsaWNrTm9ybWFsQnRuICgpIHtcbiAgICAgICAgc2luZ2xldG9uLmN1ckdhbWVNb2RlID0gZ2FtZURlZi5Nb2RlLk5vcm1hbDtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdhbWVEZWYuU2NlbmUuR2FtZSk7XG4gICAgfSxcblxuICAgIG9uQ2xpY2tDcmF6eUJ0biAoKSB7XG4gICAgICAgIHNpbmdsZXRvbi5jdXJHYW1lTW9kZSA9IGdhbWVEZWYuTW9kZS5DcmF6eTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdhbWVEZWYuU2NlbmUuR2FtZSk7XG4gICAgfSxcbn0pO1xuIl19