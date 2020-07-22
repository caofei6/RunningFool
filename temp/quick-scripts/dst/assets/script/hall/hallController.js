
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxoYWxsXFxoYWxsQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJnYW1lRGVmIiwicmVxdWlyZSIsInNpbmdsZXRvbiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTm9kZUJ0bk5vcm1hbCIsInR5cGUiLCJOb2RlIiwiTm9kZUJ0bkNyYXp5Iiwib25Mb2FkIiwiY3VyU2NlbmUiLCJTY2VuZSIsIkhhbGwiLCJzdGFydCIsInN0YXJ0Tm9kZUJ0bkFuaW0iLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJtb3ZlQnkiLCJ2MiIsIm9uQ2xpY2tOb3JtYWxCdG4iLCJjdXJHYW1lTW9kZSIsIk1vZGUiLCJOb3JtYWwiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIkdhbWUiLCJvbkNsaWNrQ3JhenlCdG4iLCJDcmF6eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBRUFFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUU7QUFDWEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLElBREU7QUFFWCxpQkFBUztBQUZFLEtBRFA7QUFNUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1ZGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQURDO0FBRVYsaUJBQVM7QUFGQztBQU5OLEdBSFA7QUFlTEUsRUFBQUEsTUFmSyxvQkFlSztBQUNOVCxJQUFBQSxTQUFTLENBQUNVLFFBQVYsR0FBcUJaLE9BQU8sQ0FBQ2EsS0FBUixDQUFjQyxJQUFuQztBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxLQW5CSyxtQkFtQkk7QUFDTCxTQUFLQyxnQkFBTDtBQUNILEdBckJJO0FBdUJMQSxFQUFBQSxnQkF2QkssOEJBdUJlO0FBQ2hCLFNBQUtULGFBQUwsQ0FBbUJVLFNBQW5CLENBQTZCZCxFQUFFLENBQUNlLGFBQUgsQ0FBaUJmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FDMUNoQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULENBQWYsQ0FEMEMsRUFFMUNsQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEVBQVYsQ0FBZixDQUYwQyxDQUFqQixDQUE3QjtBQUtBLFNBQUtYLFlBQUwsQ0FBa0JPLFNBQWxCLENBQTRCZCxFQUFFLENBQUNlLGFBQUgsQ0FBaUJmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FDekNoQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULENBQWYsQ0FEeUMsRUFFekNsQixFQUFFLENBQUNpQixNQUFILENBQVUsR0FBVixFQUFlakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEVBQVYsQ0FBZixDQUZ5QyxDQUFqQixDQUE1QjtBQUlILEdBakNJO0FBbUNMQyxFQUFBQSxnQkFuQ0ssOEJBbUNlO0FBQ2hCcEIsSUFBQUEsU0FBUyxDQUFDcUIsV0FBVixHQUF3QnZCLE9BQU8sQ0FBQ3dCLElBQVIsQ0FBYUMsTUFBckM7QUFDQXRCLElBQUFBLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQjNCLE9BQU8sQ0FBQ2EsS0FBUixDQUFjZSxJQUFwQztBQUNILEdBdENJO0FBd0NMQyxFQUFBQSxlQXhDSyw2QkF3Q2M7QUFDZjNCLElBQUFBLFNBQVMsQ0FBQ3FCLFdBQVYsR0FBd0J2QixPQUFPLENBQUN3QixJQUFSLENBQWFNLEtBQXJDO0FBQ0EzQixJQUFBQSxFQUFFLENBQUN1QixRQUFILENBQVlDLFNBQVosQ0FBc0IzQixPQUFPLENBQUNhLEtBQVIsQ0FBY2UsSUFBcEM7QUFDSDtBQTNDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZURlZiA9IHJlcXVpcmUoXCJnYW1lRGVmXCIpO1xyXG5sZXQgc2luZ2xldG9uID0gcmVxdWlyZShcInNpbmdsZXRvblwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgTm9kZUJ0bk5vcm1hbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgTm9kZUJ0bkNyYXp5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHNpbmdsZXRvbi5jdXJTY2VuZSA9IGdhbWVEZWYuU2NlbmUuSGFsbDtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnROb2RlQnRuQW5pbSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydE5vZGVCdG5BbmltICgpIHtcclxuICAgICAgICB0aGlzLk5vZGVCdG5Ob3JtYWwucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjMsIGNjLnYyKDAsIDEwKSksXHJcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjMsIGNjLnYyKDAsIC0xMCkpXHJcbiAgICAgICAgKSkpO1xyXG5cclxuICAgICAgICB0aGlzLk5vZGVCdG5DcmF6eS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMywgY2MudjIoMCwgMTApKSxcclxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMywgY2MudjIoMCwgLTEwKSlcclxuICAgICAgICApKSlcclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja05vcm1hbEJ0biAoKSB7XHJcbiAgICAgICAgc2luZ2xldG9uLmN1ckdhbWVNb2RlID0gZ2FtZURlZi5Nb2RlLk5vcm1hbDtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoZ2FtZURlZi5TY2VuZS5HYW1lKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja0NyYXp5QnRuICgpIHtcclxuICAgICAgICBzaW5nbGV0b24uY3VyR2FtZU1vZGUgPSBnYW1lRGVmLk1vZGUuQ3Jhenk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdhbWVEZWYuU2NlbmUuR2FtZSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19