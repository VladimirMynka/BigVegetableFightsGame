(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCard = void 0;
var GameCard = /** @class */ (function () {
    function GameCard() {
    }
    GameCard.prototype.getCoords = function () {
        return this.$card.offset();
    };
    return GameCard;
}());
exports.GameCard = GameCard;
},{}],2:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.sleep = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(resolve, ms);
                    })];
            });
        });
    };
    Util.randomInt = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 100; }
        return Math.floor(Math.random() * (max - min) + min);
    };
    return Util;
}());
exports.Util = Util;
},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
var Fighter_1 = require("../Fighter");
var EnemyCard_1 = require("./EnemyCard");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enemy.prototype.createCard = function (prototype) {
        return new EnemyCard_1.EnemyCard(prototype.name, prototype.motto);
    };
    Enemy.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.game.removeEnemy(this);
    };
    return Enemy;
}(Fighter_1.Fighter));
exports.Enemy = Enemy;
},{"../Fighter":5,"./EnemyCard":4}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyCard = void 0;
var FighterCard_1 = require("../FighterCard");
var EnemyCard = /** @class */ (function (_super) {
    __extends(EnemyCard, _super);
    function EnemyCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyCard;
}(FighterCard_1.FighterCard));
exports.EnemyCard = EnemyCard;
},{"../FighterCard":6}],5:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
var FighterCard_1 = require("./FighterCard");
var Util_1 = require("../Common/Util");
var Fighter = /** @class */ (function () {
    function Fighter(prototype, game) {
        this.prototype = prototype;
        this.game = game;
        this.card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
        this.update();
    }
    Fighter.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hp === 0) {
                            this.remove();
                            return [2 /*return*/];
                        }
                        this.addMana(5);
                        this.addHp(2);
                        return [4 /*yield*/, Util_1.Util.sleep(500)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Fighter.prototype.remove = function () {
        this.card.remove();
    };
    Fighter.prototype.createCard = function (prototype) {
        return new FighterCard_1.FighterCard(prototype.name, prototype.motto);
    };
    Object.defineProperty(Fighter.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (count) {
            this._hp = this.getAdequateHp(count);
            this.card.setHpWidth(this._hp * 100 / this.prototype.hp);
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.addHp = function (count) {
        this.hp = this._hp + count;
    };
    Fighter.prototype.getAdequateHp = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.hp)
            return this.prototype.hp;
        return count;
    };
    Object.defineProperty(Fighter.prototype, "mana", {
        get: function () {
            return this._mana;
        },
        set: function (count) {
            this._mana = this.getAdequateMana(count);
            this.card.setManaWidth(this._mana * 100 / this.prototype.mana);
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.addMana = function (count) {
        this.mana = this._mana + count;
    };
    Fighter.prototype.getAdequateMana = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.mana)
            return this.prototype.mana;
        return count;
    };
    Fighter.prototype.activate = function (effect) {
        this.card.turnOn(effect, this);
    };
    Fighter.prototype.disactivate = function () {
        this.card.turnOff();
    };
    Fighter.prototype.getCoords = function () {
        return this.card.getCoords();
    };
    return Fighter;
}());
exports.Fighter = Fighter;
},{"../Common/Util":2,"./FighterCard":6}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FighterCard = void 0;
var GameCard_1 = require("../Common/GameCard");
var FighterCard = /** @class */ (function (_super) {
    __extends(FighterCard, _super);
    function FighterCard(name, motto) {
        if (name === void 0) { name = "enemy name"; }
        if (motto === void 0) { motto = "motto"; }
        var _this = _super.call(this) || this;
        _this.$card = _this.$initializeCard(name, motto);
        _this.$getMenu().append(_this.$card);
        return _this;
    }
    FighterCard.prototype.$getMenu = function () {
        return $('#enemies-menu');
    };
    FighterCard.prototype.$initializeCard = function (name, motto) {
        var $card = $('#fighter-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-motto').html(motto);
        $card.removeClass('d-none');
        return $card;
    };
    FighterCard.prototype.setHpWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.hp-progress').width(percents + '%');
    };
    FighterCard.prototype.setManaWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
    };
    FighterCard.prototype.getRealPercents = function (percents) {
        if (percents < 0)
            return 0;
        if (percents > 100)
            return 100;
        return percents;
    };
    FighterCard.prototype.turnOn = function (effect, owner) {
        var _this = this;
        this.$card.off("click mouseenter mouseleave");
        this.$card.on("click", function () {
            effect(owner);
        });
        this.$card.on("mouseenter", function () {
            _this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", function () {
            _this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
        this.$card.addClass('bg-light');
    };
    FighterCard.prototype.turnOff = function () {
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
        this.$card.removeClass('bg-light');
    };
    FighterCard.prototype.remove = function () {
        this.$card.remove();
    };
    return FighterCard;
}(GameCard_1.GameCard));
exports.FighterCard = FighterCard;
},{"../Common/GameCard":1}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FighterPrototype = void 0;
var FighterPrototype = /** @class */ (function () {
    function FighterPrototype(id, name, hp, mana, skills, motto) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.skills = skills;
        this.motto = motto;
    }
    return FighterPrototype;
}());
exports.FighterPrototype = FighterPrototype;
},{}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Fighter_1 = require("../Fighter");
var HeroCard_1 = require("./HeroCard");
var OnHeroPerk_1 = require("../../Perks/OnHeroPerk");
var OnEnemyPerk_1 = require("../../Perks/OnEnemyPerk");
var Store_1 = require("../../Store/Store");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(prototype, game) {
        var _this = _super.call(this, prototype, game) || this;
        _this._perks = [];
        _this.initializePerks();
        return _this;
    }
    Hero.prototype.initializePerks = function () {
        var _this = this;
        this.prototype.skills.forEach(function (perkNumber) {
            if (Store_1.store.perks[perkNumber].forSelf)
                _this._perks.push(new OnHeroPerk_1.OnHeroPerk(Store_1.store.perks[perkNumber], _this, _this.game));
            else
                _this._perks.push(new OnEnemyPerk_1.OnEnemyPerk(Store_1.store.perks[perkNumber], _this, _this.game));
        });
    };
    Hero.prototype.createCard = function (prototype) {
        return new HeroCard_1.HeroCard(prototype.name, prototype.motto);
    };
    Hero.prototype.setMethod = function (targetMethod, effectMethod) {
        targetMethod(effectMethod);
    };
    Hero.prototype.getOnEnemyMethod = function () {
        var _this = this;
        return function (effect) {
            _this.disactivate();
            _this.game.activateEnemies(effect);
        };
    };
    Hero.prototype.getOnHeroMethod = function () {
        var _this = this;
        return function (effect) {
            _this.game.disactivateEnemies();
            _this.activate(effect);
        };
    };
    Hero.prototype.sayManaLacking = function () {
        this.card.drawManaLacking();
    };
    Hero.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.game.hero = null;
        this.game._gameEnded = true;
    };
    return Hero;
}(Fighter_1.Fighter));
exports.Hero = Hero;
},{"../../Perks/OnEnemyPerk":13,"../../Perks/OnHeroPerk":14,"../../Store/Store":19,"../Fighter":5,"./HeroCard":9}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroCard = void 0;
var Util_1 = require("../../Common/Util");
var FighterCard_1 = require("../FighterCard");
var HeroCard = /** @class */ (function (_super) {
    __extends(HeroCard, _super);
    function HeroCard(name, motto) {
        var _this = _super.call(this, name, motto) || this;
        _this.$card.removeClass('enemy-card');
        return _this;
    }
    HeroCard.prototype.$getMenu = function () {
        return $('#hero-menu');
    };
    HeroCard.prototype.drawManaLacking = function () {
        return __awaiter(this, void 0, void 0, function () {
            var $manaProgress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $manaProgress = this.$card.find('.mana-progress');
                        $manaProgress.removeClass('bg-primary').addClass('bg-dark');
                        return [4 /*yield*/, Util_1.Util.sleep(500)];
                    case 1:
                        _a.sent();
                        $manaProgress.removeClass('bg-dark').addClass('bg-primary');
                        return [2 /*return*/];
                }
            });
        });
    };
    return HeroCard;
}(FighterCard_1.FighterCard));
exports.HeroCard = HeroCard;
},{"../../Common/Util":2,"../FighterCard":6}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroPrototype = void 0;
var FighterPrototype_1 = require("../FighterPrototype");
var HeroPrototype = /** @class */ (function (_super) {
    __extends(HeroPrototype, _super);
    function HeroPrototype(id, name, hp, mana, skills, motto, firstDescription, secondDescription, answer, reaction) {
        var _this = _super.call(this, id, name, hp, mana, skills, motto) || this;
        _this.firstDescription = firstDescription;
        _this.secondDescription = secondDescription;
        _this.answer = answer;
        _this.reaction = reaction;
        return _this;
    }
    return HeroPrototype;
}(FighterPrototype_1.FighterPrototype));
exports.HeroPrototype = HeroPrototype;
},{"../FighterPrototype":7}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Store_1 = require("../Store/Store");
var Util_1 = require("../Common/Util");
var Hero_1 = require("../Fighters/Hero/Hero");
var Enemy_1 = require("../Fighters/Enemy/Enemy");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this._killedEnemiesCount = 0;
        this.initializeChoosenWindow();
        $('#button').click();
        $('#zakroysya').on('click', function () { return _this.onConfirm(); });
    }
    Game.prototype.initializeChoosenWindow = function () {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heros.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
    };
    Game.prototype.initializeChoosenWindowExcept = function (index, $card) {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heros.length; i++) {
            if (i === index)
                $container.append($card);
            else
                $container.append(this.initializeOneCard(i));
        }
    };
    Game.prototype.initializeOneCard = function (index) {
        var _this = this;
        var $card = $('#choose-card').clone();
        $card.children('div').attr('data-hero-id', index);
        $card.find('.my-title').html(Store_1.store.heros[index].name);
        $card.find('.my-first-description').html(Store_1.store.heros[index].firstDescription);
        $card.find('.my-second-description').html(Store_1.store.heros[index].secondDescription);
        $card.removeClass('d-none');
        $card.on('click', function () { _this.chooseCardOnClick(index, $card.find('.card')); });
        return $card;
    };
    Game.prototype.chooseCardOnClick = function (index, $card) {
        var _a;
        $('#hoho').removeClass('d-none');
        this.initializeChoosenWindowExcept(index, $card.parent());
        $card.addClass('border-primary');
        this._heroNumber = index;
        this.setReaction(Store_1.store.heros[index].answer, (_a = Store_1.store.heros[index]) === null || _a === void 0 ? void 0 : _a.reaction, $card);
    };
    Game.prototype.setReaction = function (string, method, $card) {
        $('#reaction').html(string);
        if (typeof method === 'function')
            method($card);
    };
    Game.prototype.onConfirm = function () {
        $('#button').click();
        if (this._heroNumber === -1) {
            window.location.reload();
        }
        ;
        this.hero = new Hero_1.Hero(Store_1.store.heros[this._heroNumber], this);
        this.enemies = [];
        this.initializeEnemies();
        this.update();
    };
    Game.prototype.initializeEnemies = function () {
        for (var i = 0; i < 4; i++)
            this.addEnemy();
    };
    Game.prototype.addEnemy = function () {
        this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[Util_1.Util.randomInt(0, Store_1.store.enemies.length)], this));
    };
    Game.prototype.removeEnemy = function (enemy) {
        this.enemies.splice(this.enemies.indexOf(enemy));
        this._killedEnemiesCount++;
    };
    Game.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._gameEnded) {
                            alert("Game ended. You're kill ".concat(this._killedEnemiesCount, " enemies"));
                            return [2 /*return*/];
                        }
                        if (this.enemies.length < Store_1.store.enemiesMaxCount && Util_1.Util.randomInt(0, 100) < 15)
                            this.addEnemy();
                        return [4 /*yield*/, Util_1.Util.sleep(5000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.activateEnemies = function (effect) {
        this.enemies.map(function (enemy) { enemy.activate(effect); });
    };
    Game.prototype.disactivateEnemies = function () {
        this.enemies.map(function (enemy) { enemy.disactivate(); });
    };
    return Game;
}());
exports.Game = Game;
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/Hero/Hero":8,"../Store/Store":19}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var game;
function onLoad() {
    game = new Game_1.Game();
}
$(window).on('load', onLoad);
var _ = function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () {
    return 'Nadoeli uzhe so svoimi skobkami prekratite pozhluista';
}; }; }; }; }; }; }; }; }; }; }; };
},{"./Game":11}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnEnemyPerk = void 0;
var Perk_1 = require("./Perk");
var OnEnemyPerk = /** @class */ (function (_super) {
    __extends(OnEnemyPerk, _super);
    function OnEnemyPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OnEnemyPerk;
}(Perk_1.Perk));
exports.OnEnemyPerk = OnEnemyPerk;
},{"./Perk":15}],14:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnHeroPerk = void 0;
var Perk_1 = require("./Perk");
var OnHeroPerk = /** @class */ (function (_super) {
    __extends(OnHeroPerk, _super);
    function OnHeroPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnHeroPerk.prototype.getOnclickType = function () {
        return this.hero.getOnHeroMethod();
    };
    return OnHeroPerk;
}(Perk_1.Perk));
exports.OnHeroPerk = OnHeroPerk;
},{"./Perk":15}],15:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perk = void 0;
var PerkCard_1 = require("./PerkCard");
var Util_1 = require("../Common/Util");
var PerkAnimation_1 = require("./PerkAnimation");
var Perk = /** @class */ (function () {
    function Perk(prototype, hero, _game) {
        this.prototype = prototype;
        this.hero = hero;
        this._game = _game;
        this._card = this.createCard(prototype);
        this._card.setOnclick(this.getOnclick());
        this._mana = 0;
        if (this.prototype.animationPaths != null)
            this._animation = new PerkAnimation_1.PerkAnimation(this._card.getCoords(), prototype === null || prototype === void 0 ? void 0 : prototype.animationPaths);
        this.update();
    }
    Perk.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addMana(1);
                        return [4 /*yield*/, Util_1.Util.sleep(100)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Perk.prototype.createCard = function (prototype) {
        return new PerkCard_1.PerkCard(prototype.name, prototype.info);
    };
    Object.defineProperty(Perk.prototype, "mana", {
        get: function () {
            return this._mana;
        },
        set: function (count) {
            this._mana = this.getRealMana(count);
            this._card.setProgressWidth(this.mana * 100 / this.prototype.mana);
        },
        enumerable: false,
        configurable: true
    });
    Perk.prototype.addMana = function (count) {
        this.mana = this.mana + count;
    };
    Perk.prototype.getRealMana = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.mana)
            return this.prototype.mana;
        return count;
    };
    Perk.prototype.getOnclick = function () {
        var _this = this;
        return function () {
            _this.hero.setMethod(_this.getOnclickType(), function (target) {
                if (_this.prototype.mana > _this.hero.mana) {
                    _this.hero.sayManaLacking();
                    return;
                }
                _this.mana = 0;
                if (_this._animation != null)
                    _this._animation.animate(target.getCoords()).then(function () {
                        _this.prototype.effect(target, _this.hero, _this._game);
                    });
                else
                    _this.prototype.effect(target, _this.hero, _this._game);
                _this._game.disactivateEnemies();
                _this.hero.disactivate();
            });
        };
    };
    Perk.prototype.getOnclickType = function () {
        return this.hero.getOnEnemyMethod();
    };
    return Perk;
}());
exports.Perk = Perk;
},{"../Common/Util":2,"./PerkAnimation":16,"./PerkCard":17}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkAnimation = void 0;
var Util_1 = require("../Common/Util");
var PerkAnimation = /** @class */ (function () {
    function PerkAnimation(startPoint, imagesPaths) {
        this.startPoint = startPoint;
        this.imagesPaths = imagesPaths;
    }
    PerkAnimation.prototype.animate = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var $animation, index, imagePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $animation = $('.animation');
                        $animation.removeClass('d-none');
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < this.imagesPaths.length)) return [3 /*break*/, 4];
                        imagePath = this.imagesPaths[index];
                        $animation.attr('src', imagePath);
                        $animation.offset({
                            left: this.startPoint.left + (endpoint.left - this.startPoint.left) * index / (this.imagesPaths.length),
                            top: this.startPoint.top + (endpoint.top - this.startPoint.top) * index / (this.imagesPaths.length)
                        });
                        return [4 /*yield*/, Util_1.Util.sleep(500 / this.imagesPaths.length)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4:
                        $animation.addClass('d-none');
                        return [2 /*return*/];
                }
            });
        });
    };
    return PerkAnimation;
}());
exports.PerkAnimation = PerkAnimation;
},{"../Common/Util":2}],17:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkCard = void 0;
var GameCard_1 = require("../Common/GameCard");
var PerkCard = /** @class */ (function (_super) {
    __extends(PerkCard, _super);
    function PerkCard(name, info) {
        if (name === void 0) { name = "perk name"; }
        if (info === void 0) { info = "info"; }
        var _this = _super.call(this) || this;
        _this.$card = _this.$initializeCard(name, info);
        $('#hero-menu').append(_this.$card);
        _this._onclick = null;
        return _this;
    }
    PerkCard.prototype.$initializeCard = function (name, info) {
        var $card = $('#perk-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-info').html(info);
        $card.removeClass('d-none');
        $card.addClass('bg-light');
        return $card;
    };
    PerkCard.prototype.setOnclick = function (method) {
        this._onclick = method;
    };
    PerkCard.prototype.setProgressWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
        if (percents >= 100)
            this.turnOn();
        else
            this.turnOff();
    };
    PerkCard.prototype.getRealPercents = function (percents) {
        if (percents < 0)
            return 0;
        if (percents > 100)
            return 100;
        return percents;
    };
    PerkCard.prototype.turnOn = function () {
        var _this = this;
        this.$card.find('.mana-progress').removeClass('progress-bar-striped progress-bar-animated');
        this.$card.on("click", function () {
            $('.perk-card').removeClass('border-primary');
            _this.$card.addClass('border-primary');
            _this._onclick();
        });
        this.$card.on("mouseenter", function () {
            _this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", function () {
            _this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
    };
    PerkCard.prototype.turnOff = function () {
        this.$card.find('.mana-progress').addClass('progress-bar-striped progress-bar-animated');
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
    };
    return PerkCard;
}(GameCard_1.GameCard));
exports.PerkCard = PerkCard;
},{"../Common/GameCard":1}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkPrototype = void 0;
var PerkPrototype = /** @class */ (function () {
    function PerkPrototype(id, name, mana, info, effect, forSelf, animationPaths) {
        this.id = id;
        this.name = name;
        this.mana = mana;
        this.info = info;
        this.effect = effect;
        this.forSelf = forSelf;
        this.animationPaths = animationPaths;
    }
    return PerkPrototype;
}());
exports.PerkPrototype = PerkPrototype;
},{}],19:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var HeroPrototype_1 = require("../Fighters/Hero/HeroPrototype");
var FighterPrototype_1 = require("../Fighters/FighterPrototype");
var PerkPrototype_1 = require("../Perks/PerkPrototype");
var Util_1 = require("../Common/Util");
exports.store = {
    enemiesMaxCount: 8,
    heros: [
        new HeroPrototype_1.HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 2, 4], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!', function ($card) {
            $card.addClass("bg-success text-white");
            $card.find("span").removeClass().addClass("text-dark");
        }),
        new HeroPrototype_1.HeroPrototype(1, 'Помидориус', 300, 200, [0, 1, 3, 4], 'Я краснею', '<span class="text-danger">Красный</span>, гладкий, твой', 'Не <span class="text-success">зелёный</span>! Не путать!', 'Ахахахахахахахаххахахахахах', function ($card) {
            $card.parent().parent().children().children().addClass("bg-transparent");
            $card.addClass("bg-light text-dark");
            $card.removeClass("bg-transparent");
            $card.parent().parent().parent().parent().addClass("bg-dark text-white");
            Util_1.Util.sleep(2000).then(function () {
                $card.parent().parent().parent().parent().removeClass("bg-dark text-white");
            });
        }),
        new HeroPrototype_1.HeroPrototype(2, 'Дынчундук', 500, 100, [0, 1, 3], 'Как я сюда попал', '<span class="text-warning">Жёлтый</span>, попал сюда случайно', 'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!', 'Молю тебя!', function ($card) {
            $card.addClass("bg-warning");
            $card.find(".text-warning").removeClass("text-warning");
        }),
        new HeroPrototype_1.HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 1000, 50, [1, 2, 3], 'Пумпурумпум', 'Не путать с Кукумбером!', 'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!', 'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!', function ($card) {
            fireworks();
        }),
        new HeroPrototype_1.HeroPrototype(4, 'Арбузон', 500, 100, [0, 1, 2], 'Пшпшпшп', 'Самый <b>большой</b>', 'Самый спелый', '<span class="text-success">Потряси меня!</span>')
    ],
    enemies: [
        new FighterPrototype_1.FighterPrototype(0, 'Редисон', 500, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
        new FighterPrototype_1.FighterPrototype(0, 'Баклажун', 500, 100, [0, 1, 3], 'Агрх!'),
        new FighterPrototype_1.FighterPrototype(0, 'Томатус', 500, 100, [0, 1, 3], 'Упф'),
        new FighterPrototype_1.FighterPrototype(0, 'Тыквин', 500, 100, [0, 1, 3], '<span class="text-danger border-danger">Ехехеехех</span>'),
    ],
    perks: [
        new PerkPrototype_1.PerkPrototype(-1, 'Пропуск хода', 1, '', function (target, owner, game) { }, true),
        new PerkPrototype_1.PerkPrototype(0, 'Взрыв', 100, 'Пытается убить одного врага', function (target, owner) {
            target.addHp(-100);
            owner.addMana(-50);
        }, false, [
            './images/animation/first/image_part_001.png',
            './images/animation/first/image_part_002.png',
            './images/animation/first/image_part_003.png',
            './images/animation/first/image_part_004.png',
            './images/animation/first/image_part_005.png',
            './images/animation/first/image_part_006.png',
            './images/animation/first/image_part_007.png',
            './images/animation/first/image_part_008.png',
            './images/animation/first/image_part_009.png',
            './images/animation/first/image_part_010.png',
            './images/animation/first/image_part_011.png',
            './images/animation/first/image_part_012.png',
            './images/animation/first/image_part_013.png',
            './images/animation/first/image_part_014.png',
            './images/animation/first/image_part_015.png',
            './images/animation/first/image_part_016.png',
            './images/animation/first/image_part_017.png',
            './images/animation/first/image_part_018.png',
            './images/animation/first/image_part_019.png',
            './images/animation/first/image_part_020.png',
            './images/animation/first/image_part_021.png',
            './images/animation/first/image_part_022.png',
            './images/animation/first/image_part_023.png',
            './images/animation/first/image_part_024.png',
            './images/animation/first/image_part_025.png'
        ]),
        new PerkPrototype_1.PerkPrototype(1, 'Молния', 30, 'Пытается убить всех', function (target, owner, game) {
            owner.addMana(-100);
            game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
        }, false, [
            './images/animation/second/image_part_001.png',
            './images/animation/second/image_part_002.png',
            './images/animation/second/image_part_003.png',
            './images/animation/second/image_part_004.png',
            './images/animation/second/image_part_005.png',
            './images/animation/second/image_part_006.png'
        ]),
        new PerkPrototype_1.PerkPrototype(2, 'Лечение', 50, 'Никого не пытается убить', function (target, owner) {
            target.addHp(50);
            owner.addMana(-50);
        }, true, [
            './images/animation/third/image_part_001.png',
            './images/animation/third/image_part_002.png',
            './images/animation/third/image_part_003.png',
            './images/animation/third/image_part_004.png',
            './images/animation/third/image_part_005.png',
            './images/animation/third/image_part_006.png',
            './images/animation/third/image_part_007.png',
            './images/animation/third/image_part_008.png',
            './images/animation/third/image_part_009.png',
            './images/animation/third/image_part_010.png',
            './images/animation/third/image_part_011.png',
            './images/animation/third/image_part_012.png',
            './images/animation/third/image_part_013.png'
        ]),
        new PerkPrototype_1.PerkPrototype(3, 'Жертва', 70, 'Пытается убить самого себя', function (target, owner) {
            target.addMana(50);
            target.addHp(-50);
        }, true, [
            './images/animation/fourth/image_part_001.png',
            './images/animation/fourth/image_part_002.png',
            './images/animation/fourth/image_part_003.png',
            './images/animation/fourth/image_part_004.png',
            './images/animation/fourth/image_part_005.png',
            './images/animation/fourth/image_part_006.png',
            './images/animation/fourth/image_part_007.png',
            './images/animation/fourth/image_part_008.png',
            './images/animation/fourth/image_part_009.png',
            './images/animation/fourth/image_part_010.png',
            './images/animation/fourth/image_part_011.png',
            './images/animation/fourth/image_part_012.png',
            './images/animation/fourth/image_part_013.png',
            './images/animation/fourth/image_part_014.png',
            './images/animation/fourth/image_part_015.png',
            './images/animation/fourth/image_part_016.png',
            './images/animation/fourth/image_part_017.png',
            './images/animation/fourth/image_part_018.png',
            './images/animation/fourth/image_part_019.png',
            './images/animation/fourth/image_part_020.png'
        ])
    ],
};
function fireworks() {
    return __awaiter(this, void 0, void 0, function () {
        var $fireworks, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    $fireworks = $('.fireworks');
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 5)) return [3 /*break*/, 5];
                    $fireworks.removeClass('d-none');
                    $fireworks.offset({ left: Util_1.Util.randomInt(0, 500), top: Util_1.Util.randomInt(0, 500) });
                    return [4 /*yield*/, Util_1.Util.sleep(500)];
                case 2:
                    _a.sent();
                    $fireworks.addClass('d-none');
                    return [4 /*yield*/, Util_1.Util.sleep(100)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
},{"../Common/Util":2,"../Fighters/FighterPrototype":7,"../Fighters/Hero/HeroPrototype":10,"../Perks/PerkPrototype":18}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJUU2NyaXB0L0NvbW1vbi9HYW1lQ2FyZC50cyIsIlRTY3JpcHQvQ29tbW9uL1V0aWwudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwiVFNjcmlwdC9GaWdodGVycy9FbmVteS9FbmVteUNhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXIudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwiVFNjcmlwdC9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlLnRzIiwiVFNjcmlwdC9GaWdodGVycy9IZXJvL0hlcm8udHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvTWFpbi9HYW1lLnRzIiwiVFNjcmlwdC9NYWluL1Byb2dyYW0udHMiLCJUU2NyaXB0L1BlcmtzL09uRW5lbXlQZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9Pbkhlcm9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQ2FyZC50cyIsIlRTY3JpcHQvUGVya3MvUGVya1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvU3RvcmUvU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNFQTtJQUFBO0lBTUEsQ0FBQztJQUhVLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7SUFBQTtJQVVBLENBQUM7SUFUdUIsVUFBSyxHQUF6QixV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Q3hCLENBQUMsR0FBRyxDQUFDOzs7eUJBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNqQixVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUE7b0JBQzlFLHFCQUFNLFdBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7O29CQUFyQixTQUFxQixDQUFDO29CQUN0QixVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUM3QixxQkFBTSxXQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFBOztvQkFBckIsU0FBcUIsQ0FBQzs7O29CQUxILENBQUMsRUFBRSxDQUFBOzs7Ozs7Q0FPN0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ2FyZCB7XHJcbiAgICBwcm90ZWN0ZWQgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkcygpOiB7bGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRjYXJkLm9mZnNldCgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx1bmtub3duPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUludChtaW4gPSAwLCBtYXggPSAxMDApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXlDYXJkIH0gZnJvbSBcIi4vRW5lbXlDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgRmlnaHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteUNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUucmVtb3ZlRW5lbXkodGhpcyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Q2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuXHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyIHtcclxuICAgIHByaXZhdGUgX2hwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgY2FyZDogRmlnaHRlckNhcmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSwgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdhbWU6IEdhbWUpIHtcclxuICAgICAgICB0aGlzLmNhcmQgPSB0aGlzLmNyZWF0ZUNhcmQocHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLl9ocCA9IHByb3RvdHlwZS5ocDtcclxuICAgICAgICB0aGlzLl9tYW5hID0gcHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRNYW5hKDUpO1xyXG4gICAgICAgIHRoaXMuYWRkSHAoMik7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmlnaHRlckNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBocCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGhwKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9ocCA9IHRoaXMuZ2V0QWRlcXVhdGVIcChjb3VudCk7XHJcbiAgICAgICAgdGhpcy5jYXJkLnNldEhwV2lkdGgodGhpcy5faHAgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5ocCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhwKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5faHAgKyBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFkZXF1YXRlSHAoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUuaHApIHJldHVybiB0aGlzLnByb3RvdHlwZS5ocDtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRBZGVxdWF0ZU1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5zZXRNYW5hV2lkdGgodGhpcy5fbWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLl9tYW5hICsgY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZU1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShlZmZlY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXJkLnR1cm5PbihlZmZlY3QsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQudHVybk9mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKToge2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkLmdldENvb3JkcygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRlckNhcmQgZXh0ZW5kcyBHYW1lQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJlbmVteSBuYW1lXCIsIG1vdHRvID0gXCJtb3R0b1wiKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRjYXJkID0gdGhpcy4kaW5pdGlhbGl6ZUNhcmQobmFtZSwgbW90dG8pO1xyXG4gICAgICAgIHRoaXMuJGdldE1lbnUoKS5hcHBlbmQodGhpcy4kY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjZW5lbWllcy1tZW51Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAkaW5pdGlhbGl6ZUNhcmQobmFtZTogc3RyaW5nLCBtb3R0bzogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI2ZpZ2h0ZXItY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktbW90dG8nKS5odG1sKG1vdHRvKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIcFdpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5ocC1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWFuYVdpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PbihlZmZlY3Q6IEZ1bmN0aW9uLCBvd25lcjogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVmZmVjdChvd25lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0ZXJQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIHB1YmxpYyBocDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgbWFuYTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgc2tpbGxzOiBudW1iZXJbXSwgXHJcbiAgICAgICAgcHVibGljIG1vdHRvOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBIZXJvUHJvdG90eXBlIH0gZnJvbSBcIi4vSGVyb1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgSGVyb0NhcmQgfSBmcm9tIFwiLi9IZXJvQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL1BlcmtcIjtcclxuaW1wb3J0IHsgT25IZXJvUGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Pbkhlcm9QZXJrXCI7XHJcbmltcG9ydCB7IE9uRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL09uRW5lbXlQZXJrXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uLy4uL1N0b3JlL1N0b3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVybyBleHRlbmRzIEZpZ2h0ZXIge1xyXG4gICAgcHJpdmF0ZSBfcGVya3M6IEFycmF5PFBlcms+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogSGVyb1Byb3RvdHlwZSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGdhbWUpO1xyXG4gICAgICAgIHRoaXMuX3BlcmtzID0gW107IFxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBlcmtzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplUGVya3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuc2tpbGxzLmZvckVhY2gocGVya051bWJlciA9PiB7XHJcbiAgICAgICAgICAgIGlmKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLmZvclNlbGYpIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVya3MucHVzaChuZXcgT25IZXJvUGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wZXJrcy5wdXNoKG5ldyBPbkVuZW15UGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGVyb0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1ldGhvZCh0YXJnZXRNZXRob2Q6IEZ1bmN0aW9uLCBlZmZlY3RNZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGFyZ2V0TWV0aG9kKGVmZmVjdE1ldGhvZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9uRW5lbXlNZXRob2QoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hY3RpdmF0ZUVuZW1pZXMoZWZmZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPbkhlcm9NZXRob2QoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGlzYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoZWZmZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXlNYW5hTGFja2luZygpOiB2b2lkIHtcclxuICAgICAgICAoPEhlcm9DYXJkPnRoaXMuY2FyZCkuZHJhd01hbmFMYWNraW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuaGVybyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nYW1lLl9nYW1lRW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm9DYXJkIGV4dGVuZHMgRmlnaHRlckNhcmQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb3R0bzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbW90dG8pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2VuZW15LWNhcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgJGdldE1lbnUoKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuICQoJyNoZXJvLW1lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZHJhd01hbmFMYWNraW5nKCkge1xyXG4gICAgICAgIGxldCAkbWFuYVByb2dyZXNzID0gdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpO1xyXG4gICAgICAgICRtYW5hUHJvZ3Jlc3MucmVtb3ZlQ2xhc3MoJ2JnLXByaW1hcnknKS5hZGRDbGFzcygnYmctZGFyaycpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICAkbWFuYVByb2dyZXNzLnJlbW92ZUNsYXNzKCdiZy1kYXJrJykuYWRkQ2xhc3MoJ2JnLXByaW1hcnknKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm9Qcm90b3R5cGUgZXh0ZW5kcyBGaWdodGVyUHJvdG90eXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGlkOiBudW1iZXIsIFxyXG4gICAgICAgIG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAgaHA6IG51bWJlciwgXHJcbiAgICAgICAgbWFuYTogbnVtYmVyLCBcclxuICAgICAgICBza2lsbHM6IEFycmF5PG51bWJlcj4sIFxyXG4gICAgICAgIG1vdHRvOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGZpcnN0RGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgc2Vjb25kRGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgYW5zd2VyOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlYWN0aW9uPzogRnVuY3Rpb25cclxuICAgICAgICApIHtcclxuICAgICAgICBzdXBlcihpZCwgbmFtZSwgaHAsIG1hbmEsIHNraWxscywgbW90dG8pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0hlcm8vSGVyb1wiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi9GaWdodGVycy9FbmVteS9FbmVteVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgcHJpdmF0ZSBfaGVyb051bWJlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIF9nYW1lRW5kZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9raWxsZWRFbmVtaWVzQ291bnQgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNob29zZW5XaW5kb3coKTtcclxuICAgICAgICAkKCcjYnV0dG9uJykuY2xpY2soKTtcclxuICAgICAgICAkKCcjemFrcm95c3lhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbmZpcm0oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQ2hvb3NlbldpbmRvdygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICQoJyNjYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLmhlcm9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9vc2VuV2luZG93RXhjZXB0KGluZGV4OiBudW1iZXIsICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCcjY2FyZC1jb250YWluZXInKTtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoXCJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5oZXJvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIFxyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQoJGNhcmQpO1xyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQodGhpcy5pbml0aWFsaXplT25lQ2FyZChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZU9uZUNhcmQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNjaG9vc2UtY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuY2hpbGRyZW4oJ2RpdicpLmF0dHIoJ2RhdGEtaGVyby1pZCcsIGluZGV4KTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKHN0b3JlLmhlcm9zW2luZGV4XS5uYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktZmlyc3QtZGVzY3JpcHRpb24nKS5odG1sKHN0b3JlLmhlcm9zW2luZGV4XS5maXJzdERlc2NyaXB0aW9uKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktc2Vjb25kLWRlc2NyaXB0aW9uJykuaHRtbChzdG9yZS5oZXJvc1tpbmRleF0uc2Vjb25kRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkY2FyZC5vbignY2xpY2snLCAoKSA9PiB7IHRoaXMuY2hvb3NlQ2FyZE9uQ2xpY2soaW5kZXgsICRjYXJkLmZpbmQoJy5jYXJkJykpIH0pO1xyXG4gICAgICAgIHJldHVybiAkY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNob29zZUNhcmRPbkNsaWNrKGluZGV4OiBudW1iZXIsICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgJCgnI2hvaG8nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ2hvb3NlbldpbmRvd0V4Y2VwdChpbmRleCwgJGNhcmQucGFyZW50KCkpO1xyXG4gICAgICAgICRjYXJkLmFkZENsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgIHRoaXMuX2hlcm9OdW1iZXIgPSBpbmRleDtcclxuICAgICAgICB0aGlzLnNldFJlYWN0aW9uKHN0b3JlLmhlcm9zW2luZGV4XS5hbnN3ZXIsIHN0b3JlLmhlcm9zW2luZGV4XT8ucmVhY3Rpb24sICRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFJlYWN0aW9uKHN0cmluZzogc3RyaW5nLCBtZXRob2Q/OiBGdW5jdGlvbiwgJGNhcmQ/OiBKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICAkKCcjcmVhY3Rpb24nKS5odG1sKHN0cmluZyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdmdW5jdGlvbicpIFxyXG4gICAgICAgICAgICBtZXRob2QoJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoZXJvOiBIZXJvO1xyXG4gICAgcHVibGljIGVuZW1pZXM6IEFycmF5PEVuZW15PjtcclxuXHJcbiAgICBwcml2YXRlIG9uQ29uZmlybSgpOiB2b2lkIHtcclxuICAgICAgICAkKCcjYnV0dG9uJykuY2xpY2soKTtcclxuICAgICAgICBpZiAodGhpcy5faGVyb051bWJlciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGVybyA9IG5ldyBIZXJvKHN0b3JlLmhlcm9zW3RoaXMuX2hlcm9OdW1iZXJdLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVFbmVtaWVzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFbmVteSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkoc3RvcmUuZW5lbWllc1tVdGlsLnJhbmRvbUludCgwLCBzdG9yZS5lbmVtaWVzLmxlbmd0aCldLCB0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUVuZW15KGVuZW15OiBFbmVteSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpKTtcclxuICAgICAgICB0aGlzLl9raWxsZWRFbmVtaWVzQ291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2FtZUVuZGVkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBHYW1lIGVuZGVkLiBZb3UncmUga2lsbCAke3RoaXMuX2tpbGxlZEVuZW1pZXNDb3VudH0gZW5lbWllc2ApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoIDwgc3RvcmUuZW5lbWllc01heENvdW50ICYmIFV0aWwucmFuZG9tSW50KDAsIDEwMCkgPCAxNSlcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteSgpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUVuZW1pZXMoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmFjdGl2YXRlKGVmZmVjdCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWN0aXZhdGVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmRpc2FjdGl2YXRlKCkgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmxldCBnYW1lOiBHYW1lO1xyXG5cclxuZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbn1cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIG9uTG9hZCk7XHJcblxyXG5sZXQgXyA9ICgpID0+ICgpID0+ICgpID0+ICgpID0+ICgpID0+ICgpID0+ICgpID0+ICgpID0+ICgpID0+ICgpID0+ICgpID0+ICgpID0+IFxyXG4nTmFkb2VsaSB1emhlIHNvIHN2b2ltaSBza29ia2FtaSBwcmVrcmF0aXRlIHBvemhsdWlzdGEnIiwiaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuL1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkVuZW15UGVyayBleHRlbmRzIFBlcmsge1xyXG5cclxufSIsImltcG9ydCB7IFBlcmsgfSBmcm9tIFwiLi9QZXJrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25IZXJvUGVyayBleHRlbmRzIFBlcmsge1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldE9uY2xpY2tUeXBlKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZXJvLmdldE9uSGVyb01ldGhvZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVya0NhcmQgfSBmcm9tIFwiLi9QZXJrQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4vUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0hlcm8vSGVyb1wiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4vUGVya0FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmsge1xyXG4gICAgcHJpdmF0ZSBfY2FyZDogUGVya0NhcmQ7XHJcbiAgICBwcml2YXRlIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbmltYXRpb24/OiBQZXJrQW5pbWF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsIFxyXG4gICAgICAgIHByb3RlY3RlZCBoZXJvOiBIZXJvLFxyXG4gICAgICAgIHByaXZhdGUgX2dhbWU6IEdhbWVcclxuICAgICAgICApIHtcclxuICAgICAgICB0aGlzLl9jYXJkID0gdGhpcy5jcmVhdGVDYXJkKHByb3RvdHlwZSk7XHJcbiAgICAgICAgdGhpcy5fY2FyZC5zZXRPbmNsaWNrKHRoaXMuZ2V0T25jbGljaygpKTtcclxuICAgICAgICB0aGlzLl9tYW5hID0gMDtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuYW5pbWF0aW9uUGF0aHMgIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uID0gbmV3IFBlcmtBbmltYXRpb24odGhpcy5fY2FyZC5nZXRDb29yZHMoKSwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLmFkZE1hbmEoMSk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDApO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBQZXJrUHJvdG90eXBlKTogUGVya0NhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGVya0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFuYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRSZWFsTWFuYShjb3VudCk7XHJcbiAgICAgICAgdGhpcy5fY2FyZC5zZXRQcm9ncmVzc1dpZHRoKHRoaXMubWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLm1hbmEgKyBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlYWxNYW5hKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjb3VudCA+IHRoaXMucHJvdG90eXBlLm1hbmEpIHJldHVybiB0aGlzLnByb3RvdHlwZS5tYW5hO1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T25jbGljaygpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMuaGVyby5zZXRNZXRob2QodGhpcy5nZXRPbmNsaWNrVHlwZSgpLCBcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlcikgPT4geyBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5tYW5hID4gdGhpcy5oZXJvLm1hbmEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyby5zYXlNYW5hTGFja2luZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubWFuYSA9IDA7IFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRpb24gIT0gbnVsbCkgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0aW9uLmFuaW1hdGUodGFyZ2V0LmdldENvb3JkcygpKS50aGVuKCgpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvdG90eXBlLmVmZmVjdCh0YXJnZXQsIHRoaXMuaGVybywgdGhpcy5fZ2FtZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvdG90eXBlLmVmZmVjdCh0YXJnZXQsIHRoaXMuaGVybywgdGhpcy5fZ2FtZSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZS5kaXNhY3RpdmF0ZUVuZW1pZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVyby5kaXNhY3RpdmF0ZSgpOyBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICApfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPbmNsaWNrVHlwZSgpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVyby5nZXRPbkVuZW15TWV0aG9kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcblxyXG5pbnRlcmZhY2UgSVBvaW50IHtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG59IFxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzdGFydFBvaW50OiBJUG9pbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBpbWFnZXNQYXRoczogQXJyYXk8c3RyaW5nPiBcclxuICAgICkge31cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYW5pbWF0ZShlbmRwb2ludDogSVBvaW50KSB7XHJcbiAgICAgICAgbGV0ICRhbmltYXRpb24gPSAkKCcuYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgJGFuaW1hdGlvbi5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZVBhdGggPSB0aGlzLmltYWdlc1BhdGhzW2luZGV4XTtcclxuICAgICAgICAgICAgJGFuaW1hdGlvbi5hdHRyKCdzcmMnLCBpbWFnZVBhdGgpO1xyXG4gICAgICAgICAgICAkYW5pbWF0aW9uLm9mZnNldCh7IFxyXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGFydFBvaW50LmxlZnQgKyAoZW5kcG9pbnQubGVmdCAtIHRoaXMuc3RhcnRQb2ludC5sZWZ0KSAqIGluZGV4IC8gKHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGFydFBvaW50LnRvcCArIChlbmRwb2ludC50b3AgLSB0aGlzLnN0YXJ0UG9pbnQudG9wKSAqIGluZGV4IC8gKHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDAgLyB0aGlzLmltYWdlc1BhdGhzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRhbmltYXRpb24uYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVya0NhcmQgZXh0ZW5kcyBHYW1lQ2FyZCB7XHJcbiAgICBwcml2YXRlIF9vbmNsaWNrOiBGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJwZXJrIG5hbWVcIiwgaW5mbyA9IFwiaW5mb1wiKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRjYXJkID0gdGhpcy4kaW5pdGlhbGl6ZUNhcmQobmFtZSwgaW5mbyk7XHJcbiAgICAgICAgJCgnI2hlcm8tbWVudScpLmFwcGVuZCh0aGlzLiRjYXJkKTtcclxuICAgICAgICB0aGlzLl9vbmNsaWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkaW5pdGlhbGl6ZUNhcmQobmFtZTogc3RyaW5nLCBpbmZvOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjcGVyay1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKG5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1pbmZvJykuaHRtbChpbmZvKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9uY2xpY2sobWV0aG9kOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uY2xpY2sgPSBtZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3Jlc3NXaWR0aChwZXJjZW50czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgcGVyY2VudHMgPSB0aGlzLmdldFJlYWxQZXJjZW50cyhwZXJjZW50cyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgICAgICBpZiAocGVyY2VudHMgPj0gMTAwKSB0aGlzLnR1cm5PbigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy50dXJuT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCgnLnBlcmstY2FyZCcpLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PZmYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLmFkZENsYXNzKCdwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBQZXJrUHJvdG90eXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIG1hbmE6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgaW5mbzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBlZmZlY3Q6IEZ1bmN0aW9uLFxyXG4gICAgICAgIHB1YmxpYyBmb3JTZWxmOiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBhbmltYXRpb25QYXRocz86IHN0cmluZ1tdXHJcbiAgICApIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEhlcm9Qcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4uL1BlcmtzL1BlcmtQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9NYWluL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBsZXQgc3RvcmUgPSB7XHJcbiAgICBlbmVtaWVzTWF4Q291bnQ6IDgsXHJcbiAgICBoZXJvczogW1xyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKDAsICfQmtGD0LrRg9C80LHQtdGAJywgNTAwLCAxMDAsIFswLCAxLCAyLCA0XSxcclxuICAgICAgICAgICAgJ9CS0YHQtdGFINC30LDQutGD0LrRg9C80LHRgNGOIScsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCX0LXQu9GR0L3Ri9C5PC9zcGFuPiwg0L/Rg9C/0YvRgNGH0LDRgtGL0LksINC70Y7QsdC40YIsINC60L7Qs9C00LAg0LXQs9C+INC60YPRgdCw0Y7RgicsXHJcbiAgICAgICAgICAgICfQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7QutGA0LDRgdC90YvQuTwvc3Bhbj4hINCd0LUg0L/Rg9GC0LDRgtGMIScsXHJcbiAgICAgICAgICAgICfQpdC+0YXQviwg0YXQtdGF0LXQuSEg0K8g0YLQtdCx0Y8gPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9Cw0LrRg9C60YPQvNCx0YDRjjwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy1zdWNjZXNzIHRleHQtd2hpdGVcIilcclxuICAgICAgICAgICAgICAgICRjYXJkLmZpbmQoXCJzcGFuXCIpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoXCJ0ZXh0LWRhcmtcIik7XHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZSgxLCAn0J/QvtC80LjQtNC+0YDQuNGD0YEnLCAzMDAsIDIwMCwgWzAsIDEsIDMsIDRdLFxyXG4gICAgICAgICAgICAn0K8g0LrRgNCw0YHQvdC10Y4nLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtCa0YDQsNGB0L3Ri9C5PC9zcGFuPiwg0LPQu9Cw0LTQutC40LksINGC0LLQvtC5JyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4hINCd0LUg0L/Rg9GC0LDRgtGMIScsXHJcbiAgICAgICAgICAgICfQkNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdGF0LDRhdCw0YXQsNGF0LDRhdCw0YUnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHsgXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5wYXJlbnQoKS5wYXJlbnQoKS5jaGlsZHJlbigpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoXCJiZy10cmFuc3BhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgICRjYXJkLmFkZENsYXNzKFwiYmctbGlnaHQgdGV4dC1kYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoXCJiZy10cmFuc3BhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgICRjYXJkLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKFwiYmctZGFyayB0ZXh0LXdoaXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgVXRpbC5zbGVlcCgyMDAwKS50aGVuKCgpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7IFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZSgyLCAn0JTRi9C90YfRg9C90LTRg9C6JywgNTAwLCAxMDAsIFswLCAxLCAzXSxcclxuICAgICAgICAgICAgJ9Ca0LDQuiDRjyDRgdGO0LTQsCDQv9C+0L/QsNC7JyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+0JbRkdC70YLRi9C5PC9zcGFuPiwg0L/QvtC/0LDQuyDRgdGO0LTQsCDRgdC70YPRh9Cw0LnQvdC+JyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC60YDQsNGB0L3Ri9C5PC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAn0JzQvtC70Y4g0YLQtdCx0Y8hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5maW5kKFwiLnRleHQtd2FybmluZ1wiKS5yZW1vdmVDbGFzcyhcInRleHQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKDMsICc8c3BhbiBjbGFzcz1cImJnLXN1Y2Nlc3MgdGV4dC1saWdodFwiPtCe0LPRg9GA0YbQsNC9PC9zcGFuPicsIDEwMDAsIDUwLCBbMSwgMiwgM10sXHJcbiAgICAgICAgICAgICfQn9GD0LzQv9GD0YDRg9C80L/Rg9C8JyxcclxuICAgICAgICAgICAgJ9Cd0LUg0L/Rg9GC0LDRgtGMINGBINCa0YPQutGD0LzQsdC10YDQvtC8IScsXHJcbiAgICAgICAgICAgICfQotC+0LbQtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiwg0L3QviDQvdC1INCa0YPQutGD0LzQsdC10YAhJyxcclxuICAgICAgICAgICAgJ9Cd0LUg0LLQt9C00YPQvNCw0Lkg0YHQutCw0LfQsNGC0YwsINGH0YLQviDRjyA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCa0YPQutGD0LzQsdC10YA8L3NwYW4+IScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4geyBcclxuICAgICAgICAgICAgICAgIGZpcmV3b3JrcygpO1xyXG4gICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoNCwgJ9CQ0YDQsdGD0LfQvtC9JywgNTAwLCAxMDAsIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgJ9Cf0YjQv9GI0L/RiNC/JyxcclxuICAgICAgICAgICAgJ9Ch0LDQvNGL0LkgPGI+0LHQvtC70YzRiNC+0Lk8L2I+JyxcclxuICAgICAgICAgICAgJ9Ch0LDQvNGL0Lkg0YHQv9C10LvRi9C5JyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0J/QvtGC0YDRj9GB0Lgg0LzQtdC90Y8hPC9zcGFuPicpXHJcbiAgICBdLFxyXG4gICAgZW5lbWllczogW1xyXG4gICAgICAgIG5ldyBGaWdodGVyUHJvdG90eXBlKDAsICfQoNC10LTQuNGB0L7QvScsIDUwMCwgMTAwLCBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGJvcmRlci1kYW5nZXJcIj7QndC10L3QsNCy0LjQttGDITwvc3Bhbj4nKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZSgwLCAn0JHQsNC60LvQsNC20YPQvScsIDUwMCwgMTAwLCBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICfQkNCz0YDRhSEnKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZSgwLCAn0KLQvtC80LDRgtGD0YEnLCA1MDAsIDEwMCwgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAn0KPQv9GEJyksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoMCwgJ9Ci0YvQutCy0LjQvScsIDUwMCwgMTAwLCBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGJvcmRlci1kYW5nZXJcIj7QldGF0LXRhdC10LXRhdC10YU8L3NwYW4+JyksXHJcbiAgICBdLFxyXG4gICAgcGVya3M6IFtcclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZSgtMSwgJ9Cf0YDQvtC/0YPRgdC6INGF0L7QtNCwJywgMSwgJycsIFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlciwgZ2FtZTogR2FtZSkgPT4geyB9LCB0cnVlKSxcclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZSgwLCAn0JLQt9GA0YvQsicsIDEwMCwgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQvtC00L3QvtCz0L4g0LLRgNCw0LPQsCcsIFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4geyBcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgtMTAwKTsgXHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRNYW5hKC01MCk7IFxyXG4gICAgICAgICAgICB9LCBmYWxzZSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwMS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwMi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwMy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwNC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwNS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwNi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwNy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwOC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAwOS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxMC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxMS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxMi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxMy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxNC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxNS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxNi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxNy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxOC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAxOS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAyMC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAyMS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAyMi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAyMy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAyNC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9maXJzdC9pbWFnZV9wYXJ0XzAyNS5wbmcnXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKDEsICfQnNC+0LvQvdC40Y8nLCAzMCwgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQstGB0LXRhScsIFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlciwgZ2FtZTogR2FtZSkgPT4geyBcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLTEwMCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IChlbmVteS5hZGRIcCgtNzApKSk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL3NlY29uZC9pbWFnZV9wYXJ0XzAwMS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9zZWNvbmQvaW1hZ2VfcGFydF8wMDIucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vc2Vjb25kL2ltYWdlX3BhcnRfMDAzLnBuZycsXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL3NlY29uZC9pbWFnZV9wYXJ0XzAwNC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9zZWNvbmQvaW1hZ2VfcGFydF8wMDUucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vc2Vjb25kL2ltYWdlX3BhcnRfMDA2LnBuZydcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoMiwgJ9Cb0LXRh9C10L3QuNC1JywgNTAsICfQndC40LrQvtCz0L4g0L3QtSDQv9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0YwnLCBcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHsgXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoNTApOyBcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLTUwKTsgXHJcbiAgICAgICAgICAgIH0sIHRydWUsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDEucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDIucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDMucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDQucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDUucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDYucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDcucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDgucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMDkucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMTAucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMTEucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMTIucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vdGhpcmQvaW1hZ2VfcGFydF8wMTMucG5nJ1xyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZSgzLCAn0JbQtdGA0YLQstCwJywgNzAsICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0YHQsNC80L7Qs9C+INGB0LXQsdGPJywgXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZE1hbmEoNTApOyBcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgtNTApO1xyXG4gICAgICAgICAgICB9LCB0cnVlLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL2ZvdXJ0aC9pbWFnZV9wYXJ0XzAwMS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9mb3VydGgvaW1hZ2VfcGFydF8wMDIucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vZm91cnRoL2ltYWdlX3BhcnRfMDAzLnBuZycsXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL2ZvdXJ0aC9pbWFnZV9wYXJ0XzAwNC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9mb3VydGgvaW1hZ2VfcGFydF8wMDUucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vZm91cnRoL2ltYWdlX3BhcnRfMDA2LnBuZycsXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL2ZvdXJ0aC9pbWFnZV9wYXJ0XzAwNy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9mb3VydGgvaW1hZ2VfcGFydF8wMDgucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vZm91cnRoL2ltYWdlX3BhcnRfMDA5LnBuZycsXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL2ZvdXJ0aC9pbWFnZV9wYXJ0XzAxMC5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9mb3VydGgvaW1hZ2VfcGFydF8wMTEucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vZm91cnRoL2ltYWdlX3BhcnRfMDEyLnBuZycsXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL2ZvdXJ0aC9pbWFnZV9wYXJ0XzAxMy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9mb3VydGgvaW1hZ2VfcGFydF8wMTQucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vZm91cnRoL2ltYWdlX3BhcnRfMDE1LnBuZycsXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL2ZvdXJ0aC9pbWFnZV9wYXJ0XzAxNi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9mb3VydGgvaW1hZ2VfcGFydF8wMTcucG5nJyxcclxuICAgICAgICAgICAgICAgICcuL2ltYWdlcy9hbmltYXRpb24vZm91cnRoL2ltYWdlX3BhcnRfMDE4LnBuZycsXHJcbiAgICAgICAgICAgICAgICAnLi9pbWFnZXMvYW5pbWF0aW9uL2ZvdXJ0aC9pbWFnZV9wYXJ0XzAxOS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgJy4vaW1hZ2VzL2FuaW1hdGlvbi9mb3VydGgvaW1hZ2VfcGFydF8wMjAucG5nJ1xyXG4gICAgICAgICAgICBdKVxyXG4gICAgXSxcclxufTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpcmV3b3JrcygpIHtcclxuICAgIGxldCAkZmlyZXdvcmtzID0gJCgnLmZpcmV3b3JrcycpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspe1xyXG4gICAgICAgICRmaXJld29ya3MucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRmaXJld29ya3Mub2Zmc2V0KHtsZWZ0OiBVdGlsLnJhbmRvbUludCgwLCA1MDApLCB0b3A6IFV0aWwucmFuZG9tSW50KDAsIDUwMCl9KVxyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICAkZmlyZXdvcmtzLmFkZENsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoMTAwKTtcclxuICAgIH1cclxufSJdfQ==
