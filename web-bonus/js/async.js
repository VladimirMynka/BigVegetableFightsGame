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
    Fighter.prototype.deactivate = function () {
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
        this.initializeChosenWindow();
        $('#button').click();
        $('#game-start-button').on('click', function () { return _this.onConfirm(); });
        $('#new-game-button').on('click', function () { return window.location.reload(); });
    }
    Game.prototype.initializeChosenWindow = function () {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heroes.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
    };
    Game.prototype.initializeChosenWindowExcept = function (index, $card) {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heroes.length; i++) {
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
        $card.find('.my-title').html(Store_1.store.heroes[index].name);
        $card.find('.my-first-description').html(Store_1.store.heroes[index].firstDescription);
        $card.find('.my-second-description').html(Store_1.store.heroes[index].secondDescription);
        $card.removeClass('d-none');
        $card.on('click', function () { _this.chooseCardOnClick(index, $card.find('.card')); });
        return $card;
    };
    Game.prototype.chooseCardOnClick = function (index, $card) {
        var _a;
        $('#confirm-menu').removeClass('d-none');
        this.initializeChosenWindowExcept(index, $card.parent());
        $card.addClass('border-primary');
        this._heroNumber = index;
        this.setReaction(Store_1.store.heroes[index].answer, (_a = Store_1.store.heroes[index]) === null || _a === void 0 ? void 0 : _a.reaction, $card);
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
        this.hero = new Hero_1.Hero(Store_1.store.heroes[this._heroNumber], this);
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
    Game.prototype.deactivateEnemies = function () {
        this.enemies.map(function (enemy) { enemy.deactivate(); });
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
            this.game.deactivateEnemies();
            this.owner.deactivate();
        }
    };
    HeroPerk.prototype.getOnEnemyMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.owner.deactivate();
            _this.game.activateEnemies(onClickFunction);
        };
    };
    HeroPerk.prototype.getOnHeroMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.game.deactivateEnemies();
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
var Enemy_1 = require("../Fighters/Enemy/Enemy");
var storeJSON = JSON.parse(data);
exports.store = {
    enemiesMaxCount: storeJSON.enemiesMaxCount,
    minAddEnemyChance: storeJSON.minAddEnemyChance,
    maxAddEnemyChance: storeJSON.maxAddEnemyChance,
    gameTiming: storeJSON.gameTiming,
    startEnemyCount: storeJSON.startEnemyCount,
    diedLog: storeJSON.diedLog,
    heroes: storeJSON.heroes.map((jsonHero) => parseHero(jsonHero)),
    enemies: storeJSON.enemies,
    perks: storeJSON.perks.map((jsonPerk) => parsePerk(jsonPerk))
}
function parseHero(json) {
    return new HeroPrototype_1.HeroPrototype(json.id, json.name, json.hp, json.mana, json.skills, json.motto, json.firstDescription, json.secondDescription, json.answer, function ($card) { Function('$card', json.reaction)($card); });
}
function parsePerk(json) {
    return new PerkPrototype_1.PerkPrototype(json.id, json.name, json.mana, json.fighterManaDemand, json.info, function (target, owner, game) {
        Function('target, owner', 'game', json.effect)(target, owner, game);
    }, json.forSelf, json.actionString, json.score, json.countOfImages != null ? Util_1.Util.getImagesPaths(json.id, json.countOfImages) : null);
}
// exports.store = {
//     enemiesMaxCount: 12,
//     minAddEnemyChance: 15,
//     maxAddEnemyChance: 35,
//     gameTiming: 3,
//     startEnemyCount: 1,
//     diedLog: '<span class="text-danger">погиб.</span> Press F to pay respect',
//     heroes: [
//         new HeroPrototype_1.HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!', function ($card) {
//             $card.addClass("bg-success text-white");
//             $card.find("span").removeClass().addClass("text-dark");
//         }),
//         new HeroPrototype_1.HeroPrototype(1, 'Помидориус', 750, 200, [0, 1, 3, 4], 'Я краснею', '<span class="text-danger">Красный</span>, гладкий, твой', 'Не <span class="text-success">зелёный</span>! Не путать!', 'Ахахахахахахахаххахахахахах', function ($card) {
//             $card.parent().parent().children().children().addClass("bg-transparent");
//             $card.addClass("bg-light text-dark");
//             $card.removeClass("bg-transparent");
//             $card.parent().parent().parent().parent().addClass("bg-dark text-white");
//             Util_1.Util.sleep(2000).then(function () {
//                 $card.parent().parent().parent().parent().removeClass("bg-dark text-white");
//             });
//         }),
//         new HeroPrototype_1.HeroPrototype(2, 'Дынчундук', 1000, 70, [0, 3, 6, 8], 'Как я сюда попал', '<span class="text-warning">Жёлтый</span>, попал сюда случайно', 'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!', 'Молю тебя!', function ($card) {
//             $card.addClass("bg-warning");
//             $card.find(".text-warning").removeClass("text-warning");
//         }),
//         new HeroPrototype_1.HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 400, 500, [0, 3, 5, 7], 'Пумпурумпум', 'Не путать с Кукумбером!', 'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!', 'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!', function () {
//             Util_1.Util.fireworks();
//         }),
//         new HeroPrototype_1.HeroPrototype(4, 'Арбузон', 800, 100, [0, 2, 3, 6], 'Пшпшпшп', 'Самый <b>большой</b>', 'Самый спелый', '<span class="text-success">Съешь меня?</span>')
//     ],
//     enemies: [
//         new FighterPrototype_1.FighterPrototype(0, 'Редисон', 300, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
//         new FighterPrototype_1.FighterPrototype(0, 'Баклажун', 400, 80, [0, 1, 5, 7], 'Агрх!'),
//         new FighterPrototype_1.FighterPrototype(0, 'Томатус', 500, 100, [0, 1, 5], 'Упф'),
//         new FighterPrototype_1.FighterPrototype(0, 'Тыквин', 500, 100, [0, 1, 4], '<span class="text-danger border-danger">Ехехеехех</span>'),
//     ],
//     perks: [
//         new PerkPrototype_1.PerkPrototype(0, 'Пропуск хода', 1, 0, '', function () { }, true, 'пропустил ход', 0),
//         new PerkPrototype_1.PerkPrototype(1, 'Взрыв', 50, 20, 'Пытается убить одного врага', function (target) { target.addHp(-100); }, false, 'бахнул взрывом по', 50, Util_1.Util.getImagesPaths(1, 25)),
//         new PerkPrototype_1.PerkPrototype(2, 'Молния', 50, 50, 'Пытается убить всех', function (target, owner, game) {
//             if (owner instanceof Enemy_1.Enemy)
//                 game.enemies.forEach(function (enemy) { return (enemy.addHp(10)); });
//             game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
//         }, false, 'бахнул молнией по всем, в том числе по', 120, Util_1.Util.getImagesPaths(2, 6)),
//         new PerkPrototype_1.PerkPrototype(3, 'Лечение', 50, 50, 'Никого не пытается убить', function (target, _) {
//             target.addHp(250);
//         }, true, 'подлечился лечением', 50, Util_1.Util.getImagesPaths(3, 13)),
//         new PerkPrototype_1.PerkPrototype(4, 'Жертва', 70, 0, 'Пытается убить самого себя', function (target) {
//             target.addMana(150);
//             target.addHp(-30);
//         }, true, 'предпринял попытку суицида и восстановил манну', 50, Util_1.Util.getImagesPaths(4, 20)),
//         new PerkPrototype_1.PerkPrototype(5, 'Кража жизни', 50, 20, 'Пытается убить во благо', function (target, owner) {
//             owner.addHp(-target.addHp(-75));
//         }, false, 'украл здоровье у', 50, Util_1.Util.getImagesPaths(5, 9)),
//         new PerkPrototype_1.PerkPrototype(6, 'Вихрь', 100, 70, 'Пытается убить окружение врага', function (target, owner, game) {
//             var enemy = target;
//             enemy.addHp(-200);
//             var index = game.enemies.indexOf(enemy);
//             if (index > 0)
//                 game.enemies[index - 1].addHp(-100);
//             if (index < game.enemies.length - 1)
//                 game.enemies[index + 1].addHp(-100);
//         }, false, 'бахнул вихрем по соседям, да и по самому', 120, Util_1.Util.getImagesPaths(6, 25)),
//         new PerkPrototype_1.PerkPrototype(7, 'Кража маны', 100, 0, 'Пытается убить посредственно', function (target, owner) {
//             owner.addMana(-target.addMana(-100));
//         }, false, 'украл ману у', 50, Util_1.Util.getImagesPaths(7, 26)),
//         new PerkPrototype_1.PerkPrototype(8, 'Большой и глупый вред себе', 1, 0, '(тестовое)', function (target, owner) {
//             owner.addHp(-300);
//             owner.addMana(-300);
//         }, true, 'очень глупый', 500)
//     ],
// };
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/FighterPrototype":7,"../Fighters/Hero/HeroPrototype":10,"../Perks/PerkPrototype":20}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9UU2NyaXB0QXN5bmMvQ29tbW9uL0dhbWVDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL0NvbW1vbi9VdGlsLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0VuZW15L0VuZW15Q2FyZC50cyIsImpzL1RTY3JpcHRBc3luYy9GaWdodGVycy9GaWdodGVyLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGUudHMiLCJqcy9UU2NyaXB0QXN5bmMvRmlnaHRlcnMvSGVyby9IZXJvLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJqcy9UU2NyaXB0QXN5bmMvRmlnaHRlcnMvSGVyby9IZXJvUHJvdG90eXBlLnRzIiwianMvVFNjcmlwdEFzeW5jL01haW4vR2FtZS50cyIsImpzL1RTY3JpcHRBc3luYy9NYWluL1Byb2dyYW0udHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvRm9yRW5lbXkvRW5lbXlQZXJrLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL0Zvckhlcm8vSGVyb1BlcmsudHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvRm9ySGVyby9PbkVuZW15UGVyay50cyIsImpzL1RTY3JpcHRBc3luYy9QZXJrcy9Gb3JIZXJvL09uSGVyb1BlcmsudHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvUGVyay50cyIsImpzL1RTY3JpcHRBc3luYy9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL1BlcmtDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL1BlcmtQcm90b3R5cGUudHMiLCJqcy9UU2NyaXB0QXN5bmMvU3Rv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LENBQUMsQ0FBQzt3QkFDNUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDeEIsS0FBSyxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTt3QkFDM0MsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUNsQyxVQUFVLENBQUMsTUFBTSxDQUFDOzRCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7NEJBQzdJLEdBQUcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7eUJBQzVJLENBQUMsQ0FBQzt3QkFDSCxxQkFBTSxXQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBL0MsU0FBK0MsQ0FBQzs7O3dCQVBDLEtBQUssRUFBRSxDQUFBOzs7d0JBUzVELFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7S0FDdkI7SUFDTCxvQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksc0NBQWE7Ozs7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Q0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQ0QsS0FBSyxFQUNMLGNBQWMsRUFDZCxFQUFFLEVBQ0YsV0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQzdCO1FBRUQsSUFBSSw2QkFBYSxDQUNiLENBQUMsRUFDRCw0QkFBNEIsRUFDNUIsQ0FBQyxFQUNELENBQUMsRUFDRCxZQUFZLEVBQ1osVUFBQyxNQUFlLEVBQUUsS0FBYztZQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFDRCxJQUFJLEVBQ0osY0FBYyxFQUNkLEdBQUcsQ0FDTjtLQUNKO0NBQ0osQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYXJkIHtcclxuICAgIHByb3RlY3RlZCAkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29vcmRzKCk6IHtsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGNhcmQub2Zmc2V0KCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXRpbCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHVua25vd24+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tSW50KG1pbiA9IDAsIG1heCA9IDEwMCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEZvcm1hdEN1cnJlbnRUaW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiBgWyR7ZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7ZGF0ZS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfV1gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZmlyZXdvcmtzKCkge1xyXG4gICAgICAgIGxldCAkZmlyZXdvcmtzID0gJCgnLmZpcmV3b3JrcycpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICRmaXJld29ya3MucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAkZmlyZXdvcmtzLm9mZnNldCh7IGxlZnQ6IFV0aWwucmFuZG9tSW50KDAsIDUwMCksIHRvcDogVXRpbC5yYW5kb21JbnQoMCwgNTAwKSB9KVxyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgICAgICRmaXJld29ya3MuYWRkQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbWFnZXNQYXRocyhudW1iZXI6IG51bWJlciwgY291bnQ6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgeyBsZW5ndGg6IGNvdW50IH0pLm1hcCgodW51c2VkOiBhbnksIGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGAuL2ltYWdlcy9hbmltYXRpb24vJHtudW1iZXJ9L2ltYWdlX3BhcnRfJHsoaW5kZXggKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyl9LnBuZ2ApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXlDYXJkIH0gZnJvbSBcIi4vRW5lbXlDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBFbmVteVBlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9yRW5lbXkvRW5lbXlQZXJrXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uLy4uL1N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteSBleHRlbmRzIEZpZ2h0ZXIge1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IHBlcmtzOiBFbmVteVBlcmtbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUsXHJcbiAgICAgICAgZ2FtZTogR2FtZVxyXG4gICAgKXtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbml0aWFsaXplUGVya3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuc2tpbGxzLmZvckVhY2gocGVya051bWJlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgRW5lbXlQZXJrKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZUVuZGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYoVXRpbC5yYW5kb21JbnQoMCwgMTAwKSA8IDUpXHJcbiAgICAgICAgICAgIHRoaXMucGVya3NbVXRpbC5yYW5kb21JbnQoMCwgdGhpcy5wZXJrcy5sZW5ndGgpXS5hcHBseSgpO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBjcmVhdGVDYXJkKHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSk6IEZpZ2h0ZXJDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVuZW15Q2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLm1vdHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5pbmNyZWFzZUtpbGxlZENvdW50KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Q2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuXHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IElQb2ludCB9IGZyb20gXCIuLi9QZXJrcy9QZXJrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFBlcmsgfSBmcm9tIFwiLi4vUGVya3MvUGVya1wiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZS9TdG9yZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZ2h0ZXIge1xyXG4gICAgcHJpdmF0ZSBfaHA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21hbmE6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBjYXJkOiBGaWdodGVyQ2FyZDtcclxuICAgIHByb3RlY3RlZCBwZXJrczogUGVya1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY2FyZCA9IHRoaXMuY3JlYXRlQ2FyZChwcm90b3R5cGUpO1xyXG4gICAgICAgIHRoaXMuX2hwID0gcHJvdG90eXBlLmhwO1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSBwcm90b3R5cGUubWFuYTtcclxuICAgICAgICB0aGlzLnBlcmtzID0gW107XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUGVya3MoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBpbml0aWFsaXplUGVya3MoKTogdm9pZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmhwID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRNYW5hKDUpO1xyXG4gICAgICAgIHRoaXMuYWRkSHAoMik7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFkZExvZyh0aGlzLCB0aGlzLCBzdG9yZS5kaWVkTG9nKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSk6IEZpZ2h0ZXJDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZpZ2h0ZXJDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUubW90dG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaHAoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBocChjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faHAgPSB0aGlzLmdldEFkZXF1YXRlSHAoY291bnQpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5zZXRIcFdpZHRoKHRoaXMuX2hwICogMTAwIC8gdGhpcy5wcm90b3R5cGUuaHApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRIcChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3RhcnRIcCA9IHRoaXMuX2hwO1xyXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLl9ocCArIGNvdW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocCAtIHN0YXJ0SHA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZUhwKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjb3VudCA+IHRoaXMucHJvdG90eXBlLmhwKSByZXR1cm4gdGhpcy5wcm90b3R5cGUuaHA7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFuYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IHRoaXMuZ2V0QWRlcXVhdGVNYW5hKGNvdW50KTtcclxuICAgICAgICB0aGlzLmNhcmQuc2V0TWFuYVdpZHRoKHRoaXMuX21hbmEgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5tYW5hKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3RhcnRNYW5hID0gdGhpcy5fbWFuYTtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLl9tYW5hICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmEgLSBzdGFydE1hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZU1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShlZmZlY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXJkLnR1cm5PbihlZmZlY3QsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FyZC50dXJuT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhcmQoKTogR2FtZUNhcmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkcygpOiBJUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQuZ2V0Q29vcmRzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUYnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgICAgIFV0aWwuZmlyZXdvcmtzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuL0ZpZ2h0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyQ2FyZCBleHRlbmRzIEdhbWVDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcImVuZW15IG5hbWVcIiwgbW90dG8gPSBcIm1vdHRvXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQgPSB0aGlzLiRpbml0aWFsaXplQ2FyZChuYW1lLCBtb3R0byk7XHJcbiAgICAgICAgdGhpcy4kZ2V0TWVudSgpLmFwcGVuZCh0aGlzLiRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgJGdldE1lbnUoKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuICQoJyNlbmVtaWVzLW1lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICRpbml0aWFsaXplQ2FyZChuYW1lOiBzdHJpbmcsIG1vdHRvOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjZmlnaHRlci1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKG5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1tb3R0bycpLmh0bWwobW90dG8pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhwV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLmhwLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNYW5hV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZWFsUGVyY2VudHMocGVyY2VudHM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzIDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID4gMTAwKSByZXR1cm4gMTAwO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9uKGVmZmVjdDogRnVuY3Rpb24sIG93bmVyOiBGaWdodGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vZmYoXCJjbGljayBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIik7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWZmZWN0KG93bmVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICdidXR0b24nKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0dXJuT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICcnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGhwOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBtYW5hOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBza2lsbHM6IG51bWJlcltdLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgbW90dG86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEhlcm9Qcm90b3R5cGUgfSBmcm9tIFwiLi9IZXJvUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBIZXJvQ2FyZCB9IGZyb20gXCIuL0hlcm9DYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IE9uSGVyb1BlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9Pbkhlcm9QZXJrXCI7XHJcbmltcG9ydCB7IE9uRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0Zvckhlcm8vT25FbmVteVBlcmtcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgSGVyb1BlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9IZXJvUGVya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBGaWdodGVyIHtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBwZXJrczogSGVyb1BlcmtbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IEhlcm9Qcm90b3R5cGUsXHJcbiAgICAgICAgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocHJvdG90eXBlLCBnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZVBlcmtzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnNraWxscy5mb3JFYWNoKHBlcmtOdW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZihzdG9yZS5wZXJrc1twZXJrTnVtYmVyXS5mb3JTZWxmKSBcclxuICAgICAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgT25IZXJvUGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IE9uRW5lbXlQZXJrKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIZXJvQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLm1vdHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWV0aG9kKHRhcmdldE1ldGhvZDogRnVuY3Rpb24sIGVmZmVjdE1ldGhvZDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXRNZXRob2QoZWZmZWN0TWV0aG9kKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F5TWFuYUxhY2tpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgKDxIZXJvQ2FyZD50aGlzLmNhcmQpLmRyYXdNYW5hTGFja2luZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lLmhlcm9Xb24gPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW90dG86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIG1vdHRvKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdlbmVteS1jYXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjaGVyby1tZW51Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGRyYXdNYW5hTGFja2luZygpIHtcclxuICAgICAgICBsZXQgJG1hbmFQcm9ncmVzcyA9IHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKTtcclxuICAgICAgICAkbWFuYVByb2dyZXNzLnJlbW92ZUNsYXNzKCdiZy1wcmltYXJ5JykuYWRkQ2xhc3MoJ2JnLWRhcmsnKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgJG1hbmFQcm9ncmVzcy5yZW1vdmVDbGFzcygnYmctZGFyaycpLmFkZENsYXNzKCdiZy1wcmltYXJ5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvUHJvdG90eXBlIGV4dGVuZHMgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpZDogbnVtYmVyLCBcclxuICAgICAgICBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIGhwOiBudW1iZXIsIFxyXG4gICAgICAgIG1hbmE6IG51bWJlciwgXHJcbiAgICAgICAgc2tpbGxzOiBBcnJheTxudW1iZXI+LCBcclxuICAgICAgICBtb3R0bzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBmaXJzdERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHNlY29uZERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGFuc3dlcjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSByZWFjdGlvbj86ICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4gdm9pZFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUsIGhwLCBtYW5hLCBza2lsbHMsIG1vdHRvKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi9GaWdodGVycy9IZXJvL0hlcm9cIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIF9oZXJvTnVtYmVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2FtZUVuZGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGhlcm9Xb24gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfa2lsbGVkRW5lbWllc0NvdW50ID0gMDtcclxuICAgIHByaXZhdGUgX3RpbWVUb0VuZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlcm86IEhlcm87XHJcbiAgICBwdWJsaWMgZW5lbWllczogQXJyYXk8RW5lbXk+O1xyXG4gICAgcHJpdmF0ZSBfc2NvcmUgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNob3NlbldpbmRvdygpO1xyXG4gICAgICAgICQoJyNidXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgICQoJyNnYW1lLXN0YXJ0LWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHRoaXMub25Db25maXJtKCkpO1xyXG4gICAgICAgICQoJyNuZXctZ2FtZS1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUNob3NlbldpbmRvdygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICQoJyNjYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLmhlcm9lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCh0aGlzLmluaXRpYWxpemVPbmVDYXJkKGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQ2hvc2VuV2luZG93RXhjZXB0KGluZGV4OiBudW1iZXIsICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCcjY2FyZC1jb250YWluZXInKTtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoXCJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5oZXJvZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KVxyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQoJGNhcmQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCh0aGlzLmluaXRpYWxpemVPbmVDYXJkKGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplT25lQ2FyZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI2Nob29zZS1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5jaGlsZHJlbignZGl2JykuYXR0cignZGF0YS1oZXJvLWlkJywgaW5kZXgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwoc3RvcmUuaGVyb2VzW2luZGV4XS5uYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktZmlyc3QtZGVzY3JpcHRpb24nKS5odG1sKHN0b3JlLmhlcm9lc1tpbmRleF0uZmlyc3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXNlY29uZC1kZXNjcmlwdGlvbicpLmh0bWwoc3RvcmUuaGVyb2VzW2luZGV4XS5zZWNvbmREZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRjYXJkLm9uKCdjbGljaycsICgpID0+IHsgdGhpcy5jaG9vc2VDYXJkT25DbGljayhpbmRleCwgJGNhcmQuZmluZCgnLmNhcmQnKSkgfSk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hvb3NlQ2FyZE9uQ2xpY2soaW5kZXg6IG51bWJlciwgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICAkKCcjY29uZmlybS1tZW51JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNob3NlbldpbmRvd0V4Y2VwdChpbmRleCwgJGNhcmQucGFyZW50KCkpO1xyXG4gICAgICAgICRjYXJkLmFkZENsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgIHRoaXMuX2hlcm9OdW1iZXIgPSBpbmRleDtcclxuICAgICAgICB0aGlzLnNldFJlYWN0aW9uKHN0b3JlLmhlcm9lc1tpbmRleF0uYW5zd2VyLCBzdG9yZS5oZXJvZXNbaW5kZXhdPy5yZWFjdGlvbiwgJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UmVhY3Rpb24oc3RyaW5nOiBzdHJpbmcsIG1ldGhvZD86IEZ1bmN0aW9uLCAkY2FyZD86IEpRdWVyeSk6IHZvaWQge1xyXG4gICAgICAgICQoJyNyZWFjdGlvbicpLmh0bWwoc3RyaW5nKTtcclxuICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgbWV0aG9kKCRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ29uZmlybSgpOiB2b2lkIHtcclxuICAgICAgICAkKCcjYnV0dG9uJykuY2xpY2soKTtcclxuICAgICAgICBpZiAodGhpcy5faGVyb051bWJlciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGVybyA9IG5ldyBIZXJvKHN0b3JlLmhlcm9lc1t0aGlzLl9oZXJvTnVtYmVyXSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRW5lbWllcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplR2FtZVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLnN0YXJ0RW5lbXlDb3VudDsgaSsrKSB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFbmVteSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkoc3RvcmUuZW5lbWllc1tVdGlsLnJhbmRvbUludCgwLCBzdG9yZS5lbmVtaWVzLmxlbmd0aCldLCB0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluY3JlYXNlS2lsbGVkQ291bnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fa2lsbGVkRW5lbWllc0NvdW50Kys7XHJcbiAgICAgICAgJCgnI2VuZW15LWNvdW50JykudGV4dCh0aGlzLl9raWxsZWRFbmVtaWVzQ291bnQpO1xyXG4gICAgICAgIHRoaXMuYWRkU2NvcmUoMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZUVuZGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoIDwgc3RvcmUuZW5lbWllc01heENvdW50ICYmIFV0aWwucmFuZG9tSW50KDAsIDEwMCkgPCB0aGlzLmNhbGN1bGF0ZUFkZGluZ0NoYW5jZSgpKVxyXG4gICAgICAgICAgICB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gdGhpcy5lbmVtaWVzLmZpbHRlcigoZW5lbXkpID0+IGVuZW15LmhwID4gMCk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDAwKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5kR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGVuZE1vZGFsID0gJCgnI215TW9kYWwyJyk7XHJcbiAgICAgICAgJGVuZE1vZGFsLmZpbmQoJy5tb2RhbC10aXRsZScpLnRleHQodGhpcy5oZXJvV29uID8gXCJZb3Ugd29uIVwiIDogXCJZb3UgbG9zdC4uLlwiKTtcclxuICAgICAgICBsZXQgJHJlc3VsdCA9ICQoJy5wcm9ncmVzcy1tZW51JykuY2xvbmUoKS5yZW1vdmVDbGFzcygnY29sLTgnKTtcclxuICAgICAgICAkcmVzdWx0LmZpbmQoJy5tdC01JykucmVtb3ZlQ2xhc3MoJ210LTUnKTtcclxuICAgICAgICAkZW5kTW9kYWwuZmluZCgnLm1vZGFsLWJvZHknKS5hcHBlbmQoJHJlc3VsdCk7XHJcbiAgICAgICAgJCgnI2J1dHRvbjInKS5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlQWRkaW5nQ2hhbmNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gMTAwO1xyXG4gICAgICAgIGxldCBtYyA9IHN0b3JlLmVuZW1pZXNNYXhDb3VudDtcclxuICAgICAgICBsZXQgdGMgPSB0aGlzLmVuZW1pZXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBtaW4gPSBzdG9yZS5taW5BZGRFbmVteUNoYW5jZTtcclxuICAgICAgICBsZXQgbWF4ID0gc3RvcmUubWF4QWRkRW5lbXlDaGFuY2U7XHJcbiAgICAgICAgcmV0dXJuIChtYyAtIHRjKSAvIG1jICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplR2FtZVRpbWVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RpbWVUb0VuZCA9IHN0b3JlLmdhbWVUaW1pbmcgKiA2MDtcclxuICAgICAgICB0aGlzLmRvVGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZG9UaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90aW1lVG9FbmQgPD0gMCB8fCB0aGlzLmdhbWVFbmRlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdGltZVRvRW5kIDw9IDApXHJcbiAgICAgICAgICAgICAgICAkKCcjdGltZScpLnJlbW92ZUNsYXNzKCd0ZXh0LWRhbmdlcicpLmFkZENsYXNzKCd0ZXh0LXN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3RpbWVUb0VuZC0tO1xyXG4gICAgICAgIGxldCBzZWNvbmRzID0gdGhpcy5fdGltZVRvRW5kICUgNjA7XHJcbiAgICAgICAgJCgnI3RpbWUnKS50ZXh0KGAkeyh0aGlzLl90aW1lVG9FbmQgLSBzZWNvbmRzKSAvIDYwfToke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWApO1xyXG4gICAgICAgIGlmKHRoaXMuX3RpbWVUb0VuZCA8PSAzMClcclxuICAgICAgICAgICAgJCgnI3RpbWUnKS5hZGRDbGFzcygndGV4dC1kYW5nZXInKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDEwMDApO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZG9UaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVFbmVtaWVzKGVmZmVjdDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMubWFwKChlbmVteSkgPT4geyBlbmVteS5hY3RpdmF0ZShlZmZlY3QpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmRlYWN0aXZhdGUoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMb2cobWFrZXI6IEZpZ2h0ZXIsIHRhcmdldDogRmlnaHRlciwgYWN0aW9uRGVzY3JpcHRpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkYWN0aW9uTG9nID0gJChgPGRpdj5cclxuICAgICAgICAke1V0aWwuZ2V0Rm9ybWF0Q3VycmVudFRpbWUoKX0gPGI+JHttYWtlci5wcm90b3R5cGUubmFtZX08L2I+ICR7YWN0aW9uRGVzY3JpcHRpb259IDxiPiR7dGFyZ2V0ID09IG1ha2VyID8gJycgOiB0YXJnZXQucHJvdG90eXBlLm5hbWV9PC9iPlxyXG4gICAgICAgIDwvZGl2PmApO1xyXG4gICAgICAgICQoJyNsb2dzJykucHJlcGVuZCgkYWN0aW9uTG9nKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTY29yZShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgKz0gY291bnQ7XHJcbiAgICAgICAgJCgnI3Njb3JlJykudGV4dCh0aGlzLl9zY29yZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9HYW1lJztcclxuXHJcbmxldCBnYW1lOiBHYW1lO1xyXG5cclxuZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbn1cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIG9uTG9hZCk7IiwiaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIlxyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiXHJcbmltcG9ydCB7IFBlcmsgfSBmcm9tIFwiLi4vUGVya1wiXHJcbmltcG9ydCB7IFBlcmtBbmltYXRpb24gfSBmcm9tIFwiLi4vUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4uL1BlcmtQcm90b3R5cGVcIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteVBlcmsgZXh0ZW5kcyBQZXJrIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSxcclxuICAgICAgICBvd25lcjogRW5lbXksXHJcbiAgICAgICAgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocHJvdG90eXBlLCBvd25lciwgZ2FtZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmFuaW1hdGlvblBhdGhzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFBlcmtBbmltYXRpb24ob3duZXIuZ2V0Q2FyZCgpLCBwcm90b3R5cGU/LmFuaW1hdGlvblBhdGhzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBseSgpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5wcm90b3R5cGUuZm9yU2VsZiA/IHRoaXMub3duZXIgOiB0aGlzLmdhbWUuaGVybztcclxuICAgICAgICB0aGlzLmFwcGx5RWZmZWN0KHRhcmdldCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQZXJrQ2FyZCB9IGZyb20gXCIuLi9QZXJrQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4uL1BlcmtQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi8uLi9GaWdodGVycy9IZXJvL0hlcm9cIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi8uLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFBlcmtBbmltYXRpb24gfSBmcm9tIFwiLi4vUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtcIjtcclxuXHJcbnR5cGUgUGVya0NhcmRPbkNsaWNrID0gKCkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgRm9yRmlnaHRlckNhcmRPbkNsaWNrID0gKHRhcmdldDogRmlnaHRlcikgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgQWN0aXZhdGlvbkZ1bmN0aW9uID0gKG1ldGhvZDogRm9yRmlnaHRlckNhcmRPbkNsaWNrKSA9PiB2b2lkO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIZXJvUGVyayBleHRlbmRzIFBlcmsge1xyXG4gICAgcHJpdmF0ZSBfY2FyZDogUGVya0NhcmQ7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgb3duZXI6IEhlcm87XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSxcclxuICAgICAgICBoZXJvOiBIZXJvLFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgaGVybywgZ2FtZSlcclxuICAgICAgICB0aGlzLl9jYXJkID0gdGhpcy5jcmVhdGVDYXJkKHByb3RvdHlwZSk7XHJcbiAgICAgICAgdGhpcy5fY2FyZC5zZXRPbmNsaWNrKHRoaXMuZ2V0T25jbGljaygpKTtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuYW5pbWF0aW9uUGF0aHMgIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgUGVya0FuaW1hdGlvbih0aGlzLl9jYXJkLCBwcm90b3R5cGU/LmFuaW1hdGlvblBhdGhzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSk6IFBlcmtDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBlcmtDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUuaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcnJpZGUgc2V0TWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0TWFuYShjb3VudCk7XHJcbiAgICAgICAgdGhpcy5fY2FyZC5zZXRQcm9ncmVzc1dpZHRoKHRoaXMubWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPbmNsaWNrKCk6IFBlcmtDYXJkT25DbGljayB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3RpdmF0b3IoKShcclxuICAgICAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuZmlnaHRlck1hbmFEZW1hbmQgPiB0aGlzLm93bmVyLm1hbmEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lci5zYXlNYW5hTGFja2luZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RWZmZWN0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGFwcGx5RWZmZWN0KHRhcmdldDogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbkJlQXBwbGllZCkge1xyXG4gICAgICAgICAgICBzdXBlci5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkU2NvcmUodGhpcy5wcm90b3R5cGUuc2NvcmUpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGVhY3RpdmF0ZUVuZW1pZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5vd25lci5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRBY3RpdmF0b3IoKTogQWN0aXZhdGlvbkZ1bmN0aW9uXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE9uRW5lbXlNZXRob2QoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gKG9uQ2xpY2tGdW5jdGlvbjogRm9yRmlnaHRlckNhcmRPbkNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYWN0aXZhdGVFbmVtaWVzKG9uQ2xpY2tGdW5jdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0T25IZXJvTWV0aG9kKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIChvbkNsaWNrRnVuY3Rpb246IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGVhY3RpdmF0ZUVuZW1pZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5vd25lci5hY3RpdmF0ZShvbkNsaWNrRnVuY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBY3RpdmF0aW9uRnVuY3Rpb24sIEhlcm9QZXJrIH0gZnJvbSBcIi4vSGVyb1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkVuZW15UGVyayBleHRlbmRzIEhlcm9QZXJrIHtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRBY3RpdmF0b3IoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPbkVuZW15TWV0aG9kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBY3RpdmF0aW9uRnVuY3Rpb24sIEhlcm9QZXJrIH0gZnJvbSBcIi4vSGVyb1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkhlcm9QZXJrIGV4dGVuZHMgSGVyb1Blcmsge1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldEFjdGl2YXRvcigpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9uSGVyb01ldGhvZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVya0NhcmQgfSBmcm9tIFwiLi9QZXJrQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4vUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFBlcmtBbmltYXRpb24gfSBmcm9tIFwiLi9QZXJrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmsge1xyXG4gICAgcHJvdGVjdGVkIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgYW5pbWF0aW9uPzogUGVya0FuaW1hdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcHJvdG90eXBlOiBQZXJrUHJvdG90eXBlLFxyXG4gICAgICAgIHByb3RlY3RlZCBvd25lcjogRmlnaHRlcixcclxuICAgICAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLmFkZE1hbmEoMSk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDApO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBQZXJrUHJvdG90eXBlKTogUGVya0NhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGVya0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hbmEoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0TWFuYShjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldE1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSB0aGlzLmdldFJlYWxNYW5hKGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWFuYShjb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYW5hID0gdGhpcy5tYW5hICsgY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFJlYWxNYW5hKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjb3VudCA+IHRoaXMucHJvdG90eXBlLm1hbmEpIHJldHVybiB0aGlzLnByb3RvdHlwZS5tYW5hO1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXBwbHlFZmZlY3QodGFyZ2V0OiBGaWdodGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkJlQXBwbGllZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubWFuYSA9IDA7XHJcbiAgICAgICAgdGhpcy5vd25lci5hZGRNYW5hKC10aGlzLnByb3RvdHlwZS5maWdodGVyTWFuYURlbWFuZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5hbmltYXRlKHRhcmdldC5nZXRDb29yZHMoKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3RvdHlwZS5lZmZlY3QodGFyZ2V0LCB0aGlzLm93bmVyLCB0aGlzLmdhbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucHJvdG90eXBlLmVmZmVjdCh0YXJnZXQsIHRoaXMub3duZXIsIHRoaXMuZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFkZExvZyh0aGlzLm93bmVyLCB0YXJnZXQsIHRoaXMucHJvdG90eXBlLmFjdGlvblN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNhbkJlQXBwbGllZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYW5hID49IHRoaXMucHJvdG90eXBlLm1hbmEgJiYgdGhpcy5vd25lci5tYW5hID49IHRoaXMucHJvdG90eXBlLmZpZ2h0ZXJNYW5hRGVtYW5kO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvaW50IHtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG59IFxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzdGFydFBvaW50SGFuZGxlcjogR2FtZUNhcmQsXHJcbiAgICAgICAgcHJpdmF0ZSBpbWFnZXNQYXRoczogQXJyYXk8c3RyaW5nPiBcclxuICAgICkge31cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYW5pbWF0ZShlbmRwb2ludDogSVBvaW50KSB7XHJcbiAgICAgICAgbGV0ICRvcmlnaW5hbCA9ICQoJy5hbmltYXRpb24nKTtcclxuICAgICAgICBsZXQgJGFuaW1hdGlvbiA9ICRvcmlnaW5hbC5jbG9uZSgpLnJlbW92ZUNsYXNzKCdhbmltYXRpb24nKTtcclxuICAgICAgICAkb3JpZ2luYWwuYWZ0ZXIoJGFuaW1hdGlvbik7XHJcbiAgICAgICAgJGFuaW1hdGlvbi5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZVBhdGggPSB0aGlzLmltYWdlc1BhdGhzW2luZGV4XTtcclxuICAgICAgICAgICAgJGFuaW1hdGlvbi5hdHRyKCdzcmMnLCBpbWFnZVBhdGgpO1xyXG4gICAgICAgICAgICAkYW5pbWF0aW9uLm9mZnNldCh7IFxyXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS5sZWZ0ICsgKGVuZHBvaW50LmxlZnQgLSB0aGlzLnN0YXJ0UG9pbnRIYW5kbGVyLmdldENvb3JkcygpLmxlZnQpICogaW5kZXggLyAodGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXJ0UG9pbnRIYW5kbGVyLmdldENvb3JkcygpLnRvcCArIChlbmRwb2ludC50b3AgLSB0aGlzLnN0YXJ0UG9pbnRIYW5kbGVyLmdldENvb3JkcygpLnRvcCkgKiBpbmRleCAvICh0aGlzLmltYWdlc1BhdGhzLmxlbmd0aClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwIC8gdGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkYW5pbWF0aW9uLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVya0NhcmQgZXh0ZW5kcyBHYW1lQ2FyZCB7XHJcbiAgICBwcml2YXRlIF9vbmNsaWNrOiBGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJwZXJrIG5hbWVcIiwgaW5mbyA9IFwiaW5mb1wiKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRjYXJkID0gdGhpcy4kaW5pdGlhbGl6ZUNhcmQobmFtZSwgaW5mbyk7XHJcbiAgICAgICAgJCgnI2hlcm8tbWVudScpLmFwcGVuZCh0aGlzLiRjYXJkKTtcclxuICAgICAgICB0aGlzLl9vbmNsaWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkaW5pdGlhbGl6ZUNhcmQobmFtZTogc3RyaW5nLCBpbmZvOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjcGVyay1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKG5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1pbmZvJykuaHRtbChpbmZvKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9uY2xpY2sobWV0aG9kOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uY2xpY2sgPSBtZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3Jlc3NXaWR0aChwZXJjZW50czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgcGVyY2VudHMgPSB0aGlzLmdldFJlYWxQZXJjZW50cyhwZXJjZW50cyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgICAgICBpZiAocGVyY2VudHMgPj0gMTAwKSB0aGlzLnR1cm5PbigpO1xyXG4gICAgICAgIGVsc2UgdGhpcy50dXJuT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCgnLnBlcmstY2FyZCcpLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PZmYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLmFkZENsYXNzKCdwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgbWFuYTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBmaWdodGVyTWFuYURlbWFuZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBpbmZvOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGVmZmVjdDogKHRhcmdldDogRmlnaHRlciwgb3duZXI/OiBGaWdodGVyLCBnYW1lPzogR2FtZSkgPT4gdm9pZCxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZm9yU2VsZjogYm9vbGVhbixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYWN0aW9uU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHNjb3JlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGFuaW1hdGlvblBhdGhzPzogc3RyaW5nW11cclxuICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSGVyb1Byb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVycy9IZXJvL0hlcm9Qcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi4vUGVya3MvUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi9GaWdodGVycy9FbmVteS9FbmVteVwiO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VIZXJvKGpzb246IGFueSk6IEhlcm9Qcm90b3R5cGUge1xyXG4gICAgcmV0dXJuIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgIGpzb24uaWQsXHJcbiAgICAgICAganNvbi5uYW1lLFxyXG4gICAgICAgIGpzb24uaHAsXHJcbiAgICAgICAganNvbi5tYW5hLFxyXG4gICAgICAgIGpzb24uc2tpbGxzLFxyXG4gICAgICAgIGpzb24ubW90dG8sXHJcbiAgICAgICAganNvbi5maXJzdERlc2NyaXB0aW9uLFxyXG4gICAgICAgIGpzb24uc2Vjb25kRGVzY3JpcHRpb24sXHJcbiAgICAgICAganNvbi5hbnN3ZXIsXHJcbiAgICAgICAgKCRjYXJkKSA9PiB7IEZ1bmN0aW9uKCckY2FyZCcsIGpzb24ucmVhY3Rpb24pKCRjYXJkKSB9XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUGVyayhqc29uOiBhbnkpOiBQZXJrUHJvdG90eXBlIHtcclxuICAgIHJldHVybiBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICBqc29uLmlkLFxyXG4gICAgICAgIGpzb24ubmFtZSxcclxuICAgICAgICBqc29uLm1hbmEsXHJcbiAgICAgICAganNvbi5maWdodGVyTWFuYURlbWFuZCxcclxuICAgICAgICBqc29uLmluZm8sXHJcbiAgICAgICAgKHRhcmdldCwgb3duZXIsIGdhbWUpID0+IHtcclxuICAgICAgICAgICAgRnVuY3Rpb24oJ3RhcmdldCwgb3duZXInLCAnZ2FtZScsIGpzb24uZWZmZWN0KSh0YXJnZXQsIG93bmVyLCBnYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpzb24uZm9yU2VsZixcclxuICAgICAgICBqc29uLmFjdGlvblN0cmluZyxcclxuICAgICAgICBqc29uLnNjb3JlLFxyXG4gICAgICAgIGpzb24uY291bnRPZkltYWdlcyAhPSBudWxsID8gVXRpbC5nZXRJbWFnZXNQYXRocyhqc29uLmlkLCBqc29uLmNvdW50T2ZJbWFnZXMpIDogbnVsbFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHN0b3JlID0ge1xyXG4gICAgZW5lbWllc01heENvdW50OiAxMixcclxuICAgIG1pbkFkZEVuZW15Q2hhbmNlOiAxNSxcclxuICAgIG1heEFkZEVuZW15Q2hhbmNlOiAzNSxcclxuICAgIGdhbWVUaW1pbmc6IDMsXHJcbiAgICBzdGFydEVuZW15Q291bnQ6IDEsXHJcbiAgICBkaWVkTG9nOiAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC/0L7Qs9C40LEuPC9zcGFuPiBQcmVzcyBGIHRvIHBheSByZXNwZWN0JyxcclxuICAgIGhlcm9lczogW1xyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgJ9Ca0YPQutGD0LzQsdC10YAnLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLFxyXG4gICAgICAgICAgICAn0JLRgdC10YUg0LfQsNC60YPQutGD0LzQsdGA0Y4hJyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0JfQtdC70ZHQvdGL0Lk8L3NwYW4+LCDQv9GD0L/Ri9GA0YfQsNGC0YvQuSwg0LvRjtCx0LjRgiwg0LrQvtCz0LTQsCDQtdCz0L4g0LrRg9GB0LDRjtGCJyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC60YDQsNGB0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9Cl0L7RhdC+LCDRhdC10YXQtdC5ISDQryDRgtC10LHRjyA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LDQutGD0LrRg9C80LHRgNGOPC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICRjYXJkLmFkZENsYXNzKFwiYmctc3VjY2VzcyB0ZXh0LXdoaXRlXCIpXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5maW5kKFwic3BhblwiKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKFwidGV4dC1kYXJrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDEsIFxyXG4gICAgICAgICAgICAn0J/QvtC80LjQtNC+0YDQuNGD0YEnLCBcclxuICAgICAgICAgICAgNzUwLFxyXG4gICAgICAgICAgICAyMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgNF0sXHJcbiAgICAgICAgICAgICfQryDQutGA0LDRgdC90LXRjicsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0JrRgNCw0YHQvdGL0Lk8L3NwYW4+LCDQs9C70LDQtNC60LjQuSwg0YLQstC+0LknLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9CQ0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0YXQsNGF0LDRhdCw0YXQsNGF0LDRhScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmFkZENsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLWxpZ2h0IHRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyhcImJnLWRhcmsgdGV4dC13aGl0ZVwiKTtcclxuICAgICAgICAgICAgICAgIFV0aWwuc2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAyLCBcclxuICAgICAgICAgICAgJ9CU0YvQvdGH0YPQvdC00YPQuicsIFxyXG4gICAgICAgICAgICAxMDAwLFxyXG4gICAgICAgICAgICA3MCxcclxuICAgICAgICAgICAgWzAsIDMsIDYsIDhdLFxyXG4gICAgICAgICAgICAn0JrQsNC6INGPINGB0Y7QtNCwINC/0L7Qv9Cw0LsnLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj7QltGR0LvRgtGL0Lk8L3NwYW4+LCDQv9C+0L/QsNC7INGB0Y7QtNCwINGB0LvRg9GH0LDQudC90L4nLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0LfQtdC70ZHQvdGL0Lk8L3NwYW4+ISDQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LrRgNCw0YHQvdGL0Lk8L3NwYW4+IScsXHJcbiAgICAgICAgICAgICfQnNC+0LvRjiDRgtC10LHRjyEnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICRjYXJkLmFkZENsYXNzKFwiYmctd2FybmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgJGNhcmQuZmluZChcIi50ZXh0LXdhcm5pbmdcIikucmVtb3ZlQ2xhc3MoXCJ0ZXh0LXdhcm5pbmdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMywgXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImJnLXN1Y2Nlc3MgdGV4dC1saWdodFwiPtCe0LPRg9GA0YbQsNC9PC9zcGFuPicsIFxyXG4gICAgICAgICAgICA0MDAsXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgWzAsIDMsIDUsIDddLFxyXG4gICAgICAgICAgICAn0J/Rg9C80L/Rg9GA0YPQvNC/0YPQvCcsXHJcbiAgICAgICAgICAgICfQndC1INC/0YPRgtCw0YLRjCDRgSDQmtGD0LrRg9C80LHQtdGA0L7QvCEnLFxyXG4gICAgICAgICAgICAn0KLQvtC20LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4sINC90L4g0L3QtSDQmtGD0LrRg9C80LHQtdGAIScsXHJcbiAgICAgICAgICAgICfQndC1INCy0LfQtNGD0LzQsNC5INGB0LrQsNC30LDRgtGMLCDRh9GC0L4g0Y8gPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7QmtGD0LrRg9C80LHQtdGAPC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVdGlsLmZpcmV3b3JrcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDQsIFxyXG4gICAgICAgICAgICAn0JDRgNCx0YPQt9C+0L0nLCBcclxuICAgICAgICAgICAgODAwLFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMiwgMywgNl0sXHJcbiAgICAgICAgICAgICfQn9GI0L/RiNC/0YjQvycsXHJcbiAgICAgICAgICAgICfQodCw0LzRi9C5IDxiPtCx0L7Qu9GM0YjQvtC5PC9iPicsXHJcbiAgICAgICAgICAgICfQodCw0LzRi9C5INGB0L/QtdC70YvQuScsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCh0YrQtdGI0Ywg0LzQtdC90Y8/PC9zcGFuPidcclxuICAgICAgICApXHJcbiAgICBdLFxyXG4gICAgZW5lbWllczogW1xyXG4gICAgICAgIG5ldyBGaWdodGVyUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgJ9Cg0LXQtNC40YHQvtC9JywgXHJcbiAgICAgICAgICAgIDMwMCwgXHJcbiAgICAgICAgICAgIDEwMCwgXHJcbiAgICAgICAgICAgIFswLCAxLCAzXSxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXIgYm9yZGVyLWRhbmdlclwiPtCd0LXQvdCw0LLQuNC20YMhPC9zcGFuPidcclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBGaWdodGVyUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgJ9CR0LDQutC70LDQttGD0L0nLCBcclxuICAgICAgICAgICAgNDAwLCBcclxuICAgICAgICAgICAgODAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgNSwgN10sXHJcbiAgICAgICAgICAgICfQkNCz0YDRhSEnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQotC+0LzQsNGC0YPRgScsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgNV0sXHJcbiAgICAgICAgICAgICfQo9C/0YQnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQotGL0LrQstC40L0nLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDRdLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBib3JkZXItZGFuZ2VyXCI+0JXRhdC10YXQtdC10YXQtdGFPC9zcGFuPidcclxuICAgICAgICApLFxyXG4gICAgXSxcclxuICAgIHBlcmtzOiBbXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0J/RgNC+0L/Rg9GB0Log0YXQvtC00LAnLCBcclxuICAgICAgICAgICAgMSwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAnJywgXHJcbiAgICAgICAgICAgICgpID0+IHsgfSwgXHJcbiAgICAgICAgICAgIHRydWUsIFxyXG4gICAgICAgICAgICAn0L/RgNC+0L/Rg9GB0YLQuNC7INGF0L7QtCcsIFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDEsIFxyXG4gICAgICAgICAgICAn0JLQt9GA0YvQsicsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgIDIwLCBcclxuICAgICAgICAgICAgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQvtC00L3QvtCz0L4g0LLRgNCw0LPQsCcsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHsgdGFyZ2V0LmFkZEhwKC0xMDApIH0sIFxyXG4gICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQt9GA0YvQstC+0Lwg0L/QvicsIFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocygxLCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMiwgXHJcbiAgICAgICAgICAgICfQnNC+0LvQvdC40Y8nLCBcclxuICAgICAgICAgICAgNTAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0LLRgdC10YUnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlciwgZ2FtZTogR2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYob3duZXIgaW5zdGFuY2VvZiBFbmVteSlcclxuICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IChlbmVteS5hZGRIcCgxMCkpKTtcclxuICAgICAgICAgICAgICAgIGdhbWUuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4gKGVuZW15LmFkZEhwKC03MCkpKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGZhbHNlLCBcclxuICAgICAgICAgICAgJ9Cx0LDRhdC90YPQuyDQvNC+0LvQvdC40LXQuSDQv9C+INCy0YHQtdC8LCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQv9C+JywgXHJcbiAgICAgICAgICAgIDEyMCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocygyLCA2KVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAzLCBcclxuICAgICAgICAgICAgJ9Cb0LXRh9C10L3QuNC1JywgXHJcbiAgICAgICAgICAgIDUwLCBcclxuICAgICAgICAgICAgNTAsIFxyXG4gICAgICAgICAgICAn0J3QuNC60L7Qs9C+INC90LUg0L/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgXzogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZEhwKDI1MCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB0cnVlLCBcclxuICAgICAgICAgICAgJ9C/0L7QtNC70LXRh9C40LvRgdGPINC70LXRh9C10L3QuNC10LwnLCBcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoMywgMTMpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDQsIFxyXG4gICAgICAgICAgICAn0JbQtdGA0YLQstCwJywgXHJcbiAgICAgICAgICAgIDcwLCBcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0YHQsNC80L7Qs9C+INGB0LXQsdGPJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZE1hbmEoMTUwKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgtMzApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgdHJ1ZSwgXHJcbiAgICAgICAgICAgICfQv9GA0LXQtNC/0YDQuNC90Y/QuyDQv9C+0L/Ri9GC0LrRgyDRgdGD0LjRhtC40LTQsCDQuCDQstC+0YHRgdGC0LDQvdC+0LLQuNC7INC80LDQvdC90YMnLCBcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNCwgMjApXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDUsIFxyXG4gICAgICAgICAgICAn0JrRgNCw0LbQsCDQttC40LfQvdC4JywgXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAyMCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0LLQviDQsdC70LDQs9C+JyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZEhwKC10YXJnZXQuYWRkSHAoLTc1KSk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICfRg9C60YDQsNC7INC30LTQvtGA0L7QstGM0LUg0YMnLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg1LCA5KVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA2LCBcclxuICAgICAgICAgICAgJ9CS0LjRhdGA0YwnLCBcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICA3MCxcclxuICAgICAgICAgICAgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQvtC60YDRg9C20LXQvdC40LUg0LLRgNCw0LPQsCcsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyLCBnYW1lOiBHYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSA8RW5lbXk+dGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgZW5lbXkuYWRkSHAoLTIwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBnYW1lLmVuZW1pZXMuaW5kZXhPZihlbmVteSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSBnYW1lLmVuZW1pZXNbaW5kZXggLSAxXS5hZGRIcCgtMTAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGdhbWUuZW5lbWllcy5sZW5ndGggLSAxKSBnYW1lLmVuZW1pZXNbaW5kZXggKyAxXS5hZGRIcCgtMTAwKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGZhbHNlLCBcclxuICAgICAgICAgICAgJ9Cx0LDRhdC90YPQuyDQstC40YXRgNC10Lwg0L/QviDRgdC+0YHQtdC00Y/QvCwg0LTQsCDQuCDQv9C+INGB0LDQvNC+0LzRgycsIFxyXG4gICAgICAgICAgICAxMjAsIFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDYsIDI1KVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA3LCBcclxuICAgICAgICAgICAgJ9Ca0YDQsNC20LAg0LzQsNC90YsnLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90L4nLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkTWFuYSgtdGFyZ2V0LmFkZE1hbmEoLTEwMCkpO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgZmFsc2UsIFxyXG4gICAgICAgICAgICAn0YPQutGA0LDQuyDQvNCw0L3RgyDRgycsIFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg3LCAyNilcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgOCwgXHJcbiAgICAgICAgICAgICfQkdC+0LvRjNGI0L7QuSDQuCDQs9C70YPQv9GL0Lkg0LLRgNC10LQg0YHQtdCx0LUnLCBcclxuICAgICAgICAgICAgMSwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAnKNGC0LXRgdGC0L7QstC+0LUpJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZEhwKC0zMDApO1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkTWFuYSgtMzAwKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHRydWUsIFxyXG4gICAgICAgICAgICAn0L7Rh9C10L3RjCDQs9C70YPQv9GL0LknLCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKVxyXG4gICAgXSxcclxufTsiXX0=
