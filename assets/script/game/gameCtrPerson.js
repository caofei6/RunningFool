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
        singleton.personStation = gameDef.PersonStation.Run;
        var changePosX = event.getDeltaX();
        var changePosY = event.getDeltaY();

        var value = this.minChangeValue;
        if (changePosX > value && changePosY > value) {
            singleton.personStation = gameDef.PersonStation.JumpRun;
        }
        else if (changePosX < value && changePosY > value) {
            if (singleton.personStation !== gameDef.PersonStation.JumpBack) {
                singleton.personStation = gameDef.PersonStation.JumpBack;
            }
        }
        else if (changePosX < value && changePosY < 0) {
            if (singleton.personStation !== gameDef.PersonStation.Kneel) {
                singleton.personStation = gameDef.PersonStation.Kneel;
            }
        }
        else if (changePosX > value) {
            if (singleton.personStation !== gameDef.PersonStation.Run) {
                singleton.personStation = gameDef.PersonStation.Run;
            }
        }
        else if (changePosX < value) {
            if (singleton.personStation !== gameDef.PersonStation.Back) {
                singleton.personStation = gameDef.PersonStation.Back;
            }
        }
        else if (changePosY > value) {
            if (singleton.personStation !== gameDef.PersonStation.Jump) {
                singleton.personStation = gameDef.PersonStation.Jump;
            }
        }
    },

    onTouchScreenEnd () {
        this.ctrPersonMove = false;
        this.updatePersonAnim(singleton.personStation);
        this.updatePersonMove(singleton.personStation);
    },

    onTouchPerson () {
        singleton.personStation = gameDef.PersonStation.Kick;

        this.RigidBody.applyForceToCenter(cc.v2(0, 50000));

        // this.updatePersonAnim(singleton.personStation, true);
        // this.updatePersonMove(singleton.personStation);
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
