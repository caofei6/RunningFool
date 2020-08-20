/***
 * gamePerson控制脚本
 */
var gameCtrBase = require("gameCtrBase");
var gameDef = require("gameDef");
var singleton = require("singleton");

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
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchPerson, this);
        this.initNodePerson();
    },

    onDestroy () {
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchPerson, this);
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
            if (station !== gameDef.PersonStation.Run) {
                station = gameDef.PersonStation.Run;
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
            singleton.personStation = station;
        }
    },

    onTouchScreenEnd () {
        this.ctrPersonMove = false;
        this.updatePersonAnim(this.personStation);
        this.updatePersonMove(this.personStation);
    },

    onTouchPerson () {
        this.personStation = gameDef.PersonStation.Kick;
        this.updatePersonAnim(this.personStation, true);
        this.updatePersonMove(this.personStation);
    },

    updatePersonMove (station) {
        if (station === undefined) return;
        switch (station) {
            case gameDef.PersonStation.Run:
                this.RigidBody.linearVelocity = cc.v2(this.baseVelocityX, 0);
                console.log("向右");
                break;
            case gameDef.PersonStation.Back:
                this.RigidBody.linearVelocity = cc.v2(-this.baseVelocityX, 0);
                console.log("向左");
                break;
            case gameDef.PersonStation.Jump:
                this.RigidBody.linearVelocity = cc.v2(0, this.baseVelocityY);
                console.log("向跳");
                break;
            case gameDef.PersonStation.JumpRun:
                this.RigidBody.linearVelocity = cc.v2(this.baseVelocityX/2, this.baseVelocityY);
                console.log("向前跳");
                break;
            case gameDef.PersonStation.JumpBack:
                this.RigidBody.linearVelocity = cc.v2(-this.baseVelocityX/2, this.baseVelocityY);
                console.log("向后跳");
                break;
            case gameDef.PersonStation.Kick:
                this.RigidBody.linearVelocity = cc.v2(0, 0);
                console.log("踢");
                break;

        }
    },

    updatePersonAnim (station, isRecover) {
        if(!this.Animation) return;
        var animName = gameDef.PersonAnimNameMap[station];
        this.Animation.play(animName);
        this.Animation.off("finished", this.onFinsihAnim, this);
        if(isRecover) {
            this.Animation.on("finished", this.onFinsihAnim, this);
        }
    },

    onFinsihAnim () {
        if(!this.Animation) return;
        var animName = gameDef.PersonAnimNameMap[gameDef.PersonStation.Run];
        this.Animation.play(animName);
    },

    initNodePerson () {
        if(singleton.nodePerson) {
            delete singleton.nodePerson;
            singleton.nodePerson = null;
        }
        singleton.nodePerson = this.node;
    }
});
