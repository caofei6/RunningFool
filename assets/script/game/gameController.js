
cc.Class({
    extends: cc.Component,

    properties: {
        NodeCamera: {
            type: cc.Node,
            default: null
        },

        NodeBg: {
            type: cc.Node,
            default: null
        },

        NodeGrass: {
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
        this.moveBg();
        this.moveGrass();
        this.moveCamera();
        this.controlPerson();
    },

    rigisterEvent () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchScreenCancel, this);
    },

    unregisterEvent () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchScreenCancel, this);
    },

    initPlayData () {
        this.moveDirX = 0;
        this.moveDirY = 0;
        this.baseVelocity = 500;
        this.bgMoveStartX = -640;
        this.bgMoveMinX = -3500;
        this.bgMoveStep = 5;

        this.grassMoveStartX = -640;
        this.grassMoveMinX = -3500;
        this.grassMoveStep = 10;
    },

    /***
     * 移动摄像机镜头
     */
    moveCamera () {
        if(!this.NodeCamera || !this.NodePerson) return;

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


    /***
     * 移动背景
     */
    moveBg () {
        if(!this.NodeBg) return;
        if(this.NodeBg.x <= this.bgMoveMinX) {
            this.NodeBg.x = this.bgMoveStartX;
        }
        this.NodeBg.x -= this.bgMoveStep;
    },

    /***
     * 移动草地
     */
    moveGrass () {
        if(!this.NodeGrass) return;
        if(this.NodeGrass.x <= this.grassMoveMinX) {
            this.NodeGrass.x = this.grassMoveStartX;
        }
        this.NodeGrass.x -= this.grassMoveStep;
    },

    controlPerson () {
        if(this.moveDirX === 0 && this.moveDirY === 0) return;
        this.NodePersonRigidBody.linearVelocity = cc.v2(this.moveDirX * this.baseVelocity, this.moveDirY * this.baseVelocity);
    },


    onTouchScreenStart (event) {
        var self = this;
        var touches = event.getTouches();
        var startPos = touches[0].getStartLocation();
        // var startPos = self.node.convertToNodeSpaceAR(touches[0].getStartLocation());
        if (startPos.x > this.NodePerson.x) {
            this.moveDirX = 1;
        }
        if (startPos.x < this.NodePerson.x) {
            this.moveDirX = -1;
        }
    },

    onTouchScreenMove (event) {

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
