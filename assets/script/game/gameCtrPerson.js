/***
 * gamePerson控制脚本
 */
var gameCtrBase = require("gameCtrBase");
var gameDef = require("gameDef");
var singleton = require("singleton");
var eventDef = require("eventDef");
var eventCenter = require("eventCenter");

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
        },
    },

    start () {
        singleton.NodePerson = this.node;
    },


    onLoad () {
        this._super();
        eventCenter.addEventObserver(eventDef.GameOver, this.onGameOver, this);
        this.NodeCanvas.on(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.NodeCanvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.NodeCanvas.on(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchPerson, this);
        this.initNodePerson();
    },

    onDestroy () {
        eventCenter.removeEventObserver(eventDef.GameOver, this.onGameOver, this);
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_START, this.onTouchScreenStart, this);
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchScreenMove, this);
        this.NodeCanvas.off(cc.Node.EventType.TOUCH_END, this.onTouchScreenEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchPerson, this);
    },

    onTouchScreenStart (event) {
        let location = event.getLocation();
        this.firstX = location.x;
        this.firstY = location.y;
    },

    onTouchScreenMove (event) {

    },

    onTouchScreenEnd (event) {
        let touchPoint = event.getLocation();
        let endX = touchPoint.x - this.firstX;
        let endY = touchPoint.y - this.firstY;
        if(endX === 0 && endX === 0) return;

        // 左右跳动操作
        if (Math.abs(endX) > Math.abs(endY)){
            if (endX > 0){
                singleton.personStation = gameDef.PersonStation.JumpRun;
            }

            if (endX < 0){
                singleton.personStation = gameDef.PersonStation.JumpBack;
            }
        }
        // 上下跳动操作
        else {
            if (endY > 0){
                singleton.personStation = gameDef.PersonStation.Jump;
            }

            if (endY < 0){
                singleton.personStation = gameDef.PersonStation.Slip;
            }
        }

        this.updatePersonAnim(singleton.personStation);
        this.updatePersonMove();
    },

    onTouchPerson () {
        singleton.personStation = gameDef.PersonStation.Kick;
        this.updatePersonAnim(singleton.personStation);
        this.updatePersonMove();
    },

    updatePersonMove () {
        var linearVelocity = this.RigidBody.linearVelocity;
        if (linearVelocity.x !== 0 || linearVelocity.y !== 0) return;

        if (singleton.personStation === undefined || singleton.personStation === gameDef.PersonStation.Stop) return;
        switch (singleton.personStation) {
            case gameDef.PersonStation.Stop:
                this.RigidBody.linearVelocity = cc.v2(0, 0);
                break;
            case gameDef.PersonStation.Jump:
                this.RigidBody.linearVelocity = cc.v2(0, this.baseVelocityY);
                break;
            case gameDef.PersonStation.JumpRun:
                this.RigidBody.linearVelocity = cc.v2(this.baseVelocityX/2, this.baseVelocityY);
                break;
            case gameDef.PersonStation.JumpBack:
                this.RigidBody.linearVelocity = cc.v2(-this.baseVelocityX/2, this.baseVelocityY);
                break;
            case gameDef.PersonStation.Kick:
                this.RigidBody.linearVelocity = cc.v2(0, 0);
                break;
        }
    },

    updatePersonAnim (station) {
        if(!this.Animation) return;
        var animName = gameDef.PersonAnimNameMap[station];
        var onFinsihAnim = () => {
            if(!this.Animation) return;
            var animName = gameDef.PersonAnimNameMap[gameDef.PersonStation.Run];
            this.Animation.play(animName);
            this.Animation.off("finished", onFinsihAnim, this);
            singleton.personStation = gameDef.PersonStation.Stop;
        }

        if (animName) {
            this.Animation.play(animName);
            this.Animation.on("finished", onFinsihAnim, this);
        }
    },


    onGameOver () {
        this.updatePersonAnim(singleton.personStation.Death);
    },

    initNodePerson () {
        if(singleton.nodePerson) {
            delete singleton.nodePerson;
            singleton.nodePerson = null;
        }
        singleton.personStation = gameDef.PersonStation.Stop;
        singleton.nodePerson = this.node;
    }
});
