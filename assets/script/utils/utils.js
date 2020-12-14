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

utils.collision = function (objA, objB) {
    if(!objA || !objB) return;

    var L1 = objA.x,
        T1 = objA.y,
        R1 = objA.x + objA.w,
        B1 = objA.y + objA.h;


    var L2 = objB.x,
        T2 = objB.y,
        R2 = objB.x + objB.w,
        B2 = objB.y + objB.h;

    return !(L1 > R2 || T1 > B2 || R1 < L2 || B1 < T2);
}

module.exports = utils;