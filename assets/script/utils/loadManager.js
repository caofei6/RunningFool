let gameDef = require("gameDef");

cc.Class({
    extends: cc.Component,

    ctor () {

    },


    loadScene (sceneName, successCallback) {
        cc.director.loadScene(sceneName, successCallback);
    },

    loadPrefab(progressFunc, successFunc) {
        let SceneArray = gameDef.SceneArray;
        let onShowProgress = function (completedCount, totalCount) {
            var val = completedCount/totalCount;
            if(progressFunc) progressFunc(val);
        };

        let onSuccessLoad = function () {
            if(successFunc) successFunc();
        };

        cc.loader.loadRes()
    },
});