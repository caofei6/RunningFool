
let gameDef = {};

gameDef.SceneArray = ["login", "hall", "game"];
gameDef.Scene = {
    Login: "login",
    Hall: "hall",
    Game: "game",
};

gameDef.Mode = {
    Normal: 0,
    Crazy: 1
};


module.exports = gameDef;