var gameDef = require("gameDef");
var eventDef = require("eventDef");
var eventCenter = require("eventCenter");


cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {

    },

    onCollisionEnter (other, self) {
        if (other.node.group !== gameDef.Group.Monster) return;


        var personNode = self.node;
        var monsterNode = other.node;
        if (monsterNode === gameDef.MonsterMessage.Can_kick && personNode.personStation === gameDef.PersonStation.Kick) {
            eventCenter.emitEvent(eventDef.AddScore);
        }

        if (monsterNode === gameDef.MonsterMessage.Can_spade && personNode.personStation === gameDef.PersonStation.Slip) {
            eventCenter.emitEvent(eventDef.AddScore);
        }
    },

    onCollisionStay (other, self) {
        if (other.node.group !== gameDef.Group.Monster) return;
        console.log("onCollisionStay");
    },

    onCollisionExit (other, self) {
        if (other.node.group !== gameDef.Group.Monster) return;

        var personNode = self.node;
        var monsterNode = other.node;
        personNode.color = cc.Color.BLUE;
        monsterNode.color = cc.Color.RED;
        eventCenter.emitEvent(eventDef.GameOver);
    }

});
