var utils = {};

utils.randomFloatNum = function (minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseFloat(Math.random() * minNum + 1,10);
        case 2:
            return parseFloat(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}


utils.randomNum = function (minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1,10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

utils.getCanvasSize = function () {
    return cc.director.getScene().getChildByName("Canvas");
}

utils.collision = function (a, b) {
    if(!a || !b) return;

    a.anchor = cc.v2(0.5, 0.5);
    b.anchor = cc.v2(0.5, 0.5);

    if (a.x >= b.x && a.x >= b.x + b.width) {
        return false;
    } else if (a.x <= b.x && a.x + a.width <= b.x) {
        return false;
    } else if (a.y >= b.y && a.y >= b.y + b.height) {
        return false;
    } else if (a.y <= b.y && a.y + a.height <= b.y) {
        return false;
    }
    return true;
}

module.exports = utils;