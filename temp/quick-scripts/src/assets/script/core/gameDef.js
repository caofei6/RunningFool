"use strict";
cc._RF.push(module, '0ff59d3SPlA/ZrCBzM9ObAz', 'gameDef');
// script/core/gameDef.js

"use strict";

var gameDef = {};
gameDef.SceneArray = ["login", "hall", "game"];
gameDef.Scene = {
  Login: "login",
  Hall: "hall",
  Game: "game"
};
gameDef.Mode = {
  Normal: 0,
  Crazy: 1
};
module.exports = gameDef;

cc._RF.pop();