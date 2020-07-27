let resourceDef = require("resourceDef");

cc.Class({
    extends: cc.Component,

    ctor () {

    },

    loadScene (sceneName, successCallback) {
        cc.director.loadScene(sceneName, successCallback);
    },

    loadPrefab(progressFunc, successFunc) {
        let prefabArray = resourceDef.PrefabArray;
        let onShowProgress = function (completedCount, totalCount) {
            var val = completedCount/totalCount;
            if(progressFunc) progressFunc(val);
        };

        let onSuccessLoad = function () {
            if(successFunc) successFunc();
        };

        cc.loader.loadResArray(prefabArray, onShowProgress, onSuccessLoad);
    },

    loadSpriteFrame (spriteNode, imagePath, target) {
        if(!imagePath) return;
        cc.loader.loadRes(imagePath, cc.SpriteFrame, function (err, spriteFrame) {
            if(!err && spriteFrame && target && cc.isValid(target) && spriteNode) {
                var iconSize = spriteNode.node.getContentSize();
                spriteNode.spriteFrame = spriteFrame;
                spriteNode.node.setContentSize(iconSize);
                spriteNode.node.active = true;
            }
            else {
                console.log("!!! err " + err);
            }
        })
    }
});