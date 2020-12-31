var singleton = require("singleton");
var eventCenter = require("eventCenter");
var danmuItem = require("danmuItem");
var danmuDef = require("danmuDef");
var eventDef = require("eventDef");
var utils = require("utils");
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
        this.clearDanMuNodePool();
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
            var status0 = singleton.danmuData.getChannelStatusByIdx(0);
            var status1 = singleton.danmuData.getChannelStatusByIdx(1);
            var status2 = singleton.danmuData.getChannelStatusByIdx(2);
            var status3 = singleton.danmuData.getChannelStatusByIdx(3);
            if(status3 === danmuDef.ChannelStatus.Free) {
                self.createDanMuNode(3);
            }
            if(status2 === danmuDef.ChannelStatus.Free) {
                self.createDanMuNode(2);
            }
            if(status1 === danmuDef.ChannelStatus.Free) {
                self.createDanMuNode(1);
            }
            if(status0 === danmuDef.ChannelStatus.Free) {
                self.createDanMuNode(0);
            }
        }
        this.schedule(factoryCenter, 0);
    },

    initDanMuPool () {
        if(!this.prefabDanMuItem) return;
        this.danMuNodePool = new cc.NodePool("danmuItem");
        for (let i = 0; i < INIT_DANMU_COUNT; i++) {
            let danmuNode = cc.instantiate(this.prefabDanMuItem);
            this.danMuNodePool.put(danmuNode);
        }
    },

    createDanMuNode (idx) {
        if(!this.prefabDanMuItem) return;
        var contentStr = singleton.danmuData.popDanMuFromDataPool();
        if(!contentStr) return;
        singleton.danmuData.setChannelStatus(idx, danmuDef.ChannelStatus.Busy);

        var param = {
            idx: idx,
            content: contentStr,
            danMuNodePool: this.danMuNodePool
        }

        let time = utils.randomFloatNum(0, 0.8);
        let danMuNode = null;
        if(this.danMuNodePool.size() > 0) {
            danMuNode = this.danMuNodePool.get();
        }
        else {
            danMuNode = cc.instantiate(this.prefabDanMuItem);
        }

        this.scheduleOnce(() => {
            danMuNode.parent = this.node;
            danMuNode.getComponent(danmuItem).init(param);
        }, time)

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