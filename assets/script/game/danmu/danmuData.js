var danMuDef = require("danMuDef");

cc.Class({

    ctor () {
        this.resetData();
    },

    release () {
        this.resetData();
    },

    resetData () {
        this.m_danMuChannelCount = 4;
        this.m_danMuDataPool = [];
        this.m_danMuChannelStatus = {
            Channel0: danMuDef.ChannelStatus.Free,
            Channel1: danMuDef.ChannelStatus.Free,
            Channel2: danMuDef.ChannelStatus.Free,
            Channel3: danMuDef.ChannelStatus.Free,
        }
    },

    pushToDanMuDataPool (data) {
        if (!data) return;
        if (typeof data === 'object') {
            this.m_danMuDataPool = this.m_danMuDataPool.concat(data);
        }
        else {
            this.m_danMuDataPool.push(data);
        }
    },

    popDanMuFromDataPool () {
        if (!this.m_danMuDataPool || this.m_danMuDataPool.length === 0) return;
        return this.m_danMuDataPool.splice(0, 1);
    },

    getChannelCount () {
        return this.m_danMuChannelCount;
    },

    setChannelCount (num) {
        this.m_danMuChannelCount = Boolean(num);
    }



})