
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/core/gameDef');
require('./assets/script/core/singleton');
require('./assets/script/data/userData');
require('./assets/script/def/eventDef');
require('./assets/script/def/prefabDef');
require('./assets/script/hall/hallController');
require('./assets/script/login/LoginController');
require('./assets/script/main');
require('./assets/script/utils/eventCenter');
require('./assets/script/utils/loadManager');
require('./assets/script/utils/physicsManager');
require('./assets/script/utils/wechatSdk');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();