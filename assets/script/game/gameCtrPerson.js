/***
 * gamePerson控制脚本
 */
var gameCtrBase = require("gameCtrBase");
var gameDef = require("gameDef");

cc.Class({
    extends: gameCtrBase,

    properties: {
        NodeCanvas: {
            type: cc.Node,
            default: null
        },

        RigidBody: {
            type: cc.RigidBody,
            default: null
        },

        Animation: {
            type: cc.Animation,
            default: null
        }
    },

    update () {

    },

    onLoad () {
        this._super();
        this.minChangeValue = 2;
        this.NodeCanvas.on(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.NodeCanvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.NodeCanvas.on(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
    },

    onDestroy () {
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
    },

    onTouchScreenStart () {
        if(this.ctrPersonMove) return;
        this.ctrPersonMove = true;
    },

    onTouchScreenMove (event) {
        this.personStation = gameDef.PersonStation.Run;
        var station = this.personStation;
        var changePosX = event.getDeltaX();
        var changePosY = event.getDeltaY();
        var value = this.minChangeValue;
        if (changePosX > value && changePosY > value) {
            station = gameDef.PersonStation.JumpRun;
        }
        else if (changePosX < value && changePosY > value) {
            if (station !== gameDef.PersonStation.JumpBack) {
                station = gameDef.PersonStation.JumpBack;
            }
        }
        else if (changePosX < value && changePosY < 0) {
            if (station !== gameDef.PersonStation.Kneel) {
                station = gameDef.PersonStation.Kneel;
            }
        }
        else if (changePosX > value) {
            if (station !== gameDef.PersonStation.JumpRun) {
                station = gameDef.PersonStation.JumpRun;
            }
        }
        else if (changePosX < value) {
            if (station !== gameDef.PersonStation.Back) {
                station = gameDef.PersonStation.Back;
            }
        }
        else if (changePosY > value) {
            if (station !== gameDef.PersonStation.Jump) {
                station = gameDef.PersonStation.Jump;
            }
        }

        if (this.personStation !== station) {
            this.personStation = station;
            this.updatePersonAnim(station);
            this.updatePersonMove(station);
        }
    },

    onTouchScreenEnd () {
        this.ctrPersonMove = false;
    },

    updatePersonMove (station) {
        if (station === undefined) return;
        switch (station) {
            case gameDef.PersonStation.Run:
                this.RigidBody.linearVelocity = cc.v2(this.baseVelocityX, 0);
                break;
            case gameDef.PersonStation.Back:
                this.RigidBody.linearVelocity = cc.v2(-this.baseVelocityX, 0);
                break;
            case gameDef.PersonStation.Jump:
                this.RigidBody.linearVelocity = cc.v2(0, this.baseVelocityY);
                break;
            case gameDef.PersonStation.JumpRun:
                this.RigidBody.linearVelocity = cc.v2(this.baseVelocityX, this.baseVelocityY);
                break;
            case gameDef.PersonStation.JumpBack:
                this.RigidBody.linearVelocity = cc.v2(-this.baseVelocityX, this.baseVelocityY);
                break;
        }
    },

    updatePersonAnim (station) {
        if(!this.Animation) return;
        var animName = gameDef.PersonAnimNameMap[station];
        this.Animation.play(animName);
    },
});
