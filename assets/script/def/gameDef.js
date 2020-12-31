
let GameDef = {};

GameDef.Group = {
    Default: "default",
    Monster: "monster",
    Person: "person"
}

GameDef.Mode = {
    Normal: 0,
    Crazy: 1
};

GameDef.PersonStation = {
    Stop: -1,     // 停止
    Jump: 0,      // 跳
    Kneel: 1,     // 跪
    Back: 2,      // 后退
    Run: 3,       // 前进
    JumpRun: 4,   // 跑着跳
    JumpBack: 5,  // 跑着退
    Kick: 6,      // 踢
    Slip: 7,      // 铲
    Death: 8,     // 死亡
};


GameDef.PersonAnimNameMap = {};
GameDef.PersonAnimNameMap[GameDef.PersonStation.Stop] = "personRunning";
GameDef.PersonAnimNameMap[GameDef.PersonStation.Kneel] = "personKneel";
GameDef.PersonAnimNameMap[GameDef.PersonStation.Kick] = "personKick";
GameDef.PersonAnimNameMap[GameDef.PersonStation.Slip] = "personSlip";
GameDef.PersonAnimNameMap[GameDef.PersonStation.Death] = "personFail";


GameDef.MonsterType = {
    Low: 0,
    Middle: 1,
    Tall: 2,
    Super: 3,
    Crazy: 4
};

GameDef.MonsterScoreStatus = {


};

GameDef.ColliderGroup = {
    Default: "default",
    Monster: "monster",
    Person: "person",
    Wall: "wall"
};


GameDef.MonsterLowArray = [
    {
        type: GameDef.MonsterType.Low,
        path: "GUI/monster/low1_80_100",
        name: "monsterMove"
    },
    {
        type: GameDef.MonsterType.Low,
        path: "GUI/monster/low2_80_100",
        name: "monsterJump"
    },
    {
        type: GameDef.MonsterType.Low,
        path: "GUI/monster/low3_150_100",
        name: "monsterMove"
    },
    {
        type: GameDef.MonsterType.Low,
        path: "GUI/monster/low4_250_100",
        name: "monsterMove"
    }
];

GameDef.MonsterMiddleArray = [
    {
        type: GameDef.MonsterType.Middle,
        path: "GUI/monster/low5_161_150",
        name: "monsterMove"
    },
    {
        type: GameDef.MonsterType.Middle,
        path: "GUI/monster/low6_206_150",
        name: "monsterJump"
    },
];


// kick
GameDef.MonsterTallArray = [
    {
        type: GameDef.MonsterType.Tall,
        path: "GUI/monster/mid1_300_250",
        name: "monsterMove"
    },
    {
        type: GameDef.MonsterType.Tall,
        path: "GUI/monster/mid2_180_250",
        name: "monsterMove"
    },
    {
        type: GameDef.MonsterType.Tall,
        path: "GUI/monster/mid3_251_250",
        name: "monsterMove"
    },
    {
        type: GameDef.MonsterType.Tall,
        path: "GUI/monster/mid4_245_250",
        name: "monsterMove"
    },
];


// lift
GameDef.MonsterSuperArray = [
    {
        type: GameDef.MonsterType.Super,
        path: "GUI/monster/tall1_320_530",
        name: "monsterJump"
    },
    {
        type: GameDef.MonsterType.Super,
        path: "GUI/monster/tall2_320_530",
        name: "monsterMove"
    },
];

// spade
GameDef.MonsterCrazyArray = [
    {
        type: GameDef.MonsterType.Crazy,
        path: "GUI/monster/zombie",
        name: "monsterMove"
    },
];

GameDef.MonsterMap = {};
GameDef.MonsterMap[GameDef.MonsterType.Low] = GameDef.MonsterLowArray;
GameDef.MonsterMap[GameDef.MonsterType.Middle] = GameDef.MonsterMiddleArray;
GameDef.MonsterMap[GameDef.MonsterType.Tall] = GameDef.MonsterTallArray;
GameDef.MonsterMap[GameDef.MonsterType.Super] = GameDef.MonsterSuperArray;
GameDef.MonsterMap[GameDef.MonsterType.Crazy] = GameDef.MonsterCrazyArray;

GameDef.MonsterMessage = {
    Normal: "normal",
    Can_kick: "can_kick",
    Can_lift: "can_lift",
    Can_spade: "can_spade"
};

module.exports = GameDef;