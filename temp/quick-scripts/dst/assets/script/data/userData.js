
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