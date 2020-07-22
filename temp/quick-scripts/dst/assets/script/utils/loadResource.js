
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