
cc.Class({
    extends: cc.Component,

    properties: {
        NodeCamera: {
            type: cc.Node,
            default: null
        },

        NodeTouchBg: {
            type: cc.Node,
            default: null
        },

        NodePerson: {
            type: cc.Node,
            default: null
        },

        NodePersonRigidBody: {
            type: cc.RigidBody,
            default: null
        }
    },

    onLoad () {
        this.rigisterEvent();
        this.initPlayData();
    },

    onDestroy () {
        this.unregisterEvent();
    },

    start () {

    },

    update () {
        this.moveCamera();
        this.controlPerson();
    },

    rigisterEvent () {
        this.NodeTouchBg.on(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.NodeTouchBg.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.NodeTouchBg.on(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
        this.NodeTouchBg.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchScreenCancel, this);
    },

    unregisterEvent () {
        this.NodeTouchBg.off(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.NodeTouchBg.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.NodeTouchBg.off(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
        this.NodeTouchBg.off(cc.Node.EventType.TOUCH_END, this.onTouchScreenCancel, this);
    },

    initPlayData () {
        this.moveDirX = 0;
        this.moveDirY = 0;
        this.baseVelocity = 500;
    },

    /***
     * 移动摄像机镜头
     */
    moveCamera () {
        if(!this.NodeCamera || !this.NodePerson) return;

        if (this.NodePerson.x <= 0) {
            this.NodeCamera.x = 0;
        }
        else if (this.NodePerson.x >= 3840) {
            this.NodeCamera.x = 3840;
        }
        else {
            this.NodeCamera.x = this.NodePerson.x;
        }

        if (this.NodePerson.y <= 0) {
            this.NodeCamera.y = 0;
        }
        else if (this.NodePerson.y >= 720) {
            this.NodeCamera.y = 720;
        }
        else {
            this.NodeCamera.y = this.NodePerson.y;
        }
    },

    controlPerson () {
        if(this.moveDirX === 0 && this.moveDirY === 0) return;
        this.NodePersonRigidBody.linearVelocity = cc.v2(this.moveDirX * this.baseVelocity, this.moveDirY * this.baseVelocity);
    },


    onTouchScreenStart (event) {
        var touches = event.getTouches();
        var touchPoint = touches[0].getLocation();

        var touchWorldPos = touchPoint.convertToWorldSpaceAR()

        if (touchPoint.x > this.NodePerson.x) {
            this.moveDirX = 1;
        }
        if (touchPoint.x < this.NodePerson.x) {
            this.moveDirX = -1;
        }
    },

    onTouchScreenMove () {

    },

    onTouchScreenEnd () {
        this.moveDirX = 0;
        this.moveDirY = 0;
    },

    onTouchScreenCancel () {
        this.moveDirX = 0;
        this.moveDirY = 0;
    },

});
