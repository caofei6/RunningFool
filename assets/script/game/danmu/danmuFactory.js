var singleton = require("singleton");
var eventCenter = require("eventCenter");
var danmuItem = require("danmuItem");
var eventDef = require("eventDef");


const INIT_DANMU_COUNT = 10;

cc.Class({
    extends: cc.Component,

    properties: {
        prefabDanMuItem: {
            default: null,
            type: cc.Prefab
        }
    },

    ctor () {

    },

    onLoad () {
        this.resgisterEvent();
        this.clearDanMuNodePool();
        this.initDanMuPool();
        this.initDanMuFactory();
    },

    onDestroy () {
        this.unresgisterEvent();
    },

    resgisterEvent () {
        eventCenter.addEventObserver(eventDef.Launch_DanMu, this.onLaunchDanMu, this);
    },

    unresgisterEvent () {
        eventCenter.removeEventObserver(eventDef.Launch_DanMu, this.onLaunchDanMu, this);
    },

    initDanMuFactory () {
        let self = this;
        var factoryCenter = function () {
            
        }
    },

    initDanMuPool () {
        if(!this.prefabDanMuItem) return;
        this.danMuNodePool = new cc.NodePool("danmuItem");
        for (let i = 0; i < INIT_DANMU_COUNT; i++) {
            let danmuNode = cc.instantiate(this.prefabDanMuItem);
            this.danMuNodePool.put(danmuNode);
        }
    },

    createDanMuNode (param) {
        if(!this.prefabDanMuItem) return;
        let danMuNode = null;
        if(this.danMuNodePool.size() > 0) {
            danMuNode = this.danMuNodePool.get();
        }
        else {
            danMuNode = cc.instantiate(this.prefabDanMuItem);
        }
        danMuNode.parent = this.node;
        danMuNode.getComponent(danmuItem).init(param);
    },

    clearDanMuNodePool () {
        if(!this.danMuNodePool) return;
        this.danMuNodePool.clear();
        this.danMuNodePool = null;
    },

    onLaunchDanMu (params) {
        let contentStr = params.contentStr;
        singleton.danmuData.pushToDanMuDataPool(contentStr);
    }
})