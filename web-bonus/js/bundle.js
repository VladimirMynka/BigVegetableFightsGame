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
                        this.enemies = this.enemies.filter(function (enemy) { return enemy.hp > 0; });
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
var path = './images/animation/';
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
        }, false, Array.apply(null, { length: 25 }).map(function (unused, index) {
            return "".concat(path, "first/image_part_0").concat((index + 1).toString().padStart(2, '0'), ".png");
        })),
        new PerkPrototype_1.PerkPrototype(1, 'Молния', 30, 'Пытается убить всех', function (target, owner, game) {
            owner.addMana(-100);
            game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
        }, false, Array.apply(null, { length: 6 }).map(function (unused, index) {
            return "".concat(path, "second/image_part_0").concat((index + 1).toString().padStart(2, '0'), ".png");
        })),
        new PerkPrototype_1.PerkPrototype(2, 'Лечение', 50, 'Никого не пытается убить', function (target, owner) {
            target.addHp(50);
            owner.addMana(-50);
        }, true, Array.apply(null, { length: 13 }).map(function (unused, index) {
            return "".concat(path, "third/image_part_0").concat((index + 1).toString().padStart(2, '0'), ".png");
        })),
        new PerkPrototype_1.PerkPrototype(3, 'Жертва', 70, 'Пытается убить самого себя', function (target, owner) {
            target.addMana(50);
            target.addHp(-50);
        }, true, Array.apply(null, { length: 20 }).map(function (unused, index) {
            return "".concat(path, "fourth/image_part_0").concat((index + 1).toString().padStart(2, '0'), ".png");
        }))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJUU2NyaXB0L0NvbW1vbi9HYW1lQ2FyZC50cyIsIlRTY3JpcHQvQ29tbW9uL1V0aWwudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwiVFNjcmlwdC9GaWdodGVycy9FbmVteS9FbmVteUNhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXIudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwiVFNjcmlwdC9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlLnRzIiwiVFNjcmlwdC9GaWdodGVycy9IZXJvL0hlcm8udHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvTWFpbi9HYW1lLnRzIiwiVFNjcmlwdC9NYWluL1Byb2dyYW0udHMiLCJUU2NyaXB0L1BlcmtzL09uRW5lbXlQZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9Pbkhlcm9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQ2FyZC50cyIsIlRTY3JpcHQvUGVya3MvUGVya1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvU3RvcmUvU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNFQTtJQUFBO0lBTUEsQ0FBQztJQUhVLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7SUFBQTtJQVVBLENBQUM7SUFUdUIsVUFBSyxHQUF6QixV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Q0FBQyxDQUFDO0tBQ3ZGO0NBQ0osQ0FBQztBQUVGLFNBQWUsU0FBUzs7Ozs7O29CQUNoQixVQUFVLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN4QixDQUFDLEdBQUcsQ0FBQzs7O3lCQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDakIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO29CQUNoRixxQkFBTSxXQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFBOztvQkFBckIsU0FBcUIsQ0FBQztvQkFDdEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDN0IscUJBQU0sV0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQTs7b0JBQXJCLFNBQXFCLENBQUM7OztvQkFMSCxDQUFDLEVBQUUsQ0FBQTs7Ozs7O0NBTzdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhcmQge1xyXG4gICAgcHJvdGVjdGVkICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKToge2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kY2FyZC5vZmZzZXQoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVdGlsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dW5rbm93bj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnQobWluID0gMCwgbWF4ID0gMTAwKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEVuZW15Q2FyZCB9IGZyb20gXCIuL0VuZW15Q2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteSBleHRlbmRzIEZpZ2h0ZXIge1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUubW90dG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Q2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuXHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyIHtcclxuICAgIHByaXZhdGUgX2hwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgY2FyZDogRmlnaHRlckNhcmQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSwgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdhbWU6IEdhbWUpIHtcclxuICAgICAgICB0aGlzLmNhcmQgPSB0aGlzLmNyZWF0ZUNhcmQocHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLl9ocCA9IHByb3RvdHlwZS5ocDtcclxuICAgICAgICB0aGlzLl9tYW5hID0gcHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRNYW5hKDUpO1xyXG4gICAgICAgIHRoaXMuYWRkSHAoMik7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmlnaHRlckNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBocCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGhwKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9ocCA9IHRoaXMuZ2V0QWRlcXVhdGVIcChjb3VudCk7XHJcbiAgICAgICAgdGhpcy5jYXJkLnNldEhwV2lkdGgodGhpcy5faHAgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5ocCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhwKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5faHAgKyBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFkZXF1YXRlSHAoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUuaHApIHJldHVybiB0aGlzLnByb3RvdHlwZS5ocDtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRBZGVxdWF0ZU1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5zZXRNYW5hV2lkdGgodGhpcy5fbWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLl9tYW5hICsgY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZU1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShlZmZlY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXJkLnR1cm5PbihlZmZlY3QsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQudHVybk9mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKToge2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkLmdldENvb3JkcygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRlckNhcmQgZXh0ZW5kcyBHYW1lQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJlbmVteSBuYW1lXCIsIG1vdHRvID0gXCJtb3R0b1wiKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRjYXJkID0gdGhpcy4kaW5pdGlhbGl6ZUNhcmQobmFtZSwgbW90dG8pO1xyXG4gICAgICAgIHRoaXMuJGdldE1lbnUoKS5hcHBlbmQodGhpcy4kY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjZW5lbWllcy1tZW51Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAkaW5pdGlhbGl6ZUNhcmQobmFtZTogc3RyaW5nLCBtb3R0bzogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI2ZpZ2h0ZXItY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktbW90dG8nKS5odG1sKG1vdHRvKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIcFdpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5ocC1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWFuYVdpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PbihlZmZlY3Q6IEZ1bmN0aW9uLCBvd25lcjogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVmZmVjdChvd25lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0ZXJQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIHB1YmxpYyBocDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgbWFuYTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgc2tpbGxzOiBudW1iZXJbXSwgXHJcbiAgICAgICAgcHVibGljIG1vdHRvOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBIZXJvUHJvdG90eXBlIH0gZnJvbSBcIi4vSGVyb1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgSGVyb0NhcmQgfSBmcm9tIFwiLi9IZXJvQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL1BlcmtcIjtcclxuaW1wb3J0IHsgT25IZXJvUGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Pbkhlcm9QZXJrXCI7XHJcbmltcG9ydCB7IE9uRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL09uRW5lbXlQZXJrXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uLy4uL1N0b3JlL1N0b3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVybyBleHRlbmRzIEZpZ2h0ZXIge1xyXG4gICAgcHJpdmF0ZSBfcGVya3M6IEFycmF5PFBlcms+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogSGVyb1Byb3RvdHlwZSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGdhbWUpO1xyXG4gICAgICAgIHRoaXMuX3BlcmtzID0gW107IFxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBlcmtzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplUGVya3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuc2tpbGxzLmZvckVhY2gocGVya051bWJlciA9PiB7XHJcbiAgICAgICAgICAgIGlmKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLmZvclNlbGYpIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVya3MucHVzaChuZXcgT25IZXJvUGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wZXJrcy5wdXNoKG5ldyBPbkVuZW15UGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGVyb0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1ldGhvZCh0YXJnZXRNZXRob2Q6IEZ1bmN0aW9uLCBlZmZlY3RNZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGFyZ2V0TWV0aG9kKGVmZmVjdE1ldGhvZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9uRW5lbXlNZXRob2QoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hY3RpdmF0ZUVuZW1pZXMoZWZmZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPbkhlcm9NZXRob2QoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGlzYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoZWZmZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXlNYW5hTGFja2luZygpOiB2b2lkIHtcclxuICAgICAgICAoPEhlcm9DYXJkPnRoaXMuY2FyZCkuZHJhd01hbmFMYWNraW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuX2dhbWVFbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVyb0NhcmQgZXh0ZW5kcyBGaWdodGVyQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1vdHRvOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBtb3R0byk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnZW5lbXktY2FyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSAkZ2V0TWVudSgpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gJCgnI2hlcm8tbWVudScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkcmF3TWFuYUxhY2tpbmcoKSB7XHJcbiAgICAgICAgbGV0ICRtYW5hUHJvZ3Jlc3MgPSB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJyk7XHJcbiAgICAgICAgJG1hbmFQcm9ncmVzcy5yZW1vdmVDbGFzcygnYmctcHJpbWFyeScpLmFkZENsYXNzKCdiZy1kYXJrJyk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgICRtYW5hUHJvZ3Jlc3MucmVtb3ZlQ2xhc3MoJ2JnLWRhcmsnKS5hZGRDbGFzcygnYmctcHJpbWFyeScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVyb1Byb3RvdHlwZSBleHRlbmRzIEZpZ2h0ZXJQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IG51bWJlciwgXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLCBcclxuICAgICAgICBocDogbnVtYmVyLCBcclxuICAgICAgICBtYW5hOiBudW1iZXIsIFxyXG4gICAgICAgIHNraWxsczogQXJyYXk8bnVtYmVyPiwgXHJcbiAgICAgICAgbW90dG86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZmlyc3REZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBzZWNvbmREZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBhbnN3ZXI6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhY3Rpb24/OiBGdW5jdGlvblxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBuYW1lLCBocCwgbWFuYSwgc2tpbGxzLCBtb3R0byk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZS9TdG9yZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIF9oZXJvTnVtYmVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgX2dhbWVFbmRlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2tpbGxlZEVuZW1pZXNDb3VudCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ2hvb3NlbldpbmRvdygpO1xyXG4gICAgICAgICQoJyNidXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgICQoJyN6YWtyb3lzeWEnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29uZmlybSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9vc2VuV2luZG93KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnI2NhcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuaGVyb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQodGhpcy5pbml0aWFsaXplT25lQ2FyZChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUNob29zZW5XaW5kb3dFeGNlcHQoaW5kZXg6IG51bWJlciwgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICQoJyNjYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLmhlcm9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBpbmRleCkgXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCgkY2FyZCk7XHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCh0aGlzLmluaXRpYWxpemVPbmVDYXJkKGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplT25lQ2FyZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI2Nob29zZS1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5jaGlsZHJlbignZGl2JykuYXR0cignZGF0YS1oZXJvLWlkJywgaW5kZXgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwoc3RvcmUuaGVyb3NbaW5kZXhdLm5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1maXJzdC1kZXNjcmlwdGlvbicpLmh0bWwoc3RvcmUuaGVyb3NbaW5kZXhdLmZpcnN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1zZWNvbmQtZGVzY3JpcHRpb24nKS5odG1sKHN0b3JlLmhlcm9zW2luZGV4XS5zZWNvbmREZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRjYXJkLm9uKCdjbGljaycsICgpID0+IHsgdGhpcy5jaG9vc2VDYXJkT25DbGljayhpbmRleCwgJGNhcmQuZmluZCgnLmNhcmQnKSkgfSk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hvb3NlQ2FyZE9uQ2xpY2soaW5kZXg6IG51bWJlciwgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICAkKCcjaG9obycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDaG9vc2VuV2luZG93RXhjZXB0KGluZGV4LCAkY2FyZC5wYXJlbnQoKSk7XHJcbiAgICAgICAgJGNhcmQuYWRkQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdGhpcy5faGVyb051bWJlciA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuc2V0UmVhY3Rpb24oc3RvcmUuaGVyb3NbaW5kZXhdLmFuc3dlciwgc3RvcmUuaGVyb3NbaW5kZXhdPy5yZWFjdGlvbiwgJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UmVhY3Rpb24oc3RyaW5nOiBzdHJpbmcsIG1ldGhvZD86IEZ1bmN0aW9uLCAkY2FyZD86IEpRdWVyeSk6IHZvaWQge1xyXG4gICAgICAgICQoJyNyZWFjdGlvbicpLmh0bWwoc3RyaW5nKTtcclxuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykgXHJcbiAgICAgICAgICAgIG1ldGhvZCgkY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhlcm86IEhlcm87XHJcbiAgICBwdWJsaWMgZW5lbWllczogQXJyYXk8RW5lbXk+O1xyXG5cclxuICAgIHByaXZhdGUgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgICAgICQoJyNidXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9oZXJvTnVtYmVyID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oc3RvcmUuaGVyb3NbdGhpcy5faGVyb051bWJlcl0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUVuZW1pZXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUVuZW1pZXMoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHRoaXMuYWRkRW5lbXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEVuZW15KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteShzdG9yZS5lbmVtaWVzW1V0aWwucmFuZG9tSW50KDAsIHN0b3JlLmVuZW1pZXMubGVuZ3RoKV0sIHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlRW5lbXkoZW5lbXk6IEVuZW15KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZSh0aGlzLmVuZW1pZXMuaW5kZXhPZihlbmVteSkpO1xyXG4gICAgICAgIHRoaXMuX2tpbGxlZEVuZW1pZXNDb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lRW5kZWQpIHtcclxuICAgICAgICAgICAgYWxlcnQoYEdhbWUgZW5kZWQuIFlvdSdyZSBraWxsICR7dGhpcy5fa2lsbGVkRW5lbWllc0NvdW50fSBlbmVtaWVzYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCBzdG9yZS5lbmVtaWVzTWF4Q291bnQgJiYgVXRpbC5yYW5kb21JbnQoMCwgMTAwKSA8IDE1KVxyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gdGhpcy5lbmVtaWVzLmZpbHRlcigoZW5lbXkpID0+IGVuZW15LmhwID4gMCk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDAwKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlRW5lbWllcyhlZmZlY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLm1hcCgoZW5lbXkpID0+IHsgZW5lbXkuYWN0aXZhdGUoZWZmZWN0KSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhY3RpdmF0ZUVuZW1pZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLm1hcCgoZW5lbXkpID0+IHsgZW5lbXkuZGlzYWN0aXZhdGUoKSB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxubGV0IGdhbWU6IEdhbWU7XHJcblxyXG5mdW5jdGlvbiBvbkxvYWQoKSB7XHJcbiAgICBnYW1lID0gbmV3IEdhbWUoKTtcclxufVxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgb25Mb2FkKTtcclxuXHJcbmxldCBfID0gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gXHJcbidOYWRvZWxpIHV6aGUgc28gc3ZvaW1pIHNrb2JrYW1pIHByZWtyYXRpdGUgcG96aGx1aXN0YSciLCJpbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4vUGVya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uRW5lbXlQZXJrIGV4dGVuZHMgUGVyayB7XHJcblxyXG59IiwiaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuL1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkhlcm9QZXJrIGV4dGVuZHMgUGVyayB7XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0T25jbGlja1R5cGUoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlcm8uZ2V0T25IZXJvTWV0aG9kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQZXJrQ2FyZCB9IGZyb20gXCIuL1BlcmtDYXJkXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFBlcmtBbmltYXRpb24gfSBmcm9tIFwiLi9QZXJrQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyayB7XHJcbiAgICBwcml2YXRlIF9jYXJkOiBQZXJrQ2FyZDtcclxuICAgIHByaXZhdGUgX21hbmE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FuaW1hdGlvbj86IFBlcmtBbmltYXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSwgXHJcbiAgICAgICAgcHJvdGVjdGVkIGhlcm86IEhlcm8sXHJcbiAgICAgICAgcHJpdmF0ZSBfZ2FtZTogR2FtZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHRoaXMuX2NhcmQgPSB0aGlzLmNyZWF0ZUNhcmQocHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLl9jYXJkLnNldE9uY2xpY2sodGhpcy5nZXRPbmNsaWNrKCkpO1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5hbmltYXRpb25QYXRocyAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRpb24gPSBuZXcgUGVya0FuaW1hdGlvbih0aGlzLl9jYXJkLmdldENvb3JkcygpLCBwcm90b3R5cGU/LmFuaW1hdGlvblBhdGhzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuYWRkTWFuYSgxKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDEwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUpOiBQZXJrQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJrQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLmluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSB0aGlzLmdldFJlYWxNYW5hKGNvdW50KTtcclxuICAgICAgICB0aGlzLl9jYXJkLnNldFByb2dyZXNzV2lkdGgodGhpcy5tYW5hICogMTAwIC8gdGhpcy5wcm90b3R5cGUubWFuYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hbmEoY291bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFuYSA9IHRoaXMubWFuYSArIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVhbE1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPbmNsaWNrKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBcclxuICAgICAgICAgICAgdGhpcy5oZXJvLnNldE1ldGhvZCh0aGlzLmdldE9uY2xpY2tUeXBlKCksIFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLm1hbmEgPiB0aGlzLmhlcm8ubWFuYSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZXJvLnNheU1hbmFMYWNraW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYW5hID0gMDsgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvbiAhPSBudWxsKSBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmltYXRpb24uYW5pbWF0ZSh0YXJnZXQuZ2V0Q29vcmRzKCkpLnRoZW4oKCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuZWZmZWN0KHRhcmdldCwgdGhpcy5oZXJvLCB0aGlzLl9nYW1lKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuZWZmZWN0KHRhcmdldCwgdGhpcy5oZXJvLCB0aGlzLl9nYW1lKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLmRpc2FjdGl2YXRlRW5lbWllcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvLmRpc2FjdGl2YXRlKCk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICl9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9uY2xpY2tUeXBlKCk6IEZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZXJvLmdldE9uRW5lbXlNZXRob2QoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuXHJcbmludGVyZmFjZSBJUG9pbnQge1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbn0gXHJcblxyXG5leHBvcnQgY2xhc3MgUGVya0FuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHN0YXJ0UG9pbnQ6IElQb2ludCxcclxuICAgICAgICBwcml2YXRlIGltYWdlc1BhdGhzOiBBcnJheTxzdHJpbmc+IFxyXG4gICAgKSB7fVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhbmltYXRlKGVuZHBvaW50OiBJUG9pbnQpIHtcclxuICAgICAgICBsZXQgJGFuaW1hdGlvbiA9ICQoJy5hbmltYXRpb24nKTtcclxuICAgICAgICAkYW5pbWF0aW9uLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbWFnZXNQYXRocy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGltYWdlUGF0aCA9IHRoaXMuaW1hZ2VzUGF0aHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAkYW5pbWF0aW9uLmF0dHIoJ3NyYycsIGltYWdlUGF0aCk7XHJcbiAgICAgICAgICAgICRhbmltYXRpb24ub2Zmc2V0KHsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXJ0UG9pbnQubGVmdCArIChlbmRwb2ludC5sZWZ0IC0gdGhpcy5zdGFydFBvaW50LmxlZnQpICogaW5kZXggLyAodGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXJ0UG9pbnQudG9wICsgKGVuZHBvaW50LnRvcCAtIHRoaXMuc3RhcnRQb2ludC50b3ApICogaW5kZXggLyAodGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCAvIHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGFuaW1hdGlvbi5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrQ2FyZCBleHRlbmRzIEdhbWVDYXJkIHtcclxuICAgIHByaXZhdGUgX29uY2xpY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcInBlcmsgbmFtZVwiLCBpbmZvID0gXCJpbmZvXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQgPSB0aGlzLiRpbml0aWFsaXplQ2FyZChuYW1lLCBpbmZvKTtcclxuICAgICAgICAkKCcjaGVyby1tZW51JykuYXBwZW5kKHRoaXMuJGNhcmQpO1xyXG4gICAgICAgIHRoaXMuX29uY2xpY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICRpbml0aWFsaXplQ2FyZChuYW1lOiBzdHJpbmcsIGluZm86IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNwZXJrLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwobmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LWluZm8nKS5odG1sKGluZm8pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T25jbGljayhtZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25jbGljayA9IG1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzc1dpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+PSAxMDApIHRoaXMudHVybk9uKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnR1cm5PZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWFsUGVyY2VudHMocGVyY2VudHM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzIDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID4gMTAwKSByZXR1cm4gMTAwO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50cztcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLnJlbW92ZUNsYXNzKCdwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcucGVyay1jYXJkJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICdidXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICcnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBlcmtQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbWFuYTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBpbmZvOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGVmZmVjdDogRnVuY3Rpb24sXHJcbiAgICAgICAgcHVibGljIGZvclNlbGY6IGJvb2xlYW4sXHJcbiAgICAgICAgcHVibGljIGFuaW1hdGlvblBhdGhzPzogc3RyaW5nW11cclxuICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSGVyb1Byb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVycy9IZXJvL0hlcm9Qcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi4vUGVya3MvUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5cclxuY29uc3QgcGF0aCA9ICcuL2ltYWdlcy9hbmltYXRpb24vJztcclxuXHJcbmV4cG9ydCBsZXQgc3RvcmUgPSB7XHJcbiAgICBlbmVtaWVzTWF4Q291bnQ6IDgsXHJcbiAgICBoZXJvczogW1xyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKDAsICfQmtGD0LrRg9C80LHQtdGAJywgNTAwLCAxMDAsIFswLCAxLCAyLCA0XSxcclxuICAgICAgICAgICAgJ9CS0YHQtdGFINC30LDQutGD0LrRg9C80LHRgNGOIScsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCX0LXQu9GR0L3Ri9C5PC9zcGFuPiwg0L/Rg9C/0YvRgNGH0LDRgtGL0LksINC70Y7QsdC40YIsINC60L7Qs9C00LAg0LXQs9C+INC60YPRgdCw0Y7RgicsXHJcbiAgICAgICAgICAgICfQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7QutGA0LDRgdC90YvQuTwvc3Bhbj4hINCd0LUg0L/Rg9GC0LDRgtGMIScsXHJcbiAgICAgICAgICAgICfQpdC+0YXQviwg0YXQtdGF0LXQuSEg0K8g0YLQtdCx0Y8gPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9Cw0LrRg9C60YPQvNCx0YDRjjwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLXN1Y2Nlc3MgdGV4dC13aGl0ZVwiKVxyXG4gICAgICAgICAgICAgICAgJGNhcmQuZmluZChcInNwYW5cIikucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhcInRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKDEsICfQn9C+0LzQuNC00L7RgNC40YPRgScsIDMwMCwgMjAwLCBbMCwgMSwgMywgNF0sXHJcbiAgICAgICAgICAgICfQryDQutGA0LDRgdC90LXRjicsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0JrRgNCw0YHQvdGL0Lk8L3NwYW4+LCDQs9C70LDQtNC60LjQuSwg0YLQstC+0LknLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9CQ0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0YXQsNGF0LDRhdCw0YXQsNGF0LDRhScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmFkZENsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLWxpZ2h0IHRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyhcImJnLWRhcmsgdGV4dC13aGl0ZVwiKTtcclxuICAgICAgICAgICAgICAgIFV0aWwuc2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKDIsICfQlNGL0L3Rh9GD0L3QtNGD0LonLCA1MDAsIDEwMCwgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAn0JrQsNC6INGPINGB0Y7QtNCwINC/0L7Qv9Cw0LsnLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj7QltGR0LvRgtGL0Lk8L3NwYW4+LCDQv9C+0L/QsNC7INGB0Y7QtNCwINGB0LvRg9GH0LDQudC90L4nLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0LfQtdC70ZHQvdGL0Lk8L3NwYW4+ISDQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LrRgNCw0YHQvdGL0Lk8L3NwYW4+IScsXHJcbiAgICAgICAgICAgICfQnNC+0LvRjiDRgtC10LHRjyEnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICRjYXJkLmFkZENsYXNzKFwiYmctd2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgJGNhcmQuZmluZChcIi50ZXh0LXdhcm5pbmdcIikucmVtb3ZlQ2xhc3MoXCJ0ZXh0LXdhcm5pbmdcIik7XHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZSgzLCAnPHNwYW4gY2xhc3M9XCJiZy1zdWNjZXNzIHRleHQtbGlnaHRcIj7QntCz0YPRgNGG0LDQvTwvc3Bhbj4nLCAxMDAwLCA1MCwgWzEsIDIsIDNdLFxyXG4gICAgICAgICAgICAn0J/Rg9C80L/Rg9GA0YPQvNC/0YPQvCcsXHJcbiAgICAgICAgICAgICfQndC1INC/0YPRgtCw0YLRjCDRgSDQmtGD0LrRg9C80LHQtdGA0L7QvCEnLFxyXG4gICAgICAgICAgICAn0KLQvtC20LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4sINC90L4g0L3QtSDQmtGD0LrRg9C80LHQtdGAIScsXHJcbiAgICAgICAgICAgICfQndC1INCy0LfQtNGD0LzQsNC5INGB0LrQsNC30LDRgtGMLCDRh9GC0L4g0Y8gPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7QmtGD0LrRg9C80LHQtdGAPC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgIGZpcmV3b3JrcygpO1xyXG4gICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoNCwgJ9CQ0YDQsdGD0LfQvtC9JywgNTAwLCAxMDAsIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgJ9Cf0YjQv9GI0L/RiNC/JyxcclxuICAgICAgICAgICAgJ9Ch0LDQvNGL0LkgPGI+0LHQvtC70YzRiNC+0Lk8L2I+JyxcclxuICAgICAgICAgICAgJ9Ch0LDQvNGL0Lkg0YHQv9C10LvRi9C5JyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0J/QvtGC0YDRj9GB0Lgg0LzQtdC90Y8hPC9zcGFuPicpXHJcbiAgICBdLFxyXG4gICAgZW5lbWllczogW1xyXG4gICAgICAgIG5ldyBGaWdodGVyUHJvdG90eXBlKDAsICfQoNC10LTQuNGB0L7QvScsIDUwMCwgMTAwLCBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGJvcmRlci1kYW5nZXJcIj7QndC10L3QsNCy0LjQttGDITwvc3Bhbj4nKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZSgwLCAn0JHQsNC60LvQsNC20YPQvScsIDUwMCwgMTAwLCBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICfQkNCz0YDRhSEnKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZSgwLCAn0KLQvtC80LDRgtGD0YEnLCA1MDAsIDEwMCwgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAn0KPQv9GEJyksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoMCwgJ9Ci0YvQutCy0LjQvScsIDUwMCwgMTAwLCBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGJvcmRlci1kYW5nZXJcIj7QldGF0LXRhdC10LXRhdC10YU8L3NwYW4+JyksXHJcbiAgICBdLFxyXG4gICAgcGVya3M6IFtcclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZSgtMSwgJ9Cf0YDQvtC/0YPRgdC6INGF0L7QtNCwJywgMSwgJycsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyLCBnYW1lOiBHYW1lKSA9PiB7IH0sIHRydWUpLFxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKDAsICfQktC30YDRi9CyJywgMTAwLCAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC+0LTQvdC+0LPQviDQstGA0LDQs9CwJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgtMTAwKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLTUwKTtcclxuICAgICAgICAgICAgfSwgZmFsc2UsXHJcbiAgICAgICAgICAgIEFycmF5LmFwcGx5KG51bGwsIHsgbGVuZ3RoOiAyNSB9KS5tYXAoKHVudXNlZDogYW55LCBpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICAgICAgYCR7cGF0aH1maXJzdC9pbWFnZV9wYXJ0XzAkeyhpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0ucG5nYCkpLFxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKDEsICfQnNC+0LvQvdC40Y8nLCAzMCwgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQstGB0LXRhScsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyLCBnYW1lOiBHYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRNYW5hKC0xMDApO1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiAoZW5lbXkuYWRkSHAoLTcwKSkpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSxcclxuICAgICAgICAgICAgQXJyYXkuYXBwbHkobnVsbCwgeyBsZW5ndGg6IDYgfSkubWFwKCh1bnVzZWQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgICAgIGAke3BhdGh9c2Vjb25kL2ltYWdlX3BhcnRfMCR7KGluZGV4ICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS5wbmdgKSksXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoMiwgJ9Cb0LXRh9C10L3QuNC1JywgNTAsICfQndC40LrQvtCz0L4g0L3QtSDQv9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0YwnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZEhwKDUwKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLTUwKTtcclxuICAgICAgICAgICAgfSwgdHJ1ZSxcclxuICAgICAgICAgICAgQXJyYXkuYXBwbHkobnVsbCwgeyBsZW5ndGg6IDEzIH0pLm1hcCgodW51c2VkOiBhbnksIGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICBgJHtwYXRofXRoaXJkL2ltYWdlX3BhcnRfMCR7KGluZGV4ICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS5wbmdgKSksXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoMywgJ9CW0LXRgNGC0LLQsCcsIDcwLCAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINGB0LDQvNC+0LPQviDRgdC10LHRjycsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkTWFuYSg1MCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoLTUwKTtcclxuICAgICAgICAgICAgfSwgdHJ1ZSxcclxuICAgICAgICAgICAgQXJyYXkuYXBwbHkobnVsbCwgeyBsZW5ndGg6IDIwIH0pLm1hcCgodW51c2VkOiBhbnksIGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgICAgICBgJHtwYXRofWZvdXJ0aC9pbWFnZV9wYXJ0XzAkeyhpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0ucG5nYCkpXHJcbiAgICBdLFxyXG59O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmlyZXdvcmtzKCkge1xyXG4gICAgbGV0ICRmaXJld29ya3MgPSAkKCcuZmlyZXdvcmtzJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICRmaXJld29ya3MucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRmaXJld29ya3Mub2Zmc2V0KHsgbGVmdDogVXRpbC5yYW5kb21JbnQoMCwgNTAwKSwgdG9wOiBVdGlsLnJhbmRvbUludCgwLCA1MDApIH0pXHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgICRmaXJld29ya3MuYWRkQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDApO1xyXG4gICAgfVxyXG59Il19
