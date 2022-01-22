(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCard = void 0;
var GameCard = /** @class */ (function () {
    function GameCard() {
    }
    GameCard.prototype.getCoords = function () {
        return this.$card.offset();
    };
    GameCard.prototype.getCard = function () {
        return this.$card;
    };
    return GameCard;
}());
exports.GameCard = GameCard;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{"../../Common/Util":3,"../../Perks/ForEnemy/EnemyPerk":14,"../../Store/Store":22,"../Fighter":6,"./EnemyCard":5}],5:[function(require,module,exports){
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
},{"../FighterCard":7}],6:[function(require,module,exports){
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
},{"../Common/Util":3,"../Store/Store":22,"./FighterCard":7}],7:[function(require,module,exports){
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
},{"../Common/GameCard":2}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{"../../Perks/ForHero/OnEnemyPerk":16,"../../Perks/ForHero/OnHeroPerk":17,"../../Store/Store":22,"../Fighter":6,"./HeroCard":10}],10:[function(require,module,exports){
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
},{"../../Common/Util":3,"../FighterCard":7}],11:[function(require,module,exports){
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
},{"../FighterPrototype":8}],12:[function(require,module,exports){
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
var FighterPrototype_1 = require("../../../TScript/Fighters/FighterPrototype");
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
        if (arguments.length == 0)
            this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[Util_1.Util.randomInt(0, Store_1.store.enemies.length)], this));
        else if (typeof arguments[0] === 'number')
            this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[arguments[0]], this));
        else if (arguments[0] instanceof FighterPrototype_1.FighterPrototype)
            this.enemies.push(new Enemy_1.Enemy(arguments[0], this));
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
},{"../../../TScript/Fighters/FighterPrototype":1,"../Common/Util":3,"../Fighters/Enemy/Enemy":4,"../Fighters/Hero/Hero":9,"../Store/Store":22}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var game;
function onLoad() {
    game = new Game_1.Game();
}
$(window).on('load', onLoad);
},{"./Game":12}],14:[function(require,module,exports){
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
},{"../Perk":18,"../PerkAnimation":19}],15:[function(require,module,exports){
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
},{"../Perk":18,"../PerkAnimation":19,"../PerkCard":20}],16:[function(require,module,exports){
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
},{"./HeroPerk":15}],17:[function(require,module,exports){
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
},{"./HeroPerk":15}],18:[function(require,module,exports){
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
},{"../Common/Util":3,"./PerkCard":20}],19:[function(require,module,exports){
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
},{"../Common/Util":3}],20:[function(require,module,exports){
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
},{"../Common/GameCard":2}],21:[function(require,module,exports){
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
},{}],22:[function(require,module,exports){
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
},{"../Common/Util":3,"../Fighters/Enemy/Enemy":4,"../Fighters/FighterPrototype":8,"../Fighters/Hero/HeroPrototype":11,"../Perks/PerkPrototype":21}]},{},[13])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGUudHMiLCJqcy9UU2NyaXB0QXN5bmMvQ29tbW9uL0dhbWVDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL0NvbW1vbi9VdGlsLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0VuZW15L0VuZW15Q2FyZC50cyIsImpzL1RTY3JpcHRBc3luYy9GaWdodGVycy9GaWdodGVyLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGUudHMiLCJqcy9UU2NyaXB0QXN5bmMvRmlnaHRlcnMvSGVyby9IZXJvLnRzIiwianMvVFNjcmlwdEFzeW5jL0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJqcy9UU2NyaXB0QXN5bmMvRmlnaHRlcnMvSGVyby9IZXJvUHJvdG90eXBlLnRzIiwianMvVFNjcmlwdEFzeW5jL01haW4vR2FtZS50cyIsImpzL1RTY3JpcHRBc3luYy9NYWluL1Byb2dyYW0udHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvRm9yRW5lbXkvRW5lbXlQZXJrLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL0Zvckhlcm8vSGVyb1BlcmsudHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvRm9ySGVyby9PbkVuZW15UGVyay50cyIsImpzL1RTY3JpcHRBc3luYy9QZXJrcy9Gb3JIZXJvL09uSGVyb1BlcmsudHMiLCJqcy9UU2NyaXB0QXN5bmMvUGVya3MvUGVyay50cyIsImpzL1RTY3JpcHRBc3luYy9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL1BlcmtDYXJkLnRzIiwianMvVFNjcmlwdEFzeW5jL1BlcmtzL1BlcmtQcm90b3R5cGUudHMiLCJqcy9UU2NyaXB0QXN5bmMvU3RvcmUvU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNFQTtJQUNJLDBCQUNXLEVBQVUsRUFDVixJQUFZLEVBQ1osRUFBVSxFQUNWLElBQVksRUFDWixNQUFnQixFQUNoQixLQUFhO1FBTGIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUV4QixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLDRDQUFnQjs7Ozs7QUNBN0I7SUFBQTtJQVVBLENBQUM7SUFQVSw0QkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sMEJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0wsZUFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksNEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCO0lBQUE7SUErQkEsQ0FBQztJQTlCdUIsVUFBSyxHQUF6QixVQUEwQixFQUFVOzs7Z0JBQ2hDLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQy9CLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUE7b0JBQzNCLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUVhLGNBQVMsR0FBdkIsVUFBd0IsR0FBTyxFQUFFLEdBQVM7UUFBbEIsb0JBQUEsRUFBQSxPQUFPO1FBQUUsb0JBQUEsRUFBQSxTQUFTO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVhLHlCQUFvQixHQUFsQztRQUNJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsT0FBTyxXQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxjQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxjQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFHLENBQUM7SUFDaEssQ0FBQztJQUVtQixjQUFTLEdBQTdCOzs7Ozs7d0JBQ1EsVUFBVSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQ2pCLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ2pDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3QkFDaEYscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7d0JBQ3RCLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7d0JBQzdCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDOzs7d0JBTEgsQ0FBQyxFQUFFLENBQUE7Ozs7OztLQU83QjtJQUVhLG1CQUFjLEdBQTVCLFVBQTZCLE1BQWMsRUFBRSxLQUFhO1FBQ3RELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFXLEVBQUUsS0FBYTtZQUN2RSxPQUFBLDZCQUFzQixNQUFNLHlCQUFlLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQU07UUFBeEYsQ0FBd0YsQ0FBQyxDQUFBO0lBQ2pHLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakIsc0NBQXFDO0FBQ3JDLHlDQUF3QztBQUd4Qyw0REFBMkQ7QUFFM0QsMkNBQTBDO0FBQzFDLDBDQUF5QztBQUV6QztJQUEyQix5QkFBTztJQUc5QixlQUNJLFNBQTJCLEVBQzNCLElBQVU7ZUFFVixrQkFBTSxTQUFTLEVBQUUsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFa0IsK0JBQWUsR0FBbEM7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7WUFDcEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUFDLGFBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUV3QixzQkFBTSxHQUEvQjs7O2dCQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUFFLHNCQUFPO2dCQUNoQyxJQUFHLFdBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM3RCxpQkFBTSxNQUFNLFdBQUUsQ0FBQzs7OztLQUNsQjtJQUVrQiwwQkFBVSxHQUE3QixVQUE4QixTQUEyQjtRQUNyRCxPQUFPLElBQUkscUJBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRWtCLHNCQUFNLEdBQXpCO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQS9CQSxBQStCQyxDQS9CMEIsaUJBQU8sR0ErQmpDO0FBL0JZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RsQiw4Q0FBNkM7QUFFN0M7SUFBK0IsNkJBQVc7SUFBMUM7O0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FGQSxBQUVDLENBRjhCLHlCQUFXLEdBRXpDO0FBRlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnRCLDZDQUE0QztBQUc1Qyx1Q0FBc0M7QUFJdEMsd0NBQXVDO0FBRXZDO0lBTUksaUJBQ29CLFNBQTJCLEVBQ2pDLElBQVU7UUFESixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUNqQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRXBCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUllLHdCQUFNLEdBQXRCOzs7Ozt3QkFDSSxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFOzRCQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDZCxzQkFBTzt5QkFDVjt3QkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNkLHFCQUFNLFdBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDO3dCQUN0QixxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFuQixTQUFtQixDQUFDOzs7OztLQUN2QjtJQUVTLHdCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVTLDRCQUFVLEdBQXBCLFVBQXFCLFNBQTJCO1FBQzVDLE9BQU8sSUFBSSx5QkFBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxzQkFBVyx1QkFBRTthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7YUFFRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQzs7O09BTEE7SUFPTSx1QkFBSyxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRU8sK0JBQWEsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsc0JBQVcseUJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxDQUFDOzs7T0FMQTtJQU9NLHlCQUFPLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFTyxpQ0FBZSxHQUF2QixVQUF3QixLQUFhO1FBQ2pDLElBQUksS0FBSyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSwwQkFBUSxHQUFmLFVBQWdCLE1BQWdCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sNEJBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx5QkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSwyQkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsY0FBQztBQUFELENBbkdBLEFBbUdDLElBQUE7QUFuR3FCLDBCQUFPO0FBcUc3QixTQUFTLE9BQU8sQ0FBQyxLQUFVO0lBQ3ZCLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7UUFDdEIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRCxXQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDcEI7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25IRCwrQ0FBOEM7QUFHOUM7SUFBaUMsK0JBQVE7SUFDckMscUJBQVksSUFBbUIsRUFBRSxLQUFlO1FBQXBDLHFCQUFBLEVBQUEsbUJBQW1CO1FBQUUsc0JBQUEsRUFBQSxlQUFlO1FBQWhELFlBQ0ksaUJBQU8sU0FHVjtRQUZHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7SUFFUyw4QkFBUSxHQUFsQjtRQUNJLE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyxxQ0FBZSxHQUF2QixVQUF3QixJQUFZLEVBQUUsS0FBYTtRQUMvQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsUUFBZ0I7UUFDOUIsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sa0NBQVksR0FBbkIsVUFBb0IsUUFBZ0I7UUFDaEMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTyxxQ0FBZSxHQUF2QixVQUF3QixRQUFnQjtRQUNwQyxJQUFJLFFBQVEsR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxRQUFRLEdBQUcsR0FBRztZQUFFLE9BQU8sR0FBRyxDQUFDO1FBQy9CLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFTSw0QkFBTSxHQUFiLFVBQWMsTUFBZ0IsRUFBRSxLQUFjO1FBQTlDLGlCQWFDO1FBWkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSw2QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sNEJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0E1REEsQUE0REMsQ0E1RGdDLG1CQUFRLEdBNER4QztBQTVEWSxrQ0FBVzs7Ozs7QUNEeEI7SUFDSSwwQkFDb0IsRUFBVSxFQUNWLElBQVksRUFDWixFQUFVLEVBQ1YsSUFBWSxFQUNaLE1BQWdCLEVBQ2hCLEtBQWE7UUFMYixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRWpDLENBQUM7SUFDTCx1QkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y3QixzQ0FBcUM7QUFHckMsdUNBQXNDO0FBRXRDLDZEQUE0RDtBQUM1RCwrREFBOEQ7QUFFOUQsMkNBQTBDO0FBRzFDO0lBQTBCLHdCQUFPO0lBRzdCLGNBQ0ksU0FBd0IsRUFDeEIsSUFBVTtlQUVWLGtCQUFNLFNBQVMsRUFBRSxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVrQiw4QkFBZSxHQUFsQztRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsVUFBVTtZQUNwQyxJQUFHLGFBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTztnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLGFBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztnQkFFMUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBVyxDQUFDLGFBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVrQix5QkFBVSxHQUE3QixVQUE4QixTQUEyQjtRQUNyRCxPQUFPLElBQUksbUJBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sd0JBQVMsR0FBaEIsVUFBaUIsWUFBc0IsRUFBRSxZQUFzQjtRQUMzRCxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVNLDZCQUFjLEdBQXJCO1FBQ2UsSUFBSSxDQUFDLElBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRWtCLHFCQUFNLEdBQXpCO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsQ0FwQ3lCLGlCQUFPLEdBb0NoQztBQXBDWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYakIsMENBQXlDO0FBQ3pDLDhDQUE2QztBQUU3QztJQUE4Qiw0QkFBVztJQUNyQyxrQkFBWSxJQUFZLEVBQUUsS0FBYTtRQUF2QyxZQUNJLGtCQUFNLElBQUksRUFBRSxLQUFLLENBQUMsU0FFckI7UUFERyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7SUFDekMsQ0FBQztJQUVrQiwyQkFBUSxHQUEzQjtRQUNJLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFWSxrQ0FBZSxHQUE1Qjs7Ozs7O3dCQUNRLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUN0RCxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDNUQscUJBQU0sV0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7d0JBQ3RCLGFBQWEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7OztLQUMvRDtJQUNMLGVBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCNkIseUJBQVcsR0FnQnhDO0FBaEJZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQix3REFBdUQ7QUFFdkQ7SUFBbUMsaUNBQWdCO0lBQy9DLHVCQUNJLEVBQVUsRUFDVixJQUFZLEVBQ1osRUFBVSxFQUNWLElBQVksRUFDWixNQUFxQixFQUNyQixLQUFhLEVBQ0csZ0JBQXdCLEVBQ3hCLGlCQUF5QixFQUN6QixNQUFjLEVBQ2QsUUFBK0M7UUFWbkUsWUFZSSxrQkFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUMzQztRQU5tQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7UUFDeEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFRO1FBQ3pCLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFRLEdBQVIsUUFBUSxDQUF1Qzs7SUFHbkUsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FmQSxBQWVDLENBZmtDLG1DQUFnQixHQWVsRDtBQWZZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQix3Q0FBdUM7QUFDdkMsdUNBQXNDO0FBQ3RDLDhDQUE2QztBQUM3QyxpREFBZ0Q7QUFFaEQsK0VBQTRFO0FBRTVFO0lBVUk7UUFBQSxpQkFLQztRQVpNLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZCx3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFJeEIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUdmLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLHFDQUFzQixHQUE5QjtRQUNJLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBRU8sMkNBQTRCLEdBQXBDLFVBQXFDLEtBQWEsRUFBRSxLQUEwQjtRQUMxRSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxLQUFLO2dCQUNYLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUV6QixVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUVPLGdDQUFpQixHQUF6QixVQUEwQixLQUFhO1FBQXZDLGlCQVNDO1FBUkcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9FLEtBQUssQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pGLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBUSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxnQ0FBaUIsR0FBekIsVUFBMEIsS0FBYSxFQUFFLEtBQTBCOztRQUMvRCxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDekQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBQSxhQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywwQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVPLDBCQUFXLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxNQUFpQixFQUFFLEtBQWM7UUFDakUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVU7WUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTyx3QkFBUyxHQUFqQjtRQUNJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM1QjtRQUFBLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTyxnQ0FBaUIsR0FBekI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUVNLHVCQUFRLEdBQWY7UUFDSSxJQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQUssQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzFGLElBQUcsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUTtZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQUssQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDL0QsSUFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksbUNBQWdCO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxrQ0FBbUIsR0FBMUI7UUFDSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVhLHFCQUFNLEdBQXBCOzs7Ozt3QkFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7NEJBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDZixzQkFBTzt5QkFDVjt3QkFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGFBQUssQ0FBQyxlQUFlLElBQUksV0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFOzRCQUNwRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBWixDQUFZLENBQUMsQ0FBQzt3QkFDNUQscUJBQU0sV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7d0JBQ3ZCLHFCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQW5CLFNBQW1CLENBQUM7Ozs7O0tBQ3ZCO0lBRU8sc0JBQU8sR0FBZjtRQUNJLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9FLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLG9DQUFxQixHQUE3QjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUN6QixPQUFPLEdBQUcsQ0FBQztRQUNmLElBQUksRUFBRSxHQUFHLGFBQUssQ0FBQyxlQUFlLENBQUM7UUFDL0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsYUFBSyxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLElBQUksR0FBRyxHQUFHLGFBQUssQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDOUMsQ0FBQztJQUVPLGtDQUFtQixHQUEzQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFYSxxQkFBTSxHQUFwQjs7Ozs7O3dCQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs0QkFDeEMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUM7Z0NBQ3BCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs0QkFDdEIsc0JBQU87eUJBQ1Y7d0JBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNkLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLGNBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDO3dCQUM5RixJQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTs0QkFDcEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDdkMscUJBQU0sV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQXRCLFNBQXNCLENBQUM7d0JBQ3ZCLHFCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQW5CLFNBQW1CLENBQUM7Ozs7O0tBQ3ZCO0lBRUQsOEJBQWUsR0FBZixVQUFnQixNQUFnQjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBTyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGdDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxxQkFBTSxHQUFOLFVBQU8sS0FBYyxFQUFFLE1BQWUsRUFBRSxpQkFBeUI7UUFDN0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLHlCQUNqQixXQUFJLENBQUMsb0JBQW9CLEVBQUUsaUJBQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLGtCQUFRLGlCQUFpQixpQkFBTyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSx5QkFDN0gsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUJBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDckIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQXBLQSxBQW9LQyxJQUFBO0FBcEtZLG9CQUFJOzs7O0FDUGpCLCtCQUE4QjtBQUU5QixJQUFJLElBQVUsQ0FBQztBQUVmLFNBQVMsTUFBTTtJQUNYLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNON0IsZ0NBQThCO0FBQzlCLGtEQUFpRDtBQUlqRDtJQUErQiw2QkFBSTtJQUMvQixtQkFDSSxTQUF3QixFQUN4QixLQUFZLEVBQ1osSUFBVTtRQUhkLFlBS0ksa0JBQU0sU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FJaEM7UUFIRyxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxJQUFJLElBQUk7WUFDckMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDZCQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxjQUFjLENBQUMsQ0FBQztRQUNuRixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O0lBQ2xCLENBQUM7SUFFTSx5QkFBSyxHQUFaO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsQ0FoQjhCLFdBQUksR0FnQmxDO0FBaEJZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B0Qix3Q0FBdUM7QUFLdkMsa0RBQWlEO0FBQ2pELGdDQUErQjtBQU8vQjtJQUF1Qyw0QkFBSTtJQUt2QyxrQkFDSSxTQUF3QixFQUN4QixJQUFVLEVBQ1YsSUFBVTtRQUhkLFlBS0ksa0JBQU0sU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FNL0I7UUFMRyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsSUFBSSxJQUFJO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw2QkFBYSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzlFLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7SUFDbEIsQ0FBQztJQUVTLDZCQUFVLEdBQXBCLFVBQXFCLFNBQXdCO1FBQ3pDLE9BQU8sSUFBSSxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFUSwwQkFBTyxHQUFoQixVQUFpQixLQUFhO1FBQzFCLGlCQUFNLE9BQU8sWUFBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO1FBQUEsaUJBYUM7UUFaRyxPQUFPO1lBQ0gsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUNmLFVBQUMsTUFBZTtnQkFDWixJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7b0JBQ3BELEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQzVCLE9BQU87aUJBQ1Y7Z0JBRUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQ0osQ0FBQTtRQUNMLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFa0IsOEJBQVcsR0FBOUIsVUFBK0IsTUFBZTtRQUMxQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsaUJBQU0sV0FBVyxZQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBSVMsbUNBQWdCLEdBQTFCO1FBQUEsaUJBS0M7UUFKRyxPQUFPLFVBQUMsZUFBc0M7WUFDMUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRVMsa0NBQWUsR0FBekI7UUFBQSxpQkFLQztRQUpHLE9BQU8sVUFBQyxlQUFzQztZQUMxQyxLQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLGVBQUM7QUFBRCxDQWxFQSxBQWtFQyxDQWxFc0MsV0FBSSxHQWtFMUM7QUFsRXFCLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2I5Qix1Q0FBMEQ7QUFFMUQ7SUFBaUMsK0JBQVE7SUFBekM7O0lBSUEsQ0FBQztJQUhzQixrQ0FBWSxHQUEvQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSmdDLG1CQUFRLEdBSXhDO0FBSlksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnhCLHVDQUEwRDtBQUUxRDtJQUFnQyw4QkFBUTtJQUF4Qzs7SUFJQSxDQUFDO0lBSG1CLGlDQUFZLEdBQTVCO1FBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSitCLG1CQUFRLEdBSXZDO0FBSlksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnZCLHVDQUFzQztBQUV0Qyx1Q0FBc0M7QUFLdEM7SUFJSSxjQUNjLFNBQXdCLEVBQ3hCLEtBQWMsRUFDZCxJQUFVO1FBRlYsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUVwQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRWUscUJBQU0sR0FBdEI7Ozs7O3dCQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLHFCQUFNLFdBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDO3dCQUN0QixxQkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFuQixTQUFtQixDQUFDOzs7OztLQUN2QjtJQUVTLHlCQUFVLEdBQXBCLFVBQXFCLFNBQXdCO1FBQ3pDLE9BQU8sSUFBSSxtQkFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxzQkFBVyxzQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQzs7O09BSkE7SUFNUyxzQkFBTyxHQUFqQixVQUFrQixLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sc0JBQU8sR0FBZCxVQUFlLEtBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRVMsMEJBQVcsR0FBckIsVUFBc0IsS0FBYTtRQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUM1RCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRVMsMEJBQVcsR0FBckIsVUFBc0IsTUFBZTtRQUFyQyxpQkFjQztRQWJHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLE9BQU87UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXRELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJO1lBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDOztZQUVILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFUywyQkFBWSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0lBQ25HLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0EvREEsQUErREMsSUFBQTtBQS9EWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOakIsdUNBQXNDO0FBT3RDO0lBQ0ksdUJBQ1ksaUJBQTJCLEVBQzNCLFdBQTBCO1FBRDFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBVTtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtJQUNuQyxDQUFDO0lBRVMsK0JBQU8sR0FBcEIsVUFBcUIsUUFBZ0I7Ozs7Ozt3QkFDN0IsU0FBUyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDNUIsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQzVELFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzVCLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3hCLEtBQUssR0FBRyxDQUFDOzs7NkJBQUUsQ0FBQSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUE7d0JBQzNDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4QyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDbEMsVUFBVSxDQUFDLE1BQU0sQ0FBQzs0QkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDOzRCQUM3SSxHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO3lCQUM1SSxDQUFDLENBQUM7d0JBQ0gscUJBQU0sV0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBQTs7d0JBQS9DLFNBQStDLENBQUM7Ozt3QkFQQyxLQUFLLEVBQUUsQ0FBQTs7O3dCQVM1RCxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7O0tBQ3ZCO0lBQ0wsb0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1IxQiwrQ0FBOEM7QUFFOUM7SUFBOEIsNEJBQVE7SUFHbEMsa0JBQVksSUFBa0IsRUFBRSxJQUFhO1FBQWpDLHFCQUFBLEVBQUEsa0JBQWtCO1FBQUUscUJBQUEsRUFBQSxhQUFhO1FBQTdDLFlBQ0ksaUJBQU8sU0FJVjtRQUhHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O0lBQ3pCLENBQUM7SUFFRCxrQ0FBZSxHQUFmLFVBQWdCLElBQVksRUFBRSxJQUFZO1FBQ3RDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0IsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxNQUFnQjtRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsbUNBQWdCLEdBQWhCLFVBQWlCLFFBQWdCO1FBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN4RCxJQUFJLFFBQVEsSUFBSSxHQUFHO1lBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztZQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFlLEdBQWYsVUFBZ0IsUUFBZ0I7UUFDNUIsSUFBSSxRQUFRLEdBQUcsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFHLEdBQUc7WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUMvQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSwwQkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0ExREEsQUEwREMsQ0ExRDZCLG1CQUFRLEdBMERyQztBQTFEWSw0QkFBUTs7Ozs7QUNDckI7SUFDSSx1QkFDb0IsRUFBVSxFQUNWLElBQVksRUFDWixJQUFZLEVBQ1osaUJBQXlCLEVBQ3pCLElBQVksRUFDWixNQUErRCxFQUMvRCxPQUFnQixFQUNoQixZQUFvQixFQUNwQixLQUFhLEVBQ2IsY0FBeUI7UUFUekIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFRO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUF5RDtRQUMvRCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixtQkFBYyxHQUFkLGNBQWMsQ0FBVztJQUU3QyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLHNDQUFhOzs7OztBQ0gxQixnRUFBK0Q7QUFDL0QsaUVBQWdFO0FBQ2hFLHdEQUF1RDtBQUV2RCx1Q0FBc0M7QUFFdEMsaURBQWdEO0FBRWhELFNBQVMsU0FBUyxDQUFDLElBQVM7SUFDeEIsT0FBTyxJQUFJLDZCQUFhLENBQ3BCLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsRUFBRSxFQUNQLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLENBQUMsTUFBTSxFQUNYLFVBQUMsS0FBSyxJQUFPLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUN6RCxDQUFBO0FBQ0wsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLElBQVM7SUFDeEIsT0FBTyxJQUFJLDZCQUFhLENBQ3BCLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsSUFBSSxDQUFDLElBQUksRUFDVCxVQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSTtRQUNoQixRQUFRLENBQUMsZUFBZSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDLEVBQ0QsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ3ZGLENBQUE7QUFDTCxDQUFDO0FBRVUsUUFBQSxLQUFLLEdBQUc7SUFDZixlQUFlLEVBQUUsRUFBRTtJQUNuQixpQkFBaUIsRUFBRSxFQUFFO0lBQ3JCLGlCQUFpQixFQUFFLEVBQUU7SUFDckIsVUFBVSxFQUFFLENBQUM7SUFDYixlQUFlLEVBQUUsQ0FBQztJQUNsQixPQUFPLEVBQUUsZ0VBQWdFO0lBQ3pFLE1BQU0sRUFBRTtRQUNKLElBQUksNkJBQWEsQ0FDYixDQUFDLEVBQ0QsVUFBVSxFQUNWLEdBQUcsRUFDSCxHQUFHLEVBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMzQixrQkFBa0IsRUFDbEIsZ0ZBQWdGLEVBQ2hGLHlEQUF5RCxFQUN6RCxtRUFBbUUsRUFDbkUsVUFBQyxLQUEwQjtZQUN2QixLQUFLLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUE7WUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUNKO1FBRUQsSUFBSSw2QkFBYSxDQUNiLENBQUMsRUFDRCxZQUFZLEVBQ1osR0FBRyxFQUNILEdBQUcsRUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNaLFdBQVcsRUFDWCx5REFBeUQsRUFDekQsMERBQTBELEVBQzFELDZCQUE2QixFQUM3QixVQUFDLEtBQTBCO1lBQ3ZCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6RSxLQUFLLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDckMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN6RSxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUNKO1FBRUQsSUFBSSw2QkFBYSxDQUNiLENBQUMsRUFDRCxXQUFXLEVBQ1gsSUFBSSxFQUNKLEVBQUUsRUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNaLGtCQUFrQixFQUNsQiwrREFBK0QsRUFDL0QsNEZBQTRGLEVBQzVGLFlBQVksRUFDWixVQUFDLEtBQTBCO1lBQ3ZCLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUNKO1FBRUQsSUFBSSw2QkFBYSxDQUNiLENBQUMsRUFDRCxvREFBb0QsRUFDcEQsR0FBRyxFQUNILEdBQUcsRUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNaLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsaUVBQWlFLEVBQ2pFLHVFQUF1RSxFQUN2RTtZQUNJLFdBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQ0o7UUFFRCxJQUFJLDZCQUFhLENBQ2IsQ0FBQyxFQUNELFNBQVMsRUFDVCxHQUFHLEVBQ0gsR0FBRyxFQUNILENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ1osU0FBUyxFQUNULHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsK0NBQStDLENBQ2xEO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLG1DQUFnQixDQUNoQixDQUFDLEVBQ0QsU0FBUyxFQUNULEdBQUcsRUFDSCxHQUFHLEVBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNULDBEQUEwRCxDQUM3RDtRQUNELElBQUksbUNBQWdCLENBQ2hCLENBQUMsRUFDRCxVQUFVLEVBQ1YsR0FBRyxFQUNILEVBQUUsRUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNaLE9BQU8sQ0FDVjtRQUNELElBQUksbUNBQWdCLENBQ2hCLENBQUMsRUFDRCxTQUFTLEVBQ1QsR0FBRyxFQUNILEdBQUcsRUFDSCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ1QsS0FBSyxDQUNSO1FBQ0QsSUFBSSxtQ0FBZ0IsQ0FDaEIsQ0FBQyxFQUNELFFBQVEsRUFDUixHQUFHLEVBQ0gsR0FBRyxFQUNILENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDVCwwREFBMEQsQ0FDN0Q7S0FDSjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksNkJBQWEsQ0FDYixDQUFDLEVBQ0QsY0FBYyxFQUNkLENBQUMsRUFDRCxDQUFDLEVBQ0QsRUFBRSxFQUNGLGNBQVEsQ0FBQyxFQUNULElBQUksRUFDSixlQUFlLEVBQ2YsQ0FBQyxDQUNKO1FBRUQsSUFBSSw2QkFBYSxDQUNiLENBQUMsRUFDRCxPQUFPLEVBQ1AsRUFBRSxFQUNGLEVBQUUsRUFDRiw2QkFBNkIsRUFDN0IsVUFBQyxNQUFlLElBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUMzQyxLQUFLLEVBQ0wsbUJBQW1CLEVBQ25CLEVBQUUsRUFDRixXQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDN0I7UUFFRCxJQUFJLDZCQUFhLENBQ2IsQ0FBQyxFQUNELFFBQVEsRUFDUixFQUFFLEVBQ0YsRUFBRSxFQUNGLHFCQUFxQixFQUNyQixVQUFDLE1BQWUsRUFBRSxLQUFjLEVBQUUsSUFBVTtZQUN4QyxJQUFHLEtBQUssWUFBWSxhQUFLO2dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUNELEtBQUssRUFDTCx3Q0FBd0MsRUFDeEMsR0FBRyxFQUNILFdBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUM1QjtRQUVELElBQUksNkJBQWEsQ0FDYixDQUFDLEVBQ0QsU0FBUyxFQUNULEVBQUUsRUFDRixFQUFFLEVBQ0YsMEJBQTBCLEVBQzFCLFVBQUMsTUFBZSxFQUFFLENBQVU7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQ0QsSUFBSSxFQUNKLHFCQUFxQixFQUNyQixFQUFFLEVBQ0YsV0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQzdCO1FBRUQsSUFBSSw2QkFBYSxDQUNiLENBQUMsRUFDRCxRQUFRLEVBQ1IsRUFBRSxFQUNGLENBQUMsRUFDRCw0QkFBNEIsRUFDNUIsVUFBQyxNQUFlO1lBQ1osTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUNELElBQUksRUFDSixnREFBZ0QsRUFDaEQsRUFBRSxFQUNGLFdBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM3QjtRQUVELElBQUksNkJBQWEsQ0FDYixDQUFDLEVBQ0QsYUFBYSxFQUNiLEVBQUUsRUFDRixFQUFFLEVBQ0YseUJBQXlCLEVBQ3pCLFVBQUMsTUFBZSxFQUFFLEtBQWM7WUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxLQUFLLEVBQ0wsa0JBQWtCLEVBQ2xCLEVBQUUsRUFDRixXQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDNUI7UUFFRCxJQUFJLDZCQUFhLENBQ2IsQ0FBQyxFQUNELE9BQU8sRUFDUCxHQUFHLEVBQ0gsRUFBRSxFQUNGLGdDQUFnQyxFQUNoQyxVQUFDLE1BQWUsRUFBRSxLQUFjLEVBQUUsSUFBVTtZQUN4QyxJQUFJLEtBQUssR0FBVSxNQUFNLENBQUM7WUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksS0FBSyxHQUFHLENBQUM7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RSxDQUFDLEVBQ0QsS0FBSyxFQUNMLDBDQUEwQyxFQUMxQyxHQUFHLEVBQ0gsV0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQzdCO1FBRUQsSUFBSSw2QkFBYSxDQUNiLENBQUMsRUFDRCxZQUFZLEVBQ1osR0FBRyxFQUNILENBQUMsRUFDRCw4QkFBOEIsRUFDOUIsVUFBQyxNQUFlLEVBQUUsS0FBYztZQUM1QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUNELEtBQUssRUFDTCxjQUFjLEVBQ2QsRUFBRSxFQUNGLFdBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM3QjtRQUVELElBQUksNkJBQWEsQ0FDYixDQUFDLEVBQ0QsNEJBQTRCLEVBQzVCLENBQUMsRUFDRCxDQUFDLEVBQ0QsWUFBWSxFQUNaLFVBQUMsTUFBZSxFQUFFLEtBQWM7WUFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQ0QsSUFBSSxFQUNKLGNBQWMsRUFDZCxHQUFHLENBQ047S0FDSjtDQUNKLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyUHJvdG90eXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBcclxuICAgICAgICBwdWJsaWMgaHA6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIG1hbmE6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIHNraWxsczogbnVtYmVyW10sIFxyXG4gICAgICAgIHB1YmxpYyBtb3R0bzogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ2FyZCB7XHJcbiAgICBwcm90ZWN0ZWQgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkcygpOiB7bGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRjYXJkLm9mZnNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDYXJkKCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRjYXJkO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFV0aWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx1bmtub3duPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbUludChtaW4gPSAwLCBtYXggPSAxMDApOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRGb3JtYXRDdXJyZW50VGltZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICByZXR1cm4gYFske2RhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7ZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke2RhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1dYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGZpcmV3b3JrcygpIHtcclxuICAgICAgICBsZXQgJGZpcmV3b3JrcyA9ICQoJy5maXJld29ya3MnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICAkZmlyZXdvcmtzLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5vZmZzZXQoeyBsZWZ0OiBVdGlsLnJhbmRvbUludCgwLCA1MDApLCB0b3A6IFV0aWwucmFuZG9tSW50KDAsIDUwMCkgfSlcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgICAgICAkZmlyZXdvcmtzLmFkZENsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW1hZ2VzUGF0aHMobnVtYmVyOiBudW1iZXIsIGNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIHsgbGVuZ3RoOiBjb3VudCB9KS5tYXAoKHVudXNlZDogYW55LCBpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgLi9pbWFnZXMvYW5pbWF0aW9uLyR7bnVtYmVyfS9pbWFnZV9wYXJ0XyR7KGluZGV4ICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgzLCAnMCcpfS5wbmdgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEVuZW15Q2FyZCB9IGZyb20gXCIuL0VuZW15Q2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0ZvckVuZW15L0VuZW15UGVya1wiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi8uLi9TdG9yZS9TdG9yZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBGaWdodGVyIHtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBwZXJrczogRW5lbXlQZXJrW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlLFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICl7XHJcbiAgICAgICAgc3VwZXIocHJvdG90eXBlLCBnYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZVBlcmtzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnNraWxscy5mb3JFYWNoKHBlcmtOdW1iZXIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IEVuZW15UGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lLmdhbWVFbmRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmKFV0aWwucmFuZG9tSW50KDAsIDEwMCkgPCA1KVxyXG4gICAgICAgICAgICB0aGlzLnBlcmtzW1V0aWwucmFuZG9tSW50KDAsIHRoaXMucGVya3MubGVuZ3RoKV0uYXBwbHkoKTtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteUNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuaW5jcmVhc2VLaWxsZWRDb3VudCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNhcmQgZXh0ZW5kcyBGaWdodGVyQ2FyZCB7XHJcblxyXG59IiwiaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tIFwiLi4vUGVya3MvUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtzL1BlcmtcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWdodGVyIHtcclxuICAgIHByaXZhdGUgX2hwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgY2FyZDogRmlnaHRlckNhcmQ7XHJcbiAgICBwcm90ZWN0ZWQgcGVya3M6IFBlcmtbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlLFxyXG4gICAgICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNhcmQgPSB0aGlzLmNyZWF0ZUNhcmQocHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLl9ocCA9IHByb3RvdHlwZS5ocDtcclxuICAgICAgICB0aGlzLl9tYW5hID0gcHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgdGhpcy5wZXJrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBlcmtzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdGlhbGl6ZVBlcmtzKCk6IHZvaWQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkTWFuYSg1KTtcclxuICAgICAgICB0aGlzLmFkZEhwKDIpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hZGRMb2codGhpcywgdGhpcywgc3RvcmUuZGllZExvZyk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaWdodGVyQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLm1vdHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhwKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaHAoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2hwID0gdGhpcy5nZXRBZGVxdWF0ZUhwKGNvdW50KTtcclxuICAgICAgICB0aGlzLmNhcmQuc2V0SHBXaWR0aCh0aGlzLl9ocCAqIDEwMCAvIHRoaXMucHJvdG90eXBlLmhwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSHAoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHN0YXJ0SHAgPSB0aGlzLl9ocDtcclxuICAgICAgICB0aGlzLmhwID0gdGhpcy5faHAgKyBjb3VudDtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHAgLSBzdGFydEhwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QWRlcXVhdGVIcChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY291bnQgPiB0aGlzLnByb3RvdHlwZS5ocCkgcmV0dXJuIHRoaXMucHJvdG90eXBlLmhwO1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hbmEoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSB0aGlzLmdldEFkZXF1YXRlTWFuYShjb3VudCk7XHJcbiAgICAgICAgdGhpcy5jYXJkLnNldE1hbmFXaWR0aCh0aGlzLl9tYW5hICogMTAwIC8gdGhpcy5wcm90b3R5cGUubWFuYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHN0YXJ0TWFuYSA9IHRoaXMuX21hbmE7XHJcbiAgICAgICAgdGhpcy5tYW5hID0gdGhpcy5fbWFuYSArIGNvdW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hIC0gc3RhcnRNYW5hO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QWRlcXVhdGVNYW5hKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjb3VudCA+IHRoaXMucHJvdG90eXBlLm1hbmEpIHJldHVybiB0aGlzLnByb3RvdHlwZS5tYW5hO1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0aXZhdGUoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FyZC50dXJuT24oZWZmZWN0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQudHVybk9mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDYXJkKCk6IEdhbWVDYXJkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKTogSVBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkLmdldENvb3JkcygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmIChldmVudC5jb2RlID09ICdLZXlGJykge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKTtcclxuICAgICAgICBVdGlsLmZpcmV3b3JrcygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRlckNhcmQgZXh0ZW5kcyBHYW1lQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJlbmVteSBuYW1lXCIsIG1vdHRvID0gXCJtb3R0b1wiKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRjYXJkID0gdGhpcy4kaW5pdGlhbGl6ZUNhcmQobmFtZSwgbW90dG8pO1xyXG4gICAgICAgIHRoaXMuJGdldE1lbnUoKS5hcHBlbmQodGhpcy4kY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjZW5lbWllcy1tZW51Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAkaW5pdGlhbGl6ZUNhcmQobmFtZTogc3RyaW5nLCBtb3R0bzogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI2ZpZ2h0ZXItY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktbW90dG8nKS5odG1sKG1vdHRvKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIcFdpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5ocC1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWFuYVdpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PbihlZmZlY3Q6IEZ1bmN0aW9uLCBvd25lcjogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVmZmVjdChvd25lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0ZXJQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBocDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgbWFuYTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgc2tpbGxzOiBudW1iZXJbXSwgXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IG1vdHRvOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBIZXJvUHJvdG90eXBlIH0gZnJvbSBcIi4vSGVyb1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgSGVyb0NhcmQgfSBmcm9tIFwiLi9IZXJvQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBPbkhlcm9QZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0Zvckhlcm8vT25IZXJvUGVya1wiO1xyXG5pbXBvcnQgeyBPbkVuZW15UGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Gb3JIZXJvL09uRW5lbXlQZXJrXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uLy4uL1N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IEhlcm9QZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0Zvckhlcm8vSGVyb1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvIGV4dGVuZHMgRmlnaHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgcGVya3M6IEhlcm9QZXJrW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdG90eXBlOiBIZXJvUHJvdG90eXBlLFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVQZXJrcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS5za2lsbHMuZm9yRWFjaChwZXJrTnVtYmVyID0+IHtcclxuICAgICAgICAgICAgaWYoc3RvcmUucGVya3NbcGVya051bWJlcl0uZm9yU2VsZikgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IE9uSGVyb1Blcmsoc3RvcmUucGVya3NbcGVya051bWJlcl0sIHRoaXMsIHRoaXMuZ2FtZSkpO1xyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJrcy5wdXNoKG5ldyBPbkVuZW15UGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGVyb0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1ldGhvZCh0YXJnZXRNZXRob2Q6IEZ1bmN0aW9uLCBlZmZlY3RNZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGFyZ2V0TWV0aG9kKGVmZmVjdE1ldGhvZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNheU1hbmFMYWNraW5nKCk6IHZvaWQge1xyXG4gICAgICAgICg8SGVyb0NhcmQ+dGhpcy5jYXJkKS5kcmF3TWFuYUxhY2tpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5nYW1lRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5oZXJvV29uID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVyb0NhcmQgZXh0ZW5kcyBGaWdodGVyQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1vdHRvOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBtb3R0byk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnZW5lbXktY2FyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSAkZ2V0TWVudSgpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gJCgnI2hlcm8tbWVudScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkcmF3TWFuYUxhY2tpbmcoKSB7XHJcbiAgICAgICAgbGV0ICRtYW5hUHJvZ3Jlc3MgPSB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJyk7XHJcbiAgICAgICAgJG1hbmFQcm9ncmVzcy5yZW1vdmVDbGFzcygnYmctcHJpbWFyeScpLmFkZENsYXNzKCdiZy1kYXJrJyk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgICRtYW5hUHJvZ3Jlc3MucmVtb3ZlQ2xhc3MoJ2JnLWRhcmsnKS5hZGRDbGFzcygnYmctcHJpbWFyeScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVyb1Byb3RvdHlwZSBleHRlbmRzIEZpZ2h0ZXJQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IG51bWJlciwgXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLCBcclxuICAgICAgICBocDogbnVtYmVyLCBcclxuICAgICAgICBtYW5hOiBudW1iZXIsIFxyXG4gICAgICAgIHNraWxsczogQXJyYXk8bnVtYmVyPiwgXHJcbiAgICAgICAgbW90dG86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZmlyc3REZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzZWNvbmREZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBhbnN3ZXI6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcmVhY3Rpb24/OiAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHZvaWRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBuYW1lLCBocCwgbWFuYSwgc2tpbGxzLCBtb3R0byk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZS9TdG9yZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQge0ZpZ2h0ZXJQcm90b3R5cGV9IGZyb20gXCIuLi8uLi8uLi9UU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgX2hlcm9OdW1iZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnYW1lRW5kZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaGVyb1dvbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9raWxsZWRFbmVtaWVzQ291bnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdGltZVRvRW5kOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVybzogSGVybztcclxuICAgIHB1YmxpYyBlbmVtaWVzOiBBcnJheTxFbmVteT47XHJcbiAgICBwcml2YXRlIF9zY29yZSA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ2hvc2VuV2luZG93KCk7XHJcbiAgICAgICAgJCgnI2J1dHRvbicpLmNsaWNrKCk7XHJcbiAgICAgICAgJCgnI2dhbWUtc3RhcnQtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbmZpcm0oKSk7XHJcbiAgICAgICAgJCgnI25ldy1nYW1lLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQ2hvc2VuV2luZG93KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnI2NhcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuaGVyb2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9zZW5XaW5kb3dFeGNlcHQoaW5kZXg6IG51bWJlciwgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICQoJyNjYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLmhlcm9lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCgkY2FyZCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVPbmVDYXJkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjY2hvb3NlLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmNoaWxkcmVuKCdkaXYnKS5hdHRyKCdkYXRhLWhlcm8taWQnLCBpbmRleCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChzdG9yZS5oZXJvZXNbaW5kZXhdLm5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1maXJzdC1kZXNjcmlwdGlvbicpLmh0bWwoc3RvcmUuaGVyb2VzW2luZGV4XS5maXJzdERlc2NyaXB0aW9uKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktc2Vjb25kLWRlc2NyaXB0aW9uJykuaHRtbChzdG9yZS5oZXJvZXNbaW5kZXhdLnNlY29uZERlc2NyaXB0aW9uKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJGNhcmQub24oJ2NsaWNrJywgKCkgPT4geyB0aGlzLmNob29zZUNhcmRPbkNsaWNrKGluZGV4LCAkY2FyZC5maW5kKCcuY2FyZCcpKSB9KTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaG9vc2VDYXJkT25DbGljayhpbmRleDogbnVtYmVyLCAkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgICQoJyNjb25maXJtLW1lbnUnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ2hvc2VuV2luZG93RXhjZXB0KGluZGV4LCAkY2FyZC5wYXJlbnQoKSk7XHJcbiAgICAgICAgJGNhcmQuYWRkQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdGhpcy5faGVyb051bWJlciA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuc2V0UmVhY3Rpb24oc3RvcmUuaGVyb2VzW2luZGV4XS5hbnN3ZXIsIHN0b3JlLmhlcm9lc1tpbmRleF0/LnJlYWN0aW9uLCAkY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRSZWFjdGlvbihzdHJpbmc6IHN0cmluZywgbWV0aG9kPzogRnVuY3Rpb24sICRjYXJkPzogSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgJCgnI3JlYWN0aW9uJykuaHRtbChzdHJpbmcpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBtZXRob2QoJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgICAgICQoJyNidXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9oZXJvTnVtYmVyID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oc3RvcmUuaGVyb2VzW3RoaXMuX2hlcm9OdW1iZXJdLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVFbmVtaWVzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVHYW1lVGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuc3RhcnRFbmVteUNvdW50OyBpKyspIHRoaXMuYWRkRW5lbXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkRW5lbXkoKTogdm9pZCB7XHJcbiAgICAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkoc3RvcmUuZW5lbWllc1tVdGlsLnJhbmRvbUludCgwLCBzdG9yZS5lbmVtaWVzLmxlbmd0aCldLCB0aGlzKSk7XHJcbiAgICAgICAgZWxzZSBpZih0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHN0b3JlLmVuZW1pZXNbYXJndW1lbnRzWzBdXSwgdGhpcykpO1xyXG4gICAgICAgIGVsc2UgaWYoYXJndW1lbnRzWzBdIGluc3RhbmNlb2YgRmlnaHRlclByb3RvdHlwZSlcclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KGFyZ3VtZW50c1swXSwgdGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmNyZWFzZUtpbGxlZENvdW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2tpbGxlZEVuZW1pZXNDb3VudCsrO1xyXG4gICAgICAgICQoJyNlbmVteS1jb3VudCcpLnRleHQodGhpcy5fa2lsbGVkRW5lbWllc0NvdW50KTtcclxuICAgICAgICB0aGlzLmFkZFNjb3JlKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmVtaWVzLmxlbmd0aCA8IHN0b3JlLmVuZW1pZXNNYXhDb3VudCAmJiBVdGlsLnJhbmRvbUludCgwLCAxMDApIDwgdGhpcy5jYWxjdWxhdGVBZGRpbmdDaGFuY2UoKSlcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteSgpO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoKGVuZW15KSA9PiBlbmVteS5ocCA+IDApO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuZEdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRlbmRNb2RhbCA9ICQoJyNteU1vZGFsMicpO1xyXG4gICAgICAgICRlbmRNb2RhbC5maW5kKCcubW9kYWwtdGl0bGUnKS50ZXh0KHRoaXMuaGVyb1dvbiA/IFwiWW91IHdvbiFcIiA6IFwiWW91IGxvc3QuLi5cIik7XHJcbiAgICAgICAgbGV0ICRyZXN1bHQgPSAkKCcucHJvZ3Jlc3MtbWVudScpLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ2NvbC04Jyk7XHJcbiAgICAgICAgJHJlc3VsdC5maW5kKCcubXQtNScpLnJlbW92ZUNsYXNzKCdtdC01Jyk7XHJcbiAgICAgICAgJGVuZE1vZGFsLmZpbmQoJy5tb2RhbC1ib2R5JykuYXBwZW5kKCRyZXN1bHQpO1xyXG4gICAgICAgICQoJyNidXR0b24yJykuY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZUFkZGluZ0NoYW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmVtaWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIDEwMDtcclxuICAgICAgICBsZXQgbWMgPSBzdG9yZS5lbmVtaWVzTWF4Q291bnQ7XHJcbiAgICAgICAgbGV0IHRjID0gdGhpcy5lbmVtaWVzLmxlbmd0aDtcclxuICAgICAgICBsZXQgbWluID0gc3RvcmUubWluQWRkRW5lbXlDaGFuY2U7XHJcbiAgICAgICAgbGV0IG1heCA9IHN0b3JlLm1heEFkZEVuZW15Q2hhbmNlO1xyXG4gICAgICAgIHJldHVybiAobWMgLSB0YykgLyBtYyAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUdhbWVUaW1lcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl90aW1lVG9FbmQgPSBzdG9yZS5nYW1lVGltaW5nICogNjA7XHJcbiAgICAgICAgdGhpcy5kb1RpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGRvVGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZVRvRW5kIDw9IDAgfHwgdGhpcy5nYW1lRW5kZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3RpbWVUb0VuZCA8PSAwKVxyXG4gICAgICAgICAgICAgICAgJCgnI3RpbWUnKS5yZW1vdmVDbGFzcygndGV4dC1kYW5nZXInKS5hZGRDbGFzcygndGV4dC1zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl90aW1lVG9FbmQtLTtcclxuICAgICAgICBsZXQgc2Vjb25kcyA9IHRoaXMuX3RpbWVUb0VuZCAlIDYwO1xyXG4gICAgICAgICQoJyN0aW1lJykudGV4dChgJHsodGhpcy5fdGltZVRvRW5kIC0gc2Vjb25kcykgLyA2MH06JHtzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gKTtcclxuICAgICAgICBpZih0aGlzLl90aW1lVG9FbmQgPD0gMzApXHJcbiAgICAgICAgICAgICQoJyN0aW1lJykuYWRkQ2xhc3MoJ3RleHQtZGFuZ2VyJyk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDAwKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmRvVGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlRW5lbWllcyhlZmZlY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLm1hcCgoZW5lbXkpID0+IHsgZW5lbXkuYWN0aXZhdGUoZWZmZWN0KSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMubWFwKChlbmVteSkgPT4geyBlbmVteS5kZWFjdGl2YXRlKCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTG9nKG1ha2VyOiBGaWdodGVyLCB0YXJnZXQ6IEZpZ2h0ZXIsIGFjdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGFjdGlvbkxvZyA9ICQoYDxkaXY+XHJcbiAgICAgICAgJHtVdGlsLmdldEZvcm1hdEN1cnJlbnRUaW1lKCl9IDxiPiR7bWFrZXIucHJvdG90eXBlLm5hbWV9PC9iPiAke2FjdGlvbkRlc2NyaXB0aW9ufSA8Yj4ke3RhcmdldCA9PSBtYWtlciA/ICcnIDogdGFyZ2V0LnByb3RvdHlwZS5uYW1lfTwvYj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICAkKCcjbG9ncycpLnByZXBlbmQoJGFjdGlvbkxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2NvcmUoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3Njb3JlICs9IGNvdW50O1xyXG4gICAgICAgICQoJyNzY29yZScpLnRleHQodGhpcy5fc2NvcmUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5sZXQgZ2FtZTogR2FtZTtcclxuXHJcbmZ1bmN0aW9uIG9uTG9hZCgpIHtcclxuICAgIGdhbWUgPSBuZXcgR2FtZSgpO1xyXG59XHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBvbkxvYWQpOyIsImltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCJcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIlxyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtcIlxyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrUHJvdG90eXBlXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXlQZXJrIGV4dGVuZHMgUGVyayB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgb3duZXI6IEVuZW15LFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgb3duZXIsIGdhbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5hbmltYXRpb25QYXRocyAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBQZXJrQW5pbWF0aW9uKG93bmVyLmdldENhcmQoKSwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMucHJvdG90eXBlLmZvclNlbGYgPyB0aGlzLm93bmVyIDogdGhpcy5nYW1lLmhlcm87XHJcbiAgICAgICAgdGhpcy5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVya0NhcmQgfSBmcm9tIFwiLi4vUGVya0NhcmRcIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuLi9QZXJrXCI7XHJcblxyXG50eXBlIFBlcmtDYXJkT25DbGljayA9ICgpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEZvckZpZ2h0ZXJDYXJkT25DbGljayA9ICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEFjdGl2YXRpb25GdW5jdGlvbiA9IChtZXRob2Q6IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4gdm9pZDtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGVyb1BlcmsgZXh0ZW5kcyBQZXJrIHtcclxuICAgIHByaXZhdGUgX2NhcmQ6IFBlcmtDYXJkO1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIG93bmVyOiBIZXJvO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgaGVybzogSGVybyxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGhlcm8sIGdhbWUpXHJcbiAgICAgICAgdGhpcy5fY2FyZCA9IHRoaXMuY3JlYXRlQ2FyZChwcm90b3R5cGUpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0T25jbGljayh0aGlzLmdldE9uY2xpY2soKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmFuaW1hdGlvblBhdGhzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFBlcmtBbmltYXRpb24odGhpcy5fY2FyZCwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUpOiBQZXJrQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJrQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLmluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlIHNldE1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyLnNldE1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0UHJvZ3Jlc3NXaWR0aCh0aGlzLm1hbmEgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5tYW5hKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T25jbGljaygpOiBQZXJrQ2FyZE9uQ2xpY2sge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZhdG9yKCkoXHJcbiAgICAgICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmZpZ2h0ZXJNYW5hRGVtYW5kID4gdGhpcy5vd25lci5tYW5hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIuc2F5TWFuYUxhY2tpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBhcHBseUVmZmVjdCh0YXJnZXQ6IEZpZ2h0ZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5CZUFwcGxpZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuYXBwbHlFZmZlY3QodGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZFNjb3JlKHRoaXMucHJvdG90eXBlLnNjb3JlKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmRlYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QWN0aXZhdG9yKCk6IEFjdGl2YXRpb25GdW5jdGlvblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRPbkVuZW15TWV0aG9kKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIChvbkNsaWNrRnVuY3Rpb246IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFjdGl2YXRlRW5lbWllcyhvbkNsaWNrRnVuY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE9uSGVyb01ldGhvZCgpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAob25DbGlja0Z1bmN0aW9uOiBGb3JGaWdodGVyQ2FyZE9uQ2xpY2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmRlYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuYWN0aXZhdGUob25DbGlja0Z1bmN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWN0aXZhdGlvbkZ1bmN0aW9uLCBIZXJvUGVyayB9IGZyb20gXCIuL0hlcm9QZXJrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25FbmVteVBlcmsgZXh0ZW5kcyBIZXJvUGVyayB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0QWN0aXZhdG9yKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T25FbmVteU1ldGhvZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQWN0aXZhdGlvbkZ1bmN0aW9uLCBIZXJvUGVyayB9IGZyb20gXCIuL0hlcm9QZXJrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT25IZXJvUGVyayBleHRlbmRzIEhlcm9QZXJrIHtcclxuICAgIHB1YmxpYyBvdmVycmlkZSBnZXRBY3RpdmF0b3IoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPbkhlcm9NZXRob2QoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBlcmtDYXJkIH0gZnJvbSBcIi4vUGVya0NhcmRcIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuL1BlcmtQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4vUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrIHtcclxuICAgIHByb3RlY3RlZCBfbWFuYTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIGFuaW1hdGlvbj86IFBlcmtBbmltYXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSxcclxuICAgICAgICBwcm90ZWN0ZWQgb3duZXI6IEZpZ2h0ZXIsXHJcbiAgICAgICAgcHJvdGVjdGVkIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhc3luYyB1cGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5hZGRNYW5hKDEpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoMTAwKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSk6IFBlcmtDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBlcmtDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUuaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldE1hbmEoY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRNYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRSZWFsTWFuYShjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hbmEoY291bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFuYSA9IHRoaXMubWFuYSArIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRSZWFsTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY291bnQgPiB0aGlzLnByb3RvdHlwZS5tYW5hKSByZXR1cm4gdGhpcy5wcm90b3R5cGUubWFuYTtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFwcGx5RWZmZWN0KHRhcmdldDogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5CZUFwcGxpZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm1hbmEgPSAwO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkTWFuYSgtdGhpcy5wcm90b3R5cGUuZmlnaHRlck1hbmFEZW1hbmQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uYW5pbWF0ZSh0YXJnZXQuZ2V0Q29vcmRzKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuZWZmZWN0KHRhcmdldCwgdGhpcy5vd25lciwgdGhpcy5nYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByb3RvdHlwZS5lZmZlY3QodGFyZ2V0LCB0aGlzLm93bmVyLCB0aGlzLmdhbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hZGRMb2codGhpcy5vd25lciwgdGFyZ2V0LCB0aGlzLnByb3RvdHlwZS5hY3Rpb25TdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjYW5CZUFwcGxpZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYSA+PSB0aGlzLnByb3RvdHlwZS5tYW5hICYmIHRoaXMub3duZXIubWFuYSA+PSB0aGlzLnByb3RvdHlwZS5maWdodGVyTWFuYURlbWFuZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2ludCB7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxufSBcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc3RhcnRQb2ludEhhbmRsZXI6IEdhbWVDYXJkLFxyXG4gICAgICAgIHByaXZhdGUgaW1hZ2VzUGF0aHM6IEFycmF5PHN0cmluZz4gXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGUoZW5kcG9pbnQ6IElQb2ludCkge1xyXG4gICAgICAgIGxldCAkb3JpZ2luYWwgPSAkKCcuYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgbGV0ICRhbmltYXRpb24gPSAkb3JpZ2luYWwuY2xvbmUoKS5yZW1vdmVDbGFzcygnYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgJG9yaWdpbmFsLmFmdGVyKCRhbmltYXRpb24pO1xyXG4gICAgICAgICRhbmltYXRpb24ucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmltYWdlc1BhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VQYXRoID0gdGhpcy5pbWFnZXNQYXRoc1tpbmRleF07XHJcbiAgICAgICAgICAgICRhbmltYXRpb24uYXR0cignc3JjJywgaW1hZ2VQYXRoKTtcclxuICAgICAgICAgICAgJGFuaW1hdGlvbi5vZmZzZXQoeyBcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkubGVmdCArIChlbmRwb2ludC5sZWZ0IC0gdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS5sZWZ0KSAqIGluZGV4IC8gKHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS50b3AgKyAoZW5kcG9pbnQudG9wIC0gdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS50b3ApICogaW5kZXggLyAodGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCAvIHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGFuaW1hdGlvbi5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtDYXJkIGV4dGVuZHMgR2FtZUNhcmQge1xyXG4gICAgcHJpdmF0ZSBfb25jbGljazogRnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwicGVyayBuYW1lXCIsIGluZm8gPSBcImluZm9cIikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kY2FyZCA9IHRoaXMuJGluaXRpYWxpemVDYXJkKG5hbWUsIGluZm8pO1xyXG4gICAgICAgICQoJyNoZXJvLW1lbnUnKS5hcHBlbmQodGhpcy4kY2FyZCk7XHJcbiAgICAgICAgdGhpcy5fb25jbGljayA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJGluaXRpYWxpemVDYXJkKG5hbWU6IHN0cmluZywgaW5mbzogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI3BlcmstY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktaW5mbycpLmh0bWwoaW5mbyk7XHJcbiAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIHJldHVybiAkY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPbmNsaWNrKG1ldGhvZDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbmNsaWNrID0gbWV0aG9kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyZXNzV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID49IDEwMCkgdGhpcy50dXJuT24oKTtcclxuICAgICAgICBlbHNlIHRoaXMudHVybk9mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlYWxQZXJjZW50cyhwZXJjZW50czogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAocGVyY2VudHMgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAocGVyY2VudHMgPiAxMDApIHJldHVybiAxMDA7XHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIHR1cm5PbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykucmVtb3ZlQ2xhc3MoJ3Byb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJy5wZXJrLWNhcmQnKS5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICAgICAgdGhpcy5fb25jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWVudGVyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hdHRyKCdyb2xlJywgJ2J1dHRvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0dXJuT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS5hZGRDbGFzcygncHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vZmYoXCJjbGljayBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIik7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hdHRyKCdyb2xlJywgJycpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9NYWluL0dhbWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrUHJvdG90eXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IG1hbmE6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZmlnaHRlck1hbmFEZW1hbmQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaW5mbzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBlZmZlY3Q6ICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyPzogRmlnaHRlciwgZ2FtZT86IEdhbWUpID0+IHZvaWQsXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGZvclNlbGY6IGJvb2xlYW4sXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGFjdGlvblN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzY29yZTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBhbmltYXRpb25QYXRocz86IHN0cmluZ1tdXHJcbiAgICApIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEhlcm9Qcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4uL1BlcmtzL1BlcmtQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIjtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlSGVybyhqc29uOiBhbnkpOiBIZXJvUHJvdG90eXBlIHtcclxuICAgIHJldHVybiBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICBqc29uLmlkLFxyXG4gICAgICAgIGpzb24ubmFtZSxcclxuICAgICAgICBqc29uLmhwLFxyXG4gICAgICAgIGpzb24ubWFuYSxcclxuICAgICAgICBqc29uLnNraWxscyxcclxuICAgICAgICBqc29uLm1vdHRvLFxyXG4gICAgICAgIGpzb24uZmlyc3REZXNjcmlwdGlvbixcclxuICAgICAgICBqc29uLnNlY29uZERlc2NyaXB0aW9uLFxyXG4gICAgICAgIGpzb24uYW5zd2VyLFxyXG4gICAgICAgICgkY2FyZCkgPT4geyBGdW5jdGlvbignJGNhcmQnLCBqc29uLnJlYWN0aW9uKSgkY2FyZCkgfVxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVBlcmsoanNvbjogYW55KTogUGVya1Byb3RvdHlwZSB7XHJcbiAgICByZXR1cm4gbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAganNvbi5pZCxcclxuICAgICAgICBqc29uLm5hbWUsXHJcbiAgICAgICAganNvbi5tYW5hLFxyXG4gICAgICAgIGpzb24uZmlnaHRlck1hbmFEZW1hbmQsXHJcbiAgICAgICAganNvbi5pbmZvLFxyXG4gICAgICAgICh0YXJnZXQsIG93bmVyLCBnYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIEZ1bmN0aW9uKCd0YXJnZXQsIG93bmVyJywgJ2dhbWUnLCBqc29uLmVmZmVjdCkodGFyZ2V0LCBvd25lciwgZ2FtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBqc29uLmZvclNlbGYsXHJcbiAgICAgICAganNvbi5hY3Rpb25TdHJpbmcsXHJcbiAgICAgICAganNvbi5zY29yZSxcclxuICAgICAgICBqc29uLmNvdW50T2ZJbWFnZXMgIT0gbnVsbCA/IFV0aWwuZ2V0SW1hZ2VzUGF0aHMoanNvbi5pZCwganNvbi5jb3VudE9mSW1hZ2VzKSA6IG51bGxcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGxldCBzdG9yZSA9IHtcclxuICAgIGVuZW1pZXNNYXhDb3VudDogMTIsXHJcbiAgICBtaW5BZGRFbmVteUNoYW5jZTogMTUsXHJcbiAgICBtYXhBZGRFbmVteUNoYW5jZTogMzUsXHJcbiAgICBnYW1lVGltaW5nOiAzLFxyXG4gICAgc3RhcnRFbmVteUNvdW50OiAxLFxyXG4gICAgZGllZExvZzogJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7Qv9C+0LPQuNCxLjwvc3Bhbj4gUHJlc3MgRiB0byBwYXkgcmVzcGVjdCcsXHJcbiAgICBoZXJvZXM6IFtcclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQmtGD0LrRg9C80LHQtdGAJywgXHJcbiAgICAgICAgICAgIDUwMCwgXHJcbiAgICAgICAgICAgIDEwMCwgXHJcbiAgICAgICAgICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XSxcclxuICAgICAgICAgICAgJ9CS0YHQtdGFINC30LDQutGD0LrRg9C80LHRgNGOIScsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCX0LXQu9GR0L3Ri9C5PC9zcGFuPiwg0L/Rg9C/0YvRgNGH0LDRgtGL0LksINC70Y7QsdC40YIsINC60L7Qs9C00LAg0LXQs9C+INC60YPRgdCw0Y7RgicsXHJcbiAgICAgICAgICAgICfQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7QutGA0LDRgdC90YvQuTwvc3Bhbj4hINCd0LUg0L/Rg9GC0LDRgtGMIScsXHJcbiAgICAgICAgICAgICfQpdC+0YXQviwg0YXQtdGF0LXQuSEg0K8g0YLQtdCx0Y8gPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9Cw0LrRg9C60YPQvNCx0YDRjjwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLXN1Y2Nlc3MgdGV4dC13aGl0ZVwiKVxyXG4gICAgICAgICAgICAgICAgJGNhcmQuZmluZChcInNwYW5cIikucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhcInRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAxLCBcclxuICAgICAgICAgICAgJ9Cf0L7QvNC40LTQvtGA0LjRg9GBJywgXHJcbiAgICAgICAgICAgIDc1MCxcclxuICAgICAgICAgICAgMjAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDRdLFxyXG4gICAgICAgICAgICAn0K8g0LrRgNCw0YHQvdC10Y4nLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtCa0YDQsNGB0L3Ri9C5PC9zcGFuPiwg0LPQu9Cw0LTQutC40LksINGC0LLQvtC5JyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4hINCd0LUg0L/Rg9GC0LDRgtGMIScsXHJcbiAgICAgICAgICAgICfQkNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdGF0LDRhdCw0YXQsNGF0LDRhdCw0YUnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICRjYXJkLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5hZGRDbGFzcyhcImJnLXRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy1saWdodCB0ZXh0LWRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcyhcImJnLXRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICBVdGlsLnNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRjYXJkLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYmctZGFyayB0ZXh0LXdoaXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMiwgXHJcbiAgICAgICAgICAgICfQlNGL0L3Rh9GD0L3QtNGD0LonLCBcclxuICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgNzAsXHJcbiAgICAgICAgICAgIFswLCAzLCA2LCA4XSxcclxuICAgICAgICAgICAgJ9Ca0LDQuiDRjyDRgdGO0LTQsCDQv9C+0L/QsNC7JyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+0JbRkdC70YLRi9C5PC9zcGFuPiwg0L/QvtC/0LDQuyDRgdGO0LTQsCDRgdC70YPRh9Cw0LnQvdC+JyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC60YDQsNGB0L3Ri9C5PC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAn0JzQvtC70Y4g0YLQtdCx0Y8hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgICRjYXJkLmZpbmQoXCIudGV4dC13YXJuaW5nXCIpLnJlbW92ZUNsYXNzKFwidGV4dC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDMsIFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJiZy1zdWNjZXNzIHRleHQtbGlnaHRcIj7QntCz0YPRgNGG0LDQvTwvc3Bhbj4nLCBcclxuICAgICAgICAgICAgNDAwLFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIFswLCAzLCA1LCA3XSxcclxuICAgICAgICAgICAgJ9Cf0YPQvNC/0YPRgNGD0LzQv9GD0LwnLFxyXG4gICAgICAgICAgICAn0J3QtSDQv9GD0YLQsNGC0Ywg0YEg0JrRg9C60YPQvNCx0LXRgNC+0LwhJyxcclxuICAgICAgICAgICAgJ9Ci0L7QttC1IDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LfQtdC70ZHQvdGL0Lk8L3NwYW4+LCDQvdC+INC90LUg0JrRg9C60YPQvNCx0LXRgCEnLFxyXG4gICAgICAgICAgICAn0J3QtSDQstC30LTRg9C80LDQuSDRgdC60LDQt9Cw0YLRjCwg0YfRgtC+INGPIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0JrRg9C60YPQvNCx0LXRgDwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXRpbC5maXJld29ya3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA0LCBcclxuICAgICAgICAgICAgJ9CQ0YDQsdGD0LfQvtC9JywgXHJcbiAgICAgICAgICAgIDgwMCxcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDIsIDMsIDZdLFxyXG4gICAgICAgICAgICAn0J/RiNC/0YjQv9GI0L8nLFxyXG4gICAgICAgICAgICAn0KHQsNC80YvQuSA8Yj7QsdC+0LvRjNGI0L7QuTwvYj4nLFxyXG4gICAgICAgICAgICAn0KHQsNC80YvQuSDRgdC/0LXQu9GL0LknLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7QodGK0LXRiNGMINC80LXQvdGPPzwvc3Bhbj4nXHJcbiAgICAgICAgKVxyXG4gICAgXSxcclxuICAgIGVuZW1pZXM6IFtcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQoNC10LTQuNGB0L7QvScsIFxyXG4gICAgICAgICAgICAzMDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGJvcmRlci1kYW5nZXJcIj7QndC10L3QsNCy0LjQttGDITwvc3Bhbj4nXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQkdCw0LrQu9Cw0LbRg9C9JywgXHJcbiAgICAgICAgICAgIDQwMCwgXHJcbiAgICAgICAgICAgIDgwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDUsIDddLFxyXG4gICAgICAgICAgICAn0JDQs9GA0YUhJ1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0KLQvtC80LDRgtGD0YEnLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDVdLFxyXG4gICAgICAgICAgICAn0KPQv9GEJ1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0KLRi9C60LLQuNC9JywgXHJcbiAgICAgICAgICAgIDUwMCwgXHJcbiAgICAgICAgICAgIDEwMCwgXHJcbiAgICAgICAgICAgIFswLCAxLCA0XSxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXIgYm9yZGVyLWRhbmdlclwiPtCV0YXQtdGF0LXQtdGF0LXRhTwvc3Bhbj4nXHJcbiAgICAgICAgKSxcclxuICAgIF0sXHJcbiAgICBwZXJrczogW1xyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgJ9Cf0YDQvtC/0YPRgdC6INGF0L7QtNCwJywgXHJcbiAgICAgICAgICAgIDEsIFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgJycsIFxyXG4gICAgICAgICAgICAoKSA9PiB7IH0sIFxyXG4gICAgICAgICAgICB0cnVlLCBcclxuICAgICAgICAgICAgJ9C/0YDQvtC/0YPRgdGC0LjQuyDRhdC+0LQnLCBcclxuICAgICAgICAgICAgMFxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAxLCBcclxuICAgICAgICAgICAgJ9CS0LfRgNGL0LInLCBcclxuICAgICAgICAgICAgNTAsIFxyXG4gICAgICAgICAgICAyMCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L7QtNC90L7Qs9C+INCy0YDQsNCz0LAnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyKSA9PiB7IHRhcmdldC5hZGRIcCgtMTAwKSB9LCBcclxuICAgICAgICAgICAgZmFsc2UsIFxyXG4gICAgICAgICAgICAn0LHQsNGF0L3Rg9C7INCy0LfRgNGL0LLQvtC8INC/0L4nLCBcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoMSwgMjUpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDIsIFxyXG4gICAgICAgICAgICAn0JzQvtC70L3QuNGPJywgXHJcbiAgICAgICAgICAgIDUwLCBcclxuICAgICAgICAgICAgNTAsIFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINCy0YHQtdGFJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIsIGdhbWU6IEdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKG93bmVyIGluc3RhbmNlb2YgRW5lbXkpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiAoZW5lbXkuYWRkSHAoMTApKSk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IChlbmVteS5hZGRIcCgtNzApKSk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LzQvtC70L3QuNC10Lkg0L/QviDQstGB0LXQvCwg0LIg0YLQvtC8INGH0LjRgdC70LUg0L/QvicsIFxyXG4gICAgICAgICAgICAxMjAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoMiwgNilcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMywgXHJcbiAgICAgICAgICAgICfQm9C10YfQtdC90LjQtScsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgIDUwLCBcclxuICAgICAgICAgICAgJ9Cd0LjQutC+0LPQviDQvdC1INC/0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCcsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIF86IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgyNTApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgdHJ1ZSwgXHJcbiAgICAgICAgICAgICfQv9C+0LTQu9C10YfQuNC70YHRjyDQu9C10YfQtdC90LjQtdC8JywgXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDMsIDEzKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA0LCBcclxuICAgICAgICAgICAgJ9CW0LXRgNGC0LLQsCcsIFxyXG4gICAgICAgICAgICA3MCwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINGB0LDQvNC+0LPQviDRgdC10LHRjycsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRNYW5hKDE1MCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoLTMwKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHRydWUsIFxyXG4gICAgICAgICAgICAn0L/RgNC10LTQv9GA0LjQvdGP0Lsg0L/QvtC/0YvRgtC60YMg0YHRg9C40YbQuNC00LAg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LjQuyDQvNCw0L3QvdGDJywgXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDQsIDIwKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA1LCBcclxuICAgICAgICAgICAgJ9Ca0YDQsNC20LAg0LbQuNC30L3QuCcsIFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgMjAsIFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINCy0L4g0LHQu9Cw0LPQvicsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRIcCgtdGFyZ2V0LmFkZEhwKC03NSkpO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgZmFsc2UsIFxyXG4gICAgICAgICAgICAn0YPQutGA0LDQuyDQt9C00L7RgNC+0LLRjNC1INGDJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNSwgOSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNiwgXHJcbiAgICAgICAgICAgICfQktC40YXRgNGMJywgXHJcbiAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgNzAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L7QutGA0YPQttC10L3QuNC1INCy0YDQsNCz0LAnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlciwgZ2FtZTogR2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gPEVuZW15PnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGVuZW15LmFkZEhwKC0yMDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2FtZS5lbmVtaWVzLmluZGV4T2YoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkgZ2FtZS5lbmVtaWVzW2luZGV4IC0gMV0uYWRkSHAoLTEwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBnYW1lLmVuZW1pZXMubGVuZ3RoIC0gMSkgZ2FtZS5lbmVtaWVzW2luZGV4ICsgMV0uYWRkSHAoLTEwMCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQuNGF0YDQtdC8INC/0L4g0YHQvtGB0LXQtNGP0LwsINC00LAg0Lgg0L/QviDRgdCw0LzQvtC80YMnLCBcclxuICAgICAgICAgICAgMTIwLCBcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg2LCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNywgXHJcbiAgICAgICAgICAgICfQmtGA0LDQttCwINC80LDQvdGLJywgXHJcbiAgICAgICAgICAgIDEwMCwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdC+JyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLXRhcmdldC5hZGRNYW5hKC0xMDApKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGZhbHNlLCBcclxuICAgICAgICAgICAgJ9GD0LrRgNCw0Lsg0LzQsNC90YMg0YMnLCBcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNywgMjYpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDgsIFxyXG4gICAgICAgICAgICAn0JHQvtC70YzRiNC+0Lkg0Lgg0LPQu9GD0L/Ri9C5INCy0YDQtdC0INGB0LXQsdC1JywgXHJcbiAgICAgICAgICAgIDEsIFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgJyjRgtC10YHRgtC+0LLQvtC1KScsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRIcCgtMzAwKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLTMwMCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB0cnVlLCBcclxuICAgICAgICAgICAgJ9C+0YfQtdC90Ywg0LPQu9GD0L/Ri9C5JywgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgIClcclxuICAgIF0sXHJcbn07Il19
