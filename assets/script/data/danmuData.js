var danmuDef = require("danmuDef");

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
            Channel0: danmuDef.ChannelStatus.Free,
            Channel1: danmuDef.ChannelStatus.Free,
            Channel2: danmuDef.ChannelStatus.Free,
            Channel3: danmuDef.ChannelStatus.Free,
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
        if (!this.m_danMuDataPool || this.m_danMuDataPool.length === 0) return null;
        return this.m_danMuDataPool.splice(0, 1);
    },

    getChannelNameByIdx (idx) {
        var arr = ["Channel0", "Channel1", "Channel2", "Channel3"];
        return arr[idx];
    },

    getChannelStatusByIdx (idx) {
        return this.m_danMuChannelStatus[this.getChannelNameByIdx(idx)];
    },

    setChannelStatus (idx, status) {
        var name = this.getChannelNameByIdx(idx);
        this.m_danMuChannelStatus[name] = status;
    }



})