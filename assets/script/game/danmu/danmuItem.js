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

    },
})