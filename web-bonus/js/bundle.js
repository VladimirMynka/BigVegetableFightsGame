(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
    return Enemy;
}(Fighter_1.Fighter));
exports.Enemy = Enemy;
},{"../Fighter":4,"./EnemyCard":3}],3:[function(require,module,exports){
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
},{"../FighterCard":5}],4:[function(require,module,exports){
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
        this._card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
        this.update();
    }
    Fighter.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hp === 0)
                            return [2 /*return*/];
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
    Fighter.prototype.createCard = function (prototype) {
        return new FighterCard_1.FighterCard(prototype.name, prototype.motto);
    };
    Object.defineProperty(Fighter.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (count) {
            this._hp = this.getAdequateHp(count);
            this._card.setHpWidth(this._hp * 100 / this.prototype.hp);
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
            this._card.setManaWidth(this._mana * 100 / this.prototype.mana);
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
        this._card.turnOn(effect, this);
    };
    Fighter.prototype.disactivate = function () {
        this._card.turnOff();
    };
    return Fighter;
}());
exports.Fighter = Fighter;
},{"../Common/Util":1,"./FighterCard":5}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FighterCard = void 0;
var FighterCard = /** @class */ (function () {
    function FighterCard(name, motto) {
        if (name === void 0) { name = "enemy name"; }
        if (motto === void 0) { motto = "motto"; }
        this.$card = this.$initializeCard(name, motto);
        this.$getMenu().append(this.$card);
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
    return FighterCard;
}());
exports.FighterCard = FighterCard;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
    return Hero;
}(Fighter_1.Fighter));
exports.Hero = Hero;
},{"../../Perks/OnEnemyPerk":12,"../../Perks/OnHeroPerk":13,"../../Store/Store":17,"../Fighter":4,"./HeroCard":8}],8:[function(require,module,exports){
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
exports.HeroCard = void 0;
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
    return HeroCard;
}(FighterCard_1.FighterCard));
exports.HeroCard = HeroCard;
},{"../FighterCard":5}],9:[function(require,module,exports){
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
},{"../FighterPrototype":6}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Store_1 = require("../Store/Store");
var Util_1 = require("../Common/Util");
var Hero_1 = require("../Fighters/Hero/Hero");
var Enemy_1 = require("../Fighters/Enemy/Enemy");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
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
    };
    Game.prototype.initializeEnemies = function () {
        for (var i = 0; i < 4; i++)
            this.addEnemy();
    };
    Game.prototype.addEnemy = function () {
        this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[Util_1.Util.randomInt(0, Store_1.store.enemies.length)], this));
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
},{"../Common/Util":1,"../Fighters/Enemy/Enemy":2,"../Fighters/Hero/Hero":7,"../Store/Store":17}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var game;
function onLoad() {
    game = new Game_1.Game();
}
$(window).on('load', onLoad);
function randomInt(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * (max - min) + min);
}
var _ = function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return function () {
    return 'Nadoeli uzhe so svoimi skobkami prekratite pozhluista';
}; }; }; }; }; }; }; }; }; }; }; };
},{"./Game":10}],12:[function(require,module,exports){
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
},{"./Perk":14}],13:[function(require,module,exports){
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
},{"./Perk":14}],14:[function(require,module,exports){
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
var Perk = /** @class */ (function () {
    function Perk(prototype, hero, _game) {
        this.prototype = prototype;
        this.hero = hero;
        this._game = _game;
        this._card = this.createCard(prototype);
        this._card.setOnclick(this.getOnclick());
        this._mana = 0;
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
                _this.mana = 0;
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
},{"../Common/Util":1,"./PerkCard":15}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkCard = void 0;
var PerkCard = /** @class */ (function () {
    function PerkCard(name, info) {
        if (name === void 0) { name = "perk name"; }
        if (info === void 0) { info = "info"; }
        this._$card = this.$initializeCard(name, info);
        $('#hero-menu').append(this._$card);
        this._onclick = null;
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
        this._$card.find('.mana-progress').width(percents + '%');
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
        this._$card.find('.mana-progress').removeClass('progress-bar-striped progress-bar-animated');
        this._$card.on("click", function () {
            $('.perk-card').removeClass('border-primary');
            _this._$card.addClass('border-primary');
            _this._onclick();
        });
        this._$card.on("mouseenter", function () {
            _this._$card.removeClass('bg-light');
        });
        this._$card.on("mouseleave", function () {
            _this._$card.addClass('bg-light');
        });
        this._$card.attr('role', 'button');
    };
    PerkCard.prototype.turnOff = function () {
        this._$card.find('.mana-progress').addClass('progress-bar-striped progress-bar-animated');
        this._$card.off("click mouseenter mouseleave");
        this._$card.attr('role', '');
        this._$card.removeClass('border-primary');
    };
    return PerkCard;
}());
exports.PerkCard = PerkCard;
},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkPrototype = void 0;
var PerkPrototype = /** @class */ (function () {
    function PerkPrototype(id, name, mana, info, effect, forSelf) {
        this.id = id;
        this.name = name;
        this.mana = mana;
        this.info = info;
        this.effect = effect;
        this.forSelf = forSelf;
    }
    return PerkPrototype;
}());
exports.PerkPrototype = PerkPrototype;
},{}],17:[function(require,module,exports){
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
    heros: [
        new HeroPrototype_1.HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 3], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!', function ($card) {
            $card.addClass("bg-success text-white");
            $card.find("span").removeClass().addClass("text-dark");
        }),
        new HeroPrototype_1.HeroPrototype(1, 'Помидориус', 300, 200, [0, 2, 3], 'Я краснею', '<span class="text-danger">Красный</span>, гладкий, твой', 'Не <span class="text-success">зелёный</span>! Не путать!', 'Ахахахахахахахаххахахахахах', function ($card) {
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
        new FighterPrototype_1.FighterPrototype(0, 'Тварь', 500, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
        new FighterPrototype_1.FighterPrototype(0, 'Ничтожество', 500, 100, [0, 1, 3], 'Агрх!'),
        new FighterPrototype_1.FighterPrototype(0, 'Ублюдок', 500, 100, [0, 1, 3], 'Упф'),
        new FighterPrototype_1.FighterPrototype(0, 'Мразь', 500, 100, [0, 1, 3], '<span class="text-danger border-danger">Ехехеехех</span>'),
    ],
    perks: [
        new PerkPrototype_1.PerkPrototype(0, 'Взрыв', 100, 'Пытается убить одного врага', function (target, owner) {
            target.addHp(-100);
            owner.addMana(-20);
        }, false),
        new PerkPrototype_1.PerkPrototype(1, 'Молния', 30, 'Пытается убить всех', function (target, owner, game) {
            owner.addMana(-50);
            game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
        }, false),
        new PerkPrototype_1.PerkPrototype(2, 'Лечение', 50, 'Никого не пытается убить', function (target, owner) {
            target.addHp(50);
            owner.addMana(-50);
        }, true),
        new PerkPrototype_1.PerkPrototype(3, 'Жертва', 70, 'Пытается убить самого себя', function (target, owner) {
            target.addMana(50);
            target.addHp(-50);
        }, true)
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
},{"../Common/Util":1,"../Fighters/FighterPrototype":6,"../Fighters/Hero/HeroPrototype":9,"../Perks/PerkPrototype":16}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJUU2NyaXB0L0NvbW1vbi9VdGlsLnRzIiwiVFNjcmlwdC9GaWdodGVycy9FbmVteS9FbmVteS50cyIsIlRTY3JpcHQvRmlnaHRlcnMvRW5lbXkvRW5lbXlDYXJkLnRzIiwiVFNjcmlwdC9GaWdodGVycy9GaWdodGVyLnRzIiwiVFNjcmlwdC9GaWdodGVycy9GaWdodGVyQ2FyZC50cyIsIlRTY3JpcHQvRmlnaHRlcnMvRmlnaHRlclByb3RvdHlwZS50cyIsIlRTY3JpcHQvRmlnaHRlcnMvSGVyby9IZXJvLnRzIiwiVFNjcmlwdC9GaWdodGVycy9IZXJvL0hlcm9DYXJkLnRzIiwiVFNjcmlwdC9GaWdodGVycy9IZXJvL0hlcm9Qcm90b3R5cGUudHMiLCJUU2NyaXB0L01haW4vR2FtZS50cyIsIlRTY3JpcHQvTWFpbi9Qcm9ncmFtLnRzIiwiVFNjcmlwdC9QZXJrcy9PbkVuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvT25IZXJvUGVyay50cyIsIlRTY3JpcHQvUGVya3MvUGVyay50cyIsIlRTY3JpcHQvUGVya3MvUGVya0NhcmQudHMiLCJUU2NyaXB0L1BlcmtzL1BlcmtQcm90b3R5cGUudHMiLCJUU2NyaXB0L1N0b3JlL1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7SUFBQTtJQVVBLENBQUM7SUFUdUIsVUFBSyxHQUF6QixVQUEwQixFQUFVOzs7Z0JBQ2hDLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQy9CLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7b0JBQzNCLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUVhLGNBQVMsR0FBdkIsVUFBd0IsR0FBTyxFQUFFLEdBQVM7UUFBbEIsb0JBQUEsRUFBQSxPQUFPO1FBQUUsb0JBQUEs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QUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQztLQUNmO0NBQ0osQ0FBQztBQUVGLFNBQWUsU0FBUzs7Ozs7O29CQUNoQixVQUFVLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN4QixDQUFDLEdBQUcsQ0FBQzs7O3lCQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDakIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFBO29CQUM5RSxxQkFBTSxXQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFBOztvQkFBckIsU0FBcUIsQ0FBQztvQkFDdEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDN0IscUJBQU0sV0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQTs7b0JBQXJCLFNBQXFCLENBQUM7OztvQkFMSCxDQUFDLEVBQUUsQ0FBQTs7Ozs7O0NBTzdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx1bmtub3duPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUludChtaW4gPSAwLCBtYXggPSAxMDApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXlDYXJkIH0gZnJvbSBcIi4vRW5lbXlDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgRmlnaHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteUNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Q2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuXHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyIHtcclxuICAgIHByaXZhdGUgX2hwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jYXJkOiBGaWdodGVyQ2FyZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlLCBcclxuICAgICAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZSkge1xyXG4gICAgICAgIHRoaXMuX2NhcmQgPSB0aGlzLmNyZWF0ZUNhcmQocHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLl9ocCA9IHByb3RvdHlwZS5ocDtcclxuICAgICAgICB0aGlzLl9tYW5hID0gcHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYWRkTWFuYSg1KTtcclxuICAgICAgICB0aGlzLmFkZEhwKDIpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSk6IEZpZ2h0ZXJDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZpZ2h0ZXJDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUubW90dG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaHAoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBocChjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faHAgPSB0aGlzLmdldEFkZXF1YXRlSHAoY291bnQpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0SHBXaWR0aCh0aGlzLl9ocCAqIDEwMCAvIHRoaXMucHJvdG90eXBlLmhwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSHAoY291bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLl9ocCArIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QWRlcXVhdGVIcChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY291bnQgPiB0aGlzLnByb3RvdHlwZS5ocCkgcmV0dXJuIHRoaXMucHJvdG90eXBlLmhwO1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hbmEoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSB0aGlzLmdldEFkZXF1YXRlTWFuYShjb3VudCk7XHJcbiAgICAgICAgdGhpcy5fY2FyZC5zZXRNYW5hV2lkdGgodGhpcy5fbWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLl9tYW5hICsgY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZU1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShlZmZlY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FyZC50dXJuT24oZWZmZWN0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzYWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FyZC50dXJuT2ZmKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4vRmlnaHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0ZXJDYXJkIHtcclxuICAgIHByb3RlY3RlZCAkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJlbmVteSBuYW1lXCIsIG1vdHRvID0gXCJtb3R0b1wiKSB7XHJcbiAgICAgICAgdGhpcy4kY2FyZCA9IHRoaXMuJGluaXRpYWxpemVDYXJkKG5hbWUsIG1vdHRvKTtcclxuICAgICAgICB0aGlzLiRnZXRNZW51KCkuYXBwZW5kKHRoaXMuJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCAkZ2V0TWVudSgpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gJCgnI2VuZW1pZXMtbWVudScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgJGluaXRpYWxpemVDYXJkKG5hbWU6IHN0cmluZywgbW90dG86IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNmaWdodGVyLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwobmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LW1vdHRvJykuaHRtbChtb3R0byk7XHJcbiAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHJldHVybiAkY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SHBXaWR0aChwZXJjZW50czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgcGVyY2VudHMgPSB0aGlzLmdldFJlYWxQZXJjZW50cyhwZXJjZW50cyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcuaHAtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1hbmFXaWR0aChwZXJjZW50czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgcGVyY2VudHMgPSB0aGlzLmdldFJlYWxQZXJjZW50cyhwZXJjZW50cyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlYWxQZXJjZW50cyhwZXJjZW50czogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAocGVyY2VudHMgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAocGVyY2VudHMgPiAxMDApIHJldHVybiAxMDA7XHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0dXJuT24oZWZmZWN0OiBGdW5jdGlvbiwgb3duZXI6IEZpZ2h0ZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBlZmZlY3Qob3duZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hdHRyKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PZmYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vZmYoXCJjbGljayBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIik7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hdHRyKCdyb2xlJywgJycpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYmctbGlnaHQnKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0ZXJQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIHB1YmxpYyBocDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgbWFuYTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgc2tpbGxzOiBudW1iZXJbXSwgXHJcbiAgICAgICAgcHVibGljIG1vdHRvOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBIZXJvUHJvdG90eXBlIH0gZnJvbSBcIi4vSGVyb1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgSGVyb0NhcmQgfSBmcm9tIFwiLi9IZXJvQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL1BlcmtcIjtcclxuaW1wb3J0IHsgT25IZXJvUGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Pbkhlcm9QZXJrXCI7XHJcbmltcG9ydCB7IE9uRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL09uRW5lbXlQZXJrXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uLy4uL1N0b3JlL1N0b3JlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVybyBleHRlbmRzIEZpZ2h0ZXIge1xyXG4gICAgcHJpdmF0ZSBfcGVya3M6IEFycmF5PFBlcms+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogSGVyb1Byb3RvdHlwZSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGdhbWUpO1xyXG4gICAgICAgIHRoaXMuX3BlcmtzID0gW107IFxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBlcmtzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplUGVya3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuc2tpbGxzLmZvckVhY2gocGVya051bWJlciA9PiB7XHJcbiAgICAgICAgICAgIGlmKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLmZvclNlbGYpIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVya3MucHVzaChuZXcgT25IZXJvUGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wZXJrcy5wdXNoKG5ldyBPbkVuZW15UGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGVyb0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1ldGhvZCh0YXJnZXRNZXRob2Q6IEZ1bmN0aW9uLCBlZmZlY3RNZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGFyZ2V0TWV0aG9kKGVmZmVjdE1ldGhvZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9uRW5lbXlNZXRob2QoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hY3RpdmF0ZUVuZW1pZXMoZWZmZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPbkhlcm9NZXRob2QoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGlzYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoZWZmZWN0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW90dG86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIG1vdHRvKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdlbmVteS1jYXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjaGVyby1tZW51Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvUHJvdG90eXBlIGV4dGVuZHMgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpZDogbnVtYmVyLCBcclxuICAgICAgICBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIGhwOiBudW1iZXIsIFxyXG4gICAgICAgIG1hbmE6IG51bWJlciwgXHJcbiAgICAgICAgc2tpbGxzOiBBcnJheTxudW1iZXI+LCBcclxuICAgICAgICBtb3R0bzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBmaXJzdERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHNlY29uZERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGFuc3dlcjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFjdGlvbj86IEZ1bmN0aW9uXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUsIGhwLCBtYW5hLCBza2lsbHMsIG1vdHRvKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi9GaWdodGVycy9IZXJvL0hlcm9cIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgX2hlcm9OdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDaG9vc2VuV2luZG93KCk7XHJcbiAgICAgICAgJCgnI2J1dHRvbicpLmNsaWNrKCk7XHJcbiAgICAgICAgJCgnI3pha3JveXN5YScpLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db25maXJtKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUNob29zZW5XaW5kb3coKTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCcjY2FyZC1jb250YWluZXInKTtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoXCJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5oZXJvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCh0aGlzLmluaXRpYWxpemVPbmVDYXJkKGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQ2hvb3NlbldpbmRvd0V4Y2VwdChpbmRleDogbnVtYmVyLCAkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnI2NhcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuaGVyb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KSBcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKCRjYXJkKTtcclxuICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVPbmVDYXJkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjY2hvb3NlLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmNoaWxkcmVuKCdkaXYnKS5hdHRyKCdkYXRhLWhlcm8taWQnLCBpbmRleCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChzdG9yZS5oZXJvc1tpbmRleF0ubmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LWZpcnN0LWRlc2NyaXB0aW9uJykuaHRtbChzdG9yZS5oZXJvc1tpbmRleF0uZmlyc3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXNlY29uZC1kZXNjcmlwdGlvbicpLmh0bWwoc3RvcmUuaGVyb3NbaW5kZXhdLnNlY29uZERlc2NyaXB0aW9uKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJGNhcmQub24oJ2NsaWNrJywgKCkgPT4geyB0aGlzLmNob29zZUNhcmRPbkNsaWNrKGluZGV4LCAkY2FyZC5maW5kKCcuY2FyZCcpKSB9KTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaG9vc2VDYXJkT25DbGljayhpbmRleDogbnVtYmVyLCAkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgICQoJyNob2hvJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNob29zZW5XaW5kb3dFeGNlcHQoaW5kZXgsICRjYXJkLnBhcmVudCgpKTtcclxuICAgICAgICAkY2FyZC5hZGRDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICB0aGlzLl9oZXJvTnVtYmVyID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5zZXRSZWFjdGlvbihzdG9yZS5oZXJvc1tpbmRleF0uYW5zd2VyLCBzdG9yZS5oZXJvc1tpbmRleF0/LnJlYWN0aW9uLCAkY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRSZWFjdGlvbihzdHJpbmc6IHN0cmluZywgbWV0aG9kPzogRnVuY3Rpb24sICRjYXJkPzogSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgJCgnI3JlYWN0aW9uJykuaHRtbChzdHJpbmcpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnZnVuY3Rpb24nKSBcclxuICAgICAgICAgICAgbWV0aG9kKCRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGVybzogSGVybztcclxuICAgIHB1YmxpYyBlbmVtaWVzOiBBcnJheTxFbmVteT47XHJcblxyXG4gICAgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgICAgICQoJyNidXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9oZXJvTnVtYmVyID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oc3RvcmUuaGVyb3NbdGhpcy5faGVyb051bWJlcl0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUVuZW1pZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykgdGhpcy5hZGRFbmVteSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEVuZW15KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteShzdG9yZS5lbmVtaWVzW1V0aWwucmFuZG9tSW50KDAsIHN0b3JlLmVuZW1pZXMubGVuZ3RoKV0sIHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUVuZW1pZXMoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmFjdGl2YXRlKGVmZmVjdCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWN0aXZhdGVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmRpc2FjdGl2YXRlKCkgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmxldCBnYW1lOiBHYW1lO1xyXG5cclxuZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbn1cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIG9uTG9hZCk7XHJcblxyXG5mdW5jdGlvbiByYW5kb21JbnQobWluID0gMCwgbWF4ID0gMTAwKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbn1cclxuXHJcbmxldCBfID0gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gKCkgPT4gXHJcbidOYWRvZWxpIHV6aGUgc28gc3ZvaW1pIHNrb2JrYW1pIHByZWtyYXRpdGUgcG96aGx1aXN0YSciLCJpbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4vUGVya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uRW5lbXlQZXJrIGV4dGVuZHMgUGVyayB7XHJcblxyXG59IiwiaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuL1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkhlcm9QZXJrIGV4dGVuZHMgUGVyayB7XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0T25jbGlja1R5cGUoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlcm8uZ2V0T25IZXJvTWV0aG9kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQZXJrQ2FyZCB9IGZyb20gXCIuL1BlcmtDYXJkXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyayB7XHJcbiAgICBwcml2YXRlIF9jYXJkOiBQZXJrQ2FyZDtcclxuICAgIHByaXZhdGUgX21hbmE6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcHJvdG90eXBlOiBQZXJrUHJvdG90eXBlLCBcclxuICAgICAgICBwcm90ZWN0ZWQgaGVybzogSGVybyxcclxuICAgICAgICBwcml2YXRlIF9nYW1lOiBHYW1lXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5fY2FyZCA9IHRoaXMuY3JlYXRlQ2FyZChwcm90b3R5cGUpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0T25jbGljayh0aGlzLmdldE9uY2xpY2soKSk7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLmFkZE1hbmEoMSk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDApO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBQZXJrUHJvdG90eXBlKTogUGVya0NhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGVya0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFuYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRSZWFsTWFuYShjb3VudCk7XHJcbiAgICAgICAgdGhpcy5fY2FyZC5zZXRQcm9ncmVzc1dpZHRoKHRoaXMubWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLm1hbmEgKyBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJlYWxNYW5hKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjb3VudCA+IHRoaXMucHJvdG90eXBlLm1hbmEpIHJldHVybiB0aGlzLnByb3RvdHlwZS5tYW5hO1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T25jbGljaygpOiBGdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMuaGVyby5zZXRNZXRob2QodGhpcy5nZXRPbmNsaWNrVHlwZSgpLCBcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlcikgPT4geyBcclxuICAgICAgICAgICAgICAgIHRoaXMubWFuYSA9IDA7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuZWZmZWN0KHRhcmdldCwgdGhpcy5oZXJvLCB0aGlzLl9nYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUuZGlzYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm8uZGlzYWN0aXZhdGUoKTsgXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgKX1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T25jbGlja1R5cGUoKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlcm8uZ2V0T25FbmVteU1ldGhvZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0lDYXJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVya0NhcmQgaW1wbGVtZW50cyBJQ2FyZCB7XHJcbiAgICBwcml2YXRlIF8kY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgX29uY2xpY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcInBlcmsgbmFtZVwiLCBpbmZvID0gXCJpbmZvXCIpIHtcclxuICAgICAgICB0aGlzLl8kY2FyZCA9IHRoaXMuJGluaXRpYWxpemVDYXJkKG5hbWUsIGluZm8pO1xyXG4gICAgICAgICQoJyNoZXJvLW1lbnUnKS5hcHBlbmQodGhpcy5fJGNhcmQpO1xyXG4gICAgICAgIHRoaXMuX29uY2xpY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICRpbml0aWFsaXplQ2FyZChuYW1lOiBzdHJpbmcsIGluZm86IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNwZXJrLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwobmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LWluZm8nKS5odG1sKGluZm8pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T25jbGljayhtZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25jbGljayA9IG1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzc1dpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLl8kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgICAgICBpZiAocGVyY2VudHMgPj0gMTAwKSB0aGlzLnR1cm5PbigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy50dXJuT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuXyRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcpO1xyXG4gICAgICAgIHRoaXMuXyRjYXJkLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcucGVyay1jYXJkJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuXyRjYXJkLmFkZENsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fJGNhcmQub24oXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fJGNhcmQuYXR0cigncm9sZScsICdidXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuXyRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcpO1xyXG4gICAgICAgIHRoaXMuXyRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLl8kY2FyZC5hdHRyKCdyb2xlJywgJycpO1xyXG4gICAgICAgIHRoaXMuXyRjYXJkLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBlcmtQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbWFuYTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBpbmZvOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGVmZmVjdDogRnVuY3Rpb24sXHJcbiAgICAgICAgcHVibGljIGZvclNlbGY6IGJvb2xlYW5cclxuICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSGVyb1Byb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVycy9IZXJvL0hlcm9Qcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi4vUGVya3MvUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGxldCBzdG9yZSA9IHtcclxuICAgIGhlcm9zOiBbXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoMCwgJ9Ca0YPQutGD0LzQsdC10YAnLCA1MDAsIDEwMCwgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAn0JLRgdC10YUg0LfQsNC60YPQutGD0LzQsdGA0Y4hJyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0JfQtdC70ZHQvdGL0Lk8L3NwYW4+LCDQv9GD0L/Ri9GA0YfQsNGC0YvQuSwg0LvRjtCx0LjRgiwg0LrQvtCz0LTQsCDQtdCz0L4g0LrRg9GB0LDRjtGCJyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC60YDQsNGB0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9Cl0L7RhdC+LCDRhdC10YXQtdC5ISDQryDRgtC10LHRjyA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LDQutGD0LrRg9C80LHRgNGOPC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHsgXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLXN1Y2Nlc3MgdGV4dC13aGl0ZVwiKVxyXG4gICAgICAgICAgICAgICAgJGNhcmQuZmluZChcInNwYW5cIikucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhcInRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKDEsICfQn9C+0LzQuNC00L7RgNC40YPRgScsIDMwMCwgMjAwLCBbMCwgMiwgM10sXHJcbiAgICAgICAgICAgICfQryDQutGA0LDRgdC90LXRjicsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0JrRgNCw0YHQvdGL0Lk8L3NwYW4+LCDQs9C70LDQtNC60LjQuSwg0YLQstC+0LknLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9CQ0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0YXQsNGF0LDRhdCw0YXQsNGF0LDRhScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4geyBcclxuICAgICAgICAgICAgICAgICRjYXJkLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5hZGRDbGFzcyhcImJnLXRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy1saWdodCB0ZXh0LWRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcyhcImJnLXRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICBVdGlsLnNsZWVwKDIwMDApLnRoZW4oKCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAkY2FyZC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImJnLWRhcmsgdGV4dC13aGl0ZVwiKTsgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKDIsICfQlNGL0L3Rh9GD0L3QtNGD0LonLCA1MDAsIDEwMCwgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAn0JrQsNC6INGPINGB0Y7QtNCwINC/0L7Qv9Cw0LsnLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj7QltGR0LvRgtGL0Lk8L3NwYW4+LCDQv9C+0L/QsNC7INGB0Y7QtNCwINGB0LvRg9GH0LDQudC90L4nLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0LfQtdC70ZHQvdGL0Lk8L3NwYW4+ISDQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LrRgNCw0YHQvdGL0Lk8L3NwYW4+IScsXHJcbiAgICAgICAgICAgICfQnNC+0LvRjiDRgtC10LHRjyEnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHsgXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgICRjYXJkLmZpbmQoXCIudGV4dC13YXJuaW5nXCIpLnJlbW92ZUNsYXNzKFwidGV4dC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoMywgJzxzcGFuIGNsYXNzPVwiYmctc3VjY2VzcyB0ZXh0LWxpZ2h0XCI+0J7Qs9GD0YDRhtCw0L08L3NwYW4+JywgMTAwMCwgNTAsIFsxLCAyLCAzXSxcclxuICAgICAgICAgICAgJ9Cf0YPQvNC/0YPRgNGD0LzQv9GD0LwnLFxyXG4gICAgICAgICAgICAn0J3QtSDQv9GD0YLQsNGC0Ywg0YEg0JrRg9C60YPQvNCx0LXRgNC+0LwhJyxcclxuICAgICAgICAgICAgJ9Ci0L7QttC1IDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LfQtdC70ZHQvdGL0Lk8L3NwYW4+LCDQvdC+INC90LUg0JrRg9C60YPQvNCx0LXRgCEnLFxyXG4gICAgICAgICAgICAn0J3QtSDQstC30LTRg9C80LDQuSDRgdC60LDQt9Cw0YLRjCwg0YfRgtC+INGPIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0JrRg9C60YPQvNCx0LXRgDwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgZmlyZXdvcmtzKCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZSg0LCAn0JDRgNCx0YPQt9C+0L0nLCA1MDAsIDEwMCwgWzAsIDEsIDJdLFxyXG4gICAgICAgICAgICAn0J/RiNC/0YjQv9GI0L8nLFxyXG4gICAgICAgICAgICAn0KHQsNC80YvQuSA8Yj7QsdC+0LvRjNGI0L7QuTwvYj4nLFxyXG4gICAgICAgICAgICAn0KHQsNC80YvQuSDRgdC/0LXQu9GL0LknLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qn9C+0YLRgNGP0YHQuCDQvNC10L3RjyE8L3NwYW4+JylcclxuICAgIF0sXHJcbiAgICBlbmVtaWVzOiBbXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoMCwgJ9Ci0LLQsNGA0YwnLCA1MDAsIDEwMCwgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBib3JkZXItZGFuZ2VyXCI+0J3QtdC90LDQstC40LbRgyE8L3NwYW4+JyksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoMCwgJ9Cd0LjRh9GC0L7QttC10YHRgtCy0L4nLCA1MDAsIDEwMCwgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAn0JDQs9GA0YUhJyksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoMCwgJ9Cj0LHQu9GO0LTQvtC6JywgNTAwLCAxMDAsIFswLCAxLCAzXSxcclxuICAgICAgICAgICAgJ9Cj0L/RhCcpLFxyXG4gICAgICAgIG5ldyBGaWdodGVyUHJvdG90eXBlKDAsICfQnNGA0LDQt9GMJywgNTAwLCAxMDAsIFswLCAxLCAzXSxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXIgYm9yZGVyLWRhbmdlclwiPtCV0YXQtdGF0LXQtdGF0LXRhTwvc3Bhbj4nKSxcclxuICAgIF0sXHJcbiAgICBwZXJrczogW1xyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKDAsICfQktC30YDRi9CyJywgMTAwLCAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC+0LTQvdC+0LPQviDQstGA0LDQs9CwJywgXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZEhwKC0xMDApOyBcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLTIwKTsgXHJcbiAgICAgICAgICAgIH0sIGZhbHNlKSxcclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZSgxLCAn0JzQvtC70L3QuNGPJywgMzAsICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0LLRgdC10YUnLCBcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIsIGdhbWU6IEdhbWUpID0+IHsgXHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRNYW5hKC01MCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IChlbmVteS5hZGRIcCgtNzApKSk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKSxcclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZSgyLCAn0JvQtdGH0LXQvdC40LUnLCA1MCwgJ9Cd0LjQutC+0LPQviDQvdC1INC/0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCcsIFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4geyBcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCg1MCk7IFxyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkTWFuYSgtNTApOyBcclxuICAgICAgICAgICAgfSwgdHJ1ZSksXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoMywgJ9CW0LXRgNGC0LLQsCcsIDcwLCAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINGB0LDQvNC+0LPQviDRgdC10LHRjycsIFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4geyBcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRNYW5hKDUwKTsgXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoLTUwKTtcclxuICAgICAgICAgICAgfSwgdHJ1ZSlcclxuICAgIF0sXHJcbn07XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaXJld29ya3MoKSB7XHJcbiAgICBsZXQgJGZpcmV3b3JrcyA9ICQoJy5maXJld29ya3MnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcclxuICAgICAgICAkZmlyZXdvcmtzLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkZmlyZXdvcmtzLm9mZnNldCh7bGVmdDogVXRpbC5yYW5kb21JbnQoMCwgNTAwKSwgdG9wOiBVdGlsLnJhbmRvbUludCgwLCA1MDApfSlcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgJGZpcmV3b3Jrcy5hZGRDbGFzcygnZC1ub25lJylcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDEwMCk7XHJcbiAgICB9XHJcbn0iXX0=
