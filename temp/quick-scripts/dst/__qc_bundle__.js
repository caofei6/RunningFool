
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/core/gameDef');
require('./assets/script/core/singleton');
require('./assets/script/data/userData');
require('./assets/script/def/eventDef');
require('./assets/script/hall/hallController');
require('./assets/script/login/LoginController');
require('./assets/script/main');
require('./assets/script/utils/eventCenter');
require('./assets/script/utils/loadResource');
require('./assets/script/utils/physicsManager');
require('./assets/script/utils/wechatSdk');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8479b9tizNEXL684Aj2/SWf', 'main');
// script/main.js

"use strict";

var singleton = require("singleton");

var userData = require("userData");

var loadResource = require("loadResource");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
    this.initGameData();
    this.initGameScene();
    this.initGameStation();
    this.initGameMode();
    this.initGameUtils();
  },
  onDestroy: function onDestroy() {
    singleton.userData.release();
  },
  start: function start() {},
  initGameScene: function initGameScene() {
    if (singleton.curScene) {
      delete singleton.curScene;
      singleton.curScene = null;
    }
  },
  initGameMode: function initGameMode() {
    if (singleton.curGameMode) {
      delete singleton.curGameMode;
      singleton.curGameMode = null;
    }
  },
  initGameStation: function initGameStation() {
    if (singleton.curGameStation) {
      delete singleton.curGameStation;
      singleton.curGameStation = null;
    }
  },
  initGameData: function initGameData() {
    if (singleton.userData) {
      delete singleton.curGameMode;
      singleton.curGameMode = null;
    }

    singleton.userData = new userData();
  },
  initGameUtils: function initGameUtils() {
    singleton.loadManager = new loadResource();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsInJlcXVpcmUiLCJ1c2VyRGF0YSIsImxvYWRSZXNvdXJjZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJpbml0R2FtZURhdGEiLCJpbml0R2FtZVNjZW5lIiwiaW5pdEdhbWVTdGF0aW9uIiwiaW5pdEdhbWVNb2RlIiwiaW5pdEdhbWVVdGlscyIsIm9uRGVzdHJveSIsInJlbGVhc2UiLCJzdGFydCIsImN1clNjZW5lIiwiY3VyR2FtZU1vZGUiLCJjdXJHYW1lU3RhdGlvbiIsImxvYWRNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFDQSxJQUFJRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxjQUFELENBQTFCOztBQUVBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9LO0FBQ05KLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRQyxrQkFBUixDQUEyQixLQUFLQyxJQUFoQztBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsZUFBTDtBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsU0FoQkssdUJBZ0JRO0FBQ1RqQixJQUFBQSxTQUFTLENBQUNFLFFBQVYsQ0FBbUJnQixPQUFuQjtBQUNILEdBbEJJO0FBb0JMQyxFQUFBQSxLQXBCSyxtQkFvQkksQ0FFUixDQXRCSTtBQXdCTE4sRUFBQUEsYUF4QkssMkJBd0JZO0FBQ2IsUUFBR2IsU0FBUyxDQUFDb0IsUUFBYixFQUF1QjtBQUNuQixhQUFPcEIsU0FBUyxDQUFDb0IsUUFBakI7QUFDQXBCLE1BQUFBLFNBQVMsQ0FBQ29CLFFBQVYsR0FBcUIsSUFBckI7QUFDSDtBQUNKLEdBN0JJO0FBK0JMTCxFQUFBQSxZQS9CSywwQkErQlc7QUFDWixRQUFJZixTQUFTLENBQUNxQixXQUFkLEVBQTJCO0FBQ3ZCLGFBQU9yQixTQUFTLENBQUNxQixXQUFqQjtBQUNBckIsTUFBQUEsU0FBUyxDQUFDcUIsV0FBVixHQUF3QixJQUF4QjtBQUNIO0FBQ0osR0FwQ0k7QUFzQ0xQLEVBQUFBLGVBdENLLDZCQXNDYztBQUNmLFFBQUlkLFNBQVMsQ0FBQ3NCLGNBQWQsRUFBOEI7QUFDMUIsYUFBT3RCLFNBQVMsQ0FBQ3NCLGNBQWpCO0FBQ0F0QixNQUFBQSxTQUFTLENBQUNzQixjQUFWLEdBQTJCLElBQTNCO0FBQ0g7QUFDSixHQTNDSTtBQTZDTFYsRUFBQUEsWUE3Q0ssMEJBNkNXO0FBQ1osUUFBSVosU0FBUyxDQUFDRSxRQUFkLEVBQXdCO0FBQ3BCLGFBQU9GLFNBQVMsQ0FBQ3FCLFdBQWpCO0FBQ0FyQixNQUFBQSxTQUFTLENBQUNxQixXQUFWLEdBQXdCLElBQXhCO0FBQ0g7O0FBQ0RyQixJQUFBQSxTQUFTLENBQUNFLFFBQVYsR0FBcUIsSUFBSUEsUUFBSixFQUFyQjtBQUNILEdBbkRJO0FBcURMYyxFQUFBQSxhQXJESywyQkFxRFk7QUFDYmhCLElBQUFBLFNBQVMsQ0FBQ3VCLFdBQVYsR0FBd0IsSUFBSXBCLFlBQUosRUFBeEI7QUFDSDtBQXZESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2luZ2xldG9uID0gcmVxdWlyZShcInNpbmdsZXRvblwiKTtcclxubGV0IHVzZXJEYXRhID0gcmVxdWlyZShcInVzZXJEYXRhXCIpO1xyXG5sZXQgbG9hZFJlc291cmNlID0gcmVxdWlyZShcImxvYWRSZXNvdXJjZVwiKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5pbml0R2FtZURhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXRHYW1lU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmluaXRHYW1lU3RhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEdhbWVNb2RlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0R2FtZVV0aWxzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgc2luZ2xldG9uLnVzZXJEYXRhLnJlbGVhc2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEdhbWVTY2VuZSAoKSB7XHJcbiAgICAgICAgaWYoc2luZ2xldG9uLmN1clNjZW5lKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzaW5nbGV0b24uY3VyU2NlbmU7XHJcbiAgICAgICAgICAgIHNpbmdsZXRvbi5jdXJTY2VuZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0R2FtZU1vZGUgKCkge1xyXG4gICAgICAgIGlmIChzaW5nbGV0b24uY3VyR2FtZU1vZGUpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHNpbmdsZXRvbi5jdXJHYW1lTW9kZTtcclxuICAgICAgICAgICAgc2luZ2xldG9uLmN1ckdhbWVNb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRHYW1lU3RhdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNpbmdsZXRvbi5jdXJHYW1lU3RhdGlvbikge1xyXG4gICAgICAgICAgICBkZWxldGUgc2luZ2xldG9uLmN1ckdhbWVTdGF0aW9uO1xyXG4gICAgICAgICAgICBzaW5nbGV0b24uY3VyR2FtZVN0YXRpb24gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdEdhbWVEYXRhICgpIHtcclxuICAgICAgICBpZiAoc2luZ2xldG9uLnVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzaW5nbGV0b24uY3VyR2FtZU1vZGU7XHJcbiAgICAgICAgICAgIHNpbmdsZXRvbi5jdXJHYW1lTW9kZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpbmdsZXRvbi51c2VyRGF0YSA9IG5ldyB1c2VyRGF0YSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0R2FtZVV0aWxzICgpIHtcclxuICAgICAgICBzaW5nbGV0b24ubG9hZE1hbmFnZXIgPSBuZXcgbG9hZFJlc291cmNlKCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/loadResource.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef229mugkRCAJepadAeyvu7', 'loadResource');
// script/utils/loadResource.js

"use strict";

var gameDef = require("gameDef");

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {},
  loadAllScene: function loadAllScene(progressFunc, successFunc) {
    var SceneArray = gameDef.SceneArray;

    var onShowProgress = function onShowProgress(completedCount, totalCount) {
      var val = completedCount / totalCount;
      if (progressFunc) progressFunc(val);
    };

    var onSuccessLoad = function onSuccessLoad() {
      if (successFunc) successFunc();
    };

    for (var i = 0; i < SceneArray.length; i++) {
      cc.director.preloadScene(SceneArray[i], onShowProgress, onSuccessLoad);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcbG9hZFJlc291cmNlLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImN0b3IiLCJsb2FkQWxsU2NlbmUiLCJwcm9ncmVzc0Z1bmMiLCJzdWNjZXNzRnVuYyIsIlNjZW5lQXJyYXkiLCJvblNob3dQcm9ncmVzcyIsImNvbXBsZXRlZENvdW50IiwidG90YWxDb3VudCIsInZhbCIsIm9uU3VjY2Vzc0xvYWQiLCJpIiwibGVuZ3RoIiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsSUFISyxrQkFHRyxDQUVQLENBTEk7QUFPTEMsRUFBQUEsWUFQSyx3QkFPU0MsWUFQVCxFQU91QkMsV0FQdkIsRUFPb0M7QUFDckMsUUFBSUMsVUFBVSxHQUFHVCxPQUFPLENBQUNTLFVBQXpCOztBQUNBLFFBQUlDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBVUMsY0FBVixFQUEwQkMsVUFBMUIsRUFBc0M7QUFDdkQsVUFBSUMsR0FBRyxHQUFHRixjQUFjLEdBQUNDLFVBQXpCO0FBQ0EsVUFBR0wsWUFBSCxFQUFpQkEsWUFBWSxDQUFDTSxHQUFELENBQVo7QUFDcEIsS0FIRDs7QUFLQSxRQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7QUFDNUIsVUFBR04sV0FBSCxFQUFnQkEsV0FBVztBQUM5QixLQUZEOztBQUlBLFNBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sVUFBVSxDQUFDTyxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4Q2IsTUFBQUEsRUFBRSxDQUFDZSxRQUFILENBQVlDLFlBQVosQ0FBeUJULFVBQVUsQ0FBQ00sQ0FBRCxDQUFuQyxFQUF3Q0wsY0FBeEMsRUFBd0RJLGFBQXhEO0FBQ0g7QUFDSjtBQXJCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZ2FtZURlZiA9IHJlcXVpcmUoXCJnYW1lRGVmXCIpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGN0b3IgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgbG9hZEFsbFNjZW5lIChwcm9ncmVzc0Z1bmMsIHN1Y2Nlc3NGdW5jKSB7XHJcbiAgICAgICAgbGV0IFNjZW5lQXJyYXkgPSBnYW1lRGVmLlNjZW5lQXJyYXk7XHJcbiAgICAgICAgbGV0IG9uU2hvd1Byb2dyZXNzID0gZnVuY3Rpb24gKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50KSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBjb21wbGV0ZWRDb3VudC90b3RhbENvdW50O1xyXG4gICAgICAgICAgICBpZihwcm9ncmVzc0Z1bmMpIHByb2dyZXNzRnVuYyh2YWwpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBvblN1Y2Nlc3NMb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihzdWNjZXNzRnVuYykgc3VjY2Vzc0Z1bmMoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNjZW5lQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFNjZW5lQXJyYXlbaV0sIG9uU2hvd1Byb2dyZXNzLCBvblN1Y2Nlc3NMb2FkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/data/userData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '556d9cctf5DZbEZ1gWvUOpH', 'userData');
// script/data/userData.js

"use strict";

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    this.resetData();
  },
  release: function release() {
    this.resetData();
  },
  resetData: function resetData() {
    this.userWxData = null;
  },
  setUserWxData: function setUserWxData(data) {
    this.userWxData = data;
  },
  getUserWxData: function getUserWxData() {
    return this.userWxData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkYXRhXFx1c2VyRGF0YS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiY3RvciIsInJlc2V0RGF0YSIsInJlbGVhc2UiLCJ1c2VyV3hEYXRhIiwic2V0VXNlcld4RGF0YSIsImRhdGEiLCJnZXRVc2VyV3hEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxJQUhLLGtCQUdHO0FBQ0osU0FBS0MsU0FBTDtBQUNILEdBTEk7QUFPTEMsRUFBQUEsT0FQSyxxQkFPTTtBQUNQLFNBQUtELFNBQUw7QUFDSCxHQVRJO0FBV0xBLEVBQUFBLFNBWEssdUJBV1E7QUFDVCxTQUFLRSxVQUFMLEdBQWtCLElBQWxCO0FBQ0gsR0FiSTtBQWVMQyxFQUFBQSxhQWZLLHlCQWVVQyxJQWZWLEVBZWdCO0FBQ2pCLFNBQUtGLFVBQUwsR0FBa0JFLElBQWxCO0FBQ0gsR0FqQkk7QUFtQkxDLEVBQUFBLGFBbkJLLDJCQW1CWTtBQUNiLFdBQU8sS0FBS0gsVUFBWjtBQUNIO0FBckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXREYXRhKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbGVhc2UgKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXREYXRhKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0RGF0YSAoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyV3hEYXRhID0gbnVsbDtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0VXNlcld4RGF0YSAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudXNlcld4RGF0YSA9IGRhdGE7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFVzZXJXeERhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJXeERhdGE7XHJcbiAgICB9XHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb3JlXFxnYW1lRGVmLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJTY2VuZUFycmF5IiwiU2NlbmUiLCJMb2dpbiIsIkhhbGwiLCJHYW1lIiwiTW9kZSIsIk5vcm1hbCIsIkNyYXp5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPLEdBQUcsRUFBZDtBQUVBQSxPQUFPLENBQUNDLFVBQVIsR0FBcUIsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixNQUFsQixDQUFyQjtBQUNBRCxPQUFPLENBQUNFLEtBQVIsR0FBZ0I7QUFDWkMsRUFBQUEsS0FBSyxFQUFFLE9BREs7QUFFWkMsRUFBQUEsSUFBSSxFQUFFLE1BRk07QUFHWkMsRUFBQUEsSUFBSSxFQUFFO0FBSE0sQ0FBaEI7QUFNQUwsT0FBTyxDQUFDTSxJQUFSLEdBQWU7QUFDWEMsRUFBQUEsTUFBTSxFQUFFLENBREc7QUFFWEMsRUFBQUEsS0FBSyxFQUFFO0FBRkksQ0FBZjtBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLE9BQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IGdhbWVEZWYgPSB7fTtcclxuXHJcbmdhbWVEZWYuU2NlbmVBcnJheSA9IFtcImxvZ2luXCIsIFwiaGFsbFwiLCBcImdhbWVcIl07XHJcbmdhbWVEZWYuU2NlbmUgPSB7XHJcbiAgICBMb2dpbjogXCJsb2dpblwiLFxyXG4gICAgSGFsbDogXCJoYWxsXCIsXHJcbiAgICBHYW1lOiBcImdhbWVcIixcclxufTtcclxuXHJcbmdhbWVEZWYuTW9kZSA9IHtcclxuICAgIE5vcm1hbDogMCxcclxuICAgIENyYXp5OiAxXHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnYW1lRGVmOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/core/singleton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0042cFYsopA6JTKd7xHCAKA', 'singleton');
// script/core/singleton.js

"use strict";

var singleton = {};
module.exports = singleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb3JlXFxzaW5nbGV0b24uanMiXSwibmFtZXMiOlsic2luZ2xldG9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTLEdBQUcsRUFBaEI7QUFJQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixTQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBzaW5nbGV0b24gPSB7XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzaW5nbGV0b247Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/LoginController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4a01BbvLxDTZ/qYVUettBq', 'LoginController');
// script/login/LoginController.js

"use strict";

var gameDef = require("gameDef");

var singleton = require("singleton");

var wechatSdk = require("wechatSdk");

var eventCenter = require("eventCenter");

var eventDef = require("eventDef");

cc.Class({
  "extends": cc.Component,
  properties: {
    ProgressBar: {
      type: cc.ProgressBar,
      "default": null
    },
    LabelTip: {
      type: cc.Label,
      "default": null
    },
    NodeBtnLogin: {
      type: cc.Node,
      "default": null
    }
  },
  onLoad: function onLoad() {
    singleton.curScene = gameDef.Scene.Login;
    this.LabelTip.node.active = false;
    this.ProgressBar.node.active = false;
    this.registerEvent();
    this.initLoginModule();
  },
  onDestroy: function onDestroy() {
    this.unregisterEvent();
  },
  registerEvent: function registerEvent() {
    eventCenter.addEventObserver(eventDef.PreloadScene, this.preloadAllScene, this);
  },
  unregisterEvent: function unregisterEvent() {
    eventCenter.removeEventObserver(eventDef.PreloadScene, this.preloadAllScene, this);
  },
  initLoginModule: function initLoginModule() {
    this.wechatSdk = new wechatSdk();
  },
  onClickWxLogin: function onClickWxLogin() {
    if (this.wechatSdk.isWeChat()) {
      this.wechatSdk.login();
    } else {
      this.preloadAllScene();
    }
  },
  preloadAllScene: function preloadAllScene() {
    var self = this;
    this.hideLoginBtn();
    this.LabelTip.node.active = true;
    this.ProgressBar.node.active = true;

    var progressFunc = function progressFunc(progress) {
      if (!self.ProgressBar) return;

      if (progress >= 1) {
        self.ProgressBar.progress = 1;
        self.LabelTip.string = "正在进入游戏，请耐心等待～";
        return;
      }

      self.ProgressBar.progress = progress;
      self.LabelTip.string = "正在进入游戏，当前加载 " + (progress * 100).toFixed(2) + "%";
      console.log("正在进入游戏，当前加载 " + (progress * 100).toFixed(2) + "%");
    };

    var successFuc = function successFuc() {
      cc.director.loadScene(gameDef.Scene.Hall);
    };

    singleton.loadManager.loadAllScene(progressFunc, successFuc);
  },
  hideLoginBtn: function hideLoginBtn() {
    if (!this.node) return;
    this.NodeBtnLogin.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcTG9naW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImdhbWVEZWYiLCJyZXF1aXJlIiwic2luZ2xldG9uIiwid2VjaGF0U2RrIiwiZXZlbnRDZW50ZXIiLCJldmVudERlZiIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUHJvZ3Jlc3NCYXIiLCJ0eXBlIiwiTGFiZWxUaXAiLCJMYWJlbCIsIk5vZGVCdG5Mb2dpbiIsIk5vZGUiLCJvbkxvYWQiLCJjdXJTY2VuZSIsIlNjZW5lIiwiTG9naW4iLCJub2RlIiwiYWN0aXZlIiwicmVnaXN0ZXJFdmVudCIsImluaXRMb2dpbk1vZHVsZSIsIm9uRGVzdHJveSIsInVucmVnaXN0ZXJFdmVudCIsImFkZEV2ZW50T2JzZXJ2ZXIiLCJQcmVsb2FkU2NlbmUiLCJwcmVsb2FkQWxsU2NlbmUiLCJyZW1vdmVFdmVudE9ic2VydmVyIiwib25DbGlja1d4TG9naW4iLCJpc1dlQ2hhdCIsImxvZ2luIiwic2VsZiIsImhpZGVMb2dpbkJ0biIsInByb2dyZXNzRnVuYyIsInByb2dyZXNzIiwic3RyaW5nIiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzRnVjIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJIYWxsIiwibG9hZE1hbmFnZXIiLCJsb2FkQWxsU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUFyQjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJSSxRQUFRLEdBQUdKLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBSyxFQUFFLENBQUNDLEtBQUgs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RyxTQUFiQSxVQUFhLEdBQVk7QUFDekJuQyxNQUFBQSxFQUFFLENBQUNvQyxRQUFILENBQVlDLFNBQVosQ0FBc0IzQyxPQUFPLENBQUNrQixLQUFSLENBQWMwQixJQUFwQztBQUNILEtBRkQ7O0FBSUExQyxJQUFBQSxTQUFTLENBQUMyQyxXQUFWLENBQXNCQyxZQUF0QixDQUFtQ1gsWUFBbkMsRUFBaURNLFVBQWpEO0FBQ0gsR0EzRUk7QUE2RUxQLEVBQUFBLFlBN0VLLDBCQTZFVztBQUNaLFFBQUcsQ0FBQyxLQUFLZCxJQUFULEVBQWU7QUFDZixTQUFLTixZQUFMLENBQWtCTyxNQUFsQixHQUEyQixLQUEzQjtBQUNIO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBnYW1lRGVmID0gcmVxdWlyZShcImdhbWVEZWZcIik7XHJcbmxldCBzaW5nbGV0b24gPSByZXF1aXJlKFwic2luZ2xldG9uXCIpO1xyXG5sZXQgd2VjaGF0U2RrID0gcmVxdWlyZShcIndlY2hhdFNka1wiKTtcclxubGV0IGV2ZW50Q2VudGVyID0gcmVxdWlyZShcImV2ZW50Q2VudGVyXCIpO1xyXG5sZXQgZXZlbnREZWYgPSByZXF1aXJlKFwiZXZlbnREZWZcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFByb2dyZXNzQmFyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgTGFiZWxUaXA6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBOb2RlQnRuTG9naW46IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBzaW5nbGV0b24uY3VyU2NlbmUgPSBnYW1lRGVmLlNjZW5lLkxvZ2luO1xyXG4gICAgICAgIHRoaXMuTGFiZWxUaXAubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5pbml0TG9naW5Nb2R1bGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWdpc3RlckV2ZW50ICgpIHtcclxuICAgICAgICBldmVudENlbnRlci5hZGRFdmVudE9ic2VydmVyKGV2ZW50RGVmLlByZWxvYWRTY2VuZSwgdGhpcy5wcmVsb2FkQWxsU2NlbmUsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bnJlZ2lzdGVyRXZlbnQgKCkge1xyXG4gICAgICAgIGV2ZW50Q2VudGVyLnJlbW92ZUV2ZW50T2JzZXJ2ZXIoZXZlbnREZWYuUHJlbG9hZFNjZW5lLCB0aGlzLnByZWxvYWRBbGxTY2VuZSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRMb2dpbk1vZHVsZSAoKSB7XHJcbiAgICAgICAgdGhpcy53ZWNoYXRTZGsgPSBuZXcgd2VjaGF0U2RrKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xpY2tXeExvZ2luICgpIHtcclxuICAgICAgICBpZiAodGhpcy53ZWNoYXRTZGsuaXNXZUNoYXQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLndlY2hhdFNkay5sb2dpbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVsb2FkQWxsU2NlbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHByZWxvYWRBbGxTY2VuZSAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaGlkZUxvZ2luQnRuKCk7XHJcbiAgICAgICAgdGhpcy5MYWJlbFRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Qcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzRnVuYyA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuUHJvZ3Jlc3NCYXIpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuUHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5MYWJlbFRpcC5zdHJpbmcgPSBcIuato+WcqOi/m+WFpea4uOaIj++8jOivt+iAkOW/g+etieW+he+9nlwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuUHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgc2VsZi5MYWJlbFRpcC5zdHJpbmcgPSBcIuato+WcqOi/m+WFpea4uOaIj++8jOW9k+WJjeWKoOi9vSBcIiArIChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuato+WcqOi/m+WFpea4uOaIj++8jOW9k+WJjeWKoOi9vSBcIiArIChwcm9ncmVzcyAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgc3VjY2Vzc0Z1YyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGdhbWVEZWYuU2NlbmUuSGFsbCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2luZ2xldG9uLmxvYWRNYW5hZ2VyLmxvYWRBbGxTY2VuZShwcm9ncmVzc0Z1bmMsIHN1Y2Nlc3NGdWMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlTG9naW5CdG4gKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLm5vZGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLk5vZGVCdG5Mb2dpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/wechatSdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db178cndaVN653+3C3z/ut7', 'wechatSdk');
// script/utils/wechatSdk.js

"use strict";

var singleton = require("singleton");

var eventCenter = require("eventCenter");

var eventDef = require("eventDef");

cc.Class({
  "extends": cc.Component,
  ctor: function ctor() {
    console.log("wechatSdk ctor");

    if (!this.isWeChat()) {
      console.log("The env isn't wechat");
      return;
    }

    this.userInfo = null;
    this.userInfoCallback = null;
    this.wxSessionVaild = this.checkWxSession();
    this.initLoginButton();
  },
  // 判断是否是wx
  isWeChat: function isWeChat() {
    return cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME;
  },
  // 判断Session是否过期
  checkWxSession: function checkWxSession() {
    wx.checkSession({
      success: function success() {
        //session_key 未过期，并且在本生命周期一直有效
        return true;
      },
      fail: function fail() {
        // session_key 已经失效，需要重新执行登录流程
        return false;
      }
    });
  },
  // 登录
  login: function login() {
    console.log("wechatSdk login..");
    this.successFunc = successFunc;

    if (this.wxSessionVaild) {
      this.getUserInfo();
    }
  },
  // 初始化授权按钮
  initLoginButton: function initLoginButton() {
    var self = this;
    var wx = window['wx'];
    var sysInfo = wx.getSystemInfoSync();
    var width = sysInfo.screenWidth;
    var height = sysInfo.screenHeight;
    wx.getSetting({
      success: function success(res) {
        console.log("UserAuthSetting: " + res.authSetting);

        if (res.authSetting["scope.userInfo"]) {
          console.log("The user has the scope!");
          self.getUserInfo();
        } else {
          console.log("The user hasn't the scope!");
          var button = wx.createUserInfoButton({
            type: 'text',
            text: '',
            style: {
              left: width / 2,
              top: height / 2,
              width: width,
              height: height,
              backgroundColor: '#00000000',
              color: '#ffffff',
              fontSize: 20,
              textAlign: "center",
              lineHeight: height
            } // 授权按钮全屏

          });
          button.onTap(function (res) {
            if (res.userInfo) {
              self.userInfo = res.userInfo;
              singleton.userData.setUserWxData(self.userInfo);
              eventCenter.emitEvent(eventDef.PreloadScene);
              button.destroy();
            } else {
              console.log("The user cncelled the authorization!");
            }
          });
        }
      }
    });
  },
  // 获取用户信息
  getUserInfo: function getUserInfo() {
    var self = this;
    wx.getUserInfo({
      success: function success(res) {
        console.log("The userInfo is " + JSON.stringify(res.userInfo));
        self.userInfo = res.userInfo;
        singleton.userData.setUserWxData(self.userInfo);
        eventCenter.emitEvent(eventDef.PreloadScene);
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcd2VjaGF0U2RrLmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsInJlcXVpcmUiLCJldmVudENlbnRlciIsImV2ZW50RGVmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImN0b3IiLCJjb25zb2xlIiwibG9nIiwiaXNXZUNoYXQiLCJ1c2VySW5mbyIsInVzZXJJbmZvQ2FsbGJhY2siLCJ3eFNlc3Npb25WYWlsZCIsImNoZWNrV3hTZXNzaW9uIiwiaW5pdExvZ2luQnV0dG9uIiwic3lzIiwiYnJvd3NlclR5cGUiLCJCUk9XU0VSX1RZUEVfV0VDSEFUX0dBTUUiLCJ3eCIsImNoZWNrU2Vzc2lvbiIsInN1Y2Nlc3MiLCJmYWlsIiwibG9naW4iLCJzdWNjZXNzRnVuYyIsImdldFVzZXJJbmZvIiwic2VsZiIsIndpbmRvdyIsInN5c0luZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpZHRoIiwic2NyZWVuV2lkdGgiLCJoZWlnaHQiLCJzY3JlZW5IZWlnaHQiLCJnZXRTZXR0aW5nIiwicmVzIiwiYXV0aFNldHRpbmciLCJidXR0b24iLCJjcmVhdGVVc2VySW5mb0J1dHRvbiIsInR5cGUiLCJ0ZXh0Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJvblRhcCIsInVzZXJEYXRhIiwic2V0VXNlcld4RGF0YSIsImVtaXRFdmVudCIsIlByZWxvYWRTY2VuZSIsImRlc3Ryb3kiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBRyxFQUFFLENB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QUFDeEIsUUFBUixFQUFrQjtBQUNkZSxjQUFBQSxJQUFJLENBQUNmLFFBQUwsR0FBZ0J3QixHQUFHLENBQUN4QixRQUFwQjtBQUNBWCxjQUFBQSxTQUFTLENBQUNrRCxRQUFWLENBQW1CQyxhQUFuQixDQUFpQ3pCLElBQUksQ0FBQ2YsUUFBdEM7QUFDQVQsY0FBQUEsV0FBVyxDQUFDa0QsU0FBWixDQUFzQmpELFFBQVEsQ0FBQ2tELFlBQS9CO0FBQ0FoQixjQUFBQSxNQUFNLENBQUNpQixPQUFQO0FBQ0gsYUFMRCxNQUtPO0FBQ0g5QyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQ0FBWjtBQUNIO0FBQ0osV0FURDtBQVVIO0FBQ0o7QUFuQ1MsS0FBZDtBQXFDSCxHQXpGSTtBQTJGTDtBQUNBZ0IsRUFBQUEsV0E1RksseUJBNEZTO0FBQ1YsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQVAsSUFBQUEsRUFBRSxDQUFDTSxXQUFILENBQWU7QUFDWEosTUFBQUEsT0FEVyxtQkFDSGMsR0FERyxFQUNFO0FBQ1QzQixRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBcUI4QyxJQUFJLENBQUNDLFNBQUwsQ0FBZXJCLEdBQUcsQ0FBQ3hCLFFBQW5CLENBQWpDO0FBQ0FlLFFBQUFBLElBQUksQ0FBQ2YsUUFBTCxHQUFnQndCLEdBQUcsQ0FBQ3hCLFFBQXBCO0FBQ0FYLFFBQUFBLFNBQVMsQ0FBQ2tELFFBQVYsQ0FBbUJDLGFBQW5CLENBQWlDekIsSUFBSSxDQUFDZixRQUF0QztBQUNBVCxRQUFBQSxXQUFXLENBQUNrRCxTQUFaLENBQXNCakQsUUFBUSxDQUFDa0QsWUFBL0I7QUFDSDtBQU5VLEtBQWY7QUFRSDtBQXRHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2luZ2xldG9uID0gcmVxdWlyZShcInNpbmdsZXRvblwiKTtcclxubGV0IGV2ZW50Q2VudGVyID0gcmVxdWlyZShcImV2ZW50Q2VudGVyXCIpO1xyXG5sZXQgZXZlbnREZWYgPSByZXF1aXJlKFwiZXZlbnREZWZcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgY3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIndlY2hhdFNkayBjdG9yXCIpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNXZUNoYXQoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBlbnYgaXNuJ3Qgd2VjaGF0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJJbmZvQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud3hTZXNzaW9uVmFpbGQgPSB0aGlzLmNoZWNrV3hTZXNzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0TG9naW5CdXR0b24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5Yik5pat5piv5ZCm5pivd3hcclxuICAgIGlzV2VDaGF0KCkge1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMuYnJvd3NlclR5cGUgPT09IGNjLnN5cy5CUk9XU0VSX1RZUEVfV0VDSEFUX0dBTUU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWIpOaWrVNlc3Npb27mmK/lkKbov4fmnJ9cclxuICAgIGNoZWNrV3hTZXNzaW9uKCkge1xyXG4gICAgICAgIHd4LmNoZWNrU2Vzc2lvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Nlc3Npb25fa2V5IOacqui/h+acn++8jOW5tuS4lOWcqOacrOeUn+WRveWRqOacn+S4gOebtOacieaViFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXNzaW9uX2tleSDlt7Lnu4/lpLHmlYjvvIzpnIDopoHph43mlrDmiafooYznmbvlvZXmtYHnqItcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOeZu+W9lVxyXG4gICAgbG9naW4gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2VjaGF0U2RrIGxvZ2luLi5cIik7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzRnVuYyA9IHN1Y2Nlc3NGdW5jO1xyXG4gICAgICAgIGlmICh0aGlzLnd4U2Vzc2lvblZhaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWIneWni+WMluaOiOadg+aMiemSrlxyXG4gICAgaW5pdExvZ2luQnV0dG9uKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgd3ggPSB3aW5kb3dbJ3d4J107XHJcbiAgICAgICAgbGV0IHN5c0luZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHN5c0luZm8uc2NyZWVuV2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHN5c0luZm8uc2NyZWVuSGVpZ2h0O1xyXG4gICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyQXV0aFNldHRpbmc6IFwiICsgcmVzLmF1dGhTZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgaGFzIHRoZSBzY29wZSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1c2VyIGhhc24ndCB0aGUgc2NvcGUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSB3eC5jcmVhdGVVc2VySW5mb0J1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaOiOadg+aMiemSruWFqOWxj1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5vblRhcChmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMudXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGV0b24udXNlckRhdGEuc2V0VXNlcld4RGF0YShzZWxmLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2VudGVyLmVtaXRFdmVudChldmVudERlZi5QcmVsb2FkU2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXIgY25jZWxsZWQgdGhlIGF1dGhvcml6YXRpb24hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHVzZXJJbmZvIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkocmVzLnVzZXJJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgc2luZ2xldG9uLnVzZXJEYXRhLnNldFVzZXJXeERhdGEoc2VsZi51c2VySW5mbyk7XHJcbiAgICAgICAgICAgICAgICBldmVudENlbnRlci5lbWl0RXZlbnQoZXZlbnREZWYuUHJlbG9hZFNjZW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/def/eventDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41040SEeF5P6arEQq3q1COQ', 'eventDef');
// script/def/eventDef.js

"use strict";

var eventDef = {};
eventDef.PreloadScene = "PreloadScene";
module.exports = eventDef;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxkZWZcXGV2ZW50RGVmLmpzIl0sIm5hbWVzIjpbImV2ZW50RGVmIiwiUHJlbG9hZFNjZW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUVBQSxRQUFRLENBQUNDLFlBQVQsR0FBd0IsY0FBeEI7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGV2ZW50RGVmID0ge307XHJcblxyXG5ldmVudERlZi5QcmVsb2FkU2NlbmUgPSBcIlByZWxvYWRTY2VuZVwiO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXZlbnREZWY7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/eventCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7046XkjOZCpI7J1RIO+H/j', 'eventCenter');
// script/utils/eventCenter.js

"use strict";

function EventGroup() {
  this.head = null;
  this.iter = null;
  this.length = 0;

  EventGroup.prototype.getLength = function () {
    return this.length;
  };

  EventGroup.prototype.addObserver = function (observer, target) {
    if (observer == null) return;

    if (this.head == null) {
      this.head = {
        ob: observer,
        target: target,
        next: null
      };
      this.length = 1;
      return;
    }

    var node = this.head;
    var last = null;

    while (node != null) {
      if (node.ob === observer && node.target === target) {
        return;
      }

      last = node;
      node = node.next;
    }

    this.length += 1;
    last.next = {
      ob: observer,
      target: target,
      next: null
    };
  };

  EventGroup.prototype.removeObserver = function (observer, target) {
    if (observer == null || this.head == null) return;

    if (this.head.ob === observer && this.head.target === target) {
      if (this.head === this.iter) {
        this.iter = this.iter.next;
      }

      this.head = this.head.next;
      this.length--;
      return;
    }

    var node = this.head;

    while (node.next != null) {
      if (node.next.ob === observer && node.next.target === target) {
        if (this.iter === node.next) {
          this.iter = node.next.next;
        }

        node.next = node.next.next;
        this.length--;
        return;
      }

      node = node.next;
    }
  };

  EventGroup.prototype.removeAll = function () {
    this.iter = null;
    this.head = null;
    this.length = 0;
  };

  EventGroup.prototype.emitByArray = function (array) {
    this.iter = this.head;

    while (this.iter != null) {
      var temp = this.iter;

      if (temp.target) {
        temp.ob.call(temp.target, array);
      } else {
        temp.ob(array);
      }

      if (this.iter && temp === this.iter) {
        this.iter = this.iter.next;
      }
    }

    this.iter = null;
  };

  EventGroup.prototype.emit = function () {
    this.iter = this.head;

    while (this.iter != null) {
      var temp = this.iter;

      if (temp.target) {
        var _temp$ob;

        (_temp$ob = temp.ob).call.apply(_temp$ob, [temp.target].concat(Array.prototype.slice.call(arguments)));
      } else {
        temp.ob.apply(temp, arguments);
      }

      if (this.iter && temp === this.iter) {
        this.iter = this.iter.next;
      }
    }

    this.iter = null;
  };
}

var eventCenter = {
  _eventGroup: {},
  getEventGroup: function getEventGroup(evt) {
    return eventCenter._eventGroup[evt];
  },
  addEventObserver: function addEventObserver(evt, observer, target) {
    if (evt == null) {
      console.log("addEventObserver evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (!eg) {
      eg = new EventGroup();
      eventCenter._eventGroup[evt] = eg;
    }

    eg.addObserver(observer, target);
  },
  removeEventObserver: function removeEventObserver(evt, observer, target) {
    if (evt == null) {
      console.log("removeEventObserver evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (!eg) {
      eg.removeObserver(observer, target);

      if (eg.getLength() === 0) {
        delete eventCenter._eventGroup[evt];
      }
    }
  },
  emitEvent: function emitEvent(evt) {
    if (evt == null) {
      console.log("emitEvent evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (eg) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      eg.emit.apply(eg, params);
    }
  },
  emitEventByArray: function emitEventByArray(evt, array) {
    if (evt == null) {
      console.log("emitEventByArray evt is null");
      return;
    }

    var eg = eventCenter.getEventGroup(evt);

    if (eg) {
      eg.emitByArray(array);
    }
  },
  removeAll: function removeAll() {
    var eg = eventCenter._eventGroup;

    for (var key in eg) {
      eg[key].removeAll();
    }

    eventCenter._eventGroup = null;
  }
};
module.exports = eventCenter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcZXZlbnRDZW50ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRHcm91cCIsImhlYWQiLCJpdGVyIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiZ2V0TGVuZ3RoIiwiYWRkT2JzZXJ2ZXIiLCJvYnNlcnZlciIsInRhcmdldCIsIm9iIiwibmV4dCIsIm5vZGUiLCJsYXN0IiwicmVtb3ZlT2JzZXJ2ZXIiLCJyZW1vdmVBbGwiLCJlbWl0QnlBcnJheSIsImFycmF5IiwidGVtcCIsImNhbGwiLCJlbWl0IiwiYXJndW1lbnRzIiwiZXZlbnRDZW50ZXIiLCJfZXZlbnRHcm91cCIsImdldEV2ZW50R3JvdXAiLCJldnQiLCJhZGRFdmVudE9ic2VydmVyIiwiY29uc29sZSIsImxvZyIsImVnIiwicmVtb3ZlRXZlbnRPYnNlcnZlciIsImVtaXRFdmVudCIsInBhcmFtcyIsImVtaXRFdmVudEJ5QXJyYXkiLCJrZXkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVNBLFVBQVQsR0FBc0I7QUFFbEIsT0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxDQUFkOztBQUVBSCxFQUFBQSxVQUFVLENBQUNJLFNBQVgsQ0FBcUJDLFNBQXJCLEdBQWlDLFlBQVk7QUFDekMsV0FBTyxLQUFLRixNQUFaO0FBQ0gsR0FGRDs7QUFJQUgsRUFBQUEsVUFBVSxDQUFDSSxTQUFYLENBQXFCRSxXQUFyQixHQUFtQyxVQUFVQyxRQUFWLEVBQW9CQyxNQUFwQixFQUE0QjtBQUMzRCxRQUFJRCxRQUFRLElBQUksSUFBaEIsRUFBc0I7O0FBQ3RCLFFBQUksS0FBS04sSUFBTCxJQUFhLElBQWpCLEVBQXVCO0FBQ25CLFdBQUtBLElBQUwsR0FBWTtBQUFDUSxRQUFBQSxFQUFFLEVBQUVGLFFBQUw7QUFBZUMsUUFBQUEsTUFBTSxFQUFDQSxNQUF0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QUFDQSxRQUFHSSxFQUFILEVBQU87QUFBQSx3Q0FOa0JHLE1BTWxCO0FBTmtCQSxRQUFBQSxNQU1sQjtBQUFBOztBQUNISCxNQUFBQSxFQUFFLENBQUNULElBQUgsT0FBQVMsRUFBRSxFQUFTRyxNQUFULENBQUY7QUFDSDtBQUNKLEdBN0NhO0FBK0NkQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVVIsR0FBVixFQUFlUixLQUFmLEVBQXNCO0FBQ3BDLFFBQUdRLEdBQUcsSUFBSSxJQUFWLEVBQWdCO0FBQ1pFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0E7QUFDSDs7QUFDRCxRQUFJQyxFQUFFLEdBQUdQLFdBQVcsQ0FBQ0UsYUFBWixDQUEwQkMsR0FBMUIsQ0FBVDs7QUFDQSxRQUFHSSxFQUFILEVBQU87QUFDSEEsTUFBQUEsRUFBRSxDQUFDYixXQUFILENBQWVDLEtBQWY7QUFDSDtBQUNKLEdBeERhO0FBMERkRixFQUFBQSxTQUFTLEVBQUUscUJBQVk7QUFDbkIsUUFBSWMsRUFBRSxHQUFHUCxXQUFXLENBQUNDLFdBQXJCOztBQUNBLFNBQUssSUFBSVcsR0FBVCxJQUFnQkwsRUFBaEIsRUFBb0I7QUFDaEJBLE1BQUFBLEVBQUUsQ0FBQ0ssR0FBRCxDQUFGLENBQVFuQixTQUFSO0FBQ0g7O0FBQ0RPLElBQUFBLFdBQVcsQ0FBQ0MsV0FBWixHQUEwQixJQUExQjtBQUNIO0FBaEVhLENBQWxCO0FBbUVBWSxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLFdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gRXZlbnRHcm91cCgpIHtcclxuXHJcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xyXG4gICAgdGhpcy5pdGVyID0gbnVsbDtcclxuICAgIHRoaXMubGVuZ3RoID0gMDtcclxuXHJcbiAgICBFdmVudEdyb3VwLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIEV2ZW50R3JvdXAucHJvdG90eXBlLmFkZE9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyLCB0YXJnZXQpIHtcclxuICAgICAgICBpZiAob2JzZXJ2ZXIgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB7b2I6IG9ic2VydmVyLCB0YXJnZXQ6dGFyZ2V0LCBuZXh0OiBudWxsfTtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAxO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuaGVhZDtcclxuICAgICAgICB2YXIgbGFzdCA9IG51bGw7XHJcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5vYiA9PT0gb2JzZXJ2ZXIgJiYgbm9kZS50YXJnZXQgPT09IHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3QgPSBub2RlO1xyXG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxlbmd0aCArPSAxO1xyXG4gICAgICAgIGxhc3QubmV4dCA9IHtvYjogb2JzZXJ2ZXIsIHRhcmdldDogdGFyZ2V0LCBuZXh0OiBudWxsfTtcclxuICAgIH1cclxuXHJcbiAgICBFdmVudEdyb3VwLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKG9ic2VydmVyID09IG51bGwgfHwgdGhpcy5oZWFkID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5oZWFkLm9iID09PSBvYnNlcnZlciAmJiB0aGlzLmhlYWQudGFyZ2V0ID09PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5oZWFkID09PSB0aGlzLml0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlciA9IHRoaXMuaXRlci5uZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCAtLTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuaGVhZDtcclxuICAgICAgICB3aGlsZSAobm9kZS5uZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUubmV4dC5vYiA9PT0gb2JzZXJ2ZXIgJiYgbm9kZS5uZXh0LnRhcmdldCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVyID09PSBub2RlLm5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXIgPSBub2RlLm5leHQubmV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUubmV4dCA9IG5vZGUubmV4dC5uZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRXZlbnRHcm91cC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5oZWFkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgRXZlbnRHcm91cC5wcm90b3R5cGUuZW1pdEJ5QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICB0aGlzLml0ZXIgPSB0aGlzLmhlYWQ7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaXRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wID0gdGhpcy5pdGVyO1xyXG4gICAgICAgICAgICBpZiAodGVtcC50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRlbXAub2IuY2FsbCh0ZW1wLnRhcmdldCwgYXJyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGVtcC5vYihhcnJheSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZXIgJiYgdGVtcCA9PT0gdGhpcy5pdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXIgPSB0aGlzLml0ZXIubmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBFdmVudEdyb3VwLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXRlciA9IHRoaXMuaGVhZDtcclxuICAgICAgICB3aGlsZSAodGhpcy5pdGVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIHRlbXAgPSB0aGlzLml0ZXI7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcC5vYi5jYWxsKHRlbXAudGFyZ2V0LCAuLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGVtcC5vYiguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLml0ZXIgJiYgdGVtcCA9PT0gdGhpcy5pdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXIgPSB0aGlzLml0ZXIubmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZXIgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgZXZlbnRDZW50ZXIgPSB7XHJcblxyXG4gICAgX2V2ZW50R3JvdXA6IHt9LFxyXG5cclxuICAgIGdldEV2ZW50R3JvdXA6IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICByZXR1cm4gZXZlbnRDZW50ZXIuX2V2ZW50R3JvdXBbZXZ0XTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkRXZlbnRPYnNlcnZlcjogZnVuY3Rpb24gKGV2dCwgb2JzZXJ2ZXIsIHRhcmdldCkge1xyXG4gICAgICAgIGlmKGV2dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkRXZlbnRPYnNlcnZlciBldnQgaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVnID0gZXZlbnRDZW50ZXIuZ2V0RXZlbnRHcm91cChldnQpO1xyXG4gICAgICAgIGlmICghZWcpIHtcclxuICAgICAgICAgICAgZWcgPSBuZXcgRXZlbnRHcm91cCgpO1xyXG4gICAgICAgICAgICBldmVudENlbnRlci5fZXZlbnRHcm91cFtldnRdID0gZWc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVnLmFkZE9ic2VydmVyKG9ic2VydmVyLCB0YXJnZXQpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVFdmVudE9ic2VydmVyOiBmdW5jdGlvbiAoZXZ0LCBvYnNlcnZlciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYoZXZ0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmVFdmVudE9ic2VydmVyIGV2dCBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlZyA9IGV2ZW50Q2VudGVyLmdldEV2ZW50R3JvdXAoZXZ0KTtcclxuICAgICAgICBpZiAoIWVnKSB7XHJcbiAgICAgICAgICAgIGVnLnJlbW92ZU9ic2VydmVyKG9ic2VydmVyLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoZWcuZ2V0TGVuZ3RoKCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBldmVudENlbnRlci5fZXZlbnRHcm91cFtldnRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbWl0RXZlbnQ6IGZ1bmN0aW9uIChldnQsIC4uLnBhcmFtcykge1xyXG4gICAgICAgIGlmKGV2dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW1pdEV2ZW50IGV2dCBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlZyA9IGV2ZW50Q2VudGVyLmdldEV2ZW50R3JvdXAoZXZ0KTtcclxuICAgICAgICBpZihlZykge1xyXG4gICAgICAgICAgICBlZy5lbWl0KC4uLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbWl0RXZlbnRCeUFycmF5OiBmdW5jdGlvbiAoZXZ0LCBhcnJheSkge1xyXG4gICAgICAgIGlmKGV2dCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW1pdEV2ZW50QnlBcnJheSBldnQgaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZWcgPSBldmVudENlbnRlci5nZXRFdmVudEdyb3VwKGV2dCk7XHJcbiAgICAgICAgaWYoZWcpIHtcclxuICAgICAgICAgICAgZWcuZW1pdEJ5QXJyYXkoYXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVnID0gZXZlbnRDZW50ZXIuX2V2ZW50R3JvdXA7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGVnKSB7XHJcbiAgICAgICAgICAgIGVnW2tleV0ucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50Q2VudGVyLl9ldmVudEdyb3VwID0gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXZlbnRDZW50ZXI7Il19
//------QC-SOURCE-SPLIT------
