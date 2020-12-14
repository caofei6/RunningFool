var singleton = require("singleton");
var danmuDef = require("danmuDef");

cc.Class({
    extends: cc.Component,

    properties: {
        labelContent: {
            default: null,
            type: cc.Label
        },

        drawGraphics: {
            default: null,
            type: cc.Graphics
        }
    },

    init (data) {
        if(!data) return;

        this.data = data;
        this.isChange = false;
        this.idx = this.data.idx;
        this.speed = this.data.speed || 180;
        this.danMuNodePool = this.data.danMuNodePool;
        this.canvansSize = cc.director.getScene().getChildByName("Canvas");
        this.initDanMuPosition(data);
        this.initDanMuShow(data);
    },

    update (dt) {
        if(this.node.x < -(this.labelContent.node.width + this.canvansSize.width/2)) {
            this.destroyDanmu();
        }
        if(this.node.x <= 0 && !this.isChange) {
            this.isChange = true;
            singleton.danmuData.setChannelStatus(this.idx, danmuDef.ChannelStatus.Free);
        }
        this.node.x -= dt * this.speed;
    },

    initDanMuShow (data) {
        if(this.labelContent) {
            this.labelContent.string = data.content || '';
        }

        if(this.drawGraphics) {
            this.scheduleOnce(() => {
                var w = this.labelContent.node.width;
                var h = this.labelContent.node.height;
                this.drawGraphics.rect(0, 0, w, h);
                this.drawGraphics.stroke();
            },0);
        }
    },

    initDanMuPosition (data) {
        var posArr = [0.12, 0.22, 0.32, 0.42];
        this.node.x = this.canvansSize.width * 0.5;
        this.node.y = posArr[data.idx] * this.canvansSize.height;
    },

    destroyDanmu () {
        if(!this.node || !this.danMuNodePool) return;
        this.danMuNodePool.put(this.node);
    },


    setChannelStatus (status) {
    },

    unuse () {

    },

    reuse () {
        if(!this.drawGraphics) return;
        this.drawGraphics.clear();
        this.isChange = false;
    }
})