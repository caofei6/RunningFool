let gameDef = require("gameDef");

cc.Class({
    extends: cc.Component,

    ctor () {

    },

    loadAllScene (progressFunc, successFunc) {
        let SceneArray = gameDef.SceneArray;
        let onShowProgress = function (completedCount, totalCount) {
            var val = completedCount/totalCount;
            if(progressFunc) progressFunc(val);
        };

        let onSuccessLoad = function () {
            if(successFunc) successFunc();
        };

        for (let i = 0; i < SceneArray.length; i++) {
            cc.director.preloadScene(SceneArray[i], onShowProgress, onSuccessLoad);
        }
    },
});