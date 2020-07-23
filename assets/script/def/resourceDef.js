var ResourceDef = {};

/**************************** Prefab定义 ***************************************/
ResourceDef.PrefabMap = {};
ResourceDef.PrefabMap.Person = "prefab/SpritePerson";




ResourceDef.PrefabArray = [
    ResourceDef.PrefabMap.Person
];

/***************************** Scene定义 ***********************************/
ResourceDef.SceneMap = {};
ResourceDef.SceneMap.Login = "login";
ResourceDef.SceneMap.Hall = "hall";
ResourceDef.SceneMap.Game = "game";


ResourceDef.SceneArray = [
    ResourceDef.SceneMap.Login,
    ResourceDef.SceneMap.Hall,
    ResourceDef.SceneMap.Game
];


/***************************** End  ********************************************/
module.exports = ResourceDef;