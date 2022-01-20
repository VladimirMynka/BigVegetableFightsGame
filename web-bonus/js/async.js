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
    Util.getFormatCurrentTime = function () {
        var date = new Date();
        return "[".concat(date.getHours().toString().padStart(2, '0'), ":").concat(date.getMinutes().toString().padStart(2, '0'), ":").concat(date.getSeconds().toString().padStart(2, '0'), "]");
    };
    Util.fireworks = function () {
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
                        $fireworks.offset({ left: Util.randomInt(0, 500), top: Util.randomInt(0, 500) });
                        return [4 /*yield*/, Util.sleep(500)];
                    case 2:
                        _a.sent();
                        $fireworks.addClass('d-none');
                        return [4 /*yield*/, Util.sleep(100)];
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
    };
    Util.getImagesPaths = function (number, count) {
        return Array.apply(null, { length: count }).map(function (unused, index) {
            return "./images/animation/".concat(number, "/image_part_").concat((index + 1).toString().padStart(3, '0'), ".png");
        });
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
exports.Enemy = void 0;
var Fighter_1 = require("../Fighter");
var EnemyCard_1 = require("./EnemyCard");
var EnemyPerk_1 = require("../../Perks/ForEnemy/EnemyPerk");
var Store_1 = require("../../Store/Store");
var Util_1 = require("../../Common/Util");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(prototype, game) {
        return _super.call(this, prototype, game) || this;
    }
    Enemy.prototype.initializePerks = function () {
        var _this = this;
        this.prototype.skills.forEach(function (perkNumber) {
            _this.perks.push(new EnemyPerk_1.EnemyPerk(Store_1.store.perks[perkNumber], _this, _this.game));
        });
    };
    Enemy.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.game.gameEnded)
                    return [2 /*return*/];
                if (Util_1.Util.randomInt(0, 100) < 5)
                    this.perks[Util_1.Util.randomInt(0, this.perks.length)].apply();
                _super.prototype.update.call(this);
                return [2 /*return*/];
            });
        });
    };
    Enemy.prototype.createCard = function (prototype) {
        return new EnemyCard_1.EnemyCard(prototype.name, prototype.motto);
    };
    Enemy.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.game.increaseKilledCount();
    };
    return Enemy;
}(Fighter_1.Fighter));
exports.Enemy = Enemy;
},{"../../Common/Util":2,"../../Perks/ForEnemy/EnemyPerk":13,"../../Store/Store":21,"../Fighter":5,"./EnemyCard":4}],4:[function(require,module,exports){
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
var Store_1 = require("../Store/Store");
var Fighter = /** @class */ (function () {
    function Fighter(prototype, game) {
        this.prototype = prototype;
        this.game = game;
        this.card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
        this.perks = [];
        this.initializePerks();
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
        this.game.addLog(this, this, Store_1.store.diedLog);
        document.removeEventListener('keydown', handler);
        document.addEventListener('keydown', handler);
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
        var startHp = this._hp;
        this.hp = this._hp + count;
        return this._hp - startHp;
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
        var startMana = this._mana;
        this.mana = this._mana + count;
        return this._mana - startMana;
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
    Fighter.prototype.getCard = function () {
        return this.card;
    };
    Fighter.prototype.getCoords = function () {
        return this.card.getCoords();
    };
    return Fighter;
}());
exports.Fighter = Fighter;
function handler(event) {
    if (event.code == 'KeyF') {
        document.removeEventListener('keydown', handler);
        Util_1.Util.fireworks();
    }
}
},{"../Common/Util":2,"../Store/Store":21,"./FighterCard":6}],6:[function(require,module,exports){
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
var OnHeroPerk_1 = require("../../Perks/ForHero/OnHeroPerk");
var OnEnemyPerk_1 = require("../../Perks/ForHero/OnEnemyPerk");
var Store_1 = require("../../Store/Store");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(prototype, game) {
        return _super.call(this, prototype, game) || this;
    }
    Hero.prototype.initializePerks = function () {
        var _this = this;
        this.prototype.skills.forEach(function (perkNumber) {
            if (Store_1.store.perks[perkNumber].forSelf)
                _this.perks.push(new OnHeroPerk_1.OnHeroPerk(Store_1.store.perks[perkNumber], _this, _this.game));
            else
                _this.perks.push(new OnEnemyPerk_1.OnEnemyPerk(Store_1.store.perks[perkNumber], _this, _this.game));
        });
    };
    Hero.prototype.createCard = function (prototype) {
        return new HeroCard_1.HeroCard(prototype.name, prototype.motto);
    };
    Hero.prototype.setMethod = function (targetMethod, effectMethod) {
        targetMethod(effectMethod);
    };
    Hero.prototype.sayManaLacking = function () {
        this.card.drawManaLacking();
    };
    Hero.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.game.gameEnded = true;
        this.game.heroWon = false;
    };
    return Hero;
}(Fighter_1.Fighter));
exports.Hero = Hero;
},{"../../Perks/ForHero/OnEnemyPerk":15,"../../Perks/ForHero/OnHeroPerk":16,"../../Store/Store":21,"../Fighter":5,"./HeroCard":9}],9:[function(require,module,exports){
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
        this.heroWon = true;
        this._killedEnemiesCount = 0;
        this._score = 0;
        this.initializeChoosenWindow();
        $('#button').click();
        $('#game-start-button').on('click', function () { return _this.onConfirm(); });
        $('#new-game-button').on('click', function () { return window.location.reload(); });
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
        $('#confirm-menu').removeClass('d-none');
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
        this.initializeEnemies();
        this.update();
        this.initializeGameTimer();
    };
    Game.prototype.initializeEnemies = function () {
        this.enemies = [];
        for (var i = 0; i < Store_1.store.startEnemyCount; i++)
            this.addEnemy();
    };
    Game.prototype.addEnemy = function () {
        this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[Util_1.Util.randomInt(0, Store_1.store.enemies.length)], this));
    };
    Game.prototype.increaseKilledCount = function () {
        this._killedEnemiesCount++;
        $('#enemy-count').text(this._killedEnemiesCount);
        this.addScore(1000);
    };
    Game.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.gameEnded) {
                            this.endGame();
                            return [2 /*return*/];
                        }
                        if (this.enemies.length < Store_1.store.enemiesMaxCount && Util_1.Util.randomInt(0, 100) < this.calculateAddingChance())
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
    Game.prototype.endGame = function () {
        var $endModal = $('#myModal2');
        $endModal.find('.modal-title').text(this.heroWon ? "You won!" : "You lost...");
        var $result = $('.progress-menu').clone().removeClass('col-8');
        $result.find('.mt-5').removeClass('mt-5');
        $endModal.find('.modal-body').append($result);
        $('#button2').click();
    };
    Game.prototype.calculateAddingChance = function () {
        if (this.enemies.length === 0)
            return 100;
        var mc = Store_1.store.enemiesMaxCount;
        var tc = this.enemies.length;
        var min = Store_1.store.minAddEnemyChance;
        var max = Store_1.store.maxAddEnemyChance;
        return (mc - tc) / mc * (max - min) + min;
    };
    Game.prototype.initializeGameTimer = function () {
        this._timeToEnd = Store_1.store.gameTiming * 60;
        this.doTick();
    };
    Game.prototype.doTick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var seconds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._timeToEnd <= 0 || this.gameEnded) {
                            if (this._timeToEnd <= 0)
                                $('#time').removeClass('text-danger').addClass('text-success');
                            this.gameEnded = true;
                            return [2 /*return*/];
                        }
                        this._timeToEnd--;
                        seconds = this._timeToEnd % 60;
                        $('#time').text("".concat((this._timeToEnd - seconds) / 60, ":").concat(seconds.toString().padStart(2, '0')));
                        if (this._timeToEnd <= 30)
                            $('#time').addClass('text-danger');
                        return [4 /*yield*/, Util_1.Util.sleep(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.doTick()];
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
    Game.prototype.addLog = function (maker, target, actionDescription) {
        var $actionLog = $("<div>\n        ".concat(Util_1.Util.getFormatCurrentTime(), " <b>").concat(maker.prototype.name, "</b> ").concat(actionDescription, " <b>").concat(target == maker ? '' : target.prototype.name, "</b>\n        </div>"));
        $('#logs').prepend($actionLog);
    };
    Game.prototype.addScore = function (count) {
        this._score += count;
        $('#score').text(this._score);
    };
    return Game;
}());
exports.Game = Game;
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/Hero/Hero":8,"../Store/Store":21}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var game;
function onLoad() {
    game = new Game_1.Game();
}
$(window).on('load', onLoad);
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
exports.EnemyPerk = void 0;
var Perk_1 = require("../Perk");
var PerkAnimation_1 = require("../PerkAnimation");
var EnemyPerk = /** @class */ (function (_super) {
    __extends(EnemyPerk, _super);
    function EnemyPerk(prototype, owner, game) {
        var _this = _super.call(this, prototype, owner, game) || this;
        if (_this.prototype.animationPaths != null)
            _this.animation = new PerkAnimation_1.PerkAnimation(owner.getCard(), prototype === null || prototype === void 0 ? void 0 : prototype.animationPaths);
        _this.update();
        return _this;
    }
    EnemyPerk.prototype.apply = function () {
        var target = this.prototype.forSelf ? this.owner : this.game.hero;
        this.applyEffect(target);
    };
    return EnemyPerk;
}(Perk_1.Perk));
exports.EnemyPerk = EnemyPerk;
},{"../Perk":17,"../PerkAnimation":18}],14:[function(require,module,exports){
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
exports.HeroPerk = void 0;
var PerkCard_1 = require("../PerkCard");
var PerkAnimation_1 = require("../PerkAnimation");
var Perk_1 = require("../Perk");
var HeroPerk = /** @class */ (function (_super) {
    __extends(HeroPerk, _super);
    function HeroPerk(prototype, hero, game) {
        var _this = _super.call(this, prototype, hero, game) || this;
        _this._card = _this.createCard(prototype);
        _this._card.setOnclick(_this.getOnclick());
        if (_this.prototype.animationPaths != null)
            _this.animation = new PerkAnimation_1.PerkAnimation(_this._card, prototype === null || prototype === void 0 ? void 0 : prototype.animationPaths);
        _this.update();
        return _this;
    }
    HeroPerk.prototype.createCard = function (prototype) {
        return new PerkCard_1.PerkCard(prototype.name, prototype.info);
    };
    HeroPerk.prototype.setMana = function (count) {
        _super.prototype.setMana.call(this, count);
        this._card.setProgressWidth(this.mana * 100 / this.prototype.mana);
    };
    HeroPerk.prototype.getOnclick = function () {
        var _this = this;
        return function () {
            _this.getActivator()(function (target) {
                if (_this.prototype.fighterManaDemand > _this.owner.mana) {
                    _this.owner.sayManaLacking();
                    return;
                }
                _this.applyEffect(target);
            });
        };
    };
    HeroPerk.prototype.applyEffect = function (target) {
        if (this.canBeApplied) {
            _super.prototype.applyEffect.call(this, target);
            this.game.addScore(this.prototype.score);
            this.game.disactivateEnemies();
            this.owner.disactivate();
        }
    };
    HeroPerk.prototype.getOnEnemyMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.owner.disactivate();
            _this.game.activateEnemies(onClickFunction);
        };
    };
    HeroPerk.prototype.getOnHeroMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.game.disactivateEnemies();
            _this.owner.activate(onClickFunction);
        };
    };
    return HeroPerk;
}(Perk_1.Perk));
exports.HeroPerk = HeroPerk;
},{"../Perk":17,"../PerkAnimation":18,"../PerkCard":19}],15:[function(require,module,exports){
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
var HeroPerk_1 = require("./HeroPerk");
var OnEnemyPerk = /** @class */ (function (_super) {
    __extends(OnEnemyPerk, _super);
    function OnEnemyPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnEnemyPerk.prototype.getActivator = function () {
        return this.getOnEnemyMethod();
    };
    return OnEnemyPerk;
}(HeroPerk_1.HeroPerk));
exports.OnEnemyPerk = OnEnemyPerk;
},{"./HeroPerk":14}],16:[function(require,module,exports){
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
var HeroPerk_1 = require("./HeroPerk");
var OnHeroPerk = /** @class */ (function (_super) {
    __extends(OnHeroPerk, _super);
    function OnHeroPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnHeroPerk.prototype.getActivator = function () {
        return this.getOnHeroMethod();
    };
    return OnHeroPerk;
}(HeroPerk_1.HeroPerk));
exports.OnHeroPerk = OnHeroPerk;
},{"./HeroPerk":14}],17:[function(require,module,exports){
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
    function Perk(prototype, owner, game) {
        this.prototype = prototype;
        this.owner = owner;
        this.game = game;
        this._mana = 0;
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
            this.setMana(count);
        },
        enumerable: false,
        configurable: true
    });
    Perk.prototype.setMana = function (count) {
        this._mana = this.getRealMana(count);
    };
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
    Perk.prototype.applyEffect = function (target) {
        var _this = this;
        if (!this.canBeApplied())
            return;
        this.mana = 0;
        this.owner.addMana(-this.prototype.fighterManaDemand);
        if (this.animation != null)
            this.animation.animate(target.getCoords()).then(function () {
                _this.prototype.effect(target, _this.owner, _this.game);
            });
        else
            this.prototype.effect(target, this.owner, this.game);
        this.game.addLog(this.owner, target, this.prototype.actionString);
    };
    Perk.prototype.canBeApplied = function () {
        return this.mana >= this.prototype.mana && this.owner.mana >= this.prototype.fighterManaDemand;
    };
    return Perk;
}());
exports.Perk = Perk;
},{"../Common/Util":2,"./PerkCard":19}],18:[function(require,module,exports){
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
    function PerkAnimation(startPointHandler, imagesPaths) {
        this.startPointHandler = startPointHandler;
        this.imagesPaths = imagesPaths;
    }
    PerkAnimation.prototype.animate = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var $original, $animation, index, imagePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $original = $('.animation');
                        $animation = $original.clone().removeClass('animation');
                        $original.after($animation);
                        $animation.removeClass('d-none');
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < this.imagesPaths.length)) return [3 /*break*/, 4];
                        imagePath = this.imagesPaths[index];
                        $animation.attr('src', imagePath);
                        $animation.offset({
                            left: this.startPointHandler.getCoords().left + (endpoint.left - this.startPointHandler.getCoords().left) * index / (this.imagesPaths.length),
                            top: this.startPointHandler.getCoords().top + (endpoint.top - this.startPointHandler.getCoords().top) * index / (this.imagesPaths.length)
                        });
                        return [4 /*yield*/, Util_1.Util.sleep(500 / this.imagesPaths.length)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4:
                        $animation.remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PerkAnimation;
}());
exports.PerkAnimation = PerkAnimation;
},{"../Common/Util":2}],19:[function(require,module,exports){
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
},{"../Common/GameCard":1}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkPrototype = void 0;
var PerkPrototype = /** @class */ (function () {
    function PerkPrototype(id, name, mana, fighterManaDemand, info, effect, forSelf, actionString, score, animationPaths) {
        this.id = id;
        this.name = name;
        this.mana = mana;
        this.fighterManaDemand = fighterManaDemand;
        this.info = info;
        this.effect = effect;
        this.forSelf = forSelf;
        this.actionString = actionString;
        this.score = score;
        this.animationPaths = animationPaths;
    }
    return PerkPrototype;
}());
exports.PerkPrototype = PerkPrototype;
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var HeroPrototype_1 = require("../Fighters/Hero/HeroPrototype");
var FighterPrototype_1 = require("../Fighters/FighterPrototype");
var PerkPrototype_1 = require("../Perks/PerkPrototype");
var Util_1 = require("../Common/Util");
exports.store = {
    enemiesMaxCount: 12,
    minAddEnemyChance: 15,
    maxAddEnemyChance: 35,
    gameTiming: 3,
    startEnemyCount: 1,
    diedLog: '<span class="text-danger">погиб.</span> Press F to pay respect',
    heros: [
        new HeroPrototype_1.HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!', function ($card) {
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
            Util_1.Util.fireworks();
        }),
        new HeroPrototype_1.HeroPrototype(4, 'Арбузон', 500, 100, [0, 1, 2], 'Пшпшпшп', 'Самый <b>большой</b>', 'Самый спелый', '<span class="text-success">Потряси меня!</span>')
    ],
    enemies: [
        new FighterPrototype_1.FighterPrototype(0, 'Редисон', 500, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
        new FighterPrototype_1.FighterPrototype(0, 'Баклажун', 500, 100, [0, 1, 5, 7], 'Агрх!'),
        new FighterPrototype_1.FighterPrototype(0, 'Томатус', 500, 100, [0, 1, 5], 'Упф'),
        new FighterPrototype_1.FighterPrototype(0, 'Тыквин', 500, 100, [0, 1, 4], '<span class="text-danger border-danger">Ехехеехех</span>'),
    ],
    perks: [
        new PerkPrototype_1.PerkPrototype(0, 'Пропуск хода', 1, 0, '', function () { }, true, 'пропустил ход', 0),
        new PerkPrototype_1.PerkPrototype(1, 'Взрыв', 50, 20, 'Пытается убить одного врага', function (target) { target.addHp(-100); }, false, 'бахнул взрывом по', 50, Util_1.Util.getImagesPaths(1, 25)),
        new PerkPrototype_1.PerkPrototype(2, 'Молния', 30, 50, 'Пытается убить всех', function (target, owner, game) {
            game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
        }, false, 'бахнул молнией по всем, в том числе по', 120, Util_1.Util.getImagesPaths(2, 6)),
        new PerkPrototype_1.PerkPrototype(3, 'Лечение', 50, 50, 'Никого не пытается убить', function (target, owner) {
            target.addHp(150);
        }, true, 'подлечился лечением', 50, Util_1.Util.getImagesPaths(3, 13)),
        new PerkPrototype_1.PerkPrototype(4, 'Жертва', 70, 0, 'Пытается убить самого себя', function (target, owner) {
            target.addMana(100);
            target.addHp(-50);
        }, true, 'предпринял попытку суицида и восстановил манну', 50, Util_1.Util.getImagesPaths(4, 20)),
        new PerkPrototype_1.PerkPrototype(5, 'Кража жизни', 30, 20, 'Пытается убить во благо', function (target, owner) {
            owner.addHp(-target.addHp(-50));
        }, false, 'отнял жизни у', 30, Util_1.Util.getImagesPaths(5, 9)),
        new PerkPrototype_1.PerkPrototype(6, 'Вихрь', 30, 50, 'Пытается убить окружение врага', function (target, owner, game) {
            var enemy = target;
            enemy.addHp(-200);
            var index = game.enemies.indexOf(enemy);
            if (index > 0)
                game.enemies[index - 1].addHp(-100);
            if (index < game.enemies.length - 1)
                game.enemies[index + 1].addHp(-100);
        }, false, 'бахнул вихрем по соседям, да и по самому', 120, Util_1.Util.getImagesPaths(6, 25)),
        new PerkPrototype_1.PerkPrototype(7, 'Кража маны', 100, 0, 'Пытается убить посредственно', function (target, owner, game) {
            owner.addMana(-target.addMana(-200));
        }, false, 'украл ману у', 50, Util_1.Util.getImagesPaths(7, 26)),
        new PerkPrototype_1.PerkPrototype(8, 'Большой и глупый вред себе', 1, 0, '(тестовое)', function (target, owner) {
            owner.addHp(-300);
            owner.addMana(-300);
        }, true, 'очень глупый', 500)
    ],
};
},{"../Common/Util":2,"../Fighters/FighterPrototype":7,"../Fighters/Hero/HeroPrototype":10,"../Perks/PerkPrototype":20}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9UU2NyaXB0QXN5bmMvQ29tbW9uL0dhbWVDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL0NvbW1vbi9VdGlsLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0VuZW15L0VuZW15Q2FyZC50cyIsImpzL1RTY3JpcHRBc3luYy9GaWdodGVycy9GaWdodGVyLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGUudHMiLCJqcy9UU2NyaXB0QXN5bmMvRmlnaHRlcnMvSGVyby9IZXJvLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJqcy9UU2NyaXB0QXN5bmMvRmlnaHRlcnMvSGVyby9IZXJvUHJvdG90eXBlLnRzIiwianMvVFNjcmlwdEFzeW5jL01haW4vR2FtZS50cyIsImpzL1RTY3JpcHRBc3luYy9NYWluL1Byb2dyYW0udHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvRm9yRW5lbXkvRW5lbXlQZXJrLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL0Zvckhlcm8vSGVyb1BlcmsudHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvRm9ySGVyby9PbkVuZW15UGVyay50cyIsImpzL1RTY3JpcHRBc3luYy9QZXJrcy9Gb3JIZXJvL09uSGVyb1BlcmsudHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvUGVyay50cyIsImpzL1RTY3JpcHRBc3luYy9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL1BlcmtDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL1BlcmtQcm90b3R5cGUudHMiLCJqcy9UU2NyaXB0QXN5bmMvU3Rv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Y0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDN0I7UUFFRCxJQUFJLDZCQUFhLENBQ2IsQ0FBQyxFQUNELDRCQUE0QixFQUM1QixDQUFDLEVBQ0QsQ0FBQyxFQUNELFlBQVksRUFDWixVQUFDLE1BQWUsRUFBRSxLQUFjO1lBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUNELElBQUksRUFDSixjQUFjLEVBQ2QsR0FBRyxDQUNOO0tBQ0o7Q0FDSixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhcmQge1xyXG4gICAgcHJvdGVjdGVkICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKToge2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kY2FyZC5vZmZzZXQoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVdGlsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dW5rbm93bj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnQobWluID0gMCwgbWF4ID0gMTAwKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Rm9ybWF0Q3VycmVudFRpbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIGBbJHtkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke2RhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBmaXJld29ya3MoKSB7XHJcbiAgICAgICAgbGV0ICRmaXJld29ya3MgPSAkKCcuZmlyZXdvcmtzJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICRmaXJld29ya3Mub2Zmc2V0KHsgbGVmdDogVXRpbC5yYW5kb21JbnQoMCwgNTAwKSwgdG9wOiBVdGlsLnJhbmRvbUludCgwLCA1MDApIH0pXHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5hZGRDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEltYWdlc1BhdGhzKG51bWJlcjogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogY291bnQgfSkubWFwKCh1bnVzZWQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYC4vaW1hZ2VzL2FuaW1hdGlvbi8ke251bWJlcn0vaW1hZ2VfcGFydF8keyhpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX0ucG5nYClcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBFbmVteUNhcmQgfSBmcm9tIFwiLi9FbmVteUNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEVuZW15UGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Gb3JFbmVteS9FbmVteVBlcmtcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi9Db21tb24vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgRmlnaHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgcGVya3M6IEVuZW15UGVya1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVQZXJrcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS5za2lsbHMuZm9yRWFjaChwZXJrTnVtYmVyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wZXJrcy5wdXNoKG5ldyBFbmVteVBlcmsoc3RvcmUucGVya3NbcGVya051bWJlcl0sIHRoaXMsIHRoaXMuZ2FtZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBhc3luYyB1cGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lRW5kZWQpIHJldHVybjtcclxuICAgICAgICBpZihVdGlsLnJhbmRvbUludCgwLCAxMDApIDwgNSlcclxuICAgICAgICAgICAgdGhpcy5wZXJrc1tVdGlsLnJhbmRvbUludCgwLCB0aGlzLnBlcmtzLmxlbmd0aCldLmFwcGx5KCk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgRW5lbXlDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUubW90dG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmluY3JlYXNlS2lsbGVkQ291bnQoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXlDYXJkIGV4dGVuZHMgRmlnaHRlckNhcmQge1xyXG5cclxufSIsImltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4vRmlnaHRlckNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuaW1wb3J0IHsgSVBvaW50IH0gZnJvbSBcIi4uL1BlcmtzL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuLi9QZXJrcy9QZXJrXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmlnaHRlciB7XHJcbiAgICBwcml2YXRlIF9ocDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbWFuYTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGNhcmQ6IEZpZ2h0ZXJDYXJkO1xyXG4gICAgcHJvdGVjdGVkIHBlcmtzOiBQZXJrW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSxcclxuICAgICAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkID0gdGhpcy5jcmVhdGVDYXJkKHByb3RvdHlwZSk7XHJcbiAgICAgICAgdGhpcy5faHAgPSBwcm90b3R5cGUuaHA7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IHByb3RvdHlwZS5tYW5hO1xyXG4gICAgICAgIHRoaXMucGVya3MgPSBbXTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVQZXJrcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXRpYWxpemVQZXJrcygpOiB2b2lkO1xyXG5cclxuICAgIHByb3RlY3RlZCBhc3luYyB1cGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaHAgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZE1hbmEoNSk7XHJcbiAgICAgICAgdGhpcy5hZGRIcCgyKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuYWRkTG9nKHRoaXMsIHRoaXMsIHN0b3JlLmRpZWRMb2cpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmlnaHRlckNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBocCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGhwKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9ocCA9IHRoaXMuZ2V0QWRlcXVhdGVIcChjb3VudCk7XHJcbiAgICAgICAgdGhpcy5jYXJkLnNldEhwV2lkdGgodGhpcy5faHAgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5ocCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhwKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdGFydEhwID0gdGhpcy5faHA7XHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMuX2hwICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hwIC0gc3RhcnRIcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFkZXF1YXRlSHAoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUuaHApIHJldHVybiB0aGlzLnByb3RvdHlwZS5ocDtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRBZGVxdWF0ZU1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5zZXRNYW5hV2lkdGgodGhpcy5fbWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdGFydE1hbmEgPSB0aGlzLl9tYW5hO1xyXG4gICAgICAgIHRoaXMubWFuYSA9IHRoaXMuX21hbmEgKyBjb3VudDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYSAtIHN0YXJ0TWFuYTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFkZXF1YXRlTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY291bnQgPiB0aGlzLnByb3RvdHlwZS5tYW5hKSByZXR1cm4gdGhpcy5wcm90b3R5cGUubWFuYTtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGl2YXRlKGVmZmVjdDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQudHVybk9uKGVmZmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FyZC50dXJuT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhcmQoKTogR2FtZUNhcmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkcygpOiBJUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQuZ2V0Q29vcmRzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUYnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgICAgIFV0aWwuZmlyZXdvcmtzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuL0ZpZ2h0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyQ2FyZCBleHRlbmRzIEdhbWVDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcImVuZW15IG5hbWVcIiwgbW90dG8gPSBcIm1vdHRvXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQgPSB0aGlzLiRpbml0aWFsaXplQ2FyZChuYW1lLCBtb3R0byk7XHJcbiAgICAgICAgdGhpcy4kZ2V0TWVudSgpLmFwcGVuZCh0aGlzLiRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgJGdldE1lbnUoKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuICQoJyNlbmVtaWVzLW1lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICRpbml0aWFsaXplQ2FyZChuYW1lOiBzdHJpbmcsIG1vdHRvOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjZmlnaHRlci1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKG5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1tb3R0bycpLmh0bWwobW90dG8pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhwV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLmhwLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNYW5hV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZWFsUGVyY2VudHMocGVyY2VudHM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzIDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID4gMTAwKSByZXR1cm4gMTAwO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9uKGVmZmVjdDogRnVuY3Rpb24sIG93bmVyOiBGaWdodGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vZmYoXCJjbGljayBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIik7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWZmZWN0KG93bmVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICdidXR0b24nKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0dXJuT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICcnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAgcHVibGljIGhwOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBtYW5hOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBza2lsbHM6IG51bWJlcltdLCBcclxuICAgICAgICBwdWJsaWMgbW90dG86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEhlcm9Qcm90b3R5cGUgfSBmcm9tIFwiLi9IZXJvUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBIZXJvQ2FyZCB9IGZyb20gXCIuL0hlcm9DYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IE9uSGVyb1BlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9Pbkhlcm9QZXJrXCI7XHJcbmltcG9ydCB7IE9uRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0Zvckhlcm8vT25FbmVteVBlcmtcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgSGVyb1BlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9IZXJvUGVya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBGaWdodGVyIHtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBwZXJrczogSGVyb1BlcmtbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IEhlcm9Qcm90b3R5cGUsXHJcbiAgICAgICAgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocHJvdG90eXBlLCBnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZVBlcmtzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnNraWxscy5mb3JFYWNoKHBlcmtOdW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZihzdG9yZS5wZXJrc1twZXJrTnVtYmVyXS5mb3JTZWxmKSBcclxuICAgICAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgT25IZXJvUGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IE9uRW5lbXlQZXJrKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIZXJvQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLm1vdHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWV0aG9kKHRhcmdldE1ldGhvZDogRnVuY3Rpb24sIGVmZmVjdE1ldGhvZDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXRNZXRob2QoZWZmZWN0TWV0aG9kKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F5TWFuYUxhY2tpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgKDxIZXJvQ2FyZD50aGlzLmNhcmQpLmRyYXdNYW5hTGFja2luZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lLmhlcm9Xb24gPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW90dG86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIG1vdHRvKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdlbmVteS1jYXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjaGVyby1tZW51Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGRyYXdNYW5hTGFja2luZygpIHtcclxuICAgICAgICBsZXQgJG1hbmFQcm9ncmVzcyA9IHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKTtcclxuICAgICAgICAkbWFuYVByb2dyZXNzLnJlbW92ZUNsYXNzKCdiZy1wcmltYXJ5JykuYWRkQ2xhc3MoJ2JnLWRhcmsnKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgJG1hbmFQcm9ncmVzcy5yZW1vdmVDbGFzcygnYmctZGFyaycpLmFkZENsYXNzKCdiZy1wcmltYXJ5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvUHJvdG90eXBlIGV4dGVuZHMgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpZDogbnVtYmVyLCBcclxuICAgICAgICBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIGhwOiBudW1iZXIsIFxyXG4gICAgICAgIG1hbmE6IG51bWJlciwgXHJcbiAgICAgICAgc2tpbGxzOiBBcnJheTxudW1iZXI+LCBcclxuICAgICAgICBtb3R0bzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBmaXJzdERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHNlY29uZERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGFuc3dlcjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFjdGlvbj86ICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4gdm9pZFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUsIGhwLCBtYW5hLCBza2lsbHMsIG1vdHRvKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi9GaWdodGVycy9IZXJvL0hlcm9cIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIF9oZXJvTnVtYmVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2FtZUVuZGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGhlcm9Xb24gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfa2lsbGVkRW5lbWllc0NvdW50ID0gMDtcclxuICAgIHByaXZhdGUgX3RpbWVUb0VuZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlcm86IEhlcm87XHJcbiAgICBwdWJsaWMgZW5lbWllczogQXJyYXk8RW5lbXk+O1xyXG4gICAgcHJpdmF0ZSBfc2NvcmUgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNob29zZW5XaW5kb3coKTtcclxuICAgICAgICAkKCcjYnV0dG9uJykuY2xpY2soKTtcclxuICAgICAgICAkKCcjZ2FtZS1zdGFydC1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29uZmlybSgpKTtcclxuICAgICAgICAkKCcjbmV3LWdhbWUtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9vc2VuV2luZG93KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnI2NhcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuaGVyb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQodGhpcy5pbml0aWFsaXplT25lQ2FyZChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUNob29zZW5XaW5kb3dFeGNlcHQoaW5kZXg6IG51bWJlciwgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICQoJyNjYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLmhlcm9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBpbmRleClcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKCRjYXJkKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQodGhpcy5pbml0aWFsaXplT25lQ2FyZChpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZU9uZUNhcmQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNjaG9vc2UtY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuY2hpbGRyZW4oJ2RpdicpLmF0dHIoJ2RhdGEtaGVyby1pZCcsIGluZGV4KTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKHN0b3JlLmhlcm9zW2luZGV4XS5uYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktZmlyc3QtZGVzY3JpcHRpb24nKS5odG1sKHN0b3JlLmhlcm9zW2luZGV4XS5maXJzdERlc2NyaXB0aW9uKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktc2Vjb25kLWRlc2NyaXB0aW9uJykuaHRtbChzdG9yZS5oZXJvc1tpbmRleF0uc2Vjb25kRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkY2FyZC5vbignY2xpY2snLCAoKSA9PiB7IHRoaXMuY2hvb3NlQ2FyZE9uQ2xpY2soaW5kZXgsICRjYXJkLmZpbmQoJy5jYXJkJykpIH0pO1xyXG4gICAgICAgIHJldHVybiAkY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNob29zZUNhcmRPbkNsaWNrKGluZGV4OiBudW1iZXIsICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgJCgnI2NvbmZpcm0tbWVudScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDaG9vc2VuV2luZG93RXhjZXB0KGluZGV4LCAkY2FyZC5wYXJlbnQoKSk7XHJcbiAgICAgICAgJGNhcmQuYWRkQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdGhpcy5faGVyb051bWJlciA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuc2V0UmVhY3Rpb24oc3RvcmUuaGVyb3NbaW5kZXhdLmFuc3dlciwgc3RvcmUuaGVyb3NbaW5kZXhdPy5yZWFjdGlvbiwgJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UmVhY3Rpb24oc3RyaW5nOiBzdHJpbmcsIG1ldGhvZD86IEZ1bmN0aW9uLCAkY2FyZD86IEpRdWVyeSk6IHZvaWQge1xyXG4gICAgICAgICQoJyNyZWFjdGlvbicpLmh0bWwoc3RyaW5nKTtcclxuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgbWV0aG9kKCRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29uZmlybSgpOiB2b2lkIHtcclxuICAgICAgICAkKCcjYnV0dG9uJykuY2xpY2soKTtcclxuICAgICAgICBpZiAodGhpcy5faGVyb051bWJlciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGVybyA9IG5ldyBIZXJvKHN0b3JlLmhlcm9zW3RoaXMuX2hlcm9OdW1iZXJdLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVFbmVtaWVzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVHYW1lVGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuc3RhcnRFbmVteUNvdW50OyBpKyspIHRoaXMuYWRkRW5lbXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEVuZW15KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteShzdG9yZS5lbmVtaWVzW1V0aWwucmFuZG9tSW50KDAsIHN0b3JlLmVuZW1pZXMubGVuZ3RoKV0sIHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VLaWxsZWRDb3VudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9raWxsZWRFbmVtaWVzQ291bnQrKztcclxuICAgICAgICAkKCcjZW5lbXktY291bnQnKS50ZXh0KHRoaXMuX2tpbGxlZEVuZW1pZXNDb3VudCk7XHJcbiAgICAgICAgdGhpcy5hZGRTY29yZSgxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCBzdG9yZS5lbmVtaWVzTWF4Q291bnQgJiYgVXRpbC5yYW5kb21JbnQoMCwgMTAwKSA8IHRoaXMuY2FsY3VsYXRlQWRkaW5nQ2hhbmNlKCkpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRW5lbXkoKTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKChlbmVteSkgPT4gZW5lbXkuaHAgPiAwKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMDApO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkZW5kTW9kYWwgPSAkKCcjbXlNb2RhbDInKTtcclxuICAgICAgICAkZW5kTW9kYWwuZmluZCgnLm1vZGFsLXRpdGxlJykudGV4dCh0aGlzLmhlcm9Xb24gPyBcIllvdSB3b24hXCIgOiBcIllvdSBsb3N0Li4uXCIpO1xyXG4gICAgICAgIGxldCAkcmVzdWx0ID0gJCgnLnByb2dyZXNzLW1lbnUnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdjb2wtOCcpO1xyXG4gICAgICAgICRyZXN1bHQuZmluZCgnLm10LTUnKS5yZW1vdmVDbGFzcygnbXQtNScpO1xyXG4gICAgICAgICRlbmRNb2RhbC5maW5kKCcubW9kYWwtYm9keScpLmFwcGVuZCgkcmVzdWx0KTtcclxuICAgICAgICAkKCcjYnV0dG9uMicpLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVBZGRpbmdDaGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiAxMDA7XHJcbiAgICAgICAgbGV0IG1jID0gc3RvcmUuZW5lbWllc01heENvdW50O1xyXG4gICAgICAgIGxldCB0YyA9IHRoaXMuZW5lbWllcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IG1pbiA9IHN0b3JlLm1pbkFkZEVuZW15Q2hhbmNlO1xyXG4gICAgICAgIGxldCBtYXggPSBzdG9yZS5tYXhBZGRFbmVteUNoYW5jZTtcclxuICAgICAgICByZXR1cm4gKG1jIC0gdGMpIC8gbWMgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVHYW1lVGltZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdGltZVRvRW5kID0gc3RvcmUuZ2FtZVRpbWluZyAqIDYwO1xyXG4gICAgICAgIHRoaXMuZG9UaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBkb1RpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVUb0VuZCA8PSAwIHx8IHRoaXMuZ2FtZUVuZGVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90aW1lVG9FbmQgPD0gMClcclxuICAgICAgICAgICAgICAgICQoJyN0aW1lJykucmVtb3ZlQ2xhc3MoJ3RleHQtZGFuZ2VyJykuYWRkQ2xhc3MoJ3RleHQtc3VjY2VzcycpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGltZVRvRW5kLS07XHJcbiAgICAgICAgbGV0IHNlY29uZHMgPSB0aGlzLl90aW1lVG9FbmQgJSA2MDtcclxuICAgICAgICAkKCcjdGltZScpLnRleHQoYCR7KHRoaXMuX3RpbWVUb0VuZCAtIHNlY29uZHMpIC8gNjB9OiR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YCk7XHJcbiAgICAgICAgaWYodGhpcy5fdGltZVRvRW5kIDw9IDMwKVxyXG4gICAgICAgICAgICAkKCcjdGltZScpLmFkZENsYXNzKCd0ZXh0LWRhbmdlcicpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5kb1RpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUVuZW1pZXMoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmFjdGl2YXRlKGVmZmVjdCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWN0aXZhdGVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmRpc2FjdGl2YXRlKCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTG9nKG1ha2VyOiBGaWdodGVyLCB0YXJnZXQ6IEZpZ2h0ZXIsIGFjdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGFjdGlvbkxvZyA9ICQoYDxkaXY+XHJcbiAgICAgICAgJHtVdGlsLmdldEZvcm1hdEN1cnJlbnRUaW1lKCl9IDxiPiR7bWFrZXIucHJvdG90eXBlLm5hbWV9PC9iPiAke2FjdGlvbkRlc2NyaXB0aW9ufSA8Yj4ke3RhcmdldCA9PSBtYWtlciA/ICcnIDogdGFyZ2V0LnByb3RvdHlwZS5uYW1lfTwvYj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICAkKCcjbG9ncycpLnByZXBlbmQoJGFjdGlvbkxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2NvcmUoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3Njb3JlICs9IGNvdW50O1xyXG4gICAgICAgICQoJyNzY29yZScpLnRleHQodGhpcy5fc2NvcmUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5sZXQgZ2FtZTogR2FtZTtcclxuXHJcbmZ1bmN0aW9uIG9uTG9hZCgpIHtcclxuICAgIGdhbWUgPSBuZXcgR2FtZSgpO1xyXG59XHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBvbkxvYWQpOyIsImltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCJcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIlxyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtcIlxyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrUHJvdG90eXBlXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXlQZXJrIGV4dGVuZHMgUGVyayB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgb3duZXI6IEVuZW15LFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgb3duZXIsIGdhbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5hbmltYXRpb25QYXRocyAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBQZXJrQW5pbWF0aW9uKG93bmVyLmdldENhcmQoKSwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMucHJvdG90eXBlLmZvclNlbGYgPyB0aGlzLm93bmVyIDogdGhpcy5nYW1lLmhlcm87XHJcbiAgICAgICAgdGhpcy5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVya0NhcmQgfSBmcm9tIFwiLi4vUGVya0NhcmRcIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuLi9QZXJrXCI7XHJcblxyXG50eXBlIFBlcmtDYXJkT25DbGljayA9ICgpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEZvckZpZ2h0ZXJDYXJkT25DbGljayA9ICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEFjdGl2YXRpb25GdW5jdGlvbiA9IChtZXRob2Q6IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4gdm9pZDtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGVyb1BlcmsgZXh0ZW5kcyBQZXJrIHtcclxuICAgIHByaXZhdGUgX2NhcmQ6IFBlcmtDYXJkO1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIG93bmVyOiBIZXJvO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgaGVybzogSGVybyxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGhlcm8sIGdhbWUpXHJcbiAgICAgICAgdGhpcy5fY2FyZCA9IHRoaXMuY3JlYXRlQ2FyZChwcm90b3R5cGUpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0T25jbGljayh0aGlzLmdldE9uY2xpY2soKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmFuaW1hdGlvblBhdGhzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFBlcmtBbmltYXRpb24odGhpcy5fY2FyZCwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUpOiBQZXJrQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJrQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLmluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlIHNldE1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyLnNldE1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0UHJvZ3Jlc3NXaWR0aCh0aGlzLm1hbmEgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5tYW5hKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T25jbGljaygpOiBQZXJrQ2FyZE9uQ2xpY2sge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZhdG9yKCkoXHJcbiAgICAgICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmZpZ2h0ZXJNYW5hRGVtYW5kID4gdGhpcy5vd25lci5tYW5hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIuc2F5TWFuYUxhY2tpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBhcHBseUVmZmVjdCh0YXJnZXQ6IEZpZ2h0ZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5CZUFwcGxpZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuYXBwbHlFZmZlY3QodGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZFNjb3JlKHRoaXMucHJvdG90eXBlLnNjb3JlKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmRpc2FjdGl2YXRlRW5lbWllcygpO1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmRpc2FjdGl2YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRBY3RpdmF0b3IoKTogQWN0aXZhdGlvbkZ1bmN0aW9uXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE9uRW5lbXlNZXRob2QoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gKG9uQ2xpY2tGdW5jdGlvbjogRm9yRmlnaHRlckNhcmRPbkNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGlzYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFjdGl2YXRlRW5lbWllcyhvbkNsaWNrRnVuY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE9uSGVyb01ldGhvZCgpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAob25DbGlja0Z1bmN0aW9uOiBGb3JGaWdodGVyQ2FyZE9uQ2xpY2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmRpc2FjdGl2YXRlRW5lbWllcygpO1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmFjdGl2YXRlKG9uQ2xpY2tGdW5jdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFjdGl2YXRpb25GdW5jdGlvbiwgSGVyb1BlcmsgfSBmcm9tIFwiLi9IZXJvUGVya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uRW5lbXlQZXJrIGV4dGVuZHMgSGVyb1Blcmsge1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldEFjdGl2YXRvcigpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9uRW5lbXlNZXRob2QoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFjdGl2YXRpb25GdW5jdGlvbiwgSGVyb1BlcmsgfSBmcm9tIFwiLi9IZXJvUGVya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uSGVyb1BlcmsgZXh0ZW5kcyBIZXJvUGVyayB7XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0QWN0aXZhdG9yKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T25IZXJvTWV0aG9kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQZXJrQ2FyZCB9IGZyb20gXCIuL1BlcmtDYXJkXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgUGVya0FuaW1hdGlvbiB9IGZyb20gXCIuL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyayB7XHJcbiAgICBwcm90ZWN0ZWQgX21hbmE6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBhbmltYXRpb24/OiBQZXJrQW5pbWF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIG93bmVyOiBGaWdodGVyLFxyXG4gICAgICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuYWRkTWFuYSgxKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDEwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUpOiBQZXJrQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJrQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLmluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFuYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNYW5hKGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0TWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IHRoaXMuZ2V0UmVhbE1hbmEoY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLm1hbmEgKyBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UmVhbE1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhcHBseUVmZmVjdCh0YXJnZXQ6IEZpZ2h0ZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQmVBcHBsaWVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5tYW5hID0gMDtcclxuICAgICAgICB0aGlzLm93bmVyLmFkZE1hbmEoLXRoaXMucHJvdG90eXBlLmZpZ2h0ZXJNYW5hRGVtYW5kKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmFuaW1hdGUodGFyZ2V0LmdldENvb3JkcygpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvdG90eXBlLmVmZmVjdCh0YXJnZXQsIHRoaXMub3duZXIsIHRoaXMuZ2FtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuZWZmZWN0KHRhcmdldCwgdGhpcy5vd25lciwgdGhpcy5nYW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuYWRkTG9nKHRoaXMub3duZXIsIHRhcmdldCwgdGhpcy5wcm90b3R5cGUuYWN0aW9uU3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FuQmVBcHBsaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hbmEgPj0gdGhpcy5wcm90b3R5cGUubWFuYSAmJiB0aGlzLm93bmVyLm1hbmEgPj0gdGhpcy5wcm90b3R5cGUuZmlnaHRlck1hbmFEZW1hbmQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUG9pbnQge1xyXG4gICAgbGVmdDogbnVtYmVyO1xyXG4gICAgdG9wOiBudW1iZXI7XHJcbn0gXHJcblxyXG5leHBvcnQgY2xhc3MgUGVya0FuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHN0YXJ0UG9pbnRIYW5kbGVyOiBHYW1lQ2FyZCxcclxuICAgICAgICBwcml2YXRlIGltYWdlc1BhdGhzOiBBcnJheTxzdHJpbmc+IFxyXG4gICAgKSB7fVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBhbmltYXRlKGVuZHBvaW50OiBJUG9pbnQpIHtcclxuICAgICAgICBsZXQgJG9yaWdpbmFsID0gJCgnLmFuaW1hdGlvbicpO1xyXG4gICAgICAgIGxldCAkYW5pbWF0aW9uID0gJG9yaWdpbmFsLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ2FuaW1hdGlvbicpO1xyXG4gICAgICAgICRvcmlnaW5hbC5hZnRlcigkYW5pbWF0aW9uKTtcclxuICAgICAgICAkYW5pbWF0aW9uLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbWFnZXNQYXRocy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGltYWdlUGF0aCA9IHRoaXMuaW1hZ2VzUGF0aHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAkYW5pbWF0aW9uLmF0dHIoJ3NyYycsIGltYWdlUGF0aCk7XHJcbiAgICAgICAgICAgICRhbmltYXRpb24ub2Zmc2V0KHsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXJ0UG9pbnRIYW5kbGVyLmdldENvb3JkcygpLmxlZnQgKyAoZW5kcG9pbnQubGVmdCAtIHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkubGVmdCkgKiBpbmRleCAvICh0aGlzLmltYWdlc1BhdGhzLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkudG9wICsgKGVuZHBvaW50LnRvcCAtIHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkudG9wKSAqIGluZGV4IC8gKHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDAgLyB0aGlzLmltYWdlc1BhdGhzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRhbmltYXRpb24ucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrQ2FyZCBleHRlbmRzIEdhbWVDYXJkIHtcclxuICAgIHByaXZhdGUgX29uY2xpY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcInBlcmsgbmFtZVwiLCBpbmZvID0gXCJpbmZvXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQgPSB0aGlzLiRpbml0aWFsaXplQ2FyZChuYW1lLCBpbmZvKTtcclxuICAgICAgICAkKCcjaGVyby1tZW51JykuYXBwZW5kKHRoaXMuJGNhcmQpO1xyXG4gICAgICAgIHRoaXMuX29uY2xpY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgICRpbml0aWFsaXplQ2FyZChuYW1lOiBzdHJpbmcsIGluZm86IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGxldCAkY2FyZCA9ICQoJyNwZXJrLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwobmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LWluZm8nKS5odG1sKGluZm8pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T25jbGljayhtZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25jbGljayA9IG1ldGhvZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzc1dpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+PSAxMDApIHRoaXMudHVybk9uKCk7XHJcbiAgICAgICAgZWxzZSB0aGlzLnR1cm5PZmYoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWFsUGVyY2VudHMocGVyY2VudHM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzIDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID4gMTAwKSByZXR1cm4gMTAwO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50cztcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLnJlbW92ZUNsYXNzKCdwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcucGVyay1jYXJkJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICdidXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICcnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVya1Byb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBtYW5hOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGZpZ2h0ZXJNYW5hRGVtYW5kOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGluZm86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZWZmZWN0OiAodGFyZ2V0OiBGaWdodGVyLCBvd25lcj86IEZpZ2h0ZXIsIGdhbWU/OiBHYW1lKSA9PiB2b2lkLFxyXG4gICAgICAgIHB1YmxpYyBmb3JTZWxmOiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBhY3Rpb25TdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgc2NvcmU6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgYW5pbWF0aW9uUGF0aHM/OiBzdHJpbmdbXVxyXG4gICAgKSB7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIZXJvUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrcy9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCI7XHJcblxyXG5leHBvcnQgbGV0IHN0b3JlID0ge1xyXG4gICAgZW5lbWllc01heENvdW50OiAxMixcclxuICAgIG1pbkFkZEVuZW15Q2hhbmNlOiAxNSxcclxuICAgIG1heEFkZEVuZW15Q2hhbmNlOiAzNSxcclxuICAgIGdhbWVUaW1pbmc6IDMsXHJcbiAgICBzdGFydEVuZW15Q291bnQ6IDEsXHJcbiAgICBkaWVkTG9nOiAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC/0L7Qs9C40LEuPC9zcGFuPiBQcmVzcyBGIHRvIHBheSByZXNwZWN0JyxcclxuICAgIGhlcm9zOiBbXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0JrRg9C60YPQvNCx0LXRgCcsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF0sXHJcbiAgICAgICAgICAgICfQktGB0LXRhSDQt9Cw0LrRg9C60YPQvNCx0YDRjiEnLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Ql9C10LvRkdC90YvQuTwvc3Bhbj4sINC/0YPQv9GL0YDRh9Cw0YLRi9C5LCDQu9GO0LHQuNGCLCDQutC+0LPQtNCwINC10LPQviDQutGD0YHQsNGO0YInLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0LrRgNCw0YHQvdGL0Lk8L3NwYW4+ISDQndC1INC/0YPRgtCw0YLRjCEnLFxyXG4gICAgICAgICAgICAn0KXQvtGF0L4sINGF0LXRhdC10LkhINCvINGC0LXQsdGPIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LfQsNC60YPQutGD0LzQsdGA0Y48L3NwYW4+IScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy1zdWNjZXNzIHRleHQtd2hpdGVcIilcclxuICAgICAgICAgICAgICAgICRjYXJkLmZpbmQoXCJzcGFuXCIpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoXCJ0ZXh0LWRhcmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMSwgXHJcbiAgICAgICAgICAgICfQn9C+0LzQuNC00L7RgNC40YPRgScsIFxyXG4gICAgICAgICAgICAzMDAsIFxyXG4gICAgICAgICAgICAyMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgNF0sXHJcbiAgICAgICAgICAgICfQryDQutGA0LDRgdC90LXRjicsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0JrRgNCw0YHQvdGL0Lk8L3NwYW4+LCDQs9C70LDQtNC60LjQuSwg0YLQstC+0LknLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9CQ0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0YXQsNGF0LDRhdCw0YXQsNGF0LDRhScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmFkZENsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLWxpZ2h0IHRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyhcImJnLWRhcmsgdGV4dC13aGl0ZVwiKTtcclxuICAgICAgICAgICAgICAgIFV0aWwuc2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAyLCBcclxuICAgICAgICAgICAgJ9CU0YvQvdGH0YPQvdC00YPQuicsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICfQmtCw0Log0Y8g0YHRjtC00LAg0L/QvtC/0LDQuycsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiPtCW0ZHQu9GC0YvQuTwvc3Bhbj4sINC/0L7Qv9Cw0Lsg0YHRjtC00LAg0YHQu9GD0YfQsNC50L3QvicsXHJcbiAgICAgICAgICAgICfQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4hINCd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7QutGA0LDRgdC90YvQuTwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgJ9Cc0L7Qu9GOINGC0LXQsdGPIScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5maW5kKFwiLnRleHQtd2FybmluZ1wiKS5yZW1vdmVDbGFzcyhcInRleHQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAzLCBcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiYmctc3VjY2VzcyB0ZXh0LWxpZ2h0XCI+0J7Qs9GD0YDRhtCw0L08L3NwYW4+JywgXHJcbiAgICAgICAgICAgIDEwMDAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgIFsxLCAyLCAzXSxcclxuICAgICAgICAgICAgJ9Cf0YPQvNC/0YPRgNGD0LzQv9GD0LwnLFxyXG4gICAgICAgICAgICAn0J3QtSDQv9GD0YLQsNGC0Ywg0YEg0JrRg9C60YPQvNCx0LXRgNC+0LwhJyxcclxuICAgICAgICAgICAgJ9Ci0L7QttC1IDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LfQtdC70ZHQvdGL0Lk8L3NwYW4+LCDQvdC+INC90LUg0JrRg9C60YPQvNCx0LXRgCEnLFxyXG4gICAgICAgICAgICAn0J3QtSDQstC30LTRg9C80LDQuSDRgdC60LDQt9Cw0YLRjCwg0YfRgtC+INGPIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0JrRg9C60YPQvNCx0LXRgDwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVdGlsLmZpcmV3b3JrcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDQsIFxyXG4gICAgICAgICAgICAn0JDRgNCx0YPQt9C+0L0nLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDJdLFxyXG4gICAgICAgICAgICAn0J/RiNC/0YjQv9GI0L8nLFxyXG4gICAgICAgICAgICAn0KHQsNC80YvQuSA8Yj7QsdC+0LvRjNGI0L7QuTwvYj4nLFxyXG4gICAgICAgICAgICAn0KHQsNC80YvQuSDRgdC/0LXQu9GL0LknLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qn9C+0YLRgNGP0YHQuCDQvNC10L3RjyE8L3NwYW4+J1xyXG4gICAgICAgIClcclxuICAgIF0sXHJcbiAgICBlbmVtaWVzOiBbXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0KDQtdC00LjRgdC+0L0nLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBib3JkZXItZGFuZ2VyXCI+0J3QtdC90LDQstC40LbRgyE8L3NwYW4+J1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0JHQsNC60LvQsNC20YPQvScsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgNSwgN10sXHJcbiAgICAgICAgICAgICfQkNCz0YDRhSEnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQotC+0LzQsNGC0YPRgScsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgNV0sXHJcbiAgICAgICAgICAgICfQo9C/0YQnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQotGL0LrQstC40L0nLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDRdLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBib3JkZXItZGFuZ2VyXCI+0JXRhdC10YXQtdC10YXQtdGFPC9zcGFuPidcclxuICAgICAgICApLFxyXG4gICAgXSxcclxuICAgIHBlcmtzOiBbXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0J/RgNC+0L/Rg9GB0Log0YXQvtC00LAnLCBcclxuICAgICAgICAgICAgMSwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAnJywgXHJcbiAgICAgICAgICAgICgpID0+IHsgfSwgXHJcbiAgICAgICAgICAgIHRydWUsIFxyXG4gICAgICAgICAgICAn0L/RgNC+0L/Rg9GB0YLQuNC7INGF0L7QtCcsIFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDEsIFxyXG4gICAgICAgICAgICAn0JLQt9GA0YvQsicsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgIDIwLCBcclxuICAgICAgICAgICAgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQvtC00L3QvtCz0L4g0LLRgNCw0LPQsCcsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHsgdGFyZ2V0LmFkZEhwKC0xMDApIH0sIFxyXG4gICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQt9GA0YvQstC+0Lwg0L/QvicsIFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocygxLCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMiwgXHJcbiAgICAgICAgICAgICfQnNC+0LvQvdC40Y8nLCBcclxuICAgICAgICAgICAgMzAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0LLRgdC10YUnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlciwgZ2FtZTogR2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiAoZW5lbXkuYWRkSHAoLTcwKSkpO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgZmFsc2UsIFxyXG4gICAgICAgICAgICAn0LHQsNGF0L3Rg9C7INC80L7Qu9C90LjQtdC5INC/0L4g0LLRgdC10LwsINCyINGC0L7QvCDRh9C40YHQu9C1INC/0L4nLCBcclxuICAgICAgICAgICAgMTIwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDIsIDYpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDMsIFxyXG4gICAgICAgICAgICAn0JvQtdGH0LXQvdC40LUnLCBcclxuICAgICAgICAgICAgNTAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgICfQndC40LrQvtCz0L4g0L3QtSDQv9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0YwnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZEhwKDE1MCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB0cnVlLCBcclxuICAgICAgICAgICAgJ9C/0L7QtNC70LXRh9C40LvRgdGPINC70LXRh9C10L3QuNC10LwnLCBcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoMywgMTMpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDQsIFxyXG4gICAgICAgICAgICAn0JbQtdGA0YLQstCwJywgXHJcbiAgICAgICAgICAgIDcwLCBcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0YHQsNC80L7Qs9C+INGB0LXQsdGPJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRNYW5hKDEwMCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoLTUwKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHRydWUsIFxyXG4gICAgICAgICAgICAn0L/RgNC10LTQv9GA0LjQvdGP0Lsg0L/QvtC/0YvRgtC60YMg0YHRg9C40YbQuNC00LAg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LjQuyDQvNCw0L3QvdGDJywgXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDQsIDIwKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA1LCBcclxuICAgICAgICAgICAgJ9Ca0YDQsNC20LAg0LbQuNC30L3QuCcsIFxyXG4gICAgICAgICAgICAzMCwgXHJcbiAgICAgICAgICAgIDIwLCBcclxuICAgICAgICAgICAgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQstC+INCx0LvQsNCz0L4nLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkSHAoLXRhcmdldC5hZGRIcCgtNTApKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGZhbHNlLCBcclxuICAgICAgICAgICAgJ9C+0YLQvdGP0Lsg0LbQuNC30L3QuCDRgycsIFxyXG4gICAgICAgICAgICAzMCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg1LCA5KVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA2LCBcclxuICAgICAgICAgICAgJ9CS0LjRhdGA0YwnLCBcclxuICAgICAgICAgICAgMzAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L7QutGA0YPQttC10L3QuNC1INCy0YDQsNCz0LAnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlciwgZ2FtZTogR2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gPEVuZW15PnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGVuZW15LmFkZEhwKC0yMDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2FtZS5lbmVtaWVzLmluZGV4T2YoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkgZ2FtZS5lbmVtaWVzW2luZGV4IC0gMV0uYWRkSHAoLTEwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBnYW1lLmVuZW1pZXMubGVuZ3RoIC0gMSkgZ2FtZS5lbmVtaWVzW2luZGV4ICsgMV0uYWRkSHAoLTEwMCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQuNGF0YDQtdC8INC/0L4g0YHQvtGB0LXQtNGP0LwsINC00LAg0Lgg0L/QviDRgdCw0LzQvtC80YMnLCBcclxuICAgICAgICAgICAgMTIwLCBcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg2LCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNywgXHJcbiAgICAgICAgICAgICfQmtGA0LDQttCwINC80LDQvdGLJywgXHJcbiAgICAgICAgICAgIDEwMCwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdC+JyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIsIGdhbWU6IEdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLXRhcmdldC5hZGRNYW5hKC0yMDApKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGZhbHNlLCBcclxuICAgICAgICAgICAgJ9GD0LrRgNCw0Lsg0LzQsNC90YMg0YMnLCBcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNywgMjYpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDgsIFxyXG4gICAgICAgICAgICAn0JHQvtC70YzRiNC+0Lkg0Lgg0LPQu9GD0L/Ri9C5INCy0YDQtdC0INGB0LXQsdC1JywgXHJcbiAgICAgICAgICAgIDEsIFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgJyjRgtC10YHRgtC+0LLQvtC1KScsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRIcCgtMzAwKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLTMwMCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB0cnVlLCBcclxuICAgICAgICAgICAgJ9C+0YfQtdC90Ywg0LPQu9GD0L/Ri9C5JywgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgIClcclxuICAgIF0sXHJcbn07Il19
